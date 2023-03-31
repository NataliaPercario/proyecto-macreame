import { Button } from "@mui/material";
import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import Swal from "sweetalert2";

const Cart = () => {
  const { cart, clearCart, getTotalPrice, deleteProduct } =
    useContext(CartContext);

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

  return (
    <div
      style={{ width: "100%", display: "flex", justifyContent: "space-evenly" }}
    >
      {cart.map((elemento) => {
        return (
          <div style={{ border: "2px solid black" }} key={elemento.id}>
            <h2>{elemento.title}</h2>
            <img src={elemento.img} alt="" style={{ width: "200px" }} />
            <h3>Cantidad:{elemento.quantity}</h3>
            <h3>{elemento.price}</h3>
            <Button onClick={() => deleteProduct(elemento.id)}>Eliminar</Button>
          </div>
        );
      })}
      {cart.length > 0 && (
        <div className="cart-info">
          <h1>El total del carrito es {totalPrice}</h1>
          <Button>Finalizar compra</Button>
          <Button onClick={clear}>Limpiar carrito</Button>
        </div>
      )}
    </div>
  );
};

export default Cart;
