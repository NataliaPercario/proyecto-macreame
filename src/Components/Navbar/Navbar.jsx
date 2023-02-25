import CartWidget from "../CartWidget/CartWidget";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.containerNavbar}>
      <img
        src="https://www.pngkey.com/png/full/947-9471986_contenedor-iraca-con-tapa-artesanias-de-palma-png.png"
        alt="artesania"
        height="50px"
        width="80px"
      />
      <ul className={styles.containerList}>
        <li>Espejos</li>
        <li>Mandalas</li>
        <li>Sets</li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;
