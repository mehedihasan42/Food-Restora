import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useAdmin from '../hooks/useAdmin';

const AdminRoute = ({children}) => {

    const {user,loading} = useAuth()
    const [isAdmin,adminLoader] = useAdmin()
    const location = useLocation();


    if(loading || adminLoader){
        return <span className="loading loading-spinner loading-lg"></span>
    }

     if(user && isAdmin){
        return children;
     }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default AdminRoute;