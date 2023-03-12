import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./CartWidget.css";
import { Link } from "react-router-dom";

const CartWidget = ({ numero }) => {
  return (
    <Link to="/Cart">
      <div className="container-cart">
        <ShoppingCartIcon
          style={{
            fontSize: "2rem",
            color: "green",
          }}
        />
        <div className="bubble-counter">
          <span>0</span>
        </div>
      </div>
    </Link>
  );
};

export default CartWidget;
