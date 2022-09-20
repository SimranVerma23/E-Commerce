import React from 'react';
import {Link} from "react-router-dom"
import { useFormik } from 'formik';
import * as Yup from 'yup';



function LoginPage(){
    function callSignupApi(values){
      console.log(password,email);
   }

   const schema =  Yup.object().shape({
     email:Yup.string().email('Invalid email').required(),
     password:Yup.string().min(8).required(),
   })
   
   const {handleSubmit, handleChange,values,handleBlur ,errors , touched} = useFormik({
    initialValues:{
      password:"",
      email:"",

    },
    onSubmit:callSignupApi,
    validationSchema:schema,

   })



  return(
    <div className='flex flex-col mx-auto max-w-6xl bg-white p-20 m-20'>
      <h1 className='text-4xl font-bold mb-4 text-gray-600'>Login</h1>
      <form onSubmit={handleSubmit} className=" flex flex-col border-2 border-gray-200 p-5 rounded-md">
        <label className='text-lg font-bold text-gray-600 mb-2' htmlFor='email'>Email Id<span className='text-red-400'>*</span></label>
        <input className='p-4 grow border-2 border-gray-200 mb-2' value={values.email} onChange={handleChange} onBlur={handleBlur} id='email' name='email' type='email' />
        { touched.email && errors.email && <div className='text-red-400'>{errors.email}</div>}
        <label className='text-lg font-bold text-gray-600 mb-2' htmlFor='password'>Password<span className='text-red-400'>*</span></label>
        <input className='p-4 grow border-2 border-gray-200 mb-2' value={values.password} onChange={handleChange} onBlur={handleBlur} id='password' name='password' type='password'/>
        {touched.password && errors.password && <div className='text-red-400'>{errors.password}</div>}
        <Link className='text-xl text-red-400 text-end self-end' to="/forgot/">forgot password</Link>
          <div>
         <button className='text-2xl text-white bg-primary-default rounded-md py-4 px-8 mb-2' onClick={handleSubmit}>Login</button>

         </div>
        <h1 className='text-xl text-gray-600 text-semibold'>don't have an account?<Link className='text-blue-400 text-xl text-semibold' to="/signup/">Sign Up</Link></h1>
      </form>

    </div>
  );

}

export default LoginPage;