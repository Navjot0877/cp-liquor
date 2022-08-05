import Header from "../components/Header";
import Input from "../components/Input";
import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./EditUser.css";

const EditUser = () => {

  const navigate = useNavigate()


  useEffect(()=> {
      let data = sessionStorage.getItem('myUser')
      data = JSON.parse(data)
      console.log(data)
      if(data==null){
        navigate("/")
      }else{
        navigate("/edituser")
      }
  }, [])

  return (
    <div className="ediUser-page">
      <Header />
      <Input />
    </div>
  );
};

export default EditUser;
