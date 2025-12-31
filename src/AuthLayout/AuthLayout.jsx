import React from 'react';
import authImage from '../assets/banner/authImage.png'
import Logo from '../Component/Logo/Logo';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
      <div className="max-w-11/12 mx-auto">
        <Logo></Logo>

        <div className="p-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
          <div>
            <Outlet></Outlet>
          </div>

          <img src={authImage} alt="" />
        </div>
      </div>
    );
};

export default AuthLayout;