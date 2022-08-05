import {useState, useEffect} from "react";
import Heart from "../images/heart.png";
import HeartFilled from "../images/heartFilled.png";
import Cart from "../images/bag.png";
import Axios from 'axios'
import "./details2.css"
import image from "../images/wine.png";
import del from "../images/delivery-truck.png";
import money from "../images/money.png";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { Link, useNavigate } from "react-router-dom";
import GooglePayButton from "@google-pay/button-react";
import React from 'react';
import { useParams } from 'react-router-dom';



const Details2 = (props) => {

 
  let id = useParams();
    console.log(id.id);

  const data = {
    id: 1,
    name: 'balle'
  }
    
   
  const [counter, setCounter] = useState(1);
    const [added, setAdd] = useState(false);
    const [addedFav, setAddFav] = useState([]);
    const [addedCart, setAddCart] = useState(false);
    const [zipCode, setZipCode] = useState("");
    const [favList, setFavList] = useState([]);

    const [productInfoList, setproductInfo] = useState([]);

    const [productSizeList, setproductSize] = useState([]);

    const slideIndex = 1;
// showSlides(slideIndex);


      
      
     

    const UserId = 2;
    const prodId = 4;
    const zip = [{
        id: "T1X 0L3",
        time: 4,
    },

    {
        id: "T1X 0L4",
        time: 4,
    },
    {
        id: "T3J0M6",
        time: 5,
    },
        ]


        useEffect(()=> {
            Axios.get("http://localhost:9005/productInfo/" + id.id).then((response)=>{
            setproductInfo(response.data);
            console.log(response.data);
            })
        }, [setproductInfo])


        useEffect(()=> {
            Axios.get("http://localhost:9005/productSize").then((response)=>{
            setproductSize(response.data);
            console.log(response.data);
            })
        }, [setproductSize])

     
    // useEffect(()=> {
    //     Axios.get("http://localhost:3002/read").then((response)=>{
    //     setFavList(response.data);
    //     console.log(setFavList.length);
    //     })
    // }, [])

    useEffect(()=> {
        Axios.get("http://localhost:9005/readFav/",).then((response)=>{
        

       
setAddFav(response.data);
// alert(addedFav);
// alert(addedFav.length);

if(addedFav.length==0){
    
    setAdd(false);
}
else
{
    setAdd(true);
}

        })
    }, [addedFav])



    const [showA, setShowA] = useState(true);
    const [showB, setShowB] = useState(true);
  
    const toggleShowA = () => setShowA(!showA);
    const toggleShowB = () => setShowB(!showB);


    const handleAdd = () =>{
       if (added){
        Axios.post("http://localhost:9005/delFav", {productID: id.id, userId: 2})
           setAdd(false);
     
           
           
       }
       else{
           setAdd(true);
            Axios.post("http://localhost:9005/favourite")
            // Axios.post("http://localhost:3010/product")
         
       }
    };

    const CartButton = () => {


if(addedCart==true){
    alert("removed");
    setAddCart(false);
    Axios.post("http://localhost:9005/delCart")
}
else{
alert("added");
    setAddCart(true);
        Axios.post("http://localhost:9005/cart", {productID: id.id, userId: 2})

 } }
    

//     const deleteFav = (uId, pId) =>{
// Axios.delete(`http://localhost:3002/delete/${uId}+${pId}`)
//     }



    function checkDelivery(array, name){
        var hours = new Date().getHours();

        // return array.find((element) => {
        //     return element.time === time;
        //   })

          const found = array.find(obj => 
            obj.id === name
          );
        
          console.log("Reached");
        console.log(found);
    }

    function getZip(event)
    {
        console.log(event.target.value);
        setZipCode(event.target.value);
    }

    const handleCounterAdd = () => {
      setCounter(counter+1)
    }

    const handleSub = () => {
      setCounter(counter-1)
    }

    


    return(
        

        

<div className="container">
{/* <LoadingBar /> */}

<div className="picture_side">

    
    {/* <Zoom className="zoo"> */}
    <img className="picture_pic" src={image} alt=""></img>
    {/* </Zoom> */}


    <div className="addToCart_product">
        <button className="cartBut" value="Add to Cart" onClick={CartButton}><label id="changeText">Add to Cart </label></button>
        <div className="favourite_product">
                {added? (<img src={HeartFilled} className="favFilledIcon_product" onClick={handleAdd}/>) : 
                
                (
             
                 
                    <img src={Heart} className="favIcon_product" onClick={handleAdd}/>
                    
                )}
                
            </div>
        </div>

  </div>


  <div class="right-column">
 
 <div class="myProduct">
     {/* <label>Category </label> */}


     {productInfoList.map((val,key) => {
    
    return (

<div>
   
   <label id="category_link">{val.category}</label>
   


   <h1 id="product_title">{val.name}</h1>
   <p className="product_description">{val.description}</p>
   </div>


   );
})}   
 
 </div>

 <div class="product-configuration">

   {/* <div class="product-color">
     <span>Color</span>

     <div class="color-choose">
       <div>
         <input data-image="red" type="radio" id="red" name="color" value="red" checked></input>
         <label for="red"><span></span></label>
       </div>
       <div>
         <input data-image="blue" type="radio" id="blue" name="color" value="blue"></input>
         <label for="blue"><span></span></label>
       </div>
       <div>
         <input data-image="black" type="radio" id="black" name="color" value="black"></input>
         <label for="black"><span></span></label>
       </div>
     </div>

   </div> */}

   <div class="cable-config">
        <span>Size</span>
 <br></br><br></br>
        <div class="cable-choose">

        {productInfoList.map((val,key) => {
    
    return (

          <div className="sizeShow">{val.size}ml</div>

          );
        })}   
          
        </div>
 
        {/* <a href="#">How to configurate your headphones</a> */}
      </div>


      <div class="cable-config">
        <span>Quantity</span>
        <br></br>
        <br></br>
 <div className="count_product">
     <div>
     
     <button className="plus_but float-left-child" onClick={handleCounterAdd}>+</button>
     <label className="counter_but float-left-child">{counter}</label>
<button className="minus_but" onClick={handleSub}>-</button>
</div>
 </div>

      </div>





    </div>
 

{/*  
    <div className="addToCart_product">
        <button className="cartBut" value="Add to Cart" onClick={CartButton}><label id="changeText">Add to Cart </label></button>
        <div className="favourite_product">
                {added? (<img src={HeartFilled} className="favFilledIcon_product" onClick={handleAdd}/>) : 
                
                (
                    <img src={Heart} className="favIcon_product" onClick={handleAdd}/>
                )}
                
            </div>
        </div> */}



 

    <div class="product-price_details">
    {productInfoList.map((val,key) => {
    
    return (

          <span>${val.price}</span>

          );
        })}  
      
      <br></br>
      <br></br><br></br>

     
<Link to={{
      pathname: '/checkout/'+ counter+ '/' + id.id,
    }} ><a href="#" class="cart-btn">Checkout</a>
    </Link>
    
      
    </div>
  </div>
</div>


  



        

       


    )
}

export default Details2;