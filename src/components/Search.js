import React, { useState } from 'react';
import axios from 'axios';

const API_KEY = '912e645d47af5f8f8be768b203e58549e7b7d0cc'; // Replace with your actual API key

function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!searchTerm) return;

    const url = `https://www.giantbomb.com/api/game/?api_key=${API_KEY}&search=${searchTerm}`;

    try {
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
      const response = await axios.get(url);
      const results = response.data.results;
      onSearch(results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search games"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default Search;