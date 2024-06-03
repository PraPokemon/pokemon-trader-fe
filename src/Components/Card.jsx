import { useNavigate } from "react-router-dom";

function Card({ pokemon, loading }) {
  const navigate = useNavigate();
  const handleNavigation = (itemId) => {
    navigate(`/pokemon/${itemId}`, { state: { itemId, ...otherPokemonData } });
  };

  return (
    <>
      {loading ? (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        pokemon.map((item) => {
          return (
            <div>
              {pokemon.map((item) => (
                <div key={item.id} onClick={() => handleNavigation(item.id)}>
                  <button className="Container">
                    <h1>{item.id}</h1>
                    <h2>{item.name}</h2>
                    <div className="TypesPokedex">
                      {item.types.map((type) => (
                        <h4>{type.type.name}</h4>
                      ))}
                    </div>
                    <img src={item.sprites.front_default} alt={item.id} />
                  </button>
                </div>
              ))}
            </div>
          );
        })
      )}
    </>
  );
}

export default Card;
