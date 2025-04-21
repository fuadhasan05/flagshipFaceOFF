import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';

const Layouts = () => {
    return (
        <>
           <Navbar></Navbar>
           <Outlet></Outlet>
           <h1>Footer</h1>
        </>
    );
};

export default Layouts;