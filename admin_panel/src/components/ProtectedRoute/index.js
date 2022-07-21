import React from 'react';
import {Navigate} from 'react-router-dom';

const ProtectedRoute = ({ component }) => {
    if (localStorage.getItem("isLoggedIn")==="true") {
        return component;
    } else {
        return <Navigate to="/unauthorized"/>;
    }
}

export default ProtectedRoute;
