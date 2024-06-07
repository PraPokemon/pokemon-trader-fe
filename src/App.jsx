import PokedexCardGroup from "./Components/PokedexCardGroup";
import "./App.css";
import FilterGroup from "./Components/FilterGroup";
import Navbar from "./Components/Navbar";
import LoginModal from "./Components/LoginModal";

function App() {
  return (
    <>
      <LoginModal/>
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
