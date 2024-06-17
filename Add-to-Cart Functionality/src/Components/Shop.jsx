import React, { useEffect, useState } from 'react';
import Data from './Data';
import Cart from './Cart';
import './style.css'
const Shop = () => {
    const [myProducts,setMyProducts]=useState([])
    useEffect(()=>{
        const existingProducts=JSON.parse(localStorage.getItem('cart'))||[]
        setMyProducts(existingProducts)
    },[])
    const addProduct = (product) => {
        const newProducts={
            ...product,
            count:1,
        }
        setMyProducts((preProducts)=>[...preProducts,newProducts])
        localStorage.setItem('cart',JSON.stringify([...myProducts,newProducts]))
    };

    return (
        <>
            <section className='shop'>
                <div className="container">
                    <h1 id='main_head'>Book Shop</h1>
                    <div className="shop">
                        {
                            Data.map((item, key) => (
                                <div className='item' key={key}>
                                    <h2 id='book_name'>{item.title}</h2>
                                    <p>{item.desc}</p>
                                    <span id='price'>Price: ${item.price}</span>
                                    <button onClick={() => addProduct(item)} id='addcart'>Add To Cart</button>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            {myProducts.length > 0 && <Cart cartData={myProducts}/>}
        </>
    );
};

export default Shop;
