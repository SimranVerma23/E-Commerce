import React from "react";
import formikHOC from "./formikHOC";

function Input({ name, id , label, error,touched , ...rest}) {
    
    return (
        <div className="flex flex-col">
            <label className='text-lg font-bold text-gray-600 mb-2' htmlFor={id}> {label}<span className='text-red-400'>*</span></label>
            <input className='p-4 grow border-2 border-gray-200 mb-2' {...rest} name={name} />
        

            {touched && error && <div className='text-red-400'>{error}</div>}


        </div>
    );

};

export const FormikInput = formikHOC(Input);

export default Input;