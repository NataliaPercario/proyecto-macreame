import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebaseConfig";
import ItemList from "./ItemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import RingLoader from "react-spinners/RingLoader";

const ItemListContainer = () => {
  const { categoryName } = useParams();

  const [items, setItems] = useState([]);

  useEffect(() => {
    const productsCollection = collection(db, "products");

    if (categoryName) {
      const q = query(
        productsCollection,
        where("category", "==", categoryName)
      );
      getDocs(q).then((res) => {
        let products = res.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id,
          };
        });
        setItems(products);
      });
    } else {
      getDocs(productsCollection).then((res) => {
        let products = res.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id,
          };
        });
        setItems(products);
      });
    }
  }, [categoryName]);

  return (
    <div>
      {items.length > 0 ? (
        <ItemList items={items} />
      ) : (
        <RingLoader
          color={"blue"}
          //loading={items.length === 0}
          //cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
    </div>
  );
};
export default ItemListContainer;
