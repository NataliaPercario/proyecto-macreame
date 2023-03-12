import CartWidget from "../CartWidget/CartWidget";

import styles from "./Navbar.module.css";

import { Link } from "react-router-dom";

const Navbar = ({ children }) => {
  let numero = 12;
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
          
          <Link to="/category/anillos" style={{ textDecoration: "none" }}>
            Anillos
          </Link>
          <Link to="/category/collares" style={{ textDecoration: "none" }}>
            Collares
          </Link>
          <Link to="/category/aros" style={{ textDecoration: "none" }}>
            Aros
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            Todas
          </Link>
        </ul>
        <CartWidget numero={numero} />
      </div>
      {children}
    </div>
  );
};

export default Navbar;
