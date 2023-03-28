import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { products } from "../../ProductsMock";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const { agregarAlCarrito, getQuantity } = useContext(CartContext);

  const productSelected = products.find((element) => element.id === Number(id));

  const onAdd = (cantidad) => {
    let producto = {
      ...productSelected,
      quantity: cantidad,
    };
    agregarAlCarrito(producto);
  };

  let quantity = getQuantity(Number(id));

  return (
    <div>
      <h1>{productSelected.title}</h1>
      <img src={productSelected.img}></img>
      <ItemCount stock={productSelected.stock} onAdd={onAdd} initial={quantity}/>
    </div>
  );
};

export default ItemDetailContainer;
