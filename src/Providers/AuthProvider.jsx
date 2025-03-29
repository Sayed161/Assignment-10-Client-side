import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import { GoogleAuthProvider } from "firebase/auth";
import app from "../Firebase/firebase.config";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [lading,setLoading] = useState(true);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const createNewUser = (email, password,name,photo) => {
    console.log("name",name);
    console.log("photo",photo);
    return createUserWithEmailAndPassword(auth, email, password)
    .then((result)=>{
      const user = result.user;
      return updateProfile(user,{
        displayName:name,
        photoURL:photo,
      }).then(()=>result);
    })
   
  };

const GoogleLogin = ()=>{
    return signInWithPopup(auth,provider)
    .then((result)=>{
      const user = result.user;
      setUser(user);
      toast.success("You have logged in Successfully");
    })
    .catch((err)=>{
      toast.error(err.message);
    })
}

  const profileUpdate = (photo,name)=>{
    return updateProfile(auth.currentUser,{
      photoURL:photo,
      displayName:name,
    }).then(()=>{
      toast.success("Profile Updated Succefully!");
    })
    
  }
  const SignUpUser =(email,password)=>{
   return signInWithEmailAndPassword(auth, email, password);
  }
  const Logout = ()=>{
    return signOut(auth);
  }
  const authInfo = {
    user,
    setUser,
    createNewUser,
    Logout,
    SignUpUser,
    lading,
    profileUpdate,
    GoogleLogin
  };

  

  useEffect(() => {
    const Unsubsribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      Unsubsribe();
    };
  }, []);
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
