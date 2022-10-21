<<<<<<< HEAD
import React, { useState } from "react";
import { AlertContext } from "../Contexts";


function AlertProvider({ children }) {


  const [alert, setAlert] = useState();
  

  const removeAlert = () => {
    setAlert(undefined);
  }
   return <AlertContext.Provider value={{ alert, setAlert, removeAlert }}>{ children}</AlertContext.Provider>
    
}

=======
import React, { useState } from "react";
import { AlertContext } from "../Contexts";


function AlertProvider({ children }) {


  const [alert, setAlert] = useState();
  

  const removeAlert = () => {
    setAlert(undefined);
  }
   return <AlertContext.Provider value={{ alert, setAlert, removeAlert }}>{ children}</AlertContext.Provider>
    
}

>>>>>>> e9014e2017a6a48ff74bdd54535b1f19f6e5c191
export default AlertProvider;