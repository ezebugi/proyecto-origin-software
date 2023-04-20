import "./App.css";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import LoginForm from "./components/Login/LoginForm";
import MisAccionesPage from "./components/MisAccionesPage/MisaccionesPage";
import SearchForm from "./components/MisAccionesPage/SearchForm";
import { Navbar } from "./components/Navbar/Navbar";
import Chart from "./components/Grafico/Chart";
import Container from "./components/Grafico/Container";
import MapChart from "./components/Grafico/Map";
import StockChart from "./components/Grafico/Stock";
import React, { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <div>
          <Navbar onLogout={handleLogout}>
            <SearchForm />
            <MisAccionesPage />
            <MapChart />
          </Navbar>
          <Container />
          <Chart />
          <StockChart />
          <ItemListContainer />
        </div>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
