// components/SearchResults.jsx
import React from 'react';

const SearchResults = ({ results }) => {
  return (
    <div className="mt-4">
      {results.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <ul>
          {results.map((result) => (
            <li key={result._id} className="border p-4 mb-2">
              <h3 className="text-lg font-semibold">{result._source.mark_identification}</h3>
              <p>Owner: {result._source.current_owner}</p>
              <p>Description: {result._source.mark_description_description.join(', ')}</p>
              <p>Status: {result._source.mark_status_key}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchResults;
