import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Navbar = () => {
  const { user ,Logout} = useContext(AuthContext);
  console.log("user", user);
  const links = (
    <>
      <Link to="/" className="text-xl px-3">
        Movies
      </Link>
      <Link to="/add-movie" className="text-xl px-3">
        Add Movies
      </Link>
      <Link to="/favourites" className="text-xl px-3">
        Favourites
      </Link>
      <Link to="/update" className="text-xl  px-3">
        Update Movies
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
    <div className="navbar bg-transparent px-14 lg:px-8 py-6 absolute top-0 left-0 z-10 text-[#ffff]">
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
               <button onClick={Logout} className="btn btn-neutral rounded-none">
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
              className="menu menu-sm dropdown-content bg-black rounded-box z-1 mt-3 w-44 p-2 shadow left-[-60px]"
            >
              {links}
              {
                user?(
                  <Link onClick={Logout} className="text-xl px-3">
                  Logout
                </Link>
                ):(
                  authLinks
                )
              }
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
