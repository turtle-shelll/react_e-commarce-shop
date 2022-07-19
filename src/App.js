import "./App.css";
import CardContainer from "./components/cardContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import CartScreen from "./components/cartScreen";
import VeiwProduct from "./components/veiwProduct";
// import { StoreProvider } from "./storeConfiguration/storeContext";
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<CardContainer />} />
          <Route path="/cart" element={<CartScreen />} />
          <Route path="/view" element={<VeiwProduct />} />
        </Routes>
      </Router>

      {/* <CardContainer /> */}
    </div>
  );
}

export default App;
