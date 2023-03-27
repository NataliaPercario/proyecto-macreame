import { ClassSharp } from "@mui/icons-material";
import React from "react";
import { useState } from "react";

const Form = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //VALIDACIONES
    //NOMBRE COMO MINIMO 3 CARACTERES
    if (userData.name.length < 3) {
      setError(true);
      setErrorMessage("El nombre deberá tener al menos 3 caracteres");
      return;
    }

    //EMAIL QUE CONTENGA @
    const incluye = userData.email.includes("@");
    if (!incluye) {
      setError(true);
      setErrorMessage("email no valido");
      return;
    }

    // PASSWORD QUE NO TENGA ESPACIOS
    const str = userData.password.trim();
    const passwordValid = userData.password === str;

    if (!passwordValid || userData.password.length < 5) {
      setError(true);
      setErrorMessage(
        "la contraseña no debe tener espacios en blanco y debe tener al menos 5 caracteres"
      );
      return;
    }
    console.log(userData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese su nombre"
          onChange={handleChange}
          name="name"
        />
        <input
          type="text"
          placeholder="ingrese su e-mail"
          name="email"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="ingrese su contraseña"
          name="password"
          onChange={handleChange}
        />
        <button type="submit">Enviar</button>
      </form>
      {error && <h1>{errorMessage}</h1>}
    </div>
  );
};

export default Form;
