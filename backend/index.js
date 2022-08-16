require('dotenv').config();

const axios = require('axios');
const express = require('express');
const cors = require('cors');
const app = express();
const { PORT, FILE_URL, GITHUB_TOKEN } = process.env;

app.use(express.json());
app.use(cors());

app.get('/test', async (req, res) => {
  try {
    const resp = await axios.get(FILE_URL, {
      headers: {
        accept: 'application/vnd.github.html+json',
        authorization: GITHUB_TOKEN,
      },
    });
    res.send(resp.data);
  } catch (e) {
    console.error(e);
    if (e.response && e.response.data && e.response.data.message) {
      res.status(500).json('Github error: ' + e.response.data.message);
    }
    res.status(500).json('Unknown error');
  }
});

app.get('/', (req, res) => {
  res.send('Welcome to Github NodeJS API app!');
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}...`));
