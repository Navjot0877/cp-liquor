import {useState, useEffect} from "react";
import Heart from "../images/heart.png";
import HeartFilled from "../images/heartFilled.png";
import Cart from "../images/bag.png";
import Axios from 'axios'
import "./details.css"
import image from "../images/wine.png";
import del from "../images/delivery-truck.png";
import money from "../images/money.png";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'


const Details = () => {

    
   

    const [added, setAdd] = useState(false);
    const [addedFav, setAddFav] = useState([]);
    const [addedCart, setAddCart] = useState(false);
    const [zipCode, setZipCode] = useState("");
    const [favList, setFavList] = useState([]);


    const [productInfoList, setproductInfo] = useState([]);

    const slideIndex = 1;
// showSlides(slideIndex);


    function plusSlides(n) {
        showSlides(slideIndex += n);
      }
      
      function currentSlide(n) {
        showSlides(slideIndex = n);
      }
      
      function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";  
        }
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
      }
     

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
            Axios.get("http://localhost:4010/productInfo").then((response)=>{
            setproductInfo(response.data);
            console.log(response.data);
            })
        }, [setproductInfo])


    // useEffect(()=> {
    //     Axios.get("http://localhost:3002/read").then((response)=>{
    //     setFavList(response.data);
    //     console.log(setFavList.length);
    //     })
    // }, [])

    useEffect(()=> {
        Axios.get("http://localhost:4010/readFav/",).then((response)=>{
        

       
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



    const handleAdd = () =>{
       if (added){
        Axios.post("http://localhost:4010/delFav", {productID: 4, userId: 2})
           setAdd(false);
           
       }
       else{
           setAdd(true);
            Axios.post("http://localhost:4010/favourite")
            // Axios.post("http://localhost:3010/product")
       }
    };

    const CartButton = () => {


if(addedCart==true){
    alert("removed");
    setAddCart(false);
    Axios.post("http://localhost:4010/delCart")
}
else{
alert("added");
    setAddCart(true);
        Axios.post("http://localhost:4010/cart", {productID: 4, userId: 2})

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

    


    return(
        

        <div>

{/* 
<div className="slideshow-container">

<div className="mySlides fade">
  <div className="numbertext">1 / 3</div>
  <img src={image}></img>
  <div className="text">Caption Text</div>
</div>

<div class="mySlides fade">
  <div class="numbertext">2 / 3</div>
  <img src={Heart} ></img>
  <div class="text">Caption Two</div>
</div>

<div class="mySlides fade">
  <div class="numbertext">3 / 3</div>
  <img src={Cart}></img>
  <div class="text">Caption Three</div>
</div>

<a class="prev" onClick={plusSlides(-1)}>❮</a>
<a class="next" onClick={plusSlides(1)}>❯</a>

</div> */}


{/* <div style="text-align:center">
  <span class="dot" onclick={currentSlide(1)}></span> 
  <span class="dot" onclick={currentSlide(2)}></span> 
  <span class="dot" onclick={currentSlide(3)}></span> 
</div>  */}

            <br></br>

            <div className="image"> 
            <Zoom>
<img src={image} id="photo"></img>
</Zoom>
</div>

           


<div className="content">

{productInfoList.map((val,key) => {
    
return (
    <div>
    <div className="title">{val.name}</div> 
    <hr></hr>
    <p id="price">${val.price}</p>
    <p id="description">{val.description}</p>
    </div>
);
})}   

<div className="addToCart">
        <button className="cartBut" value="Add to Cart" onClick={CartButton}><label id="changeText">Add to Cart </label></button>
        <div className="favourite">
                {added? (<img src={HeartFilled} className="favFilledIcon" onClick={handleAdd}/>) : 
                
                (
                    <img src={Heart} className="favIcon" onClick={handleAdd}/>
                )}
                
            </div>
        </div>

{/* <div className="ico">
<img src={del} className="icons"></img>
sdfdf
<img src={money} className="icons"></img>
asa
</div> */}


{/* <div>
<div className="cart" >
    <label className="myCart">ADD TO CART</label>
</div>
</div> */}


    
</div>

          

        {/* <div className="email">
            <label> Enter your email to get updates whenever the price gets lowers for this product</label>
            <input type="text" placeholder="Enter email here" onChange={getZip}></input>
            <input type="button" value="Check" onClick={checkDelivery(zip, setZipCode)}></input>
        </div> */}
<br></br>
        

<div>

</div>
{/* <div className="quantity">
    <label className="sign">+</label>

    <label>1</label>

    <label className="sign">-</label>
</div> */}


        </div>

       


    )
}

export default Details;