import React, { useState, useEffect } from "react";
import axios from "axios";

function SearchForm() {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [favoriteActions, setFavoriteActions] = useState([]);

  useEffect(() => {
    // Lógica para obtener las acciones favoritas del usuario desde el servidor
    const fetchFavoriteActions = async () => {
      try {
        const response = await axios.get("/favorite-actions");
        setFavoriteActions(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFavoriteActions();
  }, []);

  const handleSearchChange = async (event) => {
    const searchText = event.target.value;
    setSearchText(searchText);

    if (searchText.length >= 3) {
      try {
        const response = await axios.get(`/search-actions?query=${searchText}`);
        setSearchResults(response.data);
      } catch (error) {
        console.error(error);
      }
    } else {
      setSearchResults([]);
    }
  };

  const handleAddAction = async (symbol, name, currency) => {
    try {
      await axios.post("/favorite-actions", { symbol, name, currency });
      setFavoriteActions([...favoriteActions, { symbol, name, currency }]);
      setSearchResults([]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleRemoveAction = async (symbol) => {
    try {
      await axios.delete(`/favorite-actions/${symbol}`);
      setFavoriteActions(
        favoriteActions.filter((action) => action.symbol !== symbol)
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Buscar acciones</h1>
      <label>
        Búsqueda:
        <input type="text" value={searchText} onChange={handleSearchChange} />
      </label>
      <ul>
        {searchResults.map((result) => (
          <li key={result.symbol}>
            {result.symbol} - {result.name} ({result.currency})
            <button
              type="button"
              onClick={() =>
                handleAddAction(result.symbol, result.name, result.currency)
              }
            >
              Agregar símbolo
            </button>
          </li>
        ))}
      </ul>
      <h2>Mis acciones favoritas</h2>
      <table>
        <thead>
          <tr>
            <th>Símbolo</th>
            <th>Nombre</th>
            <th>Moneda</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {favoriteActions.map((action) => (
            <tr key={action.symbol}>
              <td>{action.symbol}</td>
              <td>{action.name}</td>
              <td>{action.currency}</td>
              <td>
                <button
                  type="button"
                  onClick={() => handleRemoveAction(action.symbol)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SearchForm;
