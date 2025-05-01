// components/SearchBar.jsx
import React, { useState } from 'react';

const SearchBar = ({ setFilteredList, fullList }) => {
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('');

  const handleFilter = (s, type) => {
    let filtered = fullList.filter(poke =>
      poke.name.toLowerCase().includes(s.toLowerCase())
    );
    if (type) {
      filtered = filtered.filter(poke =>
        poke.types.some(t => t.type.name === type)
      );
    }
    setFilteredList(filtered);
  };

  return (
    <div className="search-filter">
      <input
        type="text"
        placeholder="Search Pokémon"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          handleFilter(e.target.value, typeFilter);
        }}
      />
      <select
        value={typeFilter}
        onChange={(e) => {
          setTypeFilter(e.target.value);
          handleFilter(search, e.target.value);
        }}
      >
        <option value="">All Types</option>
        <option value="grass">Grass</option>
        <option value="fire">Fire</option>
        <option value="water">Water</option>
        <option value="electric">Electric</option>
        <option value="bug">Bug</option>
        <option value="normal">Normal</option>
        <option value="poison">Poison</option>
        <option value="ground">Ground</option>
        <option value="fighting">Fighting</option>
        <option value="psychic">Psychic</option>
        <option value="rock">Rock</option>
        <option value="ghost">Ghost</option>
        <option value="ice">Ice</option>
        <option value="dragon">Dragon</option>
        <option value="dark">Dark</option>
        <option value="steel">Steel</option>
        <option value="fairy">Fairy</option>
      </select>
    </div>
  );
};

export default SearchBar;
