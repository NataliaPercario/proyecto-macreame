import React from "react";
import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <div
      className="items"
      style={{
        backgroundColor: "#929bf0",
        display: "flex",
        width: "100%",
        height: "80vh",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexWrap: "wrap",
        padding: 30,
        paddingBottom: "30%",
        gap: "30px",
      }}
    >
      {items.map((element) => {
        return <Item key={element.id} element={element} />;
      })}
    </div>
  );
};

export default ItemList;
