import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import PrivateRouter from "../Providers/PrivateRouter";
import AddMovies from "../components/AddMovies";
import Hero from "../components/Hero";
import UpdateMovies from "../components/UpdateMovies";
import TVshows from "../components/TVshows";
import MovieDetails from "../components/MovieDetails";
import Favourites from "../components/Favourites";
import AllMovies from "../components/AllMovies";
import DetailsLayout from "../Layouts/DetailsLayout";
const Routes = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path:"/",
        element:<Hero></Hero>,
        loader: () => fetch("https://movieflixserverside.vercel.app/movies"),
      }
    ]
  },{
    path: "/login",
    element: <SignIn />,
  },
  {
    path: "/register",
    element: <SignUp />,
  },
  {
    path:"/details",
    element:<DetailsLayout/>,
    children:[
      {
        path: "add-movie",
        element: <AddMovies></AddMovies>
      },
      {
        path: "shows",
        element: <TVshows/>,
        loader: () => fetch("https://api.tvmaze.com/shows?page=1"),

      },
      {
        path: "favourites",
        element: <Favourites/>,
        loader: () => fetch("https://movieflixserverside.vercel.app/favourites"),

      },
      {
        path: "all-movies",
        element: <AllMovies/>,
        loader: () => fetch("https://movieflixserverside.vercel.app/movies"),

      },
      {
        path: "update-movie/:id",
        element: <UpdateMovies></UpdateMovies>,
        loader: ({params}) => fetch(`https://movieflixserverside.vercel.app/movies/${params.id}`)
      },
      {
        path: "movie/:id",
        element: <MovieDetails/>,
        loader: ({params}) => fetch(`https://movieflixserverside.vercel.app/movies/${params.id}`),
      },
    ]
  },
]);

export default Routes;
