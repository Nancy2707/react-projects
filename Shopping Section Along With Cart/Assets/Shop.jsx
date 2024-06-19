import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import products from './Data'
import ShoppingCart from './Cart'

const Shop = () => {
  const [cartsVisibiltity,setCartVisibility]=useState(false)
  const [ProductInCart,setProducts]=useState(
    JSON.parse(localStorage.getItem('myshop-data'))||[]
  )
  useEffect(()=>{
    localStorage.setItem('my-shop-data',JSON.stringify(ProductInCart))
  },[ProductInCart])
  const AddProduct=(product)=>{
    const newProduct={
      ...product,
      count:1
    }
    setProducts([...ProductInCart,newProduct])
  }
  const onProductRemove=(productToRemove)=>{
    const updateCart=ProductInCart.filter((product)=>product.id !== productToRemove.id)
    setProducts(updateCart)
  }
  return (
    <>
    <ShoppingCart
    visibility={cartsVisibiltity}
    products={ProductInCart}
    onClose={()=>setCartVisibility(false)}
    onProductRemove={onProductRemove}/>
    <Navbar ProductInCart={ProductInCart} setCartVisibility={setCartVisibility}/>
    <main>
        <h1 className='title'>Shop Page</h1>
        <div className='products'>
            {products.map((product)=>(
                <div className="product" key={product.id}>
                    <img src={product.image} alt={product.name} />
                    <h4 className='product-name'>{product.name}</h4>
                    <span className='product-price'>${product.price}</span>
                    <div className='button'>
                      <button className='btn'
                      onClick={()=>AddProduct(product)}>
                        Add to Cart
                      </button>
                    </div>
                </div>
            ))}
        </div>
    </main>
    </>
  )
}

export default Shop