import CartWidget from "./CartWidget";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const Navbar = ({ children }) => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    const productsCollection = collection(db, "categories");
    getDocs(productsCollection).then((res) => {
      let totalCategories = res.docs.map((category) => {
        return {
          ...category.data(),
          id: category.id,
        };
      });
      setCategoryList(totalCategories);
    });
  }, []);

  return (
    <div>
      <div className={styles.containerNavbar}>
        <Link to="/">
          <img
            src="https://www.pngkey.com/png/full/947-9471986_contenedor-iraca-con-tapa-artesanias-de-palma-png.png"
            alt="artesania"
            height="50px"
            width="80px"
          />
        </Link>
        <ul className={styles.containerList}>
          {categoryList.map((category) => {
            return (
              <Link
                key={category.id}
                to={category.path}
                className={{ textDecoration: "none" }}
              >
                {category.title}
              </Link>
            );
          })}
        </ul>
        <CartWidget />
      </div>
      {children}
    </div>
  );
};

export default Navbar;
