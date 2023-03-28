import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //AGREGAR
  const agregarAlCarrito = (producto) => {
    let exist = isInCart(producto.id);

    if (exist) {
      let newCart = cart.map((elemento) => {
        if (elemento.id === producto.id) {
          return {
            ...elemento,
            quantity: producto.quantity,
          };
        } else {
          {
            return elemento;
          }
        }
      });

      setCart(newCart);
    } else {
      setCart([...cart, producto]);
    }
  };

  // PARA SABER SI UN PRODUCTO YA ESTA EN EL CARRITO
  const isInCart = (id) => {
    return cart.some((elemento) => elemento.id === id);
  };

  //FUNCION PARA LIMPIAR EL CARRITO
  const clearCart = () => {
    setCart([]);
  };

  //OBTENER EL TOTAL DE CANTIDADES DE LOS ELEMENTOS DEL CARRITO
  const getTotalQuantity = () => {
    return cart.reduce((acc, elemento) => {
      return acc + elemento.quantity;
    }, 0);
  };

  //OBTENER PRECIO TOTAL DEL CARRITO
  const getTotalPrice = () => {
    let totalPrice = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity * elemento.price;
    }, 0);

    return totalPrice;
  };

  //ELIMINAR PRODUCTO DEL CARRITO
  const deleteProduct = (id) => {
    const newCart = cart.filter((element) => element.id !== id);
    setCart(newCart);
  };

  const getQuantity = (id) => {
    const productSelected = cart.find((element) => element.id === id);
    return productSelected?.quantity;
  };

  let data = {
    cart,
    agregarAlCarrito,
    clearCart,
    getTotalQuantity,
    getTotalPrice,
    deleteProduct,
    getQuantity,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
