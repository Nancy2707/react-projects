
import React, { useState } from 'react';
import './App.css';
import Menu from './Components/Menu';
import Categories from './Components/Categories';
import items from './Components/Data';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItem, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItem = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <div className="menu-section">
      <div className="title">
        <h2>Our Filtered Menu</h2>
        <div className="underline"></div>
      </div>
      <Categories categories={categories} filterItem={filterItem} />
      <Menu items={menuItem} />
    </div>
  );
}

export default App;
