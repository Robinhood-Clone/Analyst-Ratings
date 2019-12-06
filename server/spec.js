
// Must first start MySQL & Node server

const mysql = require('mysql');
const request = require('request');
const expect = require('chai').expect;

describe('Server for Analyst Ratings', function() {
  let dbConnection;

  beforeEach(function(done) {
    dbConnection = mysql.createConnection({
      user: 'root',
      password: 'plantlife',
      database: 'analystRatings'
    });
    dbConnection.connect();

    let tablename = 'ratings';
    dbConnection.query('truncate ' + tablename, done);
  });

  afterEach(function() {
    dbConnection.end();
  });


  it('Should output selected rating record from the DB', function(done) {
    let queryString = 'ASX';
    let queryArgs = [];

    dbConnection.query(queryString, queryArgs, function(err) {
      if (err) { throw err; }

      request('http://localhost:3000/analystRatings', function(error, response, body) {
        let stockInfo = JSON.parse(body);
        expect(stockInfo[0].companyName).to.equal('Advanced Semiconductor Engineering, Inc.');
        expect(stockInfo[0].ratingCountBuys).to.equal(7);
        done();
      });
    });
  });
});
