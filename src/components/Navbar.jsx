import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Navbar = () => {
  const { user, Logout } = useContext(AuthContext);
  const location = useLocation();
  console.log("lcation", location.pathname);
  const style = location.pathname === "/" ? "text-white" : "text-black";
  console.log("user", user);
  const handleDarkMode = ()=>{

    const html = document.documentElement;
    const newTheme = html.getAttribute("data-theme") === "dark"?"light":"dark";
    html.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  }
  const [dark,setDark]=useState(localStorage.getItem("theme")=="dark");

  useEffect(()=>{
    const savedtheme = localStorage.getItem("theme")||"dark";
    document.documentElement.setAttribute("data-theme", savedtheme);
    setDark(savedtheme==="dark");
  },[])
  useEffect(()=>{
    const styleText= dark?"text-white":"text-red-700";
    const navbar = document.querySelector(".navbar");
    if(navbar){
      navbar.classList.remove("text-white","text-red-700");
      navbar.classList.add(styleText);
    }
  },[dark])
  
 const basepath = location.pathname.startsWith('')?"details/":"";
  const links = (
    <>
    <span className="text-xl px-3">
      {`${localStorage.getItem("theme")}`}
      <input
        type="checkbox"
        defaultChecked
        onChange={handleDarkMode}
        className="toggle toggle-xl border-gray-600 bg-gray-600 checked:bg-black checked:text-white checked:border-black mx-6"
      />
    </span>
      
      <Link to="/" className="text-xl px-3">
        Home
      </Link>
      <Link to={`/${basepath}all-movies`} className="text-xl px-3">
        All Movies
      </Link>
      <Link to={`/${basepath}add-movie`} className="text-xl px-3">
        Add Movies
      </Link>
      <Link to={`/${basepath}favourites`} className="text-xl px-3">
        Favourites
      </Link>
      <Link to={`/${basepath}shows`} className="text-xl  px-3">
        TV SHOWS
      </Link>
    </>
  );
  const authLinks = (
    <>
      <Link to="/login" className="text-xl px-3">
        Sign In
      </Link>
      <Link to="/register" className="text-xl px-3">
        Sign Up
      </Link>
    </>
  );
  return (
    <div
      className={`navbar bg-transparent px-14 lg:px-8 py-6 absolute top-0 left-0 z-10 ${style}`}
    >
      <div className="navbar-start">
        <a className="btn btn-ghost text-5xl">MOVIEFLEX</a>
      </div>
      <div className="navbar-center"></div>
      <div className="navbar-end">
        <div>
          <ul className="hidden md:flex menu menu-horizontal px-4 text-xl items-center">
            {links}
            {user ? (
              <div className="dropdown">
                <Link
                  tabIndex={0}
                  role="button"
                  className="text-xl btn bg-[#DC2626] text-white border-none"
                >
                  {user?.displayName}
                </Link>

                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-black rounded-box z-1 mt-3 w-52 p-2 shadow left-[-60px] text-2xl"
                >
                  <button
                    onClick={Logout}
                    className="btn btn-neutral rounded-none"
                  >
                    Logout
                  </button>
                </ul>
              </div>
            ) : (
              <div className="dropdown">
                <Link
                  tabIndex={0}
                  role="button"
                  className="text-xl btn bg-[#DC2626] text-white border-none"
                >
                  Account
                </Link>

                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-black rounded-box z-1 mt-3 w-52 p-2 shadow left-[-60px] text-2xl"
                >
                  {authLinks}
                </ul>
              </div>
            )}
          </ul>
          <div className="dropdown lg:hidden top-0 left-0 z-10">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
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
                  d="M4 6h16M4 12h16M4 18h7"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content bg-transparent rounded-box z-1 mt-3 w-44 p-2 shadow left-[-60px] ${style}`}
            >
              {links}
              {user ? (
                <Link onClick={Logout} className="text-xl px-3">
                  Logout
                </Link>
              ) : (
                authLinks
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
