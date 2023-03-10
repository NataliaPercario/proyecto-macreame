import { useState, useEffect } from "react";

const ItemListContainer = () => {
  const [nombre, setNombre] = useState("pepito");
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



  
  return (
    <div>
      <h1>Hola {nombre} como estas</h1>
      <button onClick={cambiarNombre}>Cambiar a Natalia</button>
    </div>
  );
};

export default ItemListContainer;
