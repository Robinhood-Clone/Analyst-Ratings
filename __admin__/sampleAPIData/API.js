const request = require('request');
const config = require('./config.js')

let getAnalystRatings = (stockTicker, callback) => {
  const options = {
    url: `https://api-v2.intrinio.com/securities/${stockTicker}/zacks/analyst_ratings?api_key=${config.TOKEN}`,
    headers: {
    }
  }
  request(options, (error, response, body) => {
    callback(error, body)
  })
}

let exampleTickers = [
  'CVX',
  'XOM',
  'HD',
  'INTC',
  'MCD',
  'PG',
  'WMT',
]


exampleTickers.forEach((element) => {
  getAnalystRatings(element, console.log);
})


