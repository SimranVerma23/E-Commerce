import React from 'react';
import {Link} from "react-router-dom";
import { Formik, Form} from "formik";
import * as Yup from 'yup';
import {FormikInput} from './Input';


function SignUpPage(){

  function callSignupApi(values) {
     
      console.log(values.username,values.password,values.email);
   }

   const schema =  Yup.object().shape({
     username:Yup.string().required(),
     email:Yup.string().email('Invalid email').required(),
     password:Yup.string().min(8).required(),
   })
   
   const initialValues={
      username :"",
      password:"",
      email:"",

    }
    


  return(
    <div className='flex flex-col mx-auto max-w-6xl bg-white p-10 sm:p-20 m-20'>
      <Formik onSubmit={callSignupApi} validationSchema={schema} initialValues={initialValues}>
      <div className='flex flex-col'>
      <h1 className='text-4xl font-bold mb-4 text-gray-600'>Sign Up</h1>
      <Form className=" flex flex-col border-2 border-gray-200 p-5 rounded-md">
        <FormikInput id='user-name' name='name' type='text' label="User Name" required/>
        <FormikInput id='email' name='email' type='email' label="Password" required />
        <FormikInput id='password' name='password' type='password' label="Password" required/>
        <FormikInput label="Conform Password" id='conform-password' name='password' type='password' required/>
          <div>
         <button className='text-2xl text-white bg-primary-default rounded-md py-4 px-8 mb-2' type='submit'>Submit</button>
         <button className='text-2xl text-white bg-green-400 rounded-md py-4 px-8 mb-2 ml-2'>Reset Form</button>

         </div>
        <h1 className='text-xl text-gray-600 text-semibold'>Alread have an account?<Link className='text-blue-400 text-xl text-semibold' to="/login/">Login</Link></h1>
        </Form>
      </div>
      </Formik>

    </div>
 );

}

export default SignUpPage;