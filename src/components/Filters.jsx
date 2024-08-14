// components/Filters.jsx
import React from 'react';

const Filters = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <div className="flex space-x-4">
      <select name="owner" value={filters.owner} onChange={handleChange} className="p-2 border rounded-md">
        <option value="">Select Owner</option>
        {/* Add more options here */}
      </select>
      <select name="lawFirm" value={filters.lawFirm} onChange={handleChange} className="p-2 border rounded-md">
        <option value="">Select Law Firm</option>
        {/* Add more options here */}
      </select>
      <select name="attorney" value={filters.attorney} onChange={handleChange} className="p-2 border rounded-md">
        <option value="">Select Attorney</option>
        {/* Add more options here */}
      </select>
      <select name="status" value={filters.status} onChange={handleChange} className="p-2 border rounded-md">
        <option value="">Select Status</option>
        <option value="live">Live</option>
        <option value="dead">Dead</option>
        {/* Add more options here */}
      </select>
    </div>
  );
};

export default Filters;
