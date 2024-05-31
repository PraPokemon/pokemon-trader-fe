import PokedexCardGroup from "./Components/PokedexCardGroup";
import "./App.css";
import FilterGroup from "./Components/FilterGroup";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="FilterGroup">
        <FilterGroup />
      </div>
      <div className="PokedexCardGroup">
        <PokedexCardGroup />
      </div>
    </>
  );
}

export default App;
