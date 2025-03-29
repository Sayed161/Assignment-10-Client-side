import React from 'react'
import { createBrowserRouter, Navigate } from "react-router-dom"
import HomeLayout from '../Layouts/HomeLayout'
const Routes = createBrowserRouter
 ([
    {
        path:"/",
        element:<HomeLayout/>,
        loader: ()=> fetch(""),
    },
 ])

export default Routes
