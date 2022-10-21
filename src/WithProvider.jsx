import React,{ useContext } from "react"
import {UserContext , AlertContext, CartContext} from "./Contexts"


const WithProvider = (Provider) => (IncommingComponent) => (props)=>{
    const ContextData = useContext(Provider)
    return <IncommingComponent  {...props}  {...ContextData} />

}
export default WithProvider

export const WithUserProvider = WithProvider(UserContext);
export const WithAlertProvider = WithProvider(AlertContext);
export const WithCartProvider = WithProvider(CartContext);
