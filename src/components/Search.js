import React, { useState } from 'react';
import axios from 'axios';

const API_KEY = '912e645d47af5f8f8be768b203e58549e7b7d0cc'; // Replace with your actual API key
const apiUrl = 'https://www.giantbomb.com/api/games/';

function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!searchTerm) return;

    const url = `${apiUrl}?api_key=${API_KEY}&format=json&field_list=name,image&filter=name:${searchTerm}`;

    try {
      const response = await axios.get(url, {headers: { 
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Credentials':true
      }});
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