import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router';

const PrivetRout = ({children}) => {
    const { user, loading } = useAuth();
    console.log(user)

    // location--
    const location=useLocation();
    console.log(location)

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
        return <Navigate state={location.pathname} to={"/login"}></Navigate>;
    }

    // main return-----
    return children;
};

export default PrivetRout;