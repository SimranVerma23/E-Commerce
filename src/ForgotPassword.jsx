import React from 'react';
import { Formik, Form} from "formik";
import * as Yup from 'yup';
import { FormikInput } from './Input';




function ForgotPassword(){

  function callSignupApi(values) {
      
        console.log(values.email);
     }
  
     const schema =  Yup.object().shape({
       email:Yup.string().email('Invalid email').required(),
     })
     
      const initialValues={
        email:"",
  
      }
    
  
  
    return(
      <div className='flex flex-col mx-auto max-w-6xl bg-white p-10 sm:p-20 m-20'>
        <Formik onSubmit={callSignupApi} validationSchema={schema} initialValues={initialValues}>
          <div className='flex flex-col'>
          <h1 className='text-4xl font-bold mb-4 text-gray-600'>Forgot Password</h1>
          <Form className=" flex flex-col border-2 border-gray-200 p-5 rounded-md">
             <FormikInput label="Enter Email" id="email" name="email" type="email" required/>
            <div>
              <button className='text-2xl text-white bg-primary-default rounded-md py-4 px-8 mb-2' type='submit'>Reset Password</button>
            </div>
            </Form>
            </div>
        </Formik>
  
      </div>
    );
  
 
}

export default ForgotPassword;





