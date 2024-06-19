import React from 'react'
import products from './Data'

const Navbar = ({ProductInCart,setCartVisibility}) => {
  return (
    <div className='navbar'>
        <h3 className="logo">Logo</h3>
        <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/">Shop</a></li>
        </ul>
        <button className="cart-btn" onClick={()=>setCartVisibility(true)}>{
          ProductInCart.length>0 && (
            <span>{ProductInCart.length}</span>
          )}</button>
    </div>
  )
}

export default Navbar