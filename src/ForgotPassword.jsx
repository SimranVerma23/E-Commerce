import React from 'react';
import { withFormik} from "formik";
import * as Yup from 'yup';
import Input from './Input';

  

function callSignupApi(values) {
  console.log("valus", values);
}
  
     const schema =  Yup.object().shape({
       email:Yup.string().email('Invalid email').required(),
     })
     
      const initialValues={
        email:"",
  
      }
export function ForgotPassword({handleSubmit,handleChange,values,errors, touched,handleBlur}){

  return(
      <div className='flex flex-col mx-auto max-w-6xl bg-white p-10 sm:p-20 m-20'>
          <h1 className='text-4xl font-bold mb-4 text-gray-600'>Forgot Password</h1>
          <form onSubmit={handleSubmit} className=" flex flex-col border-2 border-gray-200 p-5 rounded-md">
             <Input onChange={handleChange} onBlur={handleBlur} values={values.email} error={errors.email} touched={touched.email} label="Enter Email" id="email" name="email" type="email" required/>
            <div>
              <button className='text-2xl text-white bg-primary-default rounded-md py-4 px-8 mb-2' type='submit'>Reset Password</button>
            </div>
            </form>
  
      </div>
    );
  
 
} 

const myHOC = withFormik({handleSubmit:callSignupApi, validationSchema:schema, initialValues:initialValues})
const myForgotHOC = myHOC(ForgotPassword);
export default myForgotHOC;





