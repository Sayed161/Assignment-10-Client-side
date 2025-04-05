import React, { useContext } from 'react'
import { AuthContext } from './AuthProvider'
import { Navigate } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';



const PrivateRouter = ({children}) => {
    const {user,lading} = useContext(AuthContext);
   if(lading)
   {
    return (<div>  
    render(<RotatingLines
          visible={true}
          height="96"
          width="96"
          color="grey"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{}}
          wrapperClass=""
          />)</div>
        );
      }
   
   if(user && user?.email )
    {
        return children;
    }
  return <Navigate to={"/login"}></Navigate>
}

export default PrivateRouter
