import React from "react";
import "../Style/Navbar.css";

const Navbar = ({ size }) => {
  return (
    <div className="Navbar">
      <div>
        <span>
          <h1>Book Store</h1>
        </span>
      </div>
      <div>
        <span>
          <h3>Cart</h3>
        </span>
        <span>{size}</span>
      </div>
    </div>
  );
};

export default Navbar;
