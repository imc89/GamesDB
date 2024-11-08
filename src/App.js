import React, { useState } from 'react';
import './App.css';
import Search from './components/Search';

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (results) => {
    setSearchResults(results);
  };

  return (
    <div className="App">
      <h1>Game Search Library</h1>
      <Search onSearch={handleSearch} />
      {searchResults.length > 0 && (
        <ul>
          {searchResults.map((game) => (
            <li key={game.name}>{game.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;