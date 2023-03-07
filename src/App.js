import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";
import ProductCard from "./Components/ProductCard/ProductCard";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={"Bienvenidos a Macreame"} />
      <ProductCard title={"Producto uno"} price={200} isRed={false} />
    </div>
  );
}

export default App;
