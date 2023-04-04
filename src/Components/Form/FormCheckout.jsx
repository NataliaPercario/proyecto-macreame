import React from "react";
import { useState } from "react";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import "./FormCheckout.css"

const FormCheckout = ({ cart, getTotalPrice, setOrderId, clearCart }) => {
  const [userData, setUserData] = useState({
    name: "",
    surname: "",
    password: "",
    email: "",
    tel: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    let total = getTotalPrice();
    let order = {
      buyer: userData,
      items: cart,
      total,
    };

    let orderCollection = collection(db, "orders");
    addDoc(orderCollection, order)
      .then((res) => {
        setOrderId(res.id);
        clearCart();
      })
      .catch((err) => console.log(err));

    cart.map((product) => {
      let refDoc = doc(db, "products", product.id);
      updateDoc(refDoc, { stock: product.stock - product.quantity });
      return product;
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Apellido"
          value={userData.surname}
          onChange={(e) =>
            setUserData({ ...userData, surname: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Contraseña"
          value={userData.password}
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="E-mail"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="Teléfono"
          value={userData.tel}
          onChange={(e) => setUserData({ ...userData, tel: e.target.value })}
        />
        <button type="submit">Comprar</button>
      </form>
    </div>
  );
};

export default FormCheckout;
// const Form = () => {

//   const [error, setError] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleChange = (e) => {
//     setUserData({ ...userData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     //VALIDACIONES
//     //NOMBRE COMO MINIMO 3 CARACTERES
//     if (userData.name.length < 3) {
//       setError(true);
//       setErrorMessage("El nombre deberá tener al menos 3 caracteres");
//       return;
//     }

//     //EMAIL QUE CONTENGA @
//     const incluye = userData.email.includes("@");
//     if (!incluye) {
//       setError(true);
//       setErrorMessage("email no valido");
//       return;
//     }

//     // PASSWORD QUE NO TENGA ESPACIOS
//     const str = userData.password.trim();
//     const passwordValid = userData.password === str;

//     if (!passwordValid || userData.password.length < 5) {
//       setError(true);
//       setErrorMessage(
//         "la contraseña no debe tener espacios en blanco y debe tener al menos 5 caracteres"
//       );
//       return;
//     }
//     console.log(userData);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Ingrese su nombre"
//           onChange={handleChange}
//           name="name"
//         />
//         <input
//           type="text"
//           placeholder="ingrese su e-mail"
//           name="email"
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           placeholder="ingrese su contraseña"
//           name="password"
//           onChange={handleChange}
//         />
//         <button type="submit">Enviar</button>
//       </form>
//       {error && <h1>{errorMessage}</h1>}
//     </div>
//   );
// };
