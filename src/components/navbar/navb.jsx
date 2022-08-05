import Heart from "../images/heart.png";
import Bag from "../images/bag.png";
import User from "../images/user.png";
import "./navbar.css";
import {useState, useEffect} from "react";
import Axios from 'axios'
import { Link } from "react-router-dom";
import * as BsIcons from 'react-icons/bs';
import * as AiIcons from 'react-icons/ai';
import Sidebar from '../../homepage/components/Sidebar'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';





const Navbar2 = () => {

    const [text, setText] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    const [favList, setFavList] = useState([]);
    const [productInfoList, setproductInfo] = useState([]);

    const [productNamesList, setproductNames] = useState([]);

    const [cartList, setCartList] = useState([]);
    const favId = ["1", "4"];

    const[prodId, setProdId] = useState({id: "1"});
    const id = "1";
    const [favInfoList, setFavInfoList] = useState([]);

    const [filteredData, setFilteredData] = useState([]);
    const [searched, setSearched] = useState("");

    useEffect(()=> {
        Axios.get("http://localhost:9005/read").then((response)=>{
        setFavList(response.data);
        

        // {favList.map((val,key) => {
        //     favId =  val.productID;
        //    })}
        })
    }, [favList])



    useEffect(()=> {

        
        {favId.map((val) => {
            Axios.get("http://localhost:9005/readFav/" + 2).then((response)=>{
                setFavInfoList(response.data);
                setFilteredData(response.data);
               
                })
             


           })}
       
    }, [favInfoList])




    useEffect(()=> {
        Axios.get("http://localhost:9005/readCart").then((response)=>{
        setCartList(response.data);
        console.log(response.data);
        console.log(cartList);
        })
    }, [cartList])



    useEffect(()=> {
        Axios.get("http://localhost:9005/productInfo", {id: 1}).then((response)=>{
        setproductInfo(response.data);
        console.log(response.data);
        console.log(productInfoList);
        })
    }, [productInfoList])

    // useEffect(()=> {
    //     Axios.get("http://localhost:4010/productNames").then((response)=>{
    //     setproductNames(response.data);
    //     console.log(response.data);
    //     console.log(productNamesList);
    //     })
    // }, [productNamesList])

    useEffect(() => {
        const loadUsers = async () => {
          const response = await Axios.get("http://localhost:9005/productNames");
          //console.log(response.data);
          setproductNames(response.data);
        };
        loadUsers();
      });



    const onChangeHandler = (text) => {
        console.log("hey ");
        // alert(text);

        const searchWord = text;
    setproductNames(searchWord);

    const newFilter = productNamesList.filter((value) => {
        return value.name.toLowerCase().includes(searchWord.toLowerCase());
      });

      if (searchWord === "") {
        setFilteredData([]);
      } else {
        setFilteredData(newFilter);
      }


      };

    

      const clearInput = () => {
        setFilteredData([]);
        setSearched("");
      };



    return (

        <div>


        <div className="navbar">


      



        <Sidebar />

 
        {/* Logo  */}
        {/* <div className="logo">
                    Luminous Liquor
        </div> */}



        <div className="dropdown_again">
            {/* Checkbox */}
            <input type="checkbox" id="checkbox_toggle" />
            <label for="checkbox_toggle" class="hamburger">&#9776;</label>


            


           

                <div className="dropbtn_again">
                    <div className="twoBut">
            <input
          type="text"
          name="search"
          onChange={(e) => onChangeHandler(e.target.value)}
          placeholder="Search Products"
        ></input>
        </div>
        </div>


<div class="dropdown-content_again">
 {filteredData.slice(0, 10).map((pm) => (
          <a className="dataItem" href={"/" + pm.producId}><p>{pm.name}</p></a>
        ))}


</div>
</div>



            <div className="icons">


                <div className="icon">
               
                    <div className="dropdown">
                        <div className="dropbtn">
                        <img src={Heart} className="iconImg" alt="" />
                        {/* <Link to="/fav"> </Link> */}
                       
                    <div className="counter">{favList.length}</div>
                        </div>
                    <div class="dropdown-content">
                    {filteredData.slice(0, 10).map((pm) => (
                        // <div className="drop-navbar">
          <a href={"/" + pm.prodId}>{pm.name}</a>
        
        ))}
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
                   
                    </div>
                    
                   
                    
                    
                    
                    
                     </div>






                <div className="icon">
                <div className="dropdown">
                        <div className="dropbtn">

                        <Link to='/edituser' className="linkage"><img src={User} className="iconImg" alt="" /></Link>
                    
                
                    </div>

                    <div class="dropdown-content">
<a href="#">No items found</a>




                    </div>
                   
                    </div>
                    
                   
                    
                    
                    
                    
                     </div>
            </div>
        </div>
        </div>
       



    )
}

export default Navbar2