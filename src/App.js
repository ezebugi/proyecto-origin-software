import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./components/Login/LoginForm";
import { Navbar } from "./components/Navbar/Navbar";
import React, { useState } from "react";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetail/ItemDetailContainer";
import CartContainer from "./components/Cart/CartContainer";
import Form from "./components/Form/Form";

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
          <Navbar onLogout={handleLogout}></Navbar>
          <Routes>
            <Route>
              <Route path="/" element={<ItemListContainer />} />
              <Route
                path="/category/:categoryName"
                element={<ItemListContainer />}
              />
              <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<CartContainer />} />
              <Route path="/form" element={<Form />} />
              <Route path="*" element={<h1>La ruta no existe</h1>} />
            </Route>
          </Routes>
        </BrowserRouter>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
