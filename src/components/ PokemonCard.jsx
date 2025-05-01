import React from 'react';
import './PokemonCard.css'; 


const typeColors = {
  fire: '#F08030',
  water: '#6890F0',
  grass: '#78C850',
  electric: '#F8D030',
  psychic: '#F85888',
  normal: '#A8A878',
  ground: '#E0C068',
  flying: '#A890F0',
  bug: '#A8B820',
  poison: '#A040A0',
  rock: '#B8A038',
  ice: '#98D8D8',
  ghost: '#705898',
  dragon: '#7038F8',
  dark: '#705848',
  steel: '#B8B8D0',
  fairy: '#EE99AC',
  fighting: '#C03028',
};

const PokemonCard = ({ pokemon }) => {
  const mainType = pokemon.types[0].type.name;
  const bgColor = typeColors[mainType] || '#eee';

  return (
    <div className="card" style={{ backgroundColor: bgColor }}>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h3>{pokemon.name}</h3>
      <p>ID: {pokemon.id}</p>
      <p>Type: {pokemon.types.map(t => t.type.name).join(', ')}</p>
    </div>
    
  );
};

export default PokemonCard;
