import React from 'react';

const menuItems = [
  {
    name: 'Burger',
    description: 'A delicious burger with all the fixings.',
    price: 79.99,
    image: '/images/burger.jpg',
  },
  {
    name: 'Pizza',
    description: 'Classic pizza with your favorite toppings.',
    price: 99.99,
    image: '/images/pizza.jpg',
  },
  {
    name: 'Fries',
    description: 'Crispy golden fries served hot and fresh.',
    price: 59.99,
    image: '/images/fries.jpg',
  },
];

const Menu = ({ addToOrder }) => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Fast Food Menu</h2>
      <div className="row">
        {menuItems.map((item) => (
          <div className="col-md-4" key={item.name}>
            <div className="card mb-4">
              {/* Display the image */}
              <img
                src={item.image}
                className="card-img-top"
                alt={item.name}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <p className="card-text">SEK {item.price.toFixed(2)}</p>
                <button className="btn btn-primary" onClick={() => addToOrder(item.name)}>
                  Add to Order
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;