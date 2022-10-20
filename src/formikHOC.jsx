import React from "react";
import { useField } from "formik";

function formikHOC(IncomingComponent) {
    return function ({ name, ...rest }){
    
     const field = useField(name)

    
      const [data, meta] = field;
       const { value, onChange, onBlur } = data;
       const { error, touched } = meta;

      return (
        <IncomingComponent {...rest} onChange={onChange} value={value} onBlur={onBlur} name={name} error={error} touched={touched}/>
      );

}
} 


export default formikHOC;
    
