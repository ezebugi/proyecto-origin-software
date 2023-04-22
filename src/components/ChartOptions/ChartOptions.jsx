import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import axios from "axios";

const ChartOptions = () => {
  const [realTime, setRealTime] = useState(false);
  const [historico, setHistorico] = useState(false);
  const [desde, setDesde] = useState("");
  const [hasta, setHasta] = useState("");
  const [intervalo, setIntervalo] = useState("1min");
  const [cotizacionData, setCotizacionData] = useState([]);

  useEffect(() => {
    const apiKey = "4a833799d0d54c19a381e487f47aa242"; // Reemplaza "tu_api_key" con tu propia API key de TwelveData
    const simbolo = "AAPL"; // Reemplaza "AAPL" con el símbolo de la acción que quieres consultar

    if (realTime) {
      const intervalId = setInterval(
        () => {
          axios
            .get(
              `https://api.twelvedata.com/time_series?symbol=AAPL&interval=1min&apikey=4a833799d0d54c19a381e487f47aa242=${simbolo}&interval=${intervalo}&apikey=${apiKey}`
            )
            .then((response) => {
              console.log(response);
              const cotizacionActual = {
                x: new Date(response.data.values[0].datetime).getTime(),
                y: response.data.values[0].close,
              };
              setCotizacionData((prevData) => [...prevData, cotizacionActual]);
            })
            .catch((error) => console.log(error));
        },
        intervalo === "1min" ? 60000 : intervalo === "5min" ? 300000 : 900000
      );

      return () => clearInterval(intervalId);
    } else if (historico) {
      axios
        .get(
          `https://api.twelvedata.com/time_series?symbol=AAPL&interval=1min&apikey=4a833799d0d54c19a381e487f47aa242=${simbolo}&interval=${intervalo}&start_date=${desde}&end_date=${hasta}&apikey=${apiKey}`
        )
        .then((response) => {
          const cotizacionHistorica = response.data.values.map((value) => ({
            x: new Date(value.datetime).getTime(),
            y: value.close,
          }));
          setCotizacionData(cotizacionHistorica);
        })
        .catch((error) => console.log(error));
    }
  }, [realTime, historico, desde, hasta, intervalo]);

  const options = {
    title: {
      text: "Cotización de la acción",
    },
    xAxis: {
      type: "datetime",
    },
    yAxis: {
      title: {
        text: "Precio",
      },
    },
    series: [
      {
        name: "Precio",
        type: "line",
        data: cotizacionData,
      },
    ],
  };

  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={realTime}
            onChange={() => {
              setRealTime(!realTime);
              setHistorico(false);
            }}
          />
          Tiempo real
        </label>
        <label>
          <input
            type="checkbox"
            checked={historico}
            onChange={() => {
              setHistorico(!historico);
              setRealTime(false);
            }}
          />
          Histórico
        </label>
      </div>
      {historico && (
        <div>
          <label>
            Desde:{" "}
            <input
              type="date"
              value={desde}
              onChange={(e) => setDesde(e.target.value)}
            />
          </label>
          <label>
            Hasta:{" "}
            <input
              type="date"
              value={hasta}
              onChange={(e) => setHasta(e.target.value)}
            />
          </label>
        </div>
      )}
      <div>
        Intervalo:{" "}
        <select
          value={intervalo}
          onChange={(e) => setIntervalo(e.target.value)}
        >
          <option value="1min">1 minuto</option>
          <option value="5min">5 minutos</option>
          <option value="15min">15 minutos</option>
        </select>
      </div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default ChartOptions;
