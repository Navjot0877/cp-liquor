import React, {useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom"
import { useNavigate } from "react-router-dom";


const initialState = {
    password: '',
    cf_password: '',
    err: '',
    success: ''
}

function ResetPassword(){
    const navigate = useNavigate()
    const [data, setdata] = useState(initialState)

    const {token} = useParams()

    const {password, cf_password, err, success} = data

    const HandleChange = e => {
        const {name, value} = e.target
        setdata({...data, [name]:value, err:'', success:''})
    }

    const resetPassword = async() =>{
        if(password === cf_password){
        try {
            axios.post("http://localhost:9005/reset", {password}, {
                headers: {Authorization: token}
            }).then((res) => {
            alert(res.data.message);
             navigate("/login");
  })
        } catch (err) {
            alert(err)
        }
    }else{
        alert("Both password are different")
    }
    }

    console.log(token)
    return(
        <div className="fg_pass">
            <h2>Reset Password</h2>
            <div className="row">
                <label htmlFor="password">Enter Your Password</label>
                <input type="password" name="password" id="password" value={password} onChange={HandleChange}/>

                <label htmlFor="cf_password">Confirm Password</label>
                <input type="password" name="cf_password" id="cf_password" value={cf_password} onChange={HandleChange}/>
                <button onClick={resetPassword}>Reset Password</button>
            </div>
        </div>
    )
}

export default ResetPassword
