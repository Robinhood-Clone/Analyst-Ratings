const Sequelize = require('sequelize');
const seedData = require('./seed.js');

const sequelize = new Sequelize('analystRatings', 'root', 'plantlife', {
  host: 'localhost',
  dialect: 'mysql'
});

const Rating = sequelize.define('rating', {
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
}
);

Rating.sync({ force: true })
  .then(() => {
    Rating.bulkCreate(seedData.sampleRatings);
  });


module.exports.Rating = Rating;
