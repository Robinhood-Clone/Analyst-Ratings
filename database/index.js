const Sequelize = require('sequelize');
const seedData = require('./seed.js')

const sequelize = new Sequelize('analystRatings', 'root', 'plantlife', {
  host: 'localhost',
  dialect: 'mysql'
})

const Rating = sequelize.define('rating', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  ticker: {
    type: Sequelize.STRING
  },
  companyName: {
    type: Sequelize.STRING
  },
  rating_cnt_buys: {
    type: Sequelize.INTEGER
  },
  rating_cnt_holds: {
    type: Sequelize.INTEGER
  },
  rating_cnt_sells: {
    type: Sequelize.INTEGER
  },
}, {
  timestamps: false
}
);

Rating.sync({ force: true })
  .then(() => {
    Rating.bulkCreate(seedData.sampleRatings)
  })


module.exports.Rating = Rating;
