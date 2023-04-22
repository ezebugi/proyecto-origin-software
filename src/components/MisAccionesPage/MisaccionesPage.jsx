import { useState } from "react";
import "./mis-acciones.css";

const MisAccionesPage = () => {
  const [acciones, setAcciones] = useState([]);

  const agregarAccion = (accion) => {
    setAcciones([...acciones, accion]);
  };

  const eliminarAccion = (indice) => {
    const nuevasAcciones = [...acciones];
    nuevasAcciones.splice(indice, 1);
    setAcciones(nuevasAcciones);
  };

  return (
    <div>
      <h1>Mis Acciones</h1>
      <table>
        <thead>
          <tr>
            <th>Símbolo</th>
            <th>Nombre</th>
            <th>Moneda</th>
            <th>Acción</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {acciones.map((accion, indice) => (
            <tr key={indice}>
              <td>{accion.symbol}</td>
              <td>{accion.name}</td>
              <td>{accion.currency}</td>
              <td>{accion.action}</td>
              <td>
                <button onClick={() => eliminarAccion(indice)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={() =>
          agregarAccion({
            symbol: "AAPL",
            name: "Apple Inc.",
            currency: "USD",
            action: "comprar",
          })
        }
      >
        Agregar AAPL
      </button>
      <button
        onClick={() =>
          agregarAccion({
            symbol: "GOOG",
            name: "Alphabet Inc.",
            currency: "USD",
            action: "comprar",
          })
        }
      >
        Agregar GOOG
      </button>
      <button
        onClick={() =>
          agregarAccion({
            symbol: "AMZN",
            name: "Amazon.com Inc.",
            currency: "USD",
            action: "comprar",
          })
        }
      >
        Agregar AMZN
      </button>
      <button
        onClick={() =>
          agregarAccion({
            symbol: "HSBC",
            name: "HSBC Holdings plc",
            currency: "GBP",
            action: "comprar",
          })
        }
      >
        Agregar HSBC
      </button>
      <button
        onClick={() =>
          agregarAccion({
            symbol: "YPFD",
            name: "YPF S.A.",
            currency: "ARS",
            action: "comprar",
          })
        }
      >
        Agregar YPFD
      </button>
      <button
        onClick={() =>
          agregarAccion({
            symbol: "EDN",
            name: "Edenor S.A.",
            currency: "ARS",
            action: "comprar",
          })
        }
      >
        Agregar EDN
      </button>
      <button
        onClick={() =>
          agregarAccion({
            symbol: "TEC02",
            name: "S&P Merval Argentina",
            currency: "ARS",
            action: "comprar",
          })
        }
      >
        Agregar TEC02
      </button>
    </div>
  );
};

export default MisAccionesPage;
