import React from 'react';
import './footer_loggedout.css';
import Recent from './Recent';
import History from './History';
import wine from '../../components/images/wine.png'
import axios from 'axios'
import {useState, useEffect} from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import cart from '../../components/images/cart.png'
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';
import Heart from "../../components/images/heart.png";
import HeartFilled from "../../components/images/heartFilled.png";
import Axios from 'axios'


const Footer_loggedout = () => {

    const [filteredData, setFilteredData] = useState([]);
    const [filteredData2, setFilteredData2] = useState([]);
    const [added, setAdd] = useState(false);
    const [addedFav, setAddFav] = useState([]);


    useEffect(()=> {


           axios.get("http://localhost:9005/productInfo2").then((response)=>{
            setFilteredData(response.data);
           
            })
       
    }, [filteredData])

    useEffect(()=> {


        axios.get("http://localhost:9005/productInfo3").then((response)=>{
         setFilteredData2(response.data);
        
         })
    
 }, [filteredData2])



    


    const handleAdd = () =>{
        if (added){
         Axios.post("http://localhost:9005/delFav", {productID: 1, userId: 2})
            setAdd(false);
      
            
            
        }
        else{
            setAdd(true);
             Axios.post("http://localhost:9005/favourite")
             // Axios.post("http://localhost:3010/product")
          
        }
     };


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

<div id="recent-section">
<div id="heading-foot">
    <p id='had-bot'>Recent Arrivals</p>
    {/* <a href="#">View All</a> */}
  </div>



  <div class="container">
    <div class="shop-default shop-cards shop-tech">
        <div class="row">
            
        {filteredData.slice(0, 6).map((pm) => (
 <div class="col-md-3">
 <div class="block dd no-border  z-depth-2-top z-depth-2--hover">
     <div class="block-image">
         <a href="#">
             <img src={wine} height={200} class="img-center"></img>
         </a>
         <span class="product-ribbon product-ribbon-right product-ribbon--style-1 bg-blue text-uppercase">New</span>
     </div>

     <div class="block-body text-center">
         <h3 class="heading heading-5 strong-600 text-capitalize">
             <a href="#" className="proTitle">
                 {pm.name}
             </a>
         </h3>
         <p class="product-description">
             ${pm.price}
         </p>
         
         
         <div class="product-buttons mt-4">
             <div class="row align-items-center">
                 {/* <div class="col-4"> */}
                 {/* <div className="favourite_product">
                {added? (<img src={HeartFilled} className="favFilledIcon_product" onClick={handleAdd}/>) : 
                
                (
             
                 
                    <img src={Heart} className="favIcon_product" onClick={handleAdd}/>
                    
                )}
                
            </div> */}
                 {/* </div> */}
                 
                 <div class="col-12">
                
                
                     <a href="/login" class="btn btn-block btn-primary btn-circle btn-icon-left">
                         View Product
                     </a>
                 </div>
             </div>
         </div>
     </div>
 </div>
</div>

        ))}
           















            {/* <div class="col-md-6">
                <div class="block product no-border z-depth-2-top z-depth-2--hover">
                    <div class="block-image">
                        <a href="#">
                            <img src={wine} height={280} class="img-center"></img>
                        </a>
                        <span class="product-ribbon product-ribbon-right product-ribbon--style-1 bg-blue text-uppercase">New</span>
                    </div>
    
                    <div class="block-body text-center">
                        <h3 class="heading heading-5 strong-600 text-capitalize">
                            <a href="#">
                                Google Home
                            </a>
                        </h3>
                        <p class="product-description">
                            2.8GHz Processor 1TB Storage 16GB DDR
                        </p>
                        <div class="product-colors mt-2">
                            <div class="color-switch float-wrapper">
                                <a href="#" class="bg-purple"></a>
                                <a href="#" class="bg-pink"></a>
                                <a href="#" class="bg-blue"></a>
                            </div>
                        </div>
                        <div class="product-buttons mt-4">
                            <div class="row align-items-center">
                                <div class="col-2">
                                    <button type="button" class="btn-icon" data-toggle="tooltip" data-placement="top" title="" data-original-title="Favorite">
                                        <i class="fa fa-heart"></i>
                                    </button>
                                </div>
                                <div class="col-2">
                                    <button type="button" class="btn-icon" data-toggle="tooltip" data-placement="top" title="" data-original-title="Compare">
                                        <i class="fa fa-share"></i>
                                    </button>
                                </div>
                                <div class="col-8">
                                    <button type="button" class="btn btn-block btn-primary btn-circle btn-icon-left">
                                        <i class="fa fa-shopping-cart"></i>Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
 */}





        </div>
    </div>
</div>

</div>



<div id="recent-section">
<div id="heading-foot">

    <p id='had-bot'>Our Products</p>
    {/* <a href="#">View All</a> */}
  </div>


  <div class="container">
    <div class="shop-default shop-cards shop-tech">
        <div class="row">
            
        {filteredData2.slice(0, 8).map((pm) => (
 <div class="col-md-3">
 <div class="block dd no-border  z-depth-2-top z-depth-2--hover">
     <div class="block-image">
         <a href="#">
             <img src={wine} height={200} class="img-center"></img>
         </a>
        </div>

     <div class="block-body text-center">
         <h3 class="heading heading-5 strong-600 text-capitalize">
             <a href="#" className="proTitle">
                 {pm.name}
             </a>
         </h3>
         <p class="product-description">
             ${pm.price}
         </p>
         
         
         <div class="product-buttons mt-4">
             <div class="row align-items-center">
                 {/* <div class="col-4"> */}
                 {/* <div className="favourite_product">
                {added? (<img src={HeartFilled} className="favFilledIcon_product" onClick={handleAdd}/>) : 
                
                (
             
                 
                    <img src={Heart} className="favIcon_product" onClick={handleAdd}/>
                    
                )}
                
            </div> */}
                 {/* </div> */}
                 
                 <div class="col-12">
                
                
                     <a href="/login" class="btn btn-block btn-primary btn-circle btn-icon-left">
                         View Product
                     </a>
                 </div>
             </div>
         </div>
     </div>
 </div>
</div>

        ))}
           
           </div>
    </div>
</div>






  </div>










  
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
export default Footer_loggedout;