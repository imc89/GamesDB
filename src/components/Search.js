const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());
const API_KEY = '912e645d47af5f8f8be768b203e58549e7b7d0cc'; // Replace with your actual API key
const url = `https://www.giantbomb.com/api/game/?api_key=${API_KEY}&search=${searchTerm}`;
const cors = `https://cors-anywhere.herokuapp.com/`;
app.get('/api/data',   
 async (req, res) => {
  try {
    const response = await axios.get(cors + url, {
      params: params,
      headers: {
          'origin':'x-requested-with',
          "user-key": "40759257c55df398b0d23ca3f4da5579",
          Accept: "application/json"
      }});
    const results = response.data.results;
    onSearch(results);
  } catch (error) {
    console.error(error);
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});