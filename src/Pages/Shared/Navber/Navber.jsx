import React from "react";
import Logo from "../../../Component/Logo/Logo";
import { Link, NavLink } from "react-router";
import useAuth from "../../../Hooks/useAuth";

const Navber = () => {
  const { user, singOut,setuser } = useAuth();
  console.log(user)

  // hendle log out btn--
  const hendlelogoutbtn=()=>{
    singOut()
   
    .then()
    .catch(error=>{
      console.log(error)
    })
  }
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"Services"}>Services</NavLink>
      </li>
      <li>
        <NavLink to={"Coverage"}>Coverage</NavLink>
      </li>
      <li>
        <NavLink to={"AboutUs"}>About Us</NavLink>
      </li>
      <li>
        <NavLink to={"Pricing"}>Pricing</NavLink>
      </li>
      <li>
        <NavLink to={"BeaRider"}>Be a Rider</NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-[#ffffff]">
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>

            {/* mobile divice */}
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Logo></Logo>
        </div>

        {/* deskop divice */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-4">
          {user ? (
            <a className="btn bg-[#caeb66]" onClick={hendlelogoutbtn}>
              Log Out
            </a>
          ) : (
            <NavLink to={"/login"} className="btn bg-[#caeb66]">
              LogIn
            </NavLink>
          )}
          <Link className="btn bg-[#caeb66]" to={"/BeaRider"}>
            Be a Rider
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navber;
