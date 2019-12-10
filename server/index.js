const express = require('express');
const app = express();
const port = 4000;

const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('../database/index.js');

app.use(cors());
app.use('/', express.static('public'));
app.use('/stocks/:ticker', express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));

app.listen(port, ()=> {
  console.log(`Hello, I am listening on port ${port}`);
});

app.use('/stocks/:ticker', (req, res, next) => {
  console.log('Request URL:', req.originalUrl);
  // res.send('Testing', req.params.ticker);
  // next();
  db.Rating.findAll({where: {ticker: req.params.ticker}})
  .then((data) => {
    res.status(200).send(data);
  });
 // res.send(req.params);
});

app.get('/api/analystRatings', (req, res) => {

  // Send GET request for a single user using query parameter STOCK TICKER
  // example: http://localhost:3000/analystRatings/?ticker=ASX
  db.Rating.findAll({where: {ticker: req.query.ticker}})
  .then((data) => {
    res.status(200).send(data);
  });
});


