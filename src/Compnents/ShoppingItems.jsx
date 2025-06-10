import React from "react";
import list from "../list";
import Card from "./Card";

const shop = () => {
  return (
    <div>
      <section>
        {list.map((item) => {
          <Card item={item} key={item.id}></Card>;
        })}
      </section>
    </div>
  );
};

export default shop;
