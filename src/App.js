import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";
import ProductCard from "./Components/ProductCard/ProductCard";
import ItemCount from "./Components/ItemCount/ItemCount";

function App() {
  const onAdd = ( cantidad) => {
    console.log(`se agrego al carrito ${cantidad} elementos`)
  };
  return (
    <div>
      <Navbar />
      <ItemListContainer />
      {/*<ProductCard title={"Producto uno"} price={200} isRed={false} /> */}
      {/*<ItemCount stock={5} initial={1} onAdd={onAdd} />*/}
    </div>
  );
}

export default App;
