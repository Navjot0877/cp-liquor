import Navbar from '../../components/navbar/navbar';
import './checkout.css';
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





const Checkout  = () => {

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
    const [counter, setCounter] = useState(parseInt(param.quantity));

    
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
        <h2 class="display-4 font-weight-bold">Checkout</h2>
        {/* <p class="font-italic mb-0">Using simple jumbotron-style component, create a nice Bootstrap 4 header with a background image.</p>
        <p class="font-italic">Snippe by
            <a href="https://bootstrapious.com" class="text-white">
                <u>Bootstrapious</u>
            </a>
        </p> */}
        {/* <a href="#" role="button" class="btn btn-primary px-5">See All Features</a> */}
    </div>
</div>





<div className='container'>



<div className="left_checkout">

<div className="outer_left">

    

       

<div class="column-labels">
  <label class="product-image">Image</label>
  <label class="product-details">Product</label>
  <label class="product-price_checkout">Price</label>
  <label class="product-quantity">Quantity</label>
  {/* <label class="product-removal">Favourites</label>  */}
  <label class="product-line-price">Total</label>
</div>



<div class="product_checkout">




  <div class="product-image">

    <img src={image}></img>

  </div>


  <div class="product-details">

  {productInfoList.map((val,key) => {
    
    return (

      <div>
      <div class="product-title">{val.name}</div>

      <p class="product-description">{val.description}</p>
    </div>
          

          );
        })}   

  
  </div>



  {productInfoList.map((val,key) => {
    
    return (

      <div>
       <div class="product-price_checkout">{val.price}</div>
    </div>
          

          );
        })}   



  <div class="product-quantity">

  {/* <div>
<button className="plus_but" onClick={handleCounterAdd}>+</button>
<label className="counter_but">{counter}</label>
<button className="minus_but" onClick={handleSub}>-</button>



</div> */}

<div>
     
     <button className="plus_but float-left-child" onClick={handleCounterAdd}>+</button>
     <label className="counter_but float-left-child">{counter}</label>
<button className="minus_but" onClick={handleSub}>-</button>
</div>
  </div>


  {/* <div class="product-removal">
    <button class="remove-product">
      Remove
    </button>
  </div> */}

  {/* <div class="product-removal">
    
    {added? (<img src={HeartFilled} className="favFilledIcon_product" onClick={handleAdd}/>) : 
                
                (
                    <img src={Heart} className="favIcon_product" onClick={handleAdd}/>
                )}
  
  </div> */}



  <div class="product-line-price">{subTotal}</div>
</div>

<div class="pr">
   <a id="view_but" href={"/"+param.id}>View</a>
  </div>
 








           


        



    </div>

</div>

<div className="right_checkout">


{/* <div className="totals">
    <div class="totals-item">
      <label>Subtotal</label>
      <div class="totals-value" id="cart-subtotal">${subTotal}</div>
    </div>
    <div class="totals-item">
      <label>Tax (5%)</label>
      <div class="totals-value" id="cart-tax">${tax}</div>
    </div>
    <div class="totals-item">
      <label>Shipping</label>
      <div class="totals-value" id="cart-shipping">${shipping}</div>
    </div>
    <div class="totals-item totals-item-total">
      <label>Grand Total</label>
      <div class="totals-value" id="cart-total">${grandTotal}</div>
    </div>
  </div> 

{/* 
<div class="container">
  <div class="row">
    <div class="col-*-*"></div>
    <div class="col-*-*"></div>
  </div>
  <div class="row">
    <div class="col-*-*"></div>
    <div class="col-*-*"></div>
    <div class="col-*-*"></div>
  </div>
  <div class="row">
    ...
  </div>
</div> */}



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

<button className='checkbut'>Check</button>

      <br></br>



      {/* <button class="checkout" id='buy-now'>Checkout</button> */}

<div>

 {/* <GooglePayButton

environment='TEST'
paymentRequest={{
  apiVersion: 2,
  apiVersionMinor:0,
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
      totalPrice: googlePay,
      currencyCode: 'CAD',
      countryCode: 'CA',
    },
    shippingAddressRequired: true,
    callbackIntents: ['PAYMENT_AUTHORIZATION']
   }}
   onLoadPaymentData={paymentRequest => {
     alert('Sucess', paymentRequest);
   }}
   onPaymentAuthorized={paymentData => {
     alert("Payment Authorized Success", paymentData)
     return {transactionState: 'success'}
   }}
   existingPaymentMethodRequired='false'
   buttonColor='white'
   buttonType='Buy'
     /> */}



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
/>


</div>



{/* 
  <GooglePlayButton
environment='TEST'
paymentRequest={{
  apiVersion: 2,
  apiVersionMinor:0,
 allowedPaymentsMethods: [
{
  type: 'CARD',
  parameters: {
    allowedPaymentsMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
    allowedCardNetworks: ['MASTERCARD', 'VISA'],
  },
  tokenizationSpecification: {
    type: 'PAYMENT_GATEWAY',
    parameters: {
      gateway: 'example',
      gatewayMerchantId: 'BCR2DN4T7S4K3TA4',

    }
  }
}
 ],
 merchantInfo: {
   merchantId: 'BCR2DN4T7S4K3TA4',
   merchantName: 'Guryuvraj',
 },
 transactionInfo:{
   totalPriceStatus: 'FINAL',
   totalPriceLabel: 'Total',
   totalPrice: '1',
   currencyCode: 'CAD',
   countryCode: 'ca',
 },
 shippingAddressRequired: true,
 callbackIntents: ['PAYMENT_AUTHORIZATION']
}}
onLoadPaymentData={paymentRequest => {
  alert('Sucess', paymentRequest);
}}
onPaymentAuthorized={paymentData => {
  alert("Payment Authorized Success", paymentData)
  return {transactionState: 'success'}
}}
existingPaymentMethodRequired='false'
buttonColor='black'
buttonType='Buy'
  ></GooglePlayButton> */}

</div>
</div>

</div>
    )
}

export default Checkout;