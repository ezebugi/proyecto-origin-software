import "./App.css";
// import FetchingData from "./components/FetchingData/FetchingData";
// import { ItemDetailContainer } from "./components/ItemDetail/ItemDetailContainer";
// import ItemListContainer from "./components/ItemList/ItemListContainer";
import LoginForm from "./components/Login/LoginForm";
import MisAccionesPage from "./components/MisAccionesPage/MisaccionesPage";

import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <LoginForm />
      <MisAccionesPage />
      {/* <ItemListContainer /> */}
      {/* <ItemDetailContainer /> */}

      {/* <FetchingData /> */}
    </div>
  );
}

export default App;
