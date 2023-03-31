import React from "react";
import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <div
      style={{
        backgroundColor: "#929BF0",
        display: "flex",
        width: "100%",
        minHeigt: "100vw",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexWrap: "wrap",
        padding: 30,
      }}
    >
      {items.map((element) => {
        return <Item key={element.id} element={element} />;
      })}
    </div>
  );
};

export default ItemList;
