import React from "react";
import "../Style/Card.css";

const Card = ({ item, handleClick }) => {
  const { title, price, author } = item;
  return (
    <section>
      <div>
        {" "}
        <img src={item.img} alt="" />
        <p>Price: {price}</p>
        <p>{author}</p>
        <p>{title}</p>
        <button onClick={() => handleClick(item)}>Add To Cart</button>
      </div>
    </section>
  );
};

export default Card;
