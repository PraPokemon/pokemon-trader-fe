import React, { useState } from 'react';
import PokedexCardGroup from "./Components/PokedexCardGroup";
import "./App.css";
import FilterGroup from "./Components/FilterGroup";
import Navbar from "./Components/Navbar";
import LoginModal from "./Components/LoginModal";

function App({ initialSearchTerm = "" }) {
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const updateText = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
  };
  return (
    <>
      <Navbar />
      <div className="FilterGroup">
        <FilterGroup setSearchTerm={updateText}/>
      </div>
      <div className="PokedexCardGroup">
        <PokedexCardGroup searchTerm={searchTerm}/>
      </div>
    </>
  );
}

export default App;
