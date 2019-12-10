const Sequelize = require('sequelize');
const seedData = require('./seed.js');

// Insert your username where it says 'root' and password at 'plantlife'
const sequelize = new Sequelize('', 'root', 'plantlife', {
  host: 'localhost',
  dialect: 'mysql'
});

let Rating = null;

sequelize.query('CREATE DATABASE IF NOT EXISTS analystRatings;')
  .then(() => {
    return sequelize.query("USE analystRatings;");
  })
  .then(() => {
    return sequelize.query("DROP TABLE IF EXISTS `Rating`;");
  })
  .then(() => {
    Rating = sequelize.define('Rating', {
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
  })
  .then(() => {
    return Rating.sync({ force: true });
  })
  .then(() => {
    Rating.bulkCreate(seedData.sampleRatings);
  });


module.exports.Rating = Rating;