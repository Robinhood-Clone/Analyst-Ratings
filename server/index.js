const express = require('express');
const app = express();
const port = 4000;

const cors = require('cors');
const bodyParser = require('body-parser');
//const db = require('../database/index.js');

const Sequelize = require('sequelize');

// Insert your username where it says 'root' and password at 'plantlife'
const sequelize = new Sequelize('analystRatings', 'root', 'plantlife', {
  host: 'localhost',
  dialect: 'mysql'
});
let Rating = sequelize.define('Rating', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  ticker: {
    type: Sequelize.STRING,
  },
  companyName: {
    type: Sequelize.STRING,
  },
  ratingCountBuys: {
    type: Sequelize.INTEGER,
  },
  ratingCountHolds: {
    type: Sequelize.INTEGER,
  },
  ratingCountSells: {
    type: Sequelize.INTEGER,
  },
  buySummary: {
    type: Sequelize.TEXT,
  },
  sellSummary: {
    type: Sequelize.TEXT,
  },
}, {
  timestamps: false,
});


app.use(cors());
app.use('/', express.static('public'));
app.use('/stocks/:ticker', express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`Hello, I am listening on port ${port}`);
});

app.use('/stocks/:ticker', (req, res, next) => {

  Rating.sync().then(() => {
    return findAll({ where: { ticker: req.params.ticker } })
      .then((data) => {
        res.status(200).send(data);
      });
  });
});

app.get('/api/analystRatings', (req, res) => {
  // Send GET request for a single user using query parameter STOCK TICKER
  // example: http://localhost:3000/analystRatings/?ticker=ASX
  Rating.sync().then(() => {
    Rating.findAll({ where: { ticker: req.query.ticker } })
      .then((data) => {
        res.status(200).send(data);
      });
  });
});


