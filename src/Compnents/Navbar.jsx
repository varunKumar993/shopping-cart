import React from "react";
import "../Style/Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div>
        {" "}
        <span>Navbar</span>
      </div>
      <div>
        {" "}
        <span>Cart</span>
        <span>0</span>
      </div>
    </div>
  );
};

export default Navbar;
