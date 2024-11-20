import React from 'react';

const menuItems = [
  { name: 'Burger', price: 79.99 },
  { name: 'Pizza', price: 99.99 },
  { name: 'Fries', price: 59.99 },
];

const Order = ({ order, updateQuantity }) => {
  const calculateTotal = () => {
    return Object.entries(order).reduce((total, [item, quantity]) => {
      const price = menuItems.find((menuItem) => menuItem.name === item).price;
      return total + price * quantity;
    }, 0).toFixed(2);
  };

  return (
    <div className="container my-5">
      <h2>Your Order</h2>
      <ul className="list-group mb-3">
        {Object.entries(order).map(([item, quantity]) => (
          <li className="list-group-item d-flex justify-content-between align-items-center" key={item}>
            {item} x{quantity}
            <div>
              <button className="btn btn-danger mx-1" onClick={() => updateQuantity(item, quantity - 1)}>-</button>
              <button className="btn btn-success mx-1" onClick={() => updateQuantity(item, quantity + 1)}>+</button>
            </div>
          </li>
        ))}
      </ul>
      <h4>Total: SEK {calculateTotal()}</h4>
    </div>
  );
};

export default Order;