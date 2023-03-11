import React from "react";
import Item from "../Item/Item";

const ItemList = ({ items }) => {
  return (
    <div
      style={{
        backgroundColor: "black",
        display: "flex",
        width: "100%",
        minHeigt: "100vw",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {items.map((element) => {
        return <Item key={element.id} element={element} />;
      })}
    </div>
  );
};

export default ItemList;
