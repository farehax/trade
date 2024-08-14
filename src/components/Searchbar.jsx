// components/SearchBar.jsx
import React, { useState } from 'react';

const Searchbar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center border rounded-lg p-2 bg-white">
      <input
        type="text"
        placeholder="Search Trademark Here e.g. Nike"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full border-none outline-none text-gray-500"
      />
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
        Search
      </button>
    </form>
  );
};

export default Searchbar;
