import React from 'react';
import './Header.css'
import Navbar from './Navbar';
import Serachbar from '../../homepage/components/searchbar';
import Sidebar from '../../homepage/components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const Header = () =>{
    return(
        <>
        <header className='editUser-header'>
            <Sidebar />
            {/* <Serachbar/> */}
            <Navbar/>
        </header>
        </>
    )
}
export default Header;