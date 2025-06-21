import { Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import AllDrivers from "../pages/AllDrivers";
import AddDriver from "../pages/AddDriver";
import Header from "./Header/Header";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drivers" element={<AllDrivers />} />
        <Route path="/add-driver" element={<AddDriver />} />
      </Routes>
    </>
  );
}

export default App;
