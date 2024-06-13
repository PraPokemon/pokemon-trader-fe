import Card from "./Card";
import { useState, useEffect } from "react";
import axios from "../api/axiosConfig";
import Button from "react-bootstrap/Button";

function PokedexCardGroup() {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(20);
  const [totalPages, setTotalPages] = useState(0);

  const fetchPokemons = async (page) => {
    setLoading(true);
    try {
      const result = await axios.get(`/pokemons?page=${page}&size=${pageSize}`);
      setPokeData(result.data.results);
      setTotalPages(result.data.totalPages);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPokemons(page);
  }, [page]);

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

