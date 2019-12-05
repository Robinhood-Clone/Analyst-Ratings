
const sampleRatings =
  [{
    "ticker": "COF.WS",
    "companyName": "Capital One Financial Corporation",
    "rating_cnt_buys": 5,
    "rating_cnt_holds": 29,
    "rating_cnt_sells": 14
  }, {
    "ticker": "TOO^A",
    "companyName": "Teekay Offshore Partners L.P.",
    "rating_cnt_buys": 30,
    "rating_cnt_holds": 10,
    "rating_cnt_sells": 29
  }, {
    "ticker": "WFC^R",
    "companyName": "Wells Fargo & Company",
    "rating_cnt_buys": 15,
    "rating_cnt_holds": 27,
    "rating_cnt_sells": 19
  }, {
    "ticker": "ABR^C",
    "companyName": "Arbor Realty Trust",
    "rating_cnt_buys": 26,
    "rating_cnt_holds": 27,
    "rating_cnt_sells": 24
  }, {
    "ticker": "GGB",
    "companyName": "Gerdau S.A.",
    "rating_cnt_buys": 3,
    "rating_cnt_holds": 7,
    "rating_cnt_sells": 3
  }, {
    "ticker": "VWR",
    "companyName": "VWR Corporation",
    "rating_cnt_buys": 13,
    "rating_cnt_holds": 19,
    "rating_cnt_sells": 23
  }, {
    "ticker": "FDIV",
    "companyName": "First Trust Strategic Income ETF",
    "rating_cnt_buys": 6,
    "rating_cnt_holds": 2,
    "rating_cnt_sells": 18
  }, {
    "ticker": "RICE",
    "companyName": "Rice Energy Inc.",
    "rating_cnt_buys": 12,
    "rating_cnt_holds": 15,
    "rating_cnt_sells": 20
  }, {
    "ticker": "MXL",
    "companyName": "MaxLinear, Inc",
    "rating_cnt_buys": 2,
    "rating_cnt_holds": 21,
    "rating_cnt_sells": 16
  }, {
    "ticker": "SORL",
    "companyName": "SORL Auto Parts, Inc.",
    "rating_cnt_buys": 1,
    "rating_cnt_holds": 5,
    "rating_cnt_sells": 25
  }, {
    "ticker": "IDTI",
    "companyName": "Integrated Device Technology, Inc.",
    "rating_cnt_buys": 23,
    "rating_cnt_holds": 3,
    "rating_cnt_sells": 23
  }, {
    "ticker": "LITE",
    "companyName": "Lumentum Holdings Inc.",
    "rating_cnt_buys": 20,
    "rating_cnt_holds": 9,
    "rating_cnt_sells": 15
  }, {
    "ticker": "DYNT",
    "companyName": "Dynatronics Corporation",
    "rating_cnt_buys": 24,
    "rating_cnt_holds": 21,
    "rating_cnt_sells": 16
  }, {
    "ticker": "IBKR",
    "companyName": "Interactive Brokers Group, Inc.",
    "rating_cnt_buys": 22,
    "rating_cnt_holds": 30,
    "rating_cnt_sells": 11
  }, {
    "ticker": "ACCO",
    "companyName": "Acco Brands Corporation",
    "rating_cnt_buys": 2,
    "rating_cnt_holds": 16,
    "rating_cnt_sells": 13
  }, {
    "ticker": "NATH",
    "companyName": "Nathan's Famous, Inc.",
    "rating_cnt_buys": 24,
    "rating_cnt_holds": 8,
    "rating_cnt_sells": 17
  }, {
    "ticker": "HPQ",
    "companyName": "HP Inc.",
    "rating_cnt_buys": 15,
    "rating_cnt_holds": 9,
    "rating_cnt_sells": 6
  }, {
    "ticker": "AKTS",
    "companyName": "Akoustis Technologies, Inc.",
    "rating_cnt_buys": 16,
    "rating_cnt_holds": 5,
    "rating_cnt_sells": 20
  }, {
    "ticker": "THST",
    "companyName": "Truett-Hurst, Inc.",
    "rating_cnt_buys": 15,
    "rating_cnt_holds": 26,
    "rating_cnt_sells": 18
  }, {
    "ticker": "KNDI",
    "companyName": "Kandi Technologies Group, Inc.",
    "rating_cnt_buys": 5,
    "rating_cnt_holds": 2,
    "rating_cnt_sells": 2
  }, {
    "ticker": "WBC",
    "companyName": "Wabco Holdings Inc.",
    "rating_cnt_buys": 26,
    "rating_cnt_holds": 23,
    "rating_cnt_sells": 14
  }, {
    "ticker": "GNRT",
    "companyName": "Gener8 Maritime, Inc.",
    "rating_cnt_buys": 21,
    "rating_cnt_holds": 4,
    "rating_cnt_sells": 17
  }, {
    "ticker": "DDR^K",
    "companyName": "DDR Corp.",
    "rating_cnt_buys": 15,
    "rating_cnt_holds": 6,
    "rating_cnt_sells": 19
  }, {
    "ticker": "BPK",
    "companyName": "Blackrock Municipal 2018 Term Trust",
    "rating_cnt_buys": 30,
    "rating_cnt_holds": 15,
    "rating_cnt_sells": 18
  }, {
    "ticker": "ADNT",
    "companyName": "Adient plc",
    "rating_cnt_buys": 14,
    "rating_cnt_holds": 22,
    "rating_cnt_sells": 10
  }, {
    "ticker": "UAN",
    "companyName": "CVR Partners, LP",
    "rating_cnt_buys": 30,
    "rating_cnt_holds": 6,
    "rating_cnt_sells": 29
  }, {
    "ticker": "FMSA",
    "companyName": "Fairmount Santrol Holdings Inc.",
    "rating_cnt_buys": 22,
    "rating_cnt_holds": 4,
    "rating_cnt_sells": 24
  }, {
    "ticker": "ROSE",
    "companyName": "Rosehill Resources Inc.",
    "rating_cnt_buys": 3,
    "rating_cnt_holds": 10,
    "rating_cnt_sells": 5
  }, {
    "ticker": "BPT",
    "companyName": "BP Prudhoe Bay Royalty Trust",
    "rating_cnt_buys": 15,
    "rating_cnt_holds": 9,
    "rating_cnt_sells": 22
  }, {
    "ticker": "PLYA",
    "companyName": "Playa Hotels & Resorts N.V.",
    "rating_cnt_buys": 17,
    "rating_cnt_holds": 7,
    "rating_cnt_sells": 8
  }, {
    "ticker": "SAJA",
    "companyName": "Sajan, Inc.",
    "rating_cnt_buys": 26,
    "rating_cnt_holds": 26,
    "rating_cnt_sells": 26
  }, {
    "ticker": "CBK",
    "companyName": "Christopher & Banks Corporation",
    "rating_cnt_buys": 11,
    "rating_cnt_holds": 4,
    "rating_cnt_sells": 22
  }, {
    "ticker": "TIPT",
    "companyName": "Tiptree Inc.",
    "rating_cnt_buys": 21,
    "rating_cnt_holds": 9,
    "rating_cnt_sells": 14
  }, {
    "ticker": "EVEP",
    "companyName": "EV Energy Partners, L.P.",
    "rating_cnt_buys": 11,
    "rating_cnt_holds": 29,
    "rating_cnt_sells": 18
  }, {
    "ticker": "NTEST.A",
    "companyName": "NASDAQ TEST STOCK",
    "rating_cnt_buys": 5,
    "rating_cnt_holds": 22,
    "rating_cnt_sells": 30
  }, {
    "ticker": "KVHI",
    "companyName": "KVH Industries, Inc.",
    "rating_cnt_buys": 30,
    "rating_cnt_holds": 14,
    "rating_cnt_sells": 8
  }, {
    "ticker": "SDLP",
    "companyName": "Seadrill Partners LLC",
    "rating_cnt_buys": 25,
    "rating_cnt_holds": 7,
    "rating_cnt_sells": 16
  }, {
    "ticker": "WBT",
    "companyName": "Welbilt, Inc.",
    "rating_cnt_buys": 4,
    "rating_cnt_holds": 6,
    "rating_cnt_sells": 18
  }, {
    "ticker": "CIB",
    "companyName": "BanColombia S.A.",
    "rating_cnt_buys": 6,
    "rating_cnt_holds": 12,
    "rating_cnt_sells": 1
  }, {
    "ticker": "AGTC",
    "companyName": "Applied Genetic Technologies Corporation",
    "rating_cnt_buys": 12,
    "rating_cnt_holds": 8,
    "rating_cnt_sells": 17
  }, {
    "ticker": "NEE^C",
    "companyName": "NextEra Energy, Inc.",
    "rating_cnt_buys": 12,
    "rating_cnt_holds": 11,
    "rating_cnt_sells": 27
  }, {
    "ticker": "C^J",
    "companyName": "Citigroup Inc.",
    "rating_cnt_buys": 15,
    "rating_cnt_holds": 8,
    "rating_cnt_sells": 25
  }, {
    "ticker": "PDVW",
    "companyName": "pdvWireless, Inc.",
    "rating_cnt_buys": 18,
    "rating_cnt_holds": 10,
    "rating_cnt_sells": 15
  }, {
    "ticker": "RYAAY",
    "companyName": "Ryanair Holdings plc",
    "rating_cnt_buys": 18,
    "rating_cnt_holds": 7,
    "rating_cnt_sells": 9
  }, {
    "ticker": "OPP",
    "companyName": "RiverNorth/DoubleLine Strategic Opportunity Fund, Inc.",
    "rating_cnt_buys": 22,
    "rating_cnt_holds": 28,
    "rating_cnt_sells": 3
  }, {
    "ticker": "NHF",
    "companyName": "Highland Funds I",
    "rating_cnt_buys": 4,
    "rating_cnt_holds": 24,
    "rating_cnt_sells": 21
  }, {
    "ticker": "ATU",
    "companyName": "Actuant Corporation",
    "rating_cnt_buys": 1,
    "rating_cnt_holds": 27,
    "rating_cnt_sells": 5
  }, {
    "ticker": "SB^B",
    "companyName": "Safe Bulkers, Inc",
    "rating_cnt_buys": 30,
    "rating_cnt_holds": 21,
    "rating_cnt_sells": 21
  }, {
    "ticker": "AMGP",
    "companyName": "Antero Midstream GP LP",
    "rating_cnt_buys": 29,
    "rating_cnt_holds": 30,
    "rating_cnt_sells": 24
  }, {
    "ticker": "MRIN",
    "companyName": "Marin Software Incorporated",
    "rating_cnt_buys": 25,
    "rating_cnt_holds": 23,
    "rating_cnt_sells": 25
  }, {
    "ticker": "JBN",
    "companyName": "Select Asset Inc.",
    "rating_cnt_buys": 7,
    "rating_cnt_holds": 2,
    "rating_cnt_sells": 5
  }, {
    "ticker": "JRO",
    "companyName": "Nuveen Floating Rate Income Opportuntiy Fund",
    "rating_cnt_buys": 24,
    "rating_cnt_holds": 14,
    "rating_cnt_sells": 23
  }, {
    "ticker": "SPB           ",
    "companyName": "Spectrum Brands Holdings, Inc.",
    "rating_cnt_buys": 20,
    "rating_cnt_holds": 4,
    "rating_cnt_sells": 13
  }, {
    "ticker": "EURN",
    "companyName": "Euronav NV",
    "rating_cnt_buys": 27,
    "rating_cnt_holds": 9,
    "rating_cnt_sells": 13
  }, {
    "ticker": "SHW",
    "companyName": "Sherwin-Williams Company (The)",
    "rating_cnt_buys": 22,
    "rating_cnt_holds": 30,
    "rating_cnt_sells": 25
  }, {
    "ticker": "JPM^E",
    "companyName": "J P Morgan Chase & Co",
    "rating_cnt_buys": 4,
    "rating_cnt_holds": 20,
    "rating_cnt_sells": 19
  }, {
    "ticker": "SHIP",
    "companyName": "Seanergy Maritime Holdings Corp",
    "rating_cnt_buys": 1,
    "rating_cnt_holds": 1,
    "rating_cnt_sells": 14
  }, {
    "ticker": "OSTK",
    "companyName": "Overstock.com, Inc.",
    "rating_cnt_buys": 26,
    "rating_cnt_holds": 16,
    "rating_cnt_sells": 3
  }, {
    "ticker": "IKNX",
    "companyName": "Ikonics Corporation",
    "rating_cnt_buys": 16,
    "rating_cnt_holds": 26,
    "rating_cnt_sells": 12
  }, {
    "ticker": "DATA",
    "companyName": "Tableau Software, Inc.",
    "rating_cnt_buys": 22,
    "rating_cnt_holds": 5,
    "rating_cnt_sells": 8
  }, {
    "ticker": "BPFHP",
    "companyName": "Boston Private Financial Holdings, Inc.",
    "rating_cnt_buys": 2,
    "rating_cnt_holds": 16,
    "rating_cnt_sells": 21
  }, {
    "ticker": "LYTS",
    "companyName": "LSI Industries Inc.",
    "rating_cnt_buys": 11,
    "rating_cnt_holds": 28,
    "rating_cnt_sells": 5
  }, {
    "ticker": "AAN",
    "companyName": "Aaron's,  Inc.",
    "rating_cnt_buys": 20,
    "rating_cnt_holds": 13,
    "rating_cnt_sells": 27
  }, {
    "ticker": "YGE",
    "companyName": "Yingli Green Energy Holding Company Limited",
    "rating_cnt_buys": 9,
    "rating_cnt_holds": 9,
    "rating_cnt_sells": 22
  }, {
    "ticker": "MFO",
    "companyName": "MFA Financial, Inc.",
    "rating_cnt_buys": 1,
    "rating_cnt_holds": 24,
    "rating_cnt_sells": 3
  }, {
    "ticker": "HCN",
    "companyName": "Welltower Inc.",
    "rating_cnt_buys": 25,
    "rating_cnt_holds": 29,
    "rating_cnt_sells": 19
  }, {
    "ticker": "KOSS",
    "companyName": "Koss Corporation",
    "rating_cnt_buys": 14,
    "rating_cnt_holds": 28,
    "rating_cnt_sells": 7
  }, {
    "ticker": "FPO",
    "companyName": "First Potomac Realty Trust",
    "rating_cnt_buys": 16,
    "rating_cnt_holds": 25,
    "rating_cnt_sells": 7
  }, {
    "ticker": "STAR^D",
    "companyName": "iStar Financial Inc.",
    "rating_cnt_buys": 7,
    "rating_cnt_holds": 3,
    "rating_cnt_sells": 27
  }, {
    "ticker": "FNK",
    "companyName": "First Trust Mid Cap Value AlphaDEX Fund",
    "rating_cnt_buys": 23,
    "rating_cnt_holds": 25,
    "rating_cnt_sells": 6
  }, {
    "ticker": "MOGLC",
    "companyName": "Gabelli NextShares Trust",
    "rating_cnt_buys": 15,
    "rating_cnt_holds": 2,
    "rating_cnt_sells": 18
  }, {
    "ticker": "NTRS",
    "companyName": "Northern Trust Corporation",
    "rating_cnt_buys": 10,
    "rating_cnt_holds": 27,
    "rating_cnt_sells": 22
  }, {
    "ticker": "MDVXW",
    "companyName": "Medovex Corp.",
    "rating_cnt_buys": 6,
    "rating_cnt_holds": 14,
    "rating_cnt_sells": 13
  }, {
    "ticker": "MHN",
    "companyName": "Blackrock MuniHoldings New York Quality Fund, Inc.",
    "rating_cnt_buys": 24,
    "rating_cnt_holds": 8,
    "rating_cnt_sells": 11
  }, {
    "ticker": "DSKEW",
    "companyName": "Daseke, Inc.",
    "rating_cnt_buys": 12,
    "rating_cnt_holds": 5,
    "rating_cnt_sells": 14
  }, {
    "ticker": "UTL",
    "companyName": "UNITIL Corporation",
    "rating_cnt_buys": 6,
    "rating_cnt_holds": 8,
    "rating_cnt_sells": 5
  }, {
    "ticker": "FHN",
    "companyName": "First Horizon National Corporation",
    "rating_cnt_buys": 30,
    "rating_cnt_holds": 30,
    "rating_cnt_sells": 2
  }, {
    "ticker": "ORG",
    "companyName": "The Organics ETF",
    "rating_cnt_buys": 5,
    "rating_cnt_holds": 21,
    "rating_cnt_sells": 18
  }, {
    "ticker": "PFS",
    "companyName": "Provident Financial Services, Inc",
    "rating_cnt_buys": 20,
    "rating_cnt_holds": 3,
    "rating_cnt_sells": 4
  }, {
    "ticker": "JMP",
    "companyName": "JMP Group LLC",
    "rating_cnt_buys": 27,
    "rating_cnt_holds": 6,
    "rating_cnt_sells": 13
  }, {
    "ticker": "IDCC",
    "companyName": "InterDigital, Inc.",
    "rating_cnt_buys": 20,
    "rating_cnt_holds": 8,
    "rating_cnt_sells": 16
  }, {
    "ticker": "UFI",
    "companyName": "Unifi, Inc.",
    "rating_cnt_buys": 15,
    "rating_cnt_holds": 15,
    "rating_cnt_sells": 13
  }, {
    "ticker": "AIV^A",
    "companyName": "Apartment Investment and Management Company",
    "rating_cnt_buys": 17,
    "rating_cnt_holds": 13,
    "rating_cnt_sells": 3
  }, {
    "ticker": "BBL",
    "companyName": "BHP Billiton plc",
    "rating_cnt_buys": 19,
    "rating_cnt_holds": 22,
    "rating_cnt_sells": 1
  }, {
    "ticker": "CAPR",
    "companyName": "Capricor Therapeutics, Inc.",
    "rating_cnt_buys": 15,
    "rating_cnt_holds": 8,
    "rating_cnt_sells": 12
  }, {
    "ticker": "FLY",
    "companyName": "Fly Leasing Limited",
    "rating_cnt_buys": 30,
    "rating_cnt_holds": 5,
    "rating_cnt_sells": 28
  }, {
    "ticker": "PAY",
    "companyName": "Verifone Systems, Inc.",
    "rating_cnt_buys": 28,
    "rating_cnt_holds": 4,
    "rating_cnt_sells": 8
  }, {
    "ticker": "GIB",
    "companyName": "CGI Group, Inc.",
    "rating_cnt_buys": 1,
    "rating_cnt_holds": 20,
    "rating_cnt_sells": 15
  }, {
    "ticker": "GEF.B",
    "companyName": "Greif Bros. Corporation",
    "rating_cnt_buys": 22,
    "rating_cnt_holds": 16,
    "rating_cnt_sells": 12
  }, {
    "ticker": "KRO",
    "companyName": "Kronos Worldwide Inc",
    "rating_cnt_buys": 7,
    "rating_cnt_holds": 1,
    "rating_cnt_sells": 1
  }, {
    "ticker": "JCOM",
    "companyName": "j2 Global, Inc.",
    "rating_cnt_buys": 4,
    "rating_cnt_holds": 24,
    "rating_cnt_sells": 21
  }, {
    "ticker": "GARS",
    "companyName": "Garrison Capital Inc.",
    "rating_cnt_buys": 17,
    "rating_cnt_holds": 20,
    "rating_cnt_sells": 18
  }, {
    "ticker": "AKO.A",
    "companyName": "Embotelladora Andina S.A.",
    "rating_cnt_buys": 11,
    "rating_cnt_holds": 30,
    "rating_cnt_sells": 26
  }, {
    "ticker": "PBBI",
    "companyName": "PB Bancorp, Inc.",
    "rating_cnt_buys": 26,
    "rating_cnt_holds": 5,
    "rating_cnt_sells": 9
  }, {
    "ticker": "TACOW",
    "companyName": "Del Taco Restaurants, Inc.",
    "rating_cnt_buys": 8,
    "rating_cnt_holds": 18,
    "rating_cnt_sells": 25
  }, {
    "ticker": "CHY",
    "companyName": "Calamos Convertible and High Income Fund",
    "rating_cnt_buys": 1,
    "rating_cnt_holds": 26,
    "rating_cnt_sells": 9
  }, {
    "ticker": "EZT",
    "companyName": "Entergy Texas Inc",
    "rating_cnt_buys": 22,
    "rating_cnt_holds": 4,
    "rating_cnt_sells": 15
  }, {
    "ticker": "PACW",
    "companyName": "PacWest Bancorp",
    "rating_cnt_buys": 25,
    "rating_cnt_holds": 18,
    "rating_cnt_sells": 25
  }, {
    "ticker": "WEN",
    "companyName": "Wendy's Company (The)",
    "rating_cnt_buys": 9,
    "rating_cnt_holds": 16,
    "rating_cnt_sells": 8
  }, {
    "ticker": "PTGX",
    "companyName": "Protagonist Therapeutics, Inc.",
    "rating_cnt_buys": 5,
    "rating_cnt_holds": 10,
    "rating_cnt_sells": 25
  }];


module.exports.sampleRatings = sampleRatings;