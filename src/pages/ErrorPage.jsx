import React from 'react';
import Navbar from '../components/Navbar';
import { useRouteError } from 'react-router';

const ErrorPage = () => {
   
    const error = useRouteError();
    return (
        <div>
            <Navbar></Navbar>
            <h2>Error</h2>
        </div>
    );
};

export default ErrorPage;