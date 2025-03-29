import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-transparent px-14 lg:px-8 py-6 absolute top-0 left-0 z-10 text-[#ffff]">
      <div className="navbar-start">
        <a className="btn btn-ghost text-5xl">MOVIEFLEX</a>
      </div>
      <div className="navbar-center"></div>
      <div className="navbar-end">
        <div>
          <ul className="hidden md:flex menu menu-horizontal px-4 text-xl items-center">
            <li>
              <a>Movies</a>
            </li>
            <li>
              <a>Add Movies</a>
            </li>
            <li>
              <a>Favourites</a>
            </li>
            <li>
              <a>Update Movies</a>
            </li>
            <div className="dropdown">
                <Link tabIndex={0}
                role="button" className="text-xl btn bg-[#DC2626] text-white border-none">Account</Link>
              
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-black rounded-box z-1 mt-3 w-52 p-2 shadow left-[-60px] text-2xl"
              >
                <li>
                  <a className="text-xl">Sign In</a>
                </li>
                <li>
                  <a  className="text-xl">Sign Up</a>
                </li>
              </ul>
            </div>
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
              <li>
                <a className="text-xl">Movies</a>
              </li>
              <li>
                <a className="text-xl">Add Movies</a>
              </li>
              <li>
                <a className="text-xl">Favourites</a>
              </li>
              <li>
                <a className="text-xl">Update Movies</a>
              </li>
              <li>
                  <a className="text-xl">Sign In</a>
                </li>
                <li>
                  <a className="text-xl">Sign Up</a>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
