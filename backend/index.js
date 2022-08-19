require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { PORT, FRONTEND_URL } = require('./environments');
const pdfController = require('./controllers/pdfController');
const tokenController = require('./controllers/tokenController');
const htmlResultController = require('./controllers/htmlResultController');
const emailValidatorController = require('./controllers/emailValidatorController');
const emailController = require('./controllers/emailController');
const app = express();
const { initializeSharedService } = require('./sharedService');
initializeSharedService();

app.use(express.json());
app.use(
  cors({
    origin: FRONTEND_URL,
  })
);

app.get('/cv', tokenController, pdfController);

app.get('/temp-html', htmlResultController);

app.post('/email', emailValidatorController, emailController);

app.get('/', (_, res) => {
  res.status(500).json('Not Found');
});

app.listen(PORT || 8080, () => console.log(`Server started on port ${PORT}...`));
