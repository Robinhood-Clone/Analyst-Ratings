const request = require('request');
const config = require('./config-2.js')

let getAnalystRatings = ( callback ) => {
  const options = {
    url: `https://www.quandl.com/api/v3/datatables/ZACKS/AR/?api_key=${config.TOKEN}`,
    headers: {
    }
  }
  request(options, (error, response, body) => {

    callback(body)
  })
}

getAnalystRatings(console.log);


const parseAnalystRatings = (result) => {
  let parsedResult = JSON.parse(result);
  let resultArray = [];

  parsedResult.datatable.data.forEach( (element) => {
    let individualStock = {
      m_ticker: element[1],
      comp_name: element[3],
      rating_cnt_strong_buys: element[7],
      rating_cnt_buys: element[11],
      rating_cnt_holds: element[15],
      rating_cnt_sells: element[19],
      rating_cnt_strong_sells: element[23],
    }
    resultArray.push(individualStock)
  })

  return resultArray;
}

parseAnalystRatings()

module.exports.getAnalystRatings = getAnalystRatings;

//sample JSON output
//https://www.quandl.com/databases/ZAR/documentation
// {"datatable":{"data":[["AAPL","AAPL","APPLE INC","Apple Inc.","NSDQ","USD",16,16,15,14,3,2,2,2,10,11,11,13,0,0,0,0,1,0,0,0,1.88,1.81,1.84,1.95,258.23,272.5,26,325.0,153.0,40.861,null,null,"2019-11-20"],["AXP","AXP","AMER EXPRESS CO","American Express Company","NYSE","USD",7,7,6,7,1,1,1,1,8,8,8,8,0,0,0,0,0,0,0,0,2.03,2.03,2.1,2.03,133.909,135.0,11,149.0,122.0,9.364,null,null,"2019-11-18"],["BA","BA","BOEING CO","The Boeing Company","NYSE","USD",7,7,9,9,0,1,1,1,8,8,6,6,0,0,0,0,0,0,0,0,2.07,2.03,1.78,1.78,394.0,388.0,13,459.0,342.0,35.858,null,null,"2019-11-11"],["CTR","CAT","CATERPILLAR INC","Caterpillar Inc.","NYSE","USD",4,4,4,4,0,0,1,1,9,9,8,8,0,0,0,0,3,3,3,2,2.88,2.88,2.78,2.63,137.083,140.0,12,165.0,100.0,17.552,null,null,"2019-11-06"],["CSCO","CSCO","CISCO SYSTEMS","Cisco Systems, Inc.","NSDQ","USD",11,11,11,10,2,2,2,2,7,6,6,6,0,0,0,0,0,0,0,0,1.8,1.74,1.74,1.78,52.833,53.5,18,59.0,45.0,3.988,null,null,"2019-11-15"],["SD","CVX","CHEVRON CORP","Chevron Corporation","NYSE","USD",11,10,10,10,2,2,2,2,1,1,1,2,0,0,0,0,0,0,0,0,1.25,1.27,1.27,1.39,136.916,137.0,12,145.0,125.0,6.734,null,null,"2019-11-26"],["DOW","DD","DUPONT DE NEMRS","DuPont de Nemours, Inc.","NYSE","USD",10,10,10,10,0,0,0,0,5,5,5,6,0,0,0,0,0,0,0,0,1.67,1.67,1.67,1.75,81.083,82.0,12,87.0,68.0,5.55,null,null,"2019-11-18"],["DIS","DIS","DISNEY WALT","The Walt Disney Company","NYSE","USD",11,10,11,10,1,1,1,1,4,4,3,3,0,0,0,0,0,0,0,0,1.53,1.57,1.43,1.46,158.937,160.0,16,175.0,139.0,11.676,null,null,"2019-11-27"],["GE","GE","GENL ELECTRIC","General Electric Company","NYSE","USD",3,4,5,5,0,0,1,1,8,8,8,7,0,0,0,0,1,1,1,1,2.67,2.54,2.4,2.36,11.166,11.5,9,17.0,5.0,3.297,null,null,"2019-11-22"],["GS&","GS","GOLDMAN SACHS","The Goldman Sachs Group, Inc.","NYSE","USD",4,4,4,4,1,1,1,1,6,6,6,6,0,0,0,0,1,1,1,1,2.42,2.42,2.42,2.42,253.0,248.5,10,311.0,219.0,25.841,null,null,"2019-11-18"],["HOMD","HD","HOME DEPOT","The Home Depot, Inc.","NYSE","USD",8,10,10,10,2,2,2,2,10,8,8,7,0,0,0,0,0,0,0,0,2.08,1.88,1.88,1.82,241.333,240.0,18,269.0,215.0,15.996,null,null,"2019-11-25"],["IBM","IBM","INTL BUS MACH","International Business Machines Corporation","NYSE","USD",4,4,4,5,2,2,2,2,9,9,9,9,0,0,0,0,0,0,1,1,2.3,2.3,2.47,2.38,154.25,153.5,12,170.0,133.0,13.705,null,null,"2019-11-28"],["ITL","INTC","INTEL CORP","Intel Corporation","NSDQ","USD",8,8,9,9,1,1,2,2,12,12,11,11,1,1,1,1,5,5,5,5,2.78,2.78,2.68,2.68,56.263,58.0,19,70.0,38.0,9.926,null,null,"2019-11-20"],["JNJ","JNJ","JOHNSON & JOHNS","Johnson & Johnson","NYSE","USD",7,6,5,5,1,1,1,2,7,7,6,6,0,0,0,0,0,0,0,0,2.0,2.07,2.08,2.08,150.153,150.0,13,160.0,135.0,7.679,null,null,"2019-11-20"],["CHL","JPM","JPMORGAN CHASE","JPMorgan Chase & Co.","NYSE","USD",4,4,4,5,1,1,1,1,7,7,7,7,0,0,0,0,1,1,0,0,2.42,2.42,2.21,2.12,127.0,126.0,10,141.0,110.0,10.893,null,null,"2019-11-18"],["KO","KO","COCA COLA CO","Coca-Cola Company (The)","NYSE","USD",6,7,6,7,0,0,0,0,7,7,8,8,0,0,0,0,0,0,0,0,2.08,2.0,2.14,2.07,57.5,60.0,14,63.0,50.0,4.536,null,null,"2019-10-25"],["MCD","MCD","MCDONALDS CORP","McDonald's Corporation","NYSE","USD",17,17,19,18,1,1,1,2,7,5,5,5,0,0,0,0,0,0,0,0,1.58,1.46,1.42,1.46,218.954,220.0,22,240.0,193.0,11.449,null,null,"2019-11-27"],["MMM","MMM","3M CO","3M Company","NYSE","USD",1,1,0,0,0,0,0,0,9,9,9,9,0,0,0,0,2,2,2,2,3.17,3.17,3.36,3.36,168.0,174.0,9,182.0,143.0,12.786,null,null,"2019-11-22"],["MRK","MRK","MERCK & CO INC","Merck & Co., Inc.","NYSE","USD",6,6,9,9,1,1,1,1,3,3,2,2,0,0,0,0,0,0,0,0,1.65,1.65,1.38,1.38,93.25,94.0,8,103.0,84.0,5.946,null,null,"2019-11-21"],["MSFT","MSFT","MICROSOFT CORP","Microsoft Corporation","NSDQ","USD",21,21,19,21,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1.13,1.13,1.24,1.22,158.571,160.0,21,170.0,131.0,7.883,null,null,"2019-11-17"],["NIKE","NKE","NIKE INC-B","NIKE, Inc.","NYSE","USD",12,11,11,11,3,2,2,2,6,6,5,5,0,0,1,1,1,1,0,0,1.84,1.88,1.76,1.76,102.812,102.0,24,150.0,82.5,12.478,null,null,"2019-11-25"],["PFE","PFE","PFIZER INC","Pfizer Inc.","NYSE","USD",4,4,4,4,0,0,0,0,5,6,6,6,0,0,0,0,0,0,0,0,2.11,2.2,2.2,2.2,41.714,39.0,7,53.0,36.0,6.369,null,null,"2019-11-21"],["PG","PG","PROCTER & GAMBL","Procter & Gamble Company (The)","NYSE","USD",7,7,8,9,1,1,1,1,6,6,5,5,0,0,0,0,0,0,0,0,1.93,1.93,1.79,1.73,123.833,126.5,12,139.0,104.0,12.013,null,null,"2019-11-05"],["SPM","TRV","TRAVELERS COS","The Travelers Companies, Inc.","NYSE","USD",4,4,3,4,0,0,0,0,10,9,9,8,0,0,0,0,4,4,4,4,2.96,2.96,3.08,2.96,146.583,146.0,12,174.0,128.0,13.627,null,null,"2019-11-14"],["UNIH","UNH","UNITEDHEALTH GP","UnitedHealth Group Incorporated","NYSE","USD",12,12,14,14,1,1,1,1,4,4,2,1,0,0,0,0,0,0,0,0,1.5,1.5,1.26,1.16,286.944,290.5,18,335.0,245.0,25.677,null,null,"2019-11-26"],["UA","UTX","UTD TECHS CORP","United Technologies Corporation","NYSE","USD",9,9,9,9,0,0,0,0,4,4,4,3,0,0,0,0,0,0,0,0,1.62,1.62,1.62,1.5,156.888,154.0,9,195.0,120.0,20.015,null,null,"2019-10-27"],["VISA","V","VISA INC-A","Visa Inc.","NYSE","USD",19,20,20,20,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1.14,1.14,1.14,1.14,205.19,205.0,21,239.0,187.0,11.456,null,null,"2019-11-22"],["BEL","VZ","VERIZON COMM","Verizon Communications Inc.","NYSE","USD",4,4,5,5,0,0,0,0,11,10,9,11,0,0,0,0,0,0,0,0,2.47,2.43,2.29,2.38,62.322,63.0,16,70.0,53.0,4.588,null,null,"2019-11-15"],["WMS","WMT","WALMART INC","Walmart Inc.","NYSE","USD",12,10,10,11,3,3,3,3,7,7,8,8,0,0,0,0,0,0,0,0,1.74,1.81,1.87,1.83,126.045,130.0,22,140.0,95.0,12.673,null,null,"2019-11-21"],["J","XOM","EXXON MOBIL CRP","Exxon Mobil Corporation","NYSE","USD",3,3,3,3,0,0,0,0,12,11,10,11,0,0,0,0,1,1,1,1,2.75,2.73,2.71,2.73,80.0,79.0,13,100.0,63.0,8.869,null,null,"2019-11-26"]],"columns":[{"name":"m_ticker","type":"String"},{"name":"ticker","type":"String"},{"name":"comp_name","type":"String"},{"name":"comp_name_2","type":"String"},{"name":"exchange","type":"String"},{"name":"currency_code","type":"String"},{"name":"rating_cnt_strong_buys","type":"Integer"},{"name":"rating_cnt_strong_buys_1m_ago","type":"Integer"},{"name":"rating_cnt_strong_buys_2m_ago","type":"Integer"},{"name":"rating_cnt_strong_buys_3m_ago","type":"Integer"},{"name":"rating_cnt_buys","type":"Integer"},{"name":"rating_cnt_buys_1m_ago","type":"Integer"},{"name":"rating_cnt_buys_2m_ago","type":"Integer"},{"name":"rating_cnt_buys_3m_ago","type":"Integer"},{"name":"rating_cnt_holds","type":"Integer"},{"name":"rating_cnt_holds_1m_ago","type":"Integer"},{"name":"rating_cnt_holds_2m_ago","type":"Integer"},{"name":"rating_cnt_holds_3m_ago","type":"Integer"},{"name":"rating_cnt_sells","type":"Integer"},{"name":"rating_cnt_sells_1m_ago","type":"Integer"},{"name":"rating_cnt_sells_2m_ago","type":"Integer"},{"name":"rating_cnt_sells_3m_ago","type":"Integer"},{"name":"rating_cnt_strong_sells","type":"Integer"},{"name":"rating_cnt_strong_sells_1m_ago","type":"Integer"},{"name":"rating_cnt_strong_sells_2m_ago","type":"Integer"},{"name":"rating_cnt_strong_sells_3m_ago","type":"Integer"},{"name":"rating_mean","type":"BigDecimal(3,2)"},{"name":"rating_mean_1m_ago","type":"BigDecimal(3,2)"},{"name":"rating_mean_2m_ago","type":"BigDecimal(3,2)"},{"name":"rating_mean_3m_ago","type":"BigDecimal(3,2)"},{"name":"tp_mean_est","type":"BigDecimal(9,3)"},{"name":"tp_median_est","type":"BigDecimal(9,3)"},{"name":"tp_cnt_est","type":"Integer"},{"name":"tp_high_est","type":"BigDecimal(9,3)"},{"name":"tp_low_est","type":"BigDecimal(9,3)"},{"name":"tp_std_dev_est","type":"BigDecimal(8,3)"},{"name":"tp_cnt_est_rev_up","type":"Integer"},{"name":"tp_cnt_est_rev_down","type":"Integer"},{"name":"last_rev_date","type":"String"}]},"meta":{"next_cursor_id":null}}