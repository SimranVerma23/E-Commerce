import React from 'react';
import {Link} from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from 'yup';
import { FormikInput } from './Input';


function LoginPage(){
  function callSignupApi(values) {
      
      console.log(values.password,values.email);
   }

   const schema =  Yup.object().shape({
     email:Yup.string().email('Invalid email').required(),
     password:Yup.string().min(8).required(),
   })
   
   const initialValues={
      password:"",
      email:"",

    }



  return(
    <div className='flex flex-col mx-auto max-w-6xl bg-white p-10 sm:p-20 m-20'>
      <Formik onSubmit={callSignupApi} validationSchema={schema} initialValues={initialValues}>
      <div className='flex flex-col'>
      <h1 className='text-4xl font-bold mb-4 text-gray-600'>Login</h1>
      <Form className=" flex flex-col border-2 border-gray-200 p-5 rounded-md">
        <FormikInput label="Email Id" id='email' name='email' type='email' required />
        <FormikInput label="Password" id='password' name='password' type='password' required/>
        <Link className='text-xl text-red-400 text-end self-end' to="/forgot/">forgot password</Link>
          <div>
         <button className='text-2xl text-white bg-primary-default rounded-md py-4 px-8 mb-2' type='submit'>Login</button>

         </div>
        <h1 className='text-xl text-gray-600 text-semibold'>don't have an account?<Link className='text-blue-400 text-xl text-semibold' to="/signup/">Sign Up</Link></h1>
       
        </Form>
        </div>
        </Formik>

    </div>
  );

}

export default LoginPage;