import React from 'react'
import Navbar from '../component/Navbar'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [credentials, setCredentials] = useState({email:"", password:""})
    const nav = useNavigate();
    const handleSubmit = async () => {
        console.log("first")
        const response = await fetch("http://localhost:5000/api/loginuser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        })
        const json = await response.json();
        console.log("json",json)
        if(!json.success){
            alert("Retry");
        }
        if(json.success){
            localStorage.setItem("userEmail", credentials.email)
            localStorage.setItem("authToken", json.authToken)
            alert("Sigin Successful")
            nav('/')
        }
    }
    const onChangee = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }
  return (
    <>
        <Navbar/>
        <div className='Login product'>
            <p>Enter Email: <input name='email' onChange={onChangee} value={credentials.email} type='email' required/></p>
            <p>Enter Password: <input name='password' value={credentials.password} onChange={onChangee} type='password' required /></p>
            <button onClick={handleSubmit} style={{marginLeft:"5rem"}} className='btn btn-primary' type='button'>Login</button>
        </div>
    </>
  )
}

export default Login