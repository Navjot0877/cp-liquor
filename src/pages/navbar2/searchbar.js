// import React, { useEffect, useState } from "react";
// import "./searchbar.css";

// import axios from "./axios";
// import recent from "./recent";

// //use State for searchbar
// const Searchbar = () => {
//   const [text, setText] = useState("");
//   const [productname, setProductName] = useState([]);
//   const [suggestions, setSuggestions] = useState([]);

//   useEffect(() => {
//     const loadUsers = async () => {
//       const response = await axios.get("/test/capstones");
//       //console.log(response.data);
//       setProductName(response.data);
//     };
//     loadUsers();
//   });
//   //on change handler event
//   const onChangeHandler = (text) => {
//     console.log("hey ");
//     //axios request to fetch data from /test/capstones
//     axios.get("/test/capstones").then((res) => {
//       console.log(`search success in :${text}`);
//       let matches = [];
//       if (text.length > 0) {
//         matches = productname.filter((productNam) => {
//           const regex = new RegExp(`${text}`, "gi");
//           return productNam.productName.match(regex);
//         });
//       }
//       //console log to see the matches found in the database.
//       console.log(matches);
//       setSuggestions(matches);
//       setText(text);
//     });
//   };

//   return (
//     <div className="searchbar">
//       <form>
//         <input
//           type="text"
//           name="search"
//           onChange={(e) => onChangeHandler(e.target.value)}
//           //value={text}
//           placeholder="Enter Product Name..."
//         ></input>
//         <input type="submit" hidden />
//         {suggestions &&
//           suggestions.map((suggestion, i) => (
//             <div className="searchResult">
//               <div className="itemResult">{suggestion.productName}</div>
//             </div>
//           ))}
//         <div className="searchMatch"></div>
//       </form>
//     </div>
//   );
// };
// export default Searchbar;
