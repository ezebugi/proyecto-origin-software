import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetail/ItemDetailContainer";
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
        <BrowserRouter>
          <Navbar onLogout={handleLogout}>
            <Routes>
              <Route path="/" element={<h1>Bienvenido</h1>} />
              <Route path="/category" element={<ItemListContainer />} />
              <Route
                path="/category/:categoryName"
                element={<ItemListContainer />}
              />
              <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
              <Route path="/misAcciones" element={<MisAccionesPage />} />
              <Route path="/mapa" element={<MapChart />} />
              <Route path="*" element={<h1>La ruta no existe</h1>} />
            </Routes>
            <SearchForm />
            <MisAccionesPage />
            <MapChart />
          </Navbar>
          <Container />
          <Chart />
          <StockChart />
        </BrowserRouter>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
