
import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from './Contexts';
import { WithUserProvider } from './WithProvider';

function UserRoute({user, children }) {
    
   // const { user } = useContext(UserContext);

    if (!user) {

       return <Navigate to="/login/" />
     }
    return children;

}

export default WithUserProvider(UserRoute);
