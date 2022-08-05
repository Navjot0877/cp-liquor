import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const navbar = () =>{
    return <div className='navbar'>
        <Link to='/edituser'>My Profile</Link>
        {/* <a href=''className='myProfile'>My Profile</a> */}
        <a href=''className='myCart'>My Cart</a>
    </div>
}
export default navbar;