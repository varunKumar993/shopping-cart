import React from "react";
import list from "../list";
import Card from "./Card";

const shop = ({ handleClick }) => {
  return (
    <div>
      <section>
        {list.map((item) => {
          return (
            <Card item={item} key={item.id} handleClick={handleClick}></Card>
          );
        })}
      </section>
    </div>
  );
};

export default shop;
