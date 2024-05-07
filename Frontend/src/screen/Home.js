import React, { useEffect } from 'react'
import Navbar from '../component/Navbar'
import '../App.css'
import { useState } from 'react'

const Home = () => {
  let [products, setProducts] = useState([])
  const fetchProdLists = async () => {
    try {
      let response = await fetch("http://localhost:5000/api/readProdLists", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
      if (!response.ok) {
        throw new Error("Request failed with status " + response.status);
      }
      const json = await response.json();
      setProducts(json)
      console.log(json)
    }
    catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    fetchProdLists();
  }, [])
  return (
    <>
      <Navbar />




      <table className="table tablee">
        <thead>
          <tr>
            <th scope="col">Product ID</th>
            <th scope="col">Product Name</th>
            <th scope="col">Product Color</th>
          </tr>
        </thead>

        
          {products.map((data, index) => (
            <tbody key={index}>
              {data.map((item) => (
                <tr>
                  <td>{item.prodID}</td>
                  <td>{item.prodName}</td>
                  <td>{item.prodColor}</td>
                </tr>

              ))}
            </tbody>
          ))}
        
      </table>
    </>
  )
}

export default Home