import React, { useState } from 'react';
const Menu = ({items}) => {
  return (
    <>
    
    <div className="section-center">
     
        {items.map((menuItem) => {
    const { id, title, img, desc, price } = menuItem;
    return (
        <div className='menu-item' key={id}>
          <div className="image-container">

            <img src={img} alt={title} className='photo' />
          </div>
            <div className='item-info'>
                <header>
                    <h4>{title}</h4>
                    <h4 className='price'>${price}</h4>
                </header>
                <p className='item-text'>{desc}</p>
            </div>
        </div>
    );
})}

    </div>
    </>
  )
}

export default Menu

