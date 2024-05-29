import PokedexCardGroup from "./Components/PokedexCardGroup";
import "./App.css";
import FilterGroup from "./Components/FilterGroup";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar/>
      <div className="FilterGroup">
        <FilterGroup />
      </div>
      <div className="PokedexCardGroup">
        <PokedexCardGroup />
      </div>
      <button type="button" className="btn btn-outline-dark">
        Dark
      </button>
      <button type="button" className="btn btn-outline-dark">
        Dark
      </button>
    </>
  );
}

export default App;
