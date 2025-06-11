import React, { useState } from "react";
import Navbar from "./Compnents/Navbar";
import Shop from "./Compnents/ShoppingItems";

function App() {
  const [cart, setCart] = useState([]);
  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) isPresent = true;
    });
    if (isPresent) {
      console.log("item is already added");
    }
    setCart([...cart, item]);
  };
  return (
    <div>
      <Navbar size={cart.length} />
      <Shop handleClick={handleClick}></Shop>
    </div>
  );
}

export default App;
