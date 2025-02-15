import React, { useState } from "react";
import './menu.css';
import { useCart } from "../CartContext/CartContext";

export default function Menu() {
  const { addToCart } = useCart();

 const [menuItems, setMenuItems] = useState([
        {
          name: 'SMOKY SUMMIT BURGER',
          description:
            'Meat lovers go too! 2*150 grams with sweet chilli sauce, caramelised onions and MOT sauce making this a well-known meal for any Firefly fan.',
          price: '5.55JD',
          image:
            'https://fireflyburgers.com/wp-content/uploads/2024/03/kamakazi.png',
        },
        {
          name: 'ANGUS BURGER',
          description:
            'A bit smoky! 200 grams of angus burger, bacon, smoked cheese, and MOT sauce',
          price: '5.40JD',
          image:
            'https://fireflyburgers.com/wp-content/uploads/2023/09/%D8%B3%D8%A8%D8%A4.png',
        },
        {
          name: 'MOT BURGER',
          description:
            'Our signature! 150 grams of the finest meat with beef bacon, caramelised onions, pickles, and our secret MOT sauce, making it a meal to remember, try it, and don’t keep it a secret.',
          price: '4.25JD',
          image:
            'https://fireflyburgers.com/wp-content/uploads/2023/10/MYSTIC.png',
        },
        {
          name: 'FITFUEL BURGER',
          description:
            'On a diet? We got you, 150 grams of fresh meat with keto buns, you can MOT on a diet!.',
          price: '4.85JD',
          image:
            'https://fireflyburgers.com/wp-content/uploads/2023/10/keto-beef.png',
        },
        {
          name: 'BACKFIRE',
          description:
            "A spicy head? This one's for you! Injected with hot sauce 2*150 grams of fresh meat mixed with chilli, chilli sauce lava, and finishing off with jalapeños.",
          price: '5.90JD',
          image:
            'https://fireflyburgers.com/wp-content/uploads/2023/09/EWG.png',
        },
        {
          name: 'WALLTWON',
          description:
            'Your stocks are up with 150 grams of fresh meat, wall street sauce, fresh mushrooms and a mix of cheese!',
          price: '4.95JD',
          image:
            'https://fireflyburgers.com/wp-content/uploads/2023/10/wall-street.png',
        },
      ]);
      const [sideItems, setSideItems] = useState([
        {
          name: 'CEASAR SALAD',
          description: '',
          price: '2.25JD',
          image: 'https://fireflyburgers.com/wp-content/uploads/2024/03/19.png',
        },
        {
          name: 'Chicken caesar salad',
          description: '',
          price: '3.25JD',
          image: 'https://fireflyburgers.com/wp-content/uploads/2024/03/11.png',
        },
        {
          name: 'Mozzarella sticks',
          description: '',
          price: '1.20JD',
          image: 'https://fireflyburgers.com/wp-content/uploads/2024/03/16.png',
        },
        {
          name: 'Chicken wings',
          description: '',
          price: '5.45JD',
          image: 'https://fireflyburgers.com/wp-content/uploads/2024/03/17.png',
        },
        {
          name: 'chicken cubes',
          description: '',
          price: '6.00JD',
          image: 'https://fireflyburgers.com/wp-content/uploads/2024/03/18.png',
        },
        {
          name: 'HOTDOG SanDWICH',
          description: '',
          price: '2.45JD',
          image: 'https://fireflyburgers.com/wp-content/uploads/2024/03/20.png',
        },
        {
          name: 'coleslaw',
          description: '',
          price: '1.65JD',
          image: 'https://fireflyburgers.com/wp-content/uploads/2024/03/21.png',
        },
        {
          name: 'Wedges fries',
          description: '',
          price: '3.10JD',
          image: 'https://fireflyburgers.com/wp-content/uploads/2024/03/15.png',
        },
      ]);

  const handleAddToCart = (item) => {
    addToCart(item); // Call the addToCart function from CartContext
  };

  return (
    <>
      <div className="menu-section">
        <h1>MENU</h1>
        {menuItems.map((item) => (
          <div className="menu-item" key={item.name}> {/* Use a more robust key if possible (like an ID) */}
            <div className="item-det">
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <span className="price">{item.price}</span>
              <button 
                className="add-to-cart" 
                onClick={() => handleAddToCart(item)} // Pass the item to the handler
              >
                Add to Cart
              </button>
            </div>
            <img src={item.image} alt={item.name} />
          </div>
        ))}

        <h1>Sides</h1>
        <div className="container">
          {sideItems.map((item) => (
            <div className="menu-it" key={item.name}> {/* Use a more robust key if possible */}
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <span className="price">{item.price}</span>
              <button 
                className="add-to-cart" 
                onClick={() => handleAddToCart(item)} // Pass the item to the handler
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        <div className="order-buttons">
          <button className="btn">Order Now</button>
          <button className="btn">Download Menu</button>
        </div>
      </div>
    </>
  );
}