import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import "./LoginInput.css";
import FacebookLogin from 'react-facebook-login';
import Homepage from "../../homepage/page/Homepage.js";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Input from 'react-toolbox/lib/input';




const LoginInput = ({ setLogInUser }) => {




  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({
      ...user,

      [name]: value,
    });
  };

  useEffect(() => {
    /* global google */
     google.accounts.id.initialize({
      client_id: "422748158064-uc8jui84d2vt62ptvdennsq6hfre72li.apps.googleusercontent.com",
      callback: handleCallback
     });
  
     google.accounts.id.renderButton(
      document.getElementById("sign"),
      { theme: "outline", size: "large"}
     );
   }, []);
  

   function handleCallback(response){
    console.log(response)
    try {
      axios.post("https://cp-liouor-backend.herokuapp.com/googleLogin", {tokenId: response.credential}).then((res) => {
      alert(res.data.message);
      if(res.data.user !== undefined){
        sessionStorage.setItem('myUser', JSON.stringify(res.data.user))
        let x = sessionStorage.getItem('myUser')
        x = JSON.parse(x)
        console.log(x.email)
        setLogInUser(res.data.user);
      }
      navigate("/");
    }); 
    } catch (err) {
      console.log(err)
    }
    }

    const responseFacebook = async (response) => 
    {
    try {
      const {accessToken, userID} = response
      axios.post("https://cp-liouor-backend.herokuapp.com/facebookLogin", {accessToken, userID}).then((res) => {
      document.getElementById("xyzzz").innerHTML = res.data.message;
      if(res.data.user !== undefined){
        sessionStorage.setItem('myUser', JSON.stringify(res.data.user))
        let x = sessionStorage.getItem('myUser')
        x = JSON.parse(x)
        console.log(x.email)
        setLogInUser(res.data.user);
      }
      navigate("/");
    }); 
    } catch (err) {
      console.log(err)
    }
    }

    useEffect(()=> {
      let data = sessionStorage.getItem('myUser')
      data = JSON.parse(data)
      console.log(data)
      if(data==null){
        navigate("/login")
      }else{
        navigate("/homepage")
      }
  }, [user])

  const login = () => {
    axios.post("https://cp-liouor-backend.herokuapp.com/login", user).then((res) => {
      alert(res.data.message);
      setLogInUser(res.data.user);
      if(res.data.user.email === user.email){
        sessionStorage.setItem('myUser', JSON.stringify(res.data.user))
        let x = sessionStorage.getItem('myUser')
        x = JSON.parse(x)
        console.log(x.email)
      }
      navigate("/")
    });
  };

  const [showA, setShowA] = useState(true);
  const [showB, setShowB] = useState(true);

  const toggleShowA = () => setShowA(!showA);
  const toggleShowB = () => setShowB(!showB);

  return (
    
    <div className="login-input">
      <div id="xyzzz"></div>
      <h1>Login</h1>
      <h3>Sign in with your account</h3>
      <form>
      {/* <FloatingLabelInput
      id="example-3"
      label="label"
    /> */}

<FloatingLabel
        controlId="floatingInput"
        label="Email address"
        
      >
          <Form.Control
          type="email"
          name="email"
          placeholder="name@example.com"
          onChange={handleChange} />
      </FloatingLabel>
      
      <FloatingLabel controlId="floatingPassword" label="Password"
      >
        <Form.Control  type="password"
          name="password"
          placeholder="Enter Password"
          onChange={handleChange} />
      </FloatingLabel>

      {/* <Input type='text' label='Name' name='name' maxLength={16 } />
        
       */}

        {/* <input
          type="email"
          name="email"
          placeholder="Enter email"
          onChange={handleChange}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          onChange={handleChange}
        /> */}
        <br />
        <input type="button" onClick={login} value="LOG IN" />
        <br />
      </form>
      <h4>Or Login With</h4>
      
      <div id='sign'>
      </div>
      <br></br>
      <div className="social">
      <FacebookLogin
            appId="1133581337227819"
            autoLoad={false}
            fields="name,email,picture"
            callback={responseFacebook} />
      </div>
      <p>
        Need an account? Please <a href="/register">Register</a>
      </p>
      <p>
         <a href="/forgot_password">Forgot Your Password</a>
      </p>
    </div>
  );
};

export default LoginInput;
