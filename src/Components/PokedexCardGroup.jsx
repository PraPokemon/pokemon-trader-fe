import React, { useState, useEffect } from "react";
import axios from "../api/axiosConfig";
import Button from "react-bootstrap/Button";
import PokemonFilterSearch from "./PokemonFilterSerch";
import LevelFilter from "./FilterLvL";
import Card from "./Card";

function PokedexCardGroup({searchTerm}) {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [levelRange, setLevelRange] = useState([0, 100]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const fetchPokemons = async () => {
    setLoading(true);
    try {
      const result = await axios.get(`/pokemons`, {
        params: {
          page: page,
          size: 20,
          name: searchTerm,
          minLevel: levelRange[0],
          maxLevel: levelRange[1]
        }
      });
      setPokeData(result.data.results);
      setTotalPages(result.data.totalPages);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPokemons();
  }, [searchTerm, levelRange, page]);

  return (
    <div>
      <Card pokemon={pokeData} loading={loading} />
      <div className="PokedexCardButtons">
        <Button
          variant="success"
          style={{ margin: "5px" }}
          onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
          disabled={page === 0}
        >
          Previous
        </Button>{" "}
        <Button
          variant="success"
          style={{ margin: "5px" }}
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages - 1))}
          disabled={page === totalPages - 1}
        >
          Next
        </Button>{" "}
      </div>
    </div>
  );
}

export default PokedexCardGroup;
