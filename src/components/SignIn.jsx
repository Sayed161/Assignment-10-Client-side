import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Helmet } from 'react-helmet-async';
import { AuthContext } from "../Providers/AuthProvider";
import { FaGoogle } from "react-icons/fa";
const SignIn = () => {
  const navigate = useNavigate();
  const { SignUpUser, setUser, GoogleLogin } = useContext(AuthContext);
  const [useemail, setEmail] = useState("");
  const handleGoogleLogin = () => {
    GoogleLogin()
      .then(() => {
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((err) => {
        toast.error("Failed to login with Google");
      });
  };

  const handleForgetpass = (e) => {
    e.preventDefault();
    navigate(`/auth/forgot/${useemail}`);
  };
    const handleLogin = e=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const data = {email,password};
        console.log("data",data);
        SignUpUser(email, password)
        .then((result) => {
          const user = result.user;
          setUser(user);
          toast.success("You have logged in Successfully");
          setTimeout(() => {
            navigate("/");
          }, 2000);
        })
        .catch((error) => {
          const errorMessage = error.message;
          toast.error(errorMessage);
        });
    }
  return (
    <div>
       <ToastContainer position="top-center"/>
      <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-7xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
       <form action="" onSubmit={handleLogin}>
       <fieldset className="fieldset text-lg">
          <label className="fieldset-label">Email</label>
          <input type="email" className="input" placeholder="Email" name="email"/>
          <label className="fieldset-label">Password</label>
          <input type="password" className="input" placeholder="Password" name="password"/>
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4 text-xl">Login</button>
          <Link to="/register" className="link link-hover text-blue-600">Don't have an account? Register</Link>
        </fieldset>
          
       </form>
       <div className="flex flex-col justify-center items-center">
                    <p className="font-semibold">OR</p>
                    <div className="*:w-full mt-3">
                      <button
                        className="btn btn-outline"
                        onClick={() => handleGoogleLogin()}
                      >
                        {" "}
                        <FaGoogle />
                        Login with Google
                      </button>
                    </div>
                  </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default SignIn
