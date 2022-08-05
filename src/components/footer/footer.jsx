import "./footer.css"
import Heart from "../images/heartWhite.png"
import Cart from "../images/shopping-cart.png"
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";


const Footer = () => {

  // useEffect(()=>{

  //   var hours = new Date().getHours();
  //   if(hours<18 && hours>8){
      
  //     document.getElementById("foot").disabled = false;
  //     document.getElementById("foot").style.backgroundColor="red";
  //     document.getElementById("foot").style.color="white";

  //   }
  //   else{
      
  //       document.getElementById("foot").disabled = true;
  //       document.getElementById("foot").style.backgroundColor="grey";
  //       document.getElementById("foot").style.color="white";
        
  //   }
    
  //   }, [])

    return (
      <div>
        <Link to="/fav"> <input type="image" id="myBtn" src={Heart}></input>
</Link>
<Link to="/cart"><input type="image" id="myBtn2" src={Cart}></input></Link>
    
      
       
    {/* <button className="footer" id="foot">
  <p>Checkout</p>
</button> */}
</div>
    )
}

export default Footer;