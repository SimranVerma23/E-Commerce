import React from 'react';
import {BiLoaderCircle } from "react-icons/bi";



function Loading(){
  return(

    <div className="p-40 mt-5 bg-white shadow shadow-2xl shadow-black flex flex-col items-center justify-center">
       <BiLoaderCircle className="w-60 h-60 animate-spin text-primary-default"/>
        <h1 className="text-4xl font-bold">Loading....</h1>
    </div>
 ); 

}

export default Loading;
