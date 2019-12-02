const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const queryDatabase = require('../database/index.js')

app.use('/', express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));

app.listen(port, ()=> {
  console.log(`Hello, I am listening on port ${port}`);
})

app.get('/analystRatings', (req, res) => {

  // Send GET request for a single user using query parameter STOCK TICKER

  let result = queryDatabase(req.query);
  res.send('Analyst Rating Data from my database here: ', req.query)

})


