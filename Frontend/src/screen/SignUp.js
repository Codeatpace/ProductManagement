import React from 'react'
import Navbar from '../component/Navbar' 
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const SignUp =() => {
    const [credentials, setcredentials] = useState({name:"", email:"", password:""});
    const nav = useNavigate();
    const signup =  async () => {
        console.log("SignUp called")
        const response = await fetch("http://localhost:5000/api/createuser", {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({name: credentials.name, email: credentials.email, password: credentials.password})
        })
        const json = await response.json();
        console.log(json)

        if(!json.success){
            alert("Try Again")
        }
        if(json.success){
            alert("Registered Successfully")
            nav('/login')
        }
    }
    const onChangee = (e) => {
        setcredentials({...credentials, [e.target.name]:e.target.value})
    }
  return (
    <>
        <Navbar/>
        <div className='SignUp product'>
            <p>Enter Full Name: <input name='name' onChange={onChangee} value={credentials.name} type='text' required/></p>
            <p>Enter Email: <input name='email' onChange={onChangee} value={credentials.email} type='email' required/></p>
            <p>Enter Password: <input name='password' onChange={onChangee} value={credentials.password} type='password' required/></p>
            <button onClick={signup} style={{marginLeft:"5rem"}} className='btn btn-primary' type='button'>Register</button>
        </div>
    </>
  )
}

export default SignUp