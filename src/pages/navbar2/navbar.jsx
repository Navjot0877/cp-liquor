import './navbar.css';
import {useState, useEffect} from "react";
import Axios from 'axios'
import image from "../../components/images/wine.png";
import Nav from "./navbarHead";
const Navbar2 = () =>{

    const [productInfoList, setproductInfo] = useState([]);
    const [favInfoList, setFavInfoList] = useState([]);

    useEffect(()=> {
        Axios.get("http://localhost:4010/productInfo").then((response)=>{
        setproductInfo(response.data);
        console.log(response.data);
        })
    }, [])

    useEffect(()=> {

        
       
            Axios.get("http://localhost:4010/readFav/" + 2).then((response)=>{
                setFavInfoList(response.data);
               
                })
             


         
    
    }, [favInfoList])


    return (
        <div>
          <Nav />


    <div class="wrapper">


  {/* <div class="product">
    <img src={image} alt=""></img>
    {productInfoList.map((val,key) => {
        return (
        <div>
    <h4 class="product-name">{val.name}</h4>
    </div>
        );
})}
    <button class="btn btn-buy">Add to cart</button>
  </div> */}
  
  {favInfoList.map((val,key) => {
      return(
  <div class="card">
  <img src={image} alt="Denim Jeans"></img>
  <h1>{val.name}</h1>
  <p class="price">${val.price}</p>
  <p>Added on 7th July, 2022</p>
  <p><button>Add to Cart</button></p>
</div>
 );
})}
</div>
    </div>
    


)}
export default Navbar2;

