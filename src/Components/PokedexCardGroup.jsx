import Card from "./Card";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
function PokedexCardGroup() {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [NextUrl, setNextUrl] = useState();
  const [PreviousUrl, setPreviousUrl] = useState();

  const pokeFunc = async () => {
    setLoading(true);
    const results = await axios.get(url);
    setNextUrl(results.data.next);
    setPreviousUrl(results.data.previous);
    getPokemon(results.data.results);
    setLoading(false);
  };

  const getPokemon = async (results) => {
    results.map(async (item) => {
      const result = await axios.get(item.url);
      setPokeData((state) => {
        state = [...state, result.data];
        return state;
      });
    });
  };

  useEffect(() => {
    pokeFunc();
  }, [url]);

  return (
    <>
      <Card pokemon={pokeData} loading={loading} />
    </>
  );
}

export default PokedexCardGroup;
