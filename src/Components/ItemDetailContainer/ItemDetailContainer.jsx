import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

import ItemCount from "../ItemCount/ItemCount";
import { getDoc, collection, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const { agregarAlCarrito, getQuantity } = useContext(CartContext);

  const [productSelected, setProductSelected] = useState({});

  useEffect(() => {
    const productsCollection = collection(db, "products");
    const ref = doc(productsCollection, id);
    getDoc(ref).then((res) =>
      setProductSelected({
        ...res.data(),
        id: res.id,
      })
    );
  }, [id]);

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
      <ItemCount
        stock={productSelected.stock}
        onAdd={onAdd}
        initial={quantity}
      />
    </div>
  );
};

export default ItemDetailContainer;
