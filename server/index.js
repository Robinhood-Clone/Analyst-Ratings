const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const db = require('../database/index.js')

app.use('/', express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));

app.listen(port, ()=> {
  console.log(`Hello, I am listening on port ${port}`);
})

app.get('/analystRatings', (req, res) => {

  // Send GET request for a single user using query parameter STOCK TICKER
  db.Rating.findAll({where: {ticker: req.query.ticker}})
  .then((data) => {
    res.status(200).send(data);
  });

})

