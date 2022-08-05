import axios from "axios";
import React, {useState} from "react";
import './forgotPassword.css'

const initialState = {
    email: '',
    err: '',
    success: ''
}

function ForgotPassword(){
    const [data, setdata] = useState(initialState)

    const {email, err, success} = data

    const HandleChange = e => {
        const {name, value} = e.target
        setdata({...data, [name]:value, err:'', success:''})
    }

    const forgotPassword = async() => {
        try {
            axios.post("http://localhost:9005/forgotPassword", {email}).then((res) => {
            alert(res.data.message);
            //navigate("/login");
  })
        } catch (err) {
            alert(err)
        }
    }
    return(
        <div className="fg_pass">
            <h2>Forgot Password</h2>
            <div className="row">
                <label htmlFor="email">Enter Your Email Address</label>
                <input type="email" name="email" id="email" value={email} onChange={HandleChange}/>
                <button onClick={forgotPassword}>Verify Email</button>
            </div>
        </div>
    )
}

export default ForgotPassword