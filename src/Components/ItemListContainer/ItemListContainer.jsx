import { useState, useEffect } from "react";
import { products } from "../../ProductsMock";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const productList = new Promise((resolve, reject) => {
      resolve(products);
    });

    productList
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  console.log(items);

  return(
    <div>
      <ItemList items={items}/>
    </div>
  )
  /* const [nombre, setNombre] = useState("pepito");
  const [contador, setContador] = useState(0);

  const cambiarContador = () => {
    setNombre();
  };
  const cambiarNombre = () => {
    setNombre("Natalia");
  };
  useEffect(() => {
    setNombre("carmen");
    console.log("me ejecute una vez");
  });
*/

  return (
    <div>
      <h1>Estoy en el itemList</h1>
      {/* <h1>Hola {nombre} como estas</h1>
      <button onClick={cambiarNombre}>Cambiar a Natalia</button>*/}
    </div>
  );
};

export default ItemListContainer;
