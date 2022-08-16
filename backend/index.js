require('dotenv').config();

const axios = require('axios');
const express = require('express');
const cors = require('cors');
const app = express();
const cheerio = require('cheerio');
const pdf = require('html-pdf');
const fs = require('fs');

const { PORT, FILE_URL, GITHUB_TOKEN } = process.env;
const TEMPORARY_PDF_NAME = 'temp.pdf';
const fileOptions = {
  format: 'A4',
  orientation: 'portrait',
  border: {
    top: '0',
    bottom: '0',
  },
};

app.use(express.json());
app.use(cors());

app.get('/cv', async (req, res) => {
  try {
    const resp = await axios.get(FILE_URL, {
      headers: {
        accept: 'application/vnd.github.html+json',
        authorization: GITHUB_TOKEN,
      },
    });
    const $ = cheerio.load(resp.data);
    const htmlContent = $('pre').html();
    const pdfFile = await new Promise((res, rej) => {
      pdf.create(htmlContent, fileOptions).toFile(TEMPORARY_PDF_NAME, function (err, file) {
        if (err) {
          rej('error during pdf creation');
        }
        res(file);
      });
    });
    res.setHeader('Content-Type', 'application/pdf');
    res.sendFile(pdfFile.filename, function (err) {
      if (err) {
        console.log(err);
      }
      fs.unlinkSync(TEMPORARY_PDF_NAME);
    });
  } catch (e) {
    console.error(e);
    if (e.response && e.response.data && e.response.data.message) {
      res.status(500).json('Github error: ' + e.response.data.message);
    }
    res.status(500).json('Unknown error');
  }
});

app.get('/', (req, res) => {
  res.status(500).json('Not Found');
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}...`));
