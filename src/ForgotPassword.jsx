import React from 'react';
import { useFormik } from "formik";
import * as Yup from 'yup';



function ForgotPassword(){

    function callSignupApi(values){
        console.log(values.email);
     }
  
     const schema =  Yup.object().shape({
       email:Yup.string().email('Invalid email').required(),
     })
     
     const { handleSubmit, handleChange, values, handleBlur ,errors , touched } = useFormik({
      initialValues:{
        email:"",
  
      },
      onSubmit:callSignupApi,
      validationSchema:schema,
  
     })
  
  
  
    return(
      <div className='flex flex-col mx-auto max-w-6xl bg-white  p-10 sm:p-20 m-20'>
        <h1 className='text-4xl font-bold mb-4 text-gray-600'>Forgot Password</h1>
        <form onSubmit={handleSubmit} className=" flex flex-col border-2 border-gray-200 p-5 rounded-md">
          <label className='text-lg font-bold text-gray-600 mb-2' htmlFor='email'>Email Id<span className='text-red-400'>*</span></label>
          <input className='p-4 grow border-2 border-gray-200 mb-2' value={values.email} onChange={handleChange} onBlur={handleBlur} id='email' name='email' type='email' />
          { touched.email && errors.email && <div className='text-red-400'>{errors.email}</div>}
            <div>
           <button className='text-2xl text-white bg-primary-default rounded-md py-4 px-8 mb-2' type='submit'>Reset Password</button>
           </div>
        </form>
  
      </div>
    );
  
 
}

export default ForgotPassword;





