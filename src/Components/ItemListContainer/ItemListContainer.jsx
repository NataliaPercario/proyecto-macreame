import { useState } from "react";

const ItemListContainer = () => {
  const [nombre , setNombre]= useState("pepito")
  const cambiarNombre = () =>{
    setNombre("Natalia")

  }
  return (
    <div>
      <h1>Hola {nombre} como estas</h1>
      <button onClick={cambiarNombre}>Cambiar a Natalia</button>
    </div>
  );
};

export default ItemListContainer;
