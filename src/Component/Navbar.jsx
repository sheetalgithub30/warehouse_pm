import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
       <Link to="/">
       <img className='logo' src='https://img.freepik.com/premium-vector/warehouse-factory-home-line-logo-vector-symbol-icon-illustration-modern-design_629573-148.jpg'></img>
       </Link> 
        <h1>Warehouse</h1>
        <div></div>
    </div>
  )
}

export default Navbar