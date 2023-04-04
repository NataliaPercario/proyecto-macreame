import { Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import Swal from "sweetalert2";
import FormCheckout from "../Form/FormCheckout";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { cart, clearCart, getTotalPrice, deleteProduct } =
    useContext(CartContext);

  const [showForm, setShowForm] = useState(false);

  const [orderId, setOrderId] = useState(null);

  const clear = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "¿Estás segure?",
        text: "Esto vacía tu carrito de compra",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, vacialo",
        cancelButtonText: "No, quiero seguir comprando",
        reverseButtons: false,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            "Carrito vacío",
            "Podés comenzar tu compra de nuevo 😉",
            "success"
          );
          clearCart();
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire("Tranqui", "Continuá con tu compra 🤑");
        }
      });
  };

  const totalPrice = getTotalPrice();

  if (orderId) {
    return (
      <div>
        <h2>Gracias por tu compra</h2>
        <h4>Tu id de compra es: {orderId}</h4>
        {<Link to="/">Regresar al home</Link>}
      </div>
    );
  }

  return (
    <div>
      {!showForm ? (
        <div className="container-cart">
          <div className="container-items">
            {cart.map((elemento) => {
              return (
                <div className="cart-item" key={elemento.id}>
                  <img src={elemento.img} alt="" />
                  <div className="cart-item-info">
                    <h2>{elemento.title}</h2>
                    <h3>Cantidad: {elemento.quantity}</h3>
                    <h3>${elemento.price}</h3>
                    <Button onClick={() => deleteProduct(elemento.id)}>
                      Eliminar
                    </Button>
                  </div>
                </div>
              );
            })}
            {cart.length > 0 && (
              <div className="cart-info">
                <h1>El total del carrito es ${totalPrice}</h1>
                <Button variant="contained" onClick={() => setShowForm(true)}>
                  Finalizar compra
                </Button>
                <Button variant="contained" onClick={clear}>
                  Limpiar carrito
                </Button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <FormCheckout
          cart={cart}
          getTotalPrice={getTotalPrice}
          setOrderId={setOrderId}
          clearCart={clearCart}
        />
      )}
    </div>
  );
};

export default Cart;
