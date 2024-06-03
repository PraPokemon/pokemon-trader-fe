// PokemonDetails.js
import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

function PokemonDetails() {
  let { id } = useParams(); // Extract the id from the URL
  let location = useLocation(); // Access the state passed during navigation
  let itemId = location.state.itemId; // Assuming you passed itemId in the state

  // Fetch or retrieve the Pokemon data based on the id
  // Render the Pokemon details...

  return (
    <div>
      {/* Display the Pokemon details here */}
    </div>
  );
}

export default PokemonDetails;
