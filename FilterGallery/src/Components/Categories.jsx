
import React from 'react';

const Categories = ({ categories, filterItem }) => {
  return (
    <div className='nav'>
      {categories.map((category, index) => (
        <button type='button' className='filter-btn' key={index} onClick={() => filterItem(category)}>
          {category}
        </button>
      ))}
    </div>
  );
}

export default Categories;
