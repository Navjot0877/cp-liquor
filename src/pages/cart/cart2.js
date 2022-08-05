import Navbar from '../../components/navbar/navbar';
import './cart2.css';
import {useState, useEffect} from "react";
import Axios from 'axios'
import image from "../../components/images/wine.png";
import { useLocation } from 'react-router';
import Heart from "../../components/images/heart.png";
import HeartFilled from "../../components/images/heartFilled.png";
import GooglePayButton from "@google-pay/button-react";
import React from 'react';
import { useParams } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Bag from '../../components/images/bag.png'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';





const Cart2  = () => {

//Variables
    const total = 0;
    const a = 0;
    

//Fetching the Parametrs
    let param = useParams();
    console.log(param);


// Declaring UseStates
    const [productInfoList, setproductInfo] = useState([]);
    const [cartList, setCartList] = useState([]);
    const [addedFav, setAddFav] = useState([]);
    const [counter, setCounter] = useState(parseInt(1));

    useEffect(()=> {
      Axios.get("http://localhost:9005/readCart").then((response)=>{
      setCartList(response.data);
      console.log(response.data);
      console.log(cartList);
      })
    }, [cartList])

    
//Fetching all the details of Checked Out Product
  useEffect(()=> {
    Axios.get("http://localhost:9005/productInfo/" + param.id).then((response)=>{
    setproductInfo(response.data);
    



    })
}, [setproductInfo])



var payPrice = "25.98";





    

 
    
    const price = 25.98;
    
    const [tax, setTax] = useState(0.05* price);

    const [shipping, setShipping] = useState(5);

    const [grandTotal, setGrandTotal] = useState(price + shipping + tax);

    const [googlePay, setGooglePay] = useState("25.98");

    const handleCounterAdd = () => {
      
  
      setCounter(counter+1)
      setSubTotal((counter+1)* price)
      setTax((0.05 * ((counter+1)* price)).toFixed(1))
      setGrandTotal(((counter+1)* price + shipping + (0.05 * (counter+1)* price)))
      
      payPrice = ((((counter+1)* price + shipping + (0.05 * (counter+1)* price))).toFixed(2))
      
      setGooglePay(payPrice)
      

    }

    const handleSub = () => {

      if((counter-1)>0){
      setCounter(counter-1)
      setSubTotal((counter-1)* price)
      setTax((0.05 * ((counter-1)* price)).toFixed(1));
      setGrandTotal(((counter-1)* price + shipping + (0.05 * (counter-1)* price)))

      payPrice = ((((counter-1)* price + shipping + (0.05 * (counter-1)* price))).toFixed(2))
   
      setGooglePay(payPrice)
      }
    }
  

    // useEffect(()=> {
    //     Axios.get("http://localhost:4010/readCart").then((response)=>{
    //     setCartList(response.data);
    //     })
        
    // }, [cartList.length])

    const [subTotal, setSubTotal] = useState(25.98);
    const [targetValue, setTargetValue] = useState(1);
   


    return (
    <div>
  
<Navbar />

<div class="jumbotron bg-cover text-white">
    <div class="container py-5 text-center">
        <h2 class="display-4 font-weight-bold">Cart</h2>
        {/* <p class="font-italic mb-0">Using simple jumbotron-style component, create a nice Bootstrap 4 header with a background image.</p>
        <p class="font-italic">Snippe by
            <a href="https://bootstrapious.com" class="text-white">
                <u>Bootstrapious</u>
            </a>
        </p> */}
        {/* <a href="#" role="button" class="btn btn-primary px-5">See All Features</a> */}
    </div>
</div>





<div className='container bo'>







<div class="shopping-cart">

  <div class="column-labels">
    <label class="product-image">Image</label>
    <label class="product-details">Product</label>
    <label class="product-price">Price</label>
    <label class="product-quantity">Quantity</label>
    <label class="product-removal">Remove</label>
    <label class="product-line-price">Total</label>
  </div>

  <div class="product-pro">
    <div class="product-image">
      <img src="https://s.cdpn.io/3/dingo-dog-bones.jpg"></img>
    </div>
    <div class="product-details">
      <div class="product-title">Dingo Dog Bones</div>
      <p class="product-description">The best dog bones of all time. Holy crap. Your dog will be begging for these things! I got curious once and ate one myself. I'm a fan.</p>
    </div>
    <div class="product-price">12.99</div>
    <div class="product-quantity">
    <div>
     
     <button className="plus_but float-left-child" onClick={handleCounterAdd}>+</button>
     <label className="counter_but float-left-child">{counter}</label>
<button className="minus_but" onClick={handleSub}>-</button>
</div>
    </div>
    <div class="product-removal">
      <button class="remove-product">
        Remove
      </button>
    </div>
    <div class="product-line-price">25.98</div>
  </div>

  <div class="product-pro">
    <div class="product-image">
      <img src="https://s.cdpn.io/3/large-NutroNaturalChoiceAdultLambMealandRiceDryDogFood.png"></img>
    </div>
    <div class="product-details">
      <div class="product-title">Nutro™ Adult Lamb and Rice Dog Food</div>
      <p class="product-description">Who doesn't like lamb and rice? We've all hit the halal cart at 3am while quasi-blackout after a night of binge drinking in Manhattan. Now it's your dog's turn! Who doesn't like lamb and rice? We've all hit the halal cart at 3am while quasi-blackout after a night of binge drinking in Manhattan. Now it's your dog's turn! Who doesn't like lamb and rice? We've all hit the halal cart at 3am while quasi-blackout after a night of binge drinking in Manhattan. Now it's your dog's turn!</p>
    </div>
    <div class="product-price">45.99</div>
    <div class="product-quantity">
    <div>
     
     <button className="plus_but float-left-child" onClick={handleCounterAdd}>+</button>
     <label className="counter_but float-left-child">{counter}</label>
<button className="minus_but" onClick={handleSub}>-</button>
</div>
    </div>
    <div class="product-removal">
      <button class="remove-product">
        Remove
      </button>
    </div>
    <div class="product-line-price">45.99</div>
  </div>

  <div className='helpme'>

<div className="payTime">
  <Table responsive>
      <thead>
        <tr>
          <th>Subtotal</th>
          <td>${subTotal}</td>
        </tr>
      </thead>

      <thead>
        <tr>
          <th>Tax</th>
          <td>${tax}</td>
        </tr>
      </thead>

      <thead>
        <tr>
          <th>Shipping</th>
          <td>${shipping}</td>
        </tr>
      </thead>

      <thead>
        <tr>
          <th>Total</th>
          <td>${grandTotal}</td>
        </tr>
      </thead>
      
    </Table>

    

   


      <br></br>
      {/* <button className='checkbut'>Check</button> */}

      </div>
<div className='testme'>

<h5>Want us to deliver?</h5>

<FloatingLabel
className = "fbut"
    controlId="floatingInput"
    label="Postal Code"
    
  >
      <Form.Control
      type="text"
      name="text"
      placeholder="T3J0M6"
     />
  </FloatingLabel>

  <br></br>
<button className='checkme'>Check</button>
</div>



<div>





{/* 

<GooglePayButton className='payBut'
  environment="TEST"
  paymentRequest={{
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['MASTERCARD', 'VISA'],
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
            gatewayMerchantId: 'exampleGatewayMerchantId',
          },
        },
      },
    ],
    merchantInfo: {
      merchantId: 'BCR2DN4T7S4K3TA4',
      merchantName: 'Luminous liquor',
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: '100.00',
      currencyCode: 'USD',
      countryCode: 'US',
    },
    shippingAddressRequired: true,
  }}

  
  onLoadPaymentData={paymentRequest => {
    alert("Success");
  }}
/> */}


</div>


  </div>
      
      








</div>




</div>



<div class="fo">
  <p>Footer</p>
</div>
</div>
    )
}

export default Cart2;