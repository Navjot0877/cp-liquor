import React from 'react';
import './Navbar.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Navbar = () =>{
    return(
        <>
        <header className='ediUser-navbar'>
            <a href=''>My Cart</a>
            <a href='/homepage'>Home</a>
        </header>
        </>
    )
}
export default Navbar;