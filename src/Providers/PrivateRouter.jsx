import React, { useContext } from 'react'
import { AuthContext } from './AuthProvider'
import { Navigate } from 'react-router-dom';
import Loading from '../Layouts/Laoding';


const PrivateRouter = ({children}) => {
    const {user,lading} = useContext(AuthContext);
   if(lading)
   {
    return <Loading></Loading>
   }
   if(user && user?.email )
    {
        return children;
    }
  return <Navigate to={"/login"}></Navigate>
}

export default PrivateRouter
