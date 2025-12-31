import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../../Pages/Shared/Footer/Footer';
import Navber from '../../Pages/Shared/Navber/Navber';

const RootLayout = () => {
    return (
      <div className="max-w-11/12 mx-auto bg-[#eaeced]">
        <Navber></Navber>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    );
};

export default RootLayout;