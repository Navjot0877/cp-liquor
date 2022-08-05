
import React from 'react';
import './header.css'
import Searchbar from "./searchbar";
import Navbar from './navbar';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const header = () =>{
    return <header className='header'>
        {/* <Router>
            <Sidebar />
            <Routes>
                <Route path='/' />
            </Routes>
        </Router> */}
        <Sidebar />
        <Searchbar/>
        <Navbar/>
    </header>
}

export default header;