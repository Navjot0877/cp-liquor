import Heart from "../../components/images/heart.png";
import Bag from "../../components/images/bag.png";
import Back from "../../components/images/back.png";
import "./navbarHead.css";
import {useState, useEffect} from "react";
import Axios from 'axios'
import { Link } from "react-router-dom";



const Navbar = () => {


    const [favList, setFavList] = useState([]);
    const [productInfoList, setproductInfo] = useState([]);
    const [cartList, setCartList] = useState([]);
    const favId = ["1", "4"];

    const[prodId, setProdId] = useState({id: "1"});
    const id = "1";
    const [favInfoList, setFavInfoList] = useState([]);

    useEffect(()=> {
        Axios.get("http://localhost:4010/read").then((response)=>{
        setFavList(response.data);
        

        // {favList.map((val,key) => {
        //     favId =  val.productID;
        //    })}
        })
    }, [favList])



    useEffect(()=> {

        
        {favId.map((val) => {
            Axios.get("http://localhost:4010/readFav/" + 2).then((response)=>{
                setFavInfoList(response.data);
               
                })
             


           })}
    
    

       
    }, [favInfoList])




    useEffect(()=> {
        Axios.get("http://localhost:4010/readCart").then((response)=>{
        setCartList(response.data);
        console.log(response.data);
        console.log(cartList);
        })
    }, [cartList])



    useEffect(()=> {
        Axios.get("http://localhost:4010/productInfo", {id: 1}).then((response)=>{
        setproductInfo(response.data);
        console.log(response.data);
        console.log(productInfoList);
        })
    }, [productInfoList])





    




    return (
        <div className="navbar">

            <div className="logo">
                    <img src={Back} className="iconImg" alt="" />
                </div>


            <span className="logo">Luminus Liquor</span>
            <div className="icons">


                <div className="icon">
               
                    <div className="dropdown">
                        <div className="dropbtn">
                        <img src={Heart} className="iconImg" alt="" />
                        {/* <Link to="/fav"> </Link> */}
                       
                    <div className="counter">{favList.length}</div>
                   
                        </div>
                    <div class="dropdown-content">
{/* 
{Object.keys(favInfoList).map((val,key) => {

if(favInfoList.length==0)
{
    return <a href="#">No items found</a>
}
else
{
    return <a href="#">{Object.values(favInfoList).name}</a>
}
})}  */}





{favInfoList.map((val,key) => {

if(favInfoList.length==0)
{
    return <a href="#">No items found</a>
}
else
{
    return <a href="#">{val.name}</a>
}
})} 

                    </div>
                    </div>
                </div>

                <div className="icon">
                <div className="dropdown">
                        <div className="dropbtn">
                    <img src={Bag} className="iconImg" alt="" />
                    <div className="counter">{cartList.length}</div>
                    </div>
                    <div class="dropdown-content">


{cartList.map((val,key) => {

if(cartList.length==0)
{
    return <a href="#">No items found</a>
}
else
{
    return <a href="#">{val.name}</a>
    
     
    

}
})} 

                    </div>
                    </div> </div>
            </div>
        </div>



    )
}

export default Navbar