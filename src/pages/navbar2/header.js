import React from "react";
import "./header.css";
import Searchbar from "./searchbar";
import Navbar from "./navbar";
const header = () => {
  return (
    <header className="header">
      <Searchbar />
      <Navbar />
    </header>
  );
};

export default header;
