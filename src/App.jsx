import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Trademarks from './components/Trademarks'; // Import Trademarks component

const App = () => {
  // Sample trademarks data
  const trademarks = [
    {
      name: 'Nike',
      company: 'Nike, Inc.',
      serialNumber: '123456789',
      filingDate: '01/01/2020',
      status: 'Live/Registered',
      statusDate: '02/02/2021',
      description: 'Footwear, Apparel, and Accessories',
      imageUrl: 'https://via.placeholder.com/100', // Replace with an actual image URL if available
    },
    // Add more trademark objects here
  ];

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Define the route for Trademarks */}
        <Route path="/trademarks" element={<Trademarks trademarks={trademarks} />} />
        {/* Add other routes here if needed */}
      </Routes>
    </Router>
  );
};

export default App;
