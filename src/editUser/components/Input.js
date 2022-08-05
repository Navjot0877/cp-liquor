import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Input.css';

const Input = () =>{

    const [currentUser, setCurrentUser] = useState({
        _id: "",
        name: "",
        email: "",
        number: "",
        age: 18,
        __v: 0
    })
    const [newFullName, setFullName] = useState("")
    const [newEmail, setEmail] = useState("")
    const [newPhoneNumber, setPhoneNumber] = useState("")
    const [newAge, setAge] = useState(18)

    useEffect(() =>{
        axios.get('http://localhost:9005/currentUser')
        .then(res => {
            //console.log(res)
            setCurrentUser(res.data)
        })
        .catch(err => {
            //console.log(err)
        })
    },[])


    const editData = async (e) =>{
        e.preventDefault()
        const editUser = {
            "name": newFullName,
            "email": newEmail,
            "phone": newPhoneNumber,
            "age": newAge,
        }
        console.log(currentUser._id)
        const url = 'http://localhost:9005/edituser/' + currentUser._id
        axios.put(url, editUser).catch((err) => {
            console.log(err)
        })
        alert("Information Changed Successfully!! Enjoy Liquor!!!")
    }

    const deleteData = async (e) =>{
        e.preventDefault()
        const editUser = {
            "name": newFullName,
            "email": newEmail,
            "phone": newPhoneNumber,
            "age": newAge,
        }

        const url = 'http://localhost:9005/edituser/' + currentUser._id
        axios.delete(url).catch((err) => {
            console.log(err)
        })

        alert("account deleted")
    }


    const getFullName = (val) => {
        console.log(val.target.value)
        setFullName(val.target.value);
    }
    const getEmail = (val) => {
        console.log(val.target.value)
        if(val.target.value == null || val.target.value == ""){
            setEmail(currentUser.email) 
        }
        else{
            setEmail(val.target.value)
        }
    }
    const getPhoneNumber = (val) => {
        console.log(val.target.value)
        setPhoneNumber(val.target.value)
    }
    const getAge = (val) => {
        console.log(val.target.value)
        setAge(val.target.value)
    }


    //console.log(currentUser)

    return(
        <>
        <div className='edituser-input'>
        <h1>Edit profile</h1>
        {/* <img src='third.png'></img> */}
        <h3>Please edit your details below</h3>
        <form>
            <input type="text" placeholder={currentUser.name} onChange={getFullName}/><br/>
            <input type="text" placeholder={currentUser.email} onChange={getEmail}/><br/>
            <input type="text" placeholder={currentUser.phone} onChange={getPhoneNumber}/><br/>
            {/* <input type="text" placeholder="Password"/><br/> */}
            <input type="number" placeholder={currentUser.age} onChange={getAge}/><br/>
            <button className='editbutton' onClick={editData }>Edit</button>
            <button className='deletebutton' onClick={deleteData}>Delete Account?</button>
        </form>
        </div>;
        </>
    )
}

//placeholder={currentUser.data.fullName}

export default Input;