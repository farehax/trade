// components/TrademarkSearchPage.jsx
import React, { useState } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar';
import Filters from './Filters';
import SearchResults from './SearchResults';

const TrademarkSearchPage = () => {
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState({
    owner: '',
    lawFirm: '',
    attorney: '',
    status: '',
  });
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (searchQuery) => {
    setQuery(searchQuery);
    setLoading(true);
    try {
      const response = await axios.post('https://vit-tm-task.api.trademarkia.app/api/v3/us', {
        input_query: searchQuery,
        sort_by: 'default',
        status: filters.status ? [filters.status] : [],
        exact_match: false,
        date_query: false,
        owners: filters.owner ? [filters.owner] : [],
        attorneys: filters.attorney ? [filters.attorney] : [],
        law_firms: filters.lawFirm ? [filters.lawFirm] : [],
        mark_description_description: [],
        classes: [],
        page: 1,
        rows: 10,
        sort_order: 'desc',
        states: [],
        counties: [],
      });
      setResults(response.data.hits.hits);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false);
  };

  return (
    <div className="p-4">
      <Searchbar onSearch={handleSearch} />
      <Filters filters={filters} setFilters={setFilters} />
      {loading ? <p>Loading...</p> : <SearchResults results={results} />}
    </div>
  );
};

export default TrademarkSearchPage;
