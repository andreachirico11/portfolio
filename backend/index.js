require('dotenv').config();

const express = require('express');
const cors = require('cors');
const pdfController = require('./pdfController');
const { PORT } = require('./environments');
const tokenController = require('./tokenController');
const app = express();

app.use(express.json());
app.use(cors());

app.get('/cv', tokenController, pdfController);

app.get('/test', (_, res) => {
  res.status(200).json('App working');
});

app.get('/', (_, res) => {
  res.status(500).json('Not Found');
});

app.listen(PORT || 8080, () => console.log(`Server started on port ${PORT}...`));
