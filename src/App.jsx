import React, { useEffect, useState } from 'react';
import PokemonCard from './components/ PokemonCard.jsx';
import SearchBar from './components/SearchBar';
import './App.css';

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        let response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
        let data = await response.json();

        const pokemonDetails = await Promise.all(
          data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            return await res.json();
          })
        );

        setPokemonList(pokemonDetails);
        setFilteredList(pokemonDetails);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError(true);
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  // Search/filter logic will be added later...

  return (
    <div className="App">
      <h1>Pokémon Explorer</h1>
      <SearchBar setFilteredList={setFilteredList} fullList={pokemonList} />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error loading data.</p>
      ) : filteredList.length === 0 ? (
        <p>No Pokémon found.</p>
      ) : (
        <div className="pokemon-grid">
          {filteredList.map((poke) => (
            <PokemonCard key={poke.id} pokemon={poke} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
