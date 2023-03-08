import "./ProductCard.css";

const ProductCard = ({ title, price = 0, isRed }) => {
  //Si no necesito parametros//
  const saludar = () => {
    console.log("hola");
  };
  //Si ncecesito establecer parametros//
  const saludar2 = (nombre) => {
    console.log("hola " + nombre);
  };
  return (
    <div>
      <h1 className={isRed ? "red" : "blue"}> {title} </h1>
      <h2> {price} </h2>
      <button onClick={saludar}>Saludar</button>
      <button
        onClick={() => {
          saludar2("juancito");
        }}
      >
        Saludar dos
      </button>
    </div>
  );
};

export default ProductCard;
