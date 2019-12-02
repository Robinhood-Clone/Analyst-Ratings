const Sequelize = require('sequelize');

const sequelize = new Sequelize('analystRatings', 'root', 'plantlife', {
  host: 'localhost',
  dialect: 'mysql'
})
const seedData = require('./seed.js')

const Rating = sequelize.define('rating', {
  id: {
    type: Sequelize.NUMBER,
    autoIncrement: true,
    primaryKey: true,
  },
  ticker: {
    type: Sequelize.STRING
  },
  companyName: {
    type: Sequelize.STRING
  },
  ratingCountBuys: {
    type: Sequelize.STRING
  },
  ratingCountHolds: {
    type: Sequelize.STRING
  },
  ratingCountSells: {
    type: Sequelize.STRING
  },
}, {
  timestamps: false
}
);

Rating.bulkCreate(seedData.sampleRatings).then((ratings) => {
  console.log("All analyst ratings: ", JSON.stringify(ratings, null, 4))

  return Rating.findAll().then((ratings) => {
    console.log("All analyst ratings: ", JSON.stringify(ratings, null, 4))
  })

})
