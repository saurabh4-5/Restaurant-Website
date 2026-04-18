import React, { useContext } from "react";
import { CartContext } from "./cartContext.jsx";
import menuData from "./menuData";
import "./Menu.css";

const categories = ["Starters", "Main Course", "Desserts", "Drinks"];

export default function Menu() {
  const { addToCart } = useContext(CartContext);
  return (
    <div className="menu-page">
      <h1 className="menu-title">Our Menu</h1>
      {categories.map((cat) => (
        <section key={cat} className="menu-category">
          <h2>{cat}</h2>
          <div className="menu-cards">
            {menuData
              .filter((item) => item.category === cat)
              .map((item) => (
                <div className="food-card" key={item.id}>
                  <div className="food-img-container">
                    <img src={item.image} alt={item.name} className="food-img" />
                    <div className="food-overlay">
                      <p>{item.description}</p>
                    </div>
                  </div>
                  <div className="food-info">
                    <h3>{item.name}</h3>
                    <span className="food-price">₹{item.price}</span>
                  </div>
                  <button className="add-cart-btn" onClick={() => addToCart(item)}>
                    Add to Cart
                  </button>
                </div>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}
