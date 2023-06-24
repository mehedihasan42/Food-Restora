import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Authenticate/Login/Login";
import Registar from "../Authenticate/Registar/Registar";
import Secret from "../Secret";
import PrivetRoute from "./PrivetRoute";
import Dashboard from "../Layouts/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/menu',
          element:<Menu></Menu>
        },
        {
          path:'/order/:category',
          element:<Order></Order>
        },
        {
          path:'/secret',
          element:<PrivetRoute><Secret></Secret></PrivetRoute>
        }
      ]
    },
    {
      path:'/login',
      element:<Login></Login>
    },
    {
      path:'/registar',
      element:<Registar></Registar>
    },
    {
      path:'dashboard',
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:'mycart',
          element:<MyCart></MyCart>
        }
      ]
    }
  ]);
  