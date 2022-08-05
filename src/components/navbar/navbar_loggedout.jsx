import Heart from "../images/heart.png";
import Cart from "../images/cart2.png";
import Bag from "../images/bag.png";
import User from "../images/user.png";
import "./navbar_loggedout.css";
import {useState, useEffect} from "react";
import Axios from 'axios'
import { Link } from "react-router-dom";
import * as BsIcons from 'react-icons/bs';
import * as AiIcons from 'react-icons/ai';
import Sidebar from '../../homepage/components/Sidebar'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';





const Navbar_loggedout = () => {

    const [text, setText] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    const [favList, setFavList] = useState([]);
    const [productInfoList, setproductInfo] = useState([]);

    const [productNamesList, setproductNames] = useState([]);

    const [cartList, setCartList] = useState([]);
    const favId = ["1", "4"];

    const[prodId, setProdId] = useState({id: "1"});
    const id = "1";
    const [favInfoList, setFavInfoList] = useState([]);

    const [filteredData, setFilteredData] = useState([]);
    const [searched, setSearched] = useState("");

    useEffect(()=> {
        Axios.get("http://localhost:9005/read").then((response)=>{
        setFavList(response.data);
        

        // {favList.map((val,key) => {
        //     favId =  val.productID;
        //    })}
        })
    }, [favList])



    useEffect(()=> {

        
        {favId.map((val) => {
            Axios.get("http://localhost:9005/readFav/" + 2).then((response)=>{
                setFavInfoList(response.data);
                setFilteredData(response.data);
               
                })
             


           })}
       
    }, [favInfoList])




    useEffect(()=> {
        Axios.get("http://localhost:9005/readCart").then((response)=>{
        setCartList(response.data);
        console.log(response.data);
        console.log(cartList);
        })
    }, [cartList])



    useEffect(()=> {
        Axios.get("http://localhost:9005/productInfo", {id: 1}).then((response)=>{
        setproductInfo(response.data);
        console.log(response.data);
        console.log(productInfoList);
        })
    }, [productInfoList])

    // useEffect(()=> {
    //     Axios.get("http://localhost:4010/productNames").then((response)=>{
    //     setproductNames(response.data);
    //     console.log(response.data);
    //     console.log(productNamesList);
    //     })
    // }, [productNamesList])

    useEffect(() => {
        const loadUsers = async () => {
          const response = await Axios.get("http://localhost:9005/productNames");
          //console.log(response.data);
          setproductNames(response.data);
        };
        loadUsers();
      });



    const onChangeHandler = (text) => {
        console.log("hey ");
        // alert(text);

        const searchWord = text;
    setproductNames(searchWord);

    const newFilter = productNamesList.filter((value) => {
        return value.name.toLowerCase().includes(searchWord.toLowerCase());
      });

      if (searchWord === "") {
        setFilteredData([]);
      } else {
        setFilteredData(newFilter);
      }


      };

    

      const clearInput = () => {
        setFilteredData([]);
        setSearched("");
      };



    return (
      <div class="section-header">

<nav class="navbar navbar-dark navbar-expand p-0 bg-dark">
<div class="container-fluid">
    <ul class="navbar-nav d-none d-md-flex mr-auto">
		<li class="nav-item"><a class="nav-link" href="/login" data-abc="true">Log in to the account to purchase, save favourites and many more!</a></li>
	 </ul>
    
  </div> 

</nav> 

<section class="header-main border-bottom bg-white">
	<div class="container-fluid">
       <div class="row p-2 pt-3 pb-3 d-flex align-items-center">
           <div class="col-md-2">
            {/* <h5>Luminous Liquor</h5>
             */}
             <Sidebar />
               </div>
           <div class="col-md-8">
        <div class="d-flex form-inputs">
        <input class="form-control" type="text" placeholder="Search any product..."></input>
        {/* <div class="bx bx-search"></div> */}
        {/* <button>Search</button> */}

        </div>
           </div>
           
           <div class="col-md-2">
               <div class="d-flex d-none d-md-flex flex-row align-items-center">
                   

            
                 
                   
                  
 


                   <div class="d-flex flex-column ms-2">
                        <span class="shop-bag">

                        <div className="dropdown">
                        <div className="dropbtn">
                        <a href="/login" className="logOut">   <img src={User} className="iconImg" alt="" /></a>
                     
                        </div>
                        {/* <div class="dropdown-content">
                        <a href="/login" className="logOut">Sign In</a>
</div> */}
                        </div>



         </span>
                   </div>   

                   
               </div>      
               
                    
           </div>

        
       </div>
	</div> 
</section>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand d-md-none d-md-flex" href="#">Categories</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
        <Link to='/homepage'>
          <a class="nav-link"> 
          Home
          </a>
          </Link>
        </li>
        <li class="nav-item">
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Feedback</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About Us</a>
        </li>
        {/* <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Mobiles
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Home</a></li>
            <li><a class="dropdown-item" href="#">My Cart</a></li>
            <li><a class="dropdown-item" href="#">User Settings</a></li>
          </ul>
        </li> */}
      </ul>
    </div>
  </div>
</nav>
</div>
     
       



    )
}

export default Navbar_loggedout