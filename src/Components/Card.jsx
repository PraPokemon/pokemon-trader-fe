function Card({ pokemon, loading }) {
  return (
    <>
      {loading ? (
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      ) : (
        pokemon.map((item) => {
          return (
            <>
              <div className="Container">
                <h1>{item.id}</h1>
                <h2>{item.name}</h2>
                <img
                  src={item.sprites.front_default}
                  alt="The best pokemon there is"
                />
              </div>
            </>
          );
        })
      )}
    </>
  );
}

export default Card;
