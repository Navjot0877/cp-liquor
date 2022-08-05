import React, {useState, useEffect} from 'react'
import "./navbar2.css";
// import Sidebar from './Sidebar';


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





    const [isNavExpanded, setIsNavExpanded] = useState(false)

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
     

    return (
    <nav className="navigation">
      

      <a href="/" className="brand-name">
      Luminous Liquor
      </a>

      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}
      >
        {/* hamburger svg code... */}
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >

<div className="dropdown_again">
<div className="dropbtn_again">
                    <div className="twoBut"></div>

        <ul>
          <li>
          <input
          type="text"
          name="search"
          onChange={(e) => onChangeHandler(e.target.value)}
          //value={text}
          placeholder="Search Products"
        ></input> </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>

</div>
</div>
</div>

    </nav>


    )
}

export default Navbar2