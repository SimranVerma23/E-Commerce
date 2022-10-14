import React  from 'react';
import {Link} from "react-router-dom";
import { withFormik } from "formik";
import * as Yup from 'yup';
import Input from './Input';
import axios from 'axios';
import { WithAlertProvider, WithUserProvider } from "./WithProvider";
// import Alert from './Alert';



function callSignupApi(values,bag) {


  console.log(values.password, values.email);
  
  axios.post("https://myeasykart.codeyogi.io/login", {
      email: values.email,
      password: values.password
    }).then((response) => {
      console.log("response login api", response.data);
      const { user, token } = response.data;
      console.log('user' , user, token);
      localStorage.setItem("token", token);
      bag.props.setUser(user);
      bag.props.setAlert({
        type: "success",
        message: "successfully login"
      })

    }).catch((error) => {

      if (error) {
        bag.props.setAlert({
          type: "error",
          message: "Sorry login faild",
       })
     }
    }) 
   }
    const schema =  Yup.object().shape({
     email:Yup.string().email('Invalid email').required(),
     password:Yup.string().min(6).required(),
   })
    const initialValues={
      password:"",
      email:"",

    }
export function LoginPage({ handleChange, handleBlur, handleSubmit, errors, touched, values ,isValid }) {
   
  return ( 
    <div>
     <div className='flex flex-col mx-auto max-w-6xl bg-white p-10 sm:p-20 m-20'>
      <h1 className='text-4xl font-bold mb-4 text-gray-600'>Login</h1>
      <form onSubmit={handleSubmit} className=" flex flex-col border-2 border-gray-200 p-5 rounded-md">
        <Input onChange={handleChange} onBlur={handleBlur} error={errors.email} touched={touched.email} values={values.email} label="Email Id" id='email' name='email' type='email' required />
        <Input onChange={handleChange} onBlur={handleBlur} error={errors.password} touched={touched.password} values={values.password} label="Password" id='password' name='password' type='password' required/>
        <Link className='text-xl text-red-400 text-end self-end' to="/forgot/">forgot password</Link>
          <div>
         <button disabled={!isValid} className=' disabled:bg-gray-400 disabled:text-gray-800 text-2xl text-white bg-primary-default rounded-md py-4 px-8 mb-2' type='submit'>Login</button>

         </div>
        <h1 className='text-xl text-gray-600 text-semibold'>don't have an account?<Link className='text-blue-400 text-xl text-semibold' to="/signup/">Sign Up</Link></h1>
       
        </form>

      </div>
      </div>
  );

}  

const myHocLogin  = withFormik({ handleSubmit: callSignupApi , validationSchema: schema , initialValues: initialValues , validateOnMount:true})(LoginPage)

export default WithAlertProvider(WithUserProvider(myHocLogin));