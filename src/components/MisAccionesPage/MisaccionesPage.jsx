import React, { useState } from "react";

const MisAccionesPage = () => {
  const [acciones, setAcciones] = useState([]);

  const agregarAccion = (accion) => {
    setAcciones([...acciones, accion]);
  };

  return (
    <div>
      <h1>Mis Acciones</h1>
      <ul>
        {acciones.map((accion) => (
          <li key={accion}>{accion}</li>
        ))}
      </ul>
      <button onClick={() => agregarAccion("AAPL")}>Agregar AAPL</button>
      <button onClick={() => agregarAccion("GOOG")}>Agregar GOOG</button>
      <button onClick={() => agregarAccion("AMZN")}>Agregar AMZN</button>
      <button onClick={() => agregarAccion("HSBC")}>Agregar HSBC</button>
      <button onClick={() => agregarAccion("YPFD")}>Agregar YPFD</button>
      <button onClick={() => agregarAccion("EDN")}>Agregar EDN</button>
      <button onClick={() => agregarAccion("TEC02")}>Agregar TEC02</button>
    </div>
  );
};

export default MisAccionesPage;
