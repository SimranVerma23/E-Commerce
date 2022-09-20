import React from 'react';
import {Link} from "react-router-dom"
import { useFormik } from 'formik';
import * as Yup from 'yup';



function SignUpPage(){
   function callSignupApi(values){
      console.log(name,password,email);
   }

   const schema =  Yup.object().shape({
     name:Yup.string().required(),
     email:Yup.string().email('Invalid email').required(),
     password:Yup.string().min(8).required(),
   })
   
   const {handleSubmit, handleChange,values,resetForm,handleBlur ,errors , touched} = useFormik({
    initialValues:{
      name :"",
      password:"",
      email:"",

    },
    onSubmit:callSignupApi,
    validationSchema:schema,

   })



  return(
    <div className='flex flex-col mx-auto max-w-6xl bg-white p-20 m-20'>
      <h1 className='text-4xl font-bold mb-4 text-gray-600'>Sign Up</h1>
      <form onSubmit={handleSubmit} className=" flex flex-col border-2 border-gray-200 p-5 rounded-md">
        <label className='text-lg font-bold text-gray-600 mb-2' htmlFor='user-name'>User Name<span className='text-red-400'>*</span></label>
        <input className='p-4 grow border-2 border-gray-200 mb-2' value={values.name} onChange={handleChange} onBlur={handleBlur} id='user-name' name='name' type='text'/>
        { touched.name && errors.name && <div className='text-red-400'>{errors.name}</div>}
        <label className='text-lg font-bold text-gray-600 mb-2' htmlFor='email'>Email Id<span className='text-red-400'>*</span></label>
        <input className='p-4 grow border-2 border-gray-200 mb-2' value={values.email} onChange={handleChange} onBlur={handleBlur} id='email' name='email' type='email' />
        { touched.email && errors.email && <div className='text-red-400'>{errors.email}</div>}
        <label className='text-lg font-bold text-gray-600 mb-2' htmlFor='password'>Password<span className='text-red-400'>*</span></label>
        <input className='p-4 grow border-2 border-gray-200 mb-2' value={values.password} onChange={handleChange} onBlur={handleBlur} id='password' name='password' type='password'/>
        {touched.password && errors.password && <div className='text-red-400'>{errors.password}</div>}

        <label className='text-lg font-bold text-gray-600 mb-2' htmlFor='conform-password'>Conform Password<span className='text-red-400'>*</span></label>
        <input className=' p-4 grow border-2 border-gray-200 mb-2' value={values.password} onChange={handleChange} onBlur={handleBlur} id='conform-password' name='password' type='password'/>
          <div>
         <button className='text-2xl text-white bg-primary-default rounded-md py-4 px-8 mb-2' onClick={handleSubmit}>Submit</button>
         <button className='text-2xl text-white bg-green-400 rounded-md py-4 px-8 mb-2 ml-2' onClick={resetForm}>Reset Form</button>

         </div>
        <h1 className='text-xl text-gray-600 text-semibold'>Alread have an account?<Link className='text-blue-400 text-xl text-semibold' to="/login/">Login</Link></h1>
      </form>

    </div>
 );

}

export default SignUpPage;