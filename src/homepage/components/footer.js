import React from 'react';
import './footer.css';
import Recent from './Recent';
import History from './History';
import wine from '../../components/images/wine.png'
import axios from 'axios'
import {useState, useEffect} from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import cart from '../../components/images/cart.png'
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';


const Footer = () => {

    const [filteredData, setFilteredData] = useState([]);


    useEffect(()=> {


           axios.get("http://localhost:9005/productInfo").then((response)=>{
            setFilteredData(response.data);
           
            })
       
    }, [filteredData])

    return (<div className='foot'>
        {/* <div class="row-foot">

{filteredData.slice(0, 10).map((pm) => (
                        // <div className="drop-navbar">
        //   <a href={"/productInfo" + pm.prodId}>{pm.name}</a>
          
        <div class="column">
        <div class="card">
          <div>
          <div>
            <img src={wine}></img>
            </div>

            <div>
          <p id="product_title_foot">{pm.name}</p>
          <p id="product_title_foot">{pm.price}</p>
      
       </div>
       </div>
       <div>
       <a href="" className='cartButton'>Add to Cart</a>
        </div>
        </div>

          </div>
        ))}


    
    
 </div> */}

{/* 
 <div class="container page-wrapper">
  <div class="page-inner">
    <div class="row">
      <div class="el-wrapper">
        <div class="box-up">
          <img class="img" src={wine} alt=""></img>
          <div class="img-info">
            <div class="info-inner">
              <span class="p-name">I feel like Pablo</span>
              <span class="p-company">Yeezy</span>
            </div>
            <div class="a-size">Available sizes : <span class="size">S , M , L , XL</span></div>
          </div>
        </div>

        <div class="box-down">
          <div class="h-bg">
            <div class="h-bg-inner"></div>
          </div>

          <a class="cart" href="#">
            <span class="price">$120</span>
            <span class="add-to-cart">
              <span class="txt">Add in cart</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div> */}

<div id="favourite-section">
<div id="heading-foot">
    <p id='had-bot'>Your Favourites</p>
    <a href="#">View All</a>
  </div>




  <ul class="cards">
  {filteredData.slice(0, 4).map((pm) => (

  <li>
    <a href={"/" + pm.prodId} class="card">
      <img src={wine} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          {/* <img class="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" /> */}
          <div class="card__header-text">
            <h3 class="card__title">{pm.name}</h3>            
            <span class="card__status">${pm.price}</span>
          </div>
        </div>
        <p class="card__description"><a href="#" class="glow-button">Add to Cart</a></p>
      </div>
    </a>      
  </li>
  ))}







  
  {/* <li>
    <a href="" class="card">
      <img src="https://i.imgur.com/2DhmtJ4.jpg" class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
          <img class="card__thumb" src="https://i.imgur.com/sjLMNDM.png" alt="" />
          <div class="card__header-text">
            <h3 class="card__title">kim Cattrall</h3>
            <span class="card__status">3 hours ago</span>
          </div>          
        </div>
        <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </a>
  </li>     */}
</ul>

{/* <div class="container page-wrapper">
  <div class="page-inner">
  <div class="row-foot">
   
    {filteredData.slice(0, 4).map((pm) => (
       <div class="column">
       <div class="wrapper">
      <div class="el-wrapper">
        <div class="box-up">
          <img class="img" src={wine} alt="" width={50} height={200}></img>
          <div class="img-info">
            <div class="info-inner">
              <span class="p-name">{pm.name}</span>
              <span class="p-company">{pm.category}</span>
            </div>
            <div class="a-size">Available sizes : <span class="size">S , M , L , XL</span></div>
          </div>
        </div>

        <div class="box-down">
          <div class="h-bg">
            <div class="h-bg-inner"></div>
          </div>

          <a class="cart" href="#">
            <span class="price">${pm.price}</span>
            <span class="add-to-cart">
              <span class="txt">Add in cart</span>
            </span>
          </a>
        </div>
      </div>
      </div>
      </div>
    ))}
   
    </div>
  </div>
</div> */}
















{/* <div>
  <div id="heading-foot">
    <p id='had-bot'>Your Favourites</p>
    <a href="#">View All</a>
  </div>

  <div class="row-foot">
    
{filteredData.slice(0, 4).map((pm) => (
   <div class="column">
<div class="wrapper">
    <div class="product-img">
      <img src={wine} height="170" width="427"></img>
    </div>
    <div class="product-info">
      <div class="product-text">
        <h1>{pm.name}</h1>
    
        <p>{pm.descripton}</p>
      </div>
      <div class="product-price-btn">
        <p><span>{pm.price}</span>$</p>
        <button className="cartButton" type="button">View</button>
      </div>
      </div>
      </div>
      </div>
      ))}
      </div>
      </div> */}
      

      </div>

      <CDBFooter className="shadow">
      <CDBBox
        display="flex"
        justifyContent="between"
        alignItems="center"
        className="mx-auto py-4 flex-wrap"
        style={{ width: '80%' }}
      >
        <CDBBox display="flex" alignItems="center">
          <a href="/" className="d-flex align-items-center p-0 text-dark">
           
            <span className="ml-4 h5 mb-0 font-weight-bold">Luminous Liquor</span>
          </a>
        </CDBBox>
        <CDBBox>
          <small className="ml-2">&copy; Luminous Liquor, 2022. All rights reserved.</small>
        </CDBBox>
        <CDBBox display="flex">
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="facebook-f" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="mx-3 p-2">
            <CDBIcon fab icon="twitter" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="instagram" />
          </CDBBtn>
        </CDBBox>
      </CDBBox>
    </CDBFooter>








         {/* <Recent/>
        <History/>  */}
    </div>
)}
export default Footer;