// components/SearchBar.jsx
// import React, { useState } from 'react';

// const Searchbar = ({ onSearch }) => {
//   const [query, setQuery] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSearch(query);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="flex items-center border rounded-lg p-2 bg-white">
//       <input
//         type="text"
//         placeholder="Search Trademark Here e.g. Nike"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         className="w-full border-none outline-none text-gray-500"
//       />
//       <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
//         Search
//       </button>
//     </form>
//   );
// };

// export default Searchbar;
// components/Searchbar.jsx
import React, { useState } from 'react';

const Searchbar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearchClick = () => {
    console.log('Search button clicked:', inputValue); // Add this line
    if (onSearch && inputValue) {
      onSearch(inputValue);
    }
  };

  return (
    <div className="flex items-center border rounded-lg p-2 max-w-md w-full bg-white">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Search Trademark Here"
        className="w-full border-none outline-none text-gray-500 bg-white"
      />
     <button
  onClick={handleSearchClick}
  className="px-4 py-2 bg-blue-500 text-white rounded-md ml-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">

  Search
</button>

     
    </div>
  );
};

export default Searchbar;
