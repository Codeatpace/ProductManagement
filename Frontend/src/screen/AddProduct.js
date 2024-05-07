import React, { useState } from 'react'
import Navbar from '../component/Navbar'
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {
  let [credentials, setCredentials] = useState({prodID:"",prodName:"",prodColor:""})
  let onChangee = (e) => {
    setCredentials({...credentials, [e.target.name]: e.target.value})
  }
  const nav = useNavigate();
  const handleAdd = async() => {
    const response = await fetch('http://localhost:5000/api/addProd',{
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({prodID: credentials.prodID, prodName: credentials.prodName, prodColor: credentials.prodColor})
    })
    const json = await response.json();
    console.log(json)
    if(!json.success){
      alert("Try Again")
    }
    if(json.success){
      alert("Product Added Successfully")
      nav('/')
    }
  }
  
  return (
    <>
        <Navbar/>
        <div className='product'>
            <p className='pInpt'>Enter Product ID: <input onChange={onChangee} name='prodID' value={credentials.prodID} type='number' /> </p>
            <p className='pInpt'>Enter Product Name: <input onChange={onChangee} name='prodName' value={credentials.prodName} type='text' /> </p>
            <p className='pInpt'>Enter Product Color: <input onChange={onChangee} name='prodColor' value={credentials.prodColor} type='text' /> </p>
            <button onClick={handleAdd} style={{marginLeft:"5rem"}} className='btn btn-success' type='button'>Add</button>
        </div>
    </>
  )
}

export default AddProduct