 import { useState } from "react";
import { useEffect } from "react";
import PokedexCardGroup from "./Components/PokedexCardGroup";
import "./App.css";
import axios from "axios";

  function App() {
      const [pokeData, setPokeData] = useState([]);
      const [loading, setLoading] = useState(true);
      const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");

      const pokeFunc = async()=>{
        setLoading(true)
        const res=await axios.get(url);
        console.log(res)
      }
    useEffect(()=>{
      pokeFunc();
    },[url])

  return (
    <>
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
