import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";
import ProductCard from "./Components/ProductCard/ProductCard";
import ItemCount from "./Components/ItemCount/ItemCount";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer />
      <ProductCard title={"Producto uno"} price={200} isRed={false} />
      <ItemCount />
    </div>
  );
}

export default App;
