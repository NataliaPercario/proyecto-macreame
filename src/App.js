import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";

import ItemCount from "./Components/ItemCount/ItemCount";
import ConsumiendoApis from "./Components/ConsumiendoApis/ConsumiendoApis";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import Login from "./Components/Login/Login";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="category/:categoryName" element={<ItemListContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<h1>Error 404: Not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
