import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../Providers/AuthProvider';

const SignUp = () => {
    const { createNewUser ,user,setUser} = useContext(AuthContext);
   const navigate = useNavigate();
 
    const handleRegister=e=>{
        e.preventDefault()
        const reg = /(?=.*[a-z])(?=.*[A-Z]).{6,32}/;
        const form = e.target;
        const name= form.name.value;
        const email= form.email.value;
        const photo= form.photo.value;
        const password= form.password.value;
        const test = reg.test(password);
        if(!test){
              toast.error("Password must contain at least 6 characters, including uppercase and lowercase letters.");
              return;
            }


        const data={name,email,photo}
        createNewUser(email,password,name,photo).then(result=>
            {
                const user = result.user;
                 setUser(user);
              toast.success("You have Registered!");
              fetch('https://movieflixserverside.vercel.app/users', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
              }
              ).then(res=>res.json())
              .then(data=> console.log(data));
                    setTimeout(()=>{
                    navigate("/");
                    },2000);
            }).catch((error)=>{
              const errorCode = error.code;
              const errorMessage = error.message;
              toast.error(errorMessage);
            })      
        
    }
  return (
    <div>
        <ToastContainer position="top-center"/>
      <div className="hero bg-[rgba(0,0,0,0.1)] text-white min-h-screen mt-20 lg:mt-60">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-7xl font-bold">Register now!</h1>
    </div>
    <div className="card bg-[rgba(256,254,277,0.9)]  w-full lg:w-[600px] shrink-0 shadow-2xl z-10">
      <div className="card-body text-gray-600">
        <form action="" onSubmit={handleRegister}>
        <fieldset className="fieldset text-lg ">
          <label className="fieldset-label">Name</label>
          <input type="text" className="input w-full" placeholder="Name" name="name"/>
          <label className="fieldset-label">Email</label>
          <input type="email" className="input  w-full" placeholder="Email" name="email"/>
          <label className="fieldset-label">Photo URL</label>
          <input type="text" className="input  w-full" placeholder="Photo" name="photo"/>
          <label className="fieldset-label">Password</label>
          <input type="password" className="input  w-full" placeholder="Password" name="password"/>
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4 text-xl">Register</button>
          <Link to="/login" className="link link-hover text-blue-600">Already have an account? Login</Link>
        </fieldset>
        </form>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default SignUp
