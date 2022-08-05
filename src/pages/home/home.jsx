import React from "react";
// importing Link from react-router-dom to navigate to 

// different end points.
import Details from '../../components/details/details';
import Details2 from '../../components/details/details2';
import Footer from '../../components/footer/footer';
import Navbar2 from '../../components/navbar/navbar';
import Navbar_loggedout from '../../components/navbar/navbar_loggedout';
import Cart from '../cart/cart'
import { Link } from "react-router-dom";
  
const Home = () => {
  return (
    <div>
      <Navbar_loggedout />
      <Details2 />
      <Footer />
    </div>
  );
};

export default Home