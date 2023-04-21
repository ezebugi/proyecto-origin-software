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

  const handleAddAction = async (action) => {
    try {
      await axios.post("/favorite-actions", action);
      setFavoriteActions([...favoriteActions, action]);
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
      {searchResults.length > 0 && (
        <ul>
          {searchResults.map((result) => (
            <li key={result.symbol}>
              {result.name} ({result.symbol}) - {result.currency}
              <button onClick={() => handleAddAction(result)}>Agregar</button>
            </li>
          ))}
        </ul>
      )}
      <h2>Acciones favoritas</h2>
      {favoriteActions.length === 0 ? (
        <p>No hay acciones favoritas.</p>
      ) : (
        <ul>
          {favoriteActions.map((action) => (
            <li key={action.symbol}>
              {action.name} ({action.symbol}) - {action.currency}
              <button onClick={() => handleRemoveAction(action.symbol)}>
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchForm;
