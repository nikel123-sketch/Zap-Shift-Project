import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout/RootLayout";
import Home from "../Pages/Home/Home/Home";
import Services from "../Component/Services/Services";
import About from "../Component/About/About";
import Pricing from "../Component/Pricing/Pricing";
// import BeaRider from "../../Component/BeaRider/BeaRider";
import Coverage from "../Pages/Coverage/Coverage";
import AuthLayout from "../AuthLayout/AuthLayout";
import Login from "../Pages/AuthPage/Login";
import Register from "../Pages/AuthPage/Register";
import PrivetRout from "./PrivetRout";
import BeaRider from "../Pages/BeaRider/BeaRider";
import SandParcel from "../Pages/SandParcel/SandParcel";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "Services",
        Component: Services,
      },
      {
        path: "Coverage",
        Component: Coverage,
        loader:()=>fetch('/servicecenter.json').then(res=>res.json())
      },
      {
        path: "AboutUs",
        Component: About,
      },
      {
        path: "Pricing",
        Component: Pricing,
      },
      {
        path: "BeaRider",
        // Component:BeaRider
        element:<PrivetRout><BeaRider></BeaRider></PrivetRout>
      },
      {
        path:'sandparcel',
        loader:()=>fetch('/servicecenter.json').then(res=>res.json()),
        element:<PrivetRout><SandParcel></SandParcel></PrivetRout>
      }
    ],
  },
  {
    path:'/',
    Component:AuthLayout,
    children:[
      {
        path:'login',
        Component:Login
      },
      {
        path:'register',
        Component:Register
      }
    ]
  }
]);