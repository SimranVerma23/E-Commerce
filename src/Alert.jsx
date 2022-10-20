import React from 'react';
import { useEffect } from 'react';
import { HiOutlineCheck } from "react-icons/hi";
import { WithAlertProvider } from './WithProvider';


    const themeMap = {
        success: {
            borderClass: "border-green-500",
            Icon: {
                iconName: HiOutlineCheck,
                iconColor: "bg-green-500 text-white",
            }
        },
        error: {
            borderClass: "border-green-800",
            Icon: {
                iconName: HiOutlineCheck,
                iconColor:"bg-red-500 text-white"
           }
        }

    }


function Alert({ alert, removeAlert }) {
    
    useEffect(function () {
        if (alert) {
            const dismissTime = setTimeout(removeAlert, 3 * 1000);
            return dismissTime;
        }
    }, [alert]);

    if (!alert) {
        return <></>;
     }

    const { type, message } = alert; 

    const theme = themeMap[type];
   
   
    return <div className={"p-4 bg-secondary-default border-t-4 flex items-center " + theme.borderClass}>
        <div className={"text-2xl rounded-full " + theme.Icon.iconColor}>
           <theme.Icon.iconName/>
        </div>
        <h1 className='text-xl font-bold'>{type}</h1>
        <p className='text-xl text-gray-600 grow'>{message}</p>
        <button onClick={removeAlert} className="m-4 h-10 w-10 rounded-full border-2 border-gray-400">X</button>

    </div>
       
} 



export default WithAlertProvider(Alert);
