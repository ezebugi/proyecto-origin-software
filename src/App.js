import "./App.css";
import ItemListContainer from "./components/ItemList/ItemListContainer";
// import FetchingData from "./components/FetchingData/FetchingData";
// import { ItemDetailContainer } from "./components/ItemDetail/ItemDetailContainer";
// import ItemListContainer from "./components/ItemList/ItemListContainer";
import LoginForm from "./components/Login/LoginForm";
import MisAccionesPage from "./components/MisAccionesPage/MisaccionesPage";
import SearchForm from "./components/MisAccionesPage/SearchForm";

import { Navbar } from "./components/Navbar/Navbar";
import Chart from "./components/Grafico/Chart";
import Container from "./components/Grafico/Container";
import MapChart from "./components/Grafico/Map";
import StockChart from "./components/Grafico/Stock";

function App() {
  return (
    <div className="App">
      <Navbar>
        <SearchForm />
        <MisAccionesPage />
        <MapChart />
      </Navbar>
      <LoginForm />
      <Container />
      <Chart />
      <StockChart />
      <ItemListContainer />
      {/* <ItemListContainer />}
      {/* <ItemDetailContainer />}

      {/* <FetchingData /> */}
    </div>
  );
}

export default App;
