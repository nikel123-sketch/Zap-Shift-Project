import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate } from 'react-router';

const PrivetRout = ({children}) => {
    const { user, loading } = useAuth();
    console.log(user)

    // loading---check--
    if(loading){
        return (
          <div>
            <span className="loading loading-infinity loading-xl"></span>
          </div>
        );
    }


    // user check----
    if(!user){
        return <Navigate to={'/login'}></Navigate>
    }

    // main return-----
    return children;
};

export default PrivetRout;