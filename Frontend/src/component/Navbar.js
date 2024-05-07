import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../App.css'

const Navbar = () => {
    const nav = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('authToken')
        nav('/')
    }
    return (
        <>
            <div className='navv'>
                <Link to={'/'}>Home</Link>
                {!localStorage.getItem('authToken') ? (
                    <>
                        <Link to={'/signup'}>SignUp</Link>
                        <Link to={'/login'}>Login</Link>
                    </>
                ) : (
                    <>
                        <Link to={'/addproduct'}>Add Product</Link>
                        <Link onClick={handleLogout} to={'/'}>Logout</Link>
                    </>
                )}




            </div>
        </>
    )
}

export default Navbar