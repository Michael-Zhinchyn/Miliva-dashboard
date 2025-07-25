import React from "react";
import Header from "./Header/Header.jsx";
import tempIMG from "../assets/building-under-construction-web-site-vector-background.webp";
const App = () => {
  return (
    <div>
      <Header />
      <p>Welcome to Miliva dashboard</p>
      <img src={tempIMG}></img>
    </div>
  );
};

export default App;
