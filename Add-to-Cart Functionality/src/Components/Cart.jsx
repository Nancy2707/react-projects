import React, { useEffect, useState } from 'react'

const Cart = ({cartData}) => {
    const delItem=(key)=>{
        // const updateCartData=[...cart]
        // updateCartData.splice(key,1)
        // localStorage.setItem('cart',JSON.stringify(updateCartData))
        // setCart(updateCartData)
        const updatedCart = cart.filter((_, index) => index !== key);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        console.log('Item removed at index:', key);
        console.log('Updated cart:', updatedCart);
    }
    const calculatedTotal=()=>{
        return cart.reduce((total,item)=>total+item.price,0)
    }
     const [cart,setCart]=useState(cartData)
     useEffect(()=>{
        setCart(cartData)
     },[cartData])
     const clearCart = () => {
        setCart([]);
        localStorage.removeItem('cart');
        console.log('Cart cleared');
    };
  return (
    <>
    <div className="cart_section">
    <h1>My Cart</h1>
    <div>
        {
            cart.map((item,index)=>(
                <div key={index} className='cart_item'>
                    <span className='item_title'>{item.title}</span>
                    <span className='item_price' >${item.price}</span>
                <span>
                    <button className="RemBtn" onClick={()=>{delItem(index)}}>Remove</button>
                </span>
                </div>
            ))
        }
    </div>
    <p className='total_price'>Total Price : ${calculatedTotal()}</p>
    <span>
                    <button className="RemBtn" onClick={()=>{clearCart()}}>Clear Cart</button>
                </span>
    </div>
    </>
  )
}

export default Cart
