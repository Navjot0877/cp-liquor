
import {useState, useEffect} from "react";
import Axios from 'axios'
import image from "../../components/images/wine.png";
import Nav from "../navbar2/navbarHead";
import './cart.css';



const Cart = () => {
    const [cartList, setCartList] = useState([]);
    const total = 0;
    const a = 0;


    useEffect(()=> {
        
        Axios.get("http://localhost:4010/readCart").then((response)=>{
        setCartList(response.data);
        console.log(response.data);
        console.log(cartList);

      



        })
        
    }, [cartList])

    const deleteCart = (a) => {
alert(a);
    }

    // {cartList.map((val,key) => {
    //     return (
    //         alert(val.price),
    //         a = val.price,
    //         total = total + a
    //     )
        
    //             })} 

return (
    <div>

   <Nav />

    <div className="Cart-Container_cart">
        <div className="Header_cart">
 <h3 className="Heading_cart">Shopping Cart</h3>
 <h5 class="Action_cart">Remove all</h5>
 </div>


 {cartList.map((val,key) => {

return ( <div className="Cart-Items_cart">
 <div className="image-box_cart">
 <img src={image} style={{ height:"120px" }} />
 </div>

 <div className="about_cart">
 <h3 className="subtitle_cart">{val.name}</h3>
 <h3 className="title_cart">{val.size}ml</h3>
 
 </div>



 <div className="count_cart">
 <div className="btn_cart">+</div>
 <div className="count_cart">1</div>
 <div className="btn_cart">-</div>
 </div>


 <div className="prices_cart">
 <div className="amount_cart">{val.price}</div><br></br>
 <div className="save_cart"><u>Add to favourites</u></div><br></br>
 <div className="remove_cart" onChange={deleteCart}><u>Remove</u></div>
 </div>

 </div>

)
})} 

 <div class="checkout_cart">
 <div class="total_cart">
 <div>
 <div class="Subtotal_cart">Sub-Total</div>
 <div class="items_cart">{cartList.length} items</div>
 </div>
 <div class="total-amount_cart">34.48</div>
 </div>
 <button class="button_cart">Checkout</button>
 </div>
 </div>
    </div>

)


}

export default Cart