function Card({ pokemon, loading }) {
  console.log(pokemon);
  return (
    <>
      {loading ? (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        pokemon.map((item) => {
          return (
            <>
              <div className="Container">
                <h1>{item.id}</h1>
                <h2>{item.name}</h2>
                <div className="TypesPokedex">
                  {item.types.map(type =>(
                    <h4>{type.type.name}</h4>
                  ))}
                </div>
                <img src={item.sprites.front_default} alt={item.id} />
              </div>
            </>
          );
        })
      )}
    </>
  );
}

export default Card;
