import React from 'react'

const ShoppingCart = ({visibility,onClose,products,onProductRemove}) => {
  return (
    <>
    <div className='modal' style={{display:visibility?"block":"none"}}>
    <div className='shopingCart'>
        <div className="header">
        <h2 className='headingcart'>Shopping Cart</h2>
        <button className='btn btn-close-btn'
        onClick={onClose}>X</button>
        </div>
        <div className='cart-products'>{
products.length===0?(
    <span>Your Bucket Is Empty</span>
):(
    products.map((product)=>(
        <div className='cart-products'>
            <img src={product.image} alt="" />
            <br />
            <h3>{product.name}</h3>
            <br />
            <span>{product.price*product.count}</span>
        <br />
            <button className='remove-btn' onClick={()=>onProductRemove(product)}>Remove Item</button> 
        </div>
    ))
)
}</div>
    </div>
    </div>
    </>
  )
}

export default ShoppingCart