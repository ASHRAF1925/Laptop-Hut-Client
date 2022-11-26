import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';
import useUser from '../../Hooks/useUser';

import Spinner from '../../Pages/Shared/Spinner/Spinner';


const UserRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);

    const [isUser,isUserLoading]=useUser(user?.email);
    const location=useLocation();

    if(loading || isUserLoading)
    {
        return <Spinner></Spinner>
    }
    if(user && isUser){
        return children
    }
    return (
        <Navigate to='/login' state={{from:location}} replace></Navigate>
    );
};

export default UserRoute;