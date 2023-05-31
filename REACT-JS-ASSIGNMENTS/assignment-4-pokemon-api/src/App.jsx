import { useState } from "react";
import "./App.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [pokemonData, setPokemonData] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
    const data = await response.json();
    setPokemonData(data);
  };

  return (
    <div className="container">
      <h1 className="heading">Pokemon Types</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
        <button>Search</button>
      </form>
      <p className="instructions">
        Search with numbers like 1 or 30 or 50 and so on; or with names like
        charizard or diglett etc.
      </p>
      {pokemonData && (
        <div className="pokemon-data">
          <h2 className="pokemon-name">{pokemonData.name.toUpperCase()}</h2>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
          <h3 className="abilities-heading">Abilities:</h3>
          <ul className="abilities-list">
            {pokemonData.abilities.map((ability) => (
              <li key={ability.ability.name}>{ability.ability.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;
