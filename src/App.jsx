import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Menu from './components/Menu';
import Order from './components/Order';
import ThemeToggle from './components/ThemeToggle';

const App = () => {
  const [order, setOrder] = useState({});
  const [darkMode, setDarkMode] = useState(false);

  const addToOrder = (item) => {
    setOrder((prevOrder) => ({
      ...prevOrder,
      [item]: (prevOrder[item] || 0) + 1,
    }));
  };

  const updateQuantity = (item, quantity) => {
    setOrder((prevOrder) => ({
      ...prevOrder,
      [item]: quantity > 0 ? quantity : 0,
    }));
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'app dark-mode' : 'app'}>
      <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
      <Menu addToOrder={addToOrder} />
      <Order order={order} updateQuantity={updateQuantity} />
    </div>
  );
};

export default App;