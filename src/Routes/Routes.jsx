import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import PrivateRouter from "../Providers/PrivateRouter";
import AddMovies from "../components/AddMovies";
import Hero from "../components/Hero";
const Routes = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path:"/",
        element:<Hero></Hero>,
        loader: () => fetch("http://localhost:5000/movies"),
      },
      {
        path: "/add-movie/",
        element: <AddMovies></AddMovies>
      },
    ]
  },{
    path: "/login",
    element: <SignIn />,
  },
  {
    path: "/register",
    element: <SignUp />,
  },
]);

export default Routes;
