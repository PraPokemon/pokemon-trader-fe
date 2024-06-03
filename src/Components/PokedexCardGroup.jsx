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
    await getPokemon(results.data.results);
    setLoading(false);
  };

  const getPokemon = async (results) => {
    const promises = results.map(async (item) => {
      const result = await axios.get(item.url);
      return result.data;
    });
    const resolvedResults = await Promise.all(promises);
    setPokeData(resolvedResults);
  };

  useEffect(() => {
    pokeFunc();
  }, [url]);

  return (
    <>
    <div>
    <Card pokemon={pokeData} loading={loading} />
      <div className="PokedexCardButons">
        <button
          onClick={() => {
            setPokeData([])
            setUrl(PreviousUrl);
          }}
          type="button"
          className="btn btn-outline-dark"
        >
          Back
        </button>
        <button
          onClick={() => {
            setPokeData([])
            setUrl(NextUrl);
          }}
          type="button"
          className="btn btn-outline-dark"
        >
          Forward
        </button>
      </div>
    </div>
      
    </>
  );
}

export default PokedexCardGroup;
