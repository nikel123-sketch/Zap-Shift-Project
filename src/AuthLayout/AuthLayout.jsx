import React from 'react';
import authImage from '../assets/banner/authImage.png'
import Logo from '../Component/Logo/Logo';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
      <div className='max-w-11/12 mx-auto'>
        <Logo></Logo>

        <div className='p-10 flex items-center justify-between'>
          
            <Outlet></Outlet>
          
          <img src={authImage} alt="" />
        </div>
      </div>
    );
};

export default AuthLayout;