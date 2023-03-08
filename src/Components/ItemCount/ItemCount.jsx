const ItemCount = () => {
  let contador = 0;

  const sumar = () => {
    contador++;
  };

  return (
    <div>
      <h1>Estoy en el itemCount</h1>
      <h2> {contador}</h2>
      <button onClick={sumar}>Sumar</button>
      <button>Restar</button>
    </div>
  );
};

export default ItemCount;
