import React, { useState } from "react";

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === "usuario" && password === "clave") {
      onLogin();
    } else {
      setError("Usuario o clave inválida");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h2>ORIGIN SOFTWARE</h2>
      <h3>Iniciar sesión</h3>
      <input
        type="text"
        placeholder="Nombre de usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{
          padding: "10px",
          margin: "10px",
          borderRadius: "5px",
          border: "1px solid gray",
          width: "300px",
        }}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          padding: "10px",
          margin: "10px",
          borderRadius: "5px",
          border: "1px solid gray",
          width: "300px",
        }}
      />
      {error && (
        <div className="error" style={{ color: "red", margin: "10px" }}>
          {error}
        </div>
      )}
      <button
        type="submit"
        style={{
          padding: "10px 20px",
          margin: "10px",
          borderRadius: "5px",
          backgroundColor: "#0077FF",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Iniciar sesión
      </button>
    </form>
  );
}

export default LoginForm;
