
const sampleRatings =
[{
  "ticker": "ASX",
  "companyName": "Advanced Semiconductor Engineering, Inc.",
  "ratingCountBuys": 7,
  "ratingCountHolds": 1,
  "ratingCountSells": 21,
  "buySummary": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
  "sellSummary": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum."
}, {
  "ticker": "RRGB",
  "companyName": "Red Robin Gourmet Burgers, Inc.",
  "ratingCountBuys": 27,
  "ratingCountHolds": 19,
  "ratingCountSells": 6,
  "buySummary": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
  "sellSummary": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi."
}, {
  "ticker": "TPC",
  "companyName": "Tutor Perini Corporation",
  "ratingCountBuys": 3,
  "ratingCountHolds": 14,
  "ratingCountSells": 22,
  "buySummary": "In congue. Etiam justo. Etiam pretium iaculis justo.",
  "sellSummary": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat."
}, {
  "ticker": "UHT",
  "companyName": "Universal Health Realty Income Trust",
  "ratingCountBuys": 2,
  "ratingCountHolds": 9,
  "ratingCountSells": 9,
  "buySummary": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
  "sellSummary": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet."
}, {
  "ticker": "FHCO",
  "companyName": "Female Health Company (The)",
  "ratingCountBuys": 11,
  "ratingCountHolds": 2,
  "ratingCountSells": 2,
  "buySummary": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
  "sellSummary": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh."
}, {
  "ticker": "MX",
  "companyName": "MagnaChip Semiconductor Corporation",
  "ratingCountBuys": 21,
  "ratingCountHolds": 5,
  "ratingCountSells": 5,
  "buySummary": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
  "sellSummary": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti."
}, {
  "ticker": "LYG",
  "companyName": "Lloyds Banking Group Plc",
  "ratingCountBuys": 22,
  "ratingCountHolds": 9,
  "ratingCountSells": 19,
  "buySummary": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
  "sellSummary": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus."
}, {
  "ticker": "GHL",
  "companyName": "Greenhill & Co., Inc.",
  "ratingCountBuys": 15,
  "ratingCountHolds": 3,
  "ratingCountSells": 24,
  "buySummary": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
  "sellSummary": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis."
}, {
  "ticker": "PTEN",
  "companyName": "Patterson-UTI Energy, Inc.",
  "ratingCountBuys": 25,
  "ratingCountHolds": 23,
  "ratingCountSells": 20,
  "buySummary": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
  "sellSummary": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum."
}, {
  "ticker": "CYD",
  "companyName": "China Yuchai International Limited",
  "ratingCountBuys": 10,
  "ratingCountHolds": 9,
  "ratingCountSells": 11,
  "buySummary": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
  "sellSummary": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh."
}, {
  "ticker": "BSMX",
  "companyName": "Grupo Financiero Santander Mexico S.A. B. de C.V.",
  "ratingCountBuys": 19,
  "ratingCountHolds": 27,
  "ratingCountSells": 19,
  "buySummary": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
  "sellSummary": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
}, {
  "ticker": "NVAX",
  "companyName": "Novavax, Inc.",
  "ratingCountBuys": 5,
  "ratingCountHolds": 11,
  "ratingCountSells": 15,
  "buySummary": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
  "sellSummary": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero."
}, {
  "ticker": "ASPN",
  "companyName": "Aspen Aerogels, Inc.",
  "ratingCountBuys": 26,
  "ratingCountHolds": 21,
  "ratingCountSells": 26,
  "buySummary": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
  "sellSummary": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis."
}, {
  "ticker": "ETM",
  "companyName": "Entercom Communications Corporation",
  "ratingCountBuys": 18,
  "ratingCountHolds": 25,
  "ratingCountSells": 30,
  "buySummary": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
  "sellSummary": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui."
}, {
  "ticker": "FAAR",
  "companyName": "First Trust Alternative Absolute Return Strategy ETF",
  "ratingCountBuys": 17,
  "ratingCountHolds": 16,
  "ratingCountSells": 25,
  "buySummary": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
  "sellSummary": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti."
}, {
  "ticker": "SPE",
  "companyName": "Special Opportunities Fund Inc.",
  "ratingCountBuys": 29,
  "ratingCountHolds": 18,
  "ratingCountSells": 5,
  "buySummary": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
  "sellSummary": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum."
}, {
  "ticker": "RLJ",
  "companyName": "RLJ Lodging Trust",
  "ratingCountBuys": 18,
  "ratingCountHolds": 8,
  "ratingCountSells": 25,
  "buySummary": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
  "sellSummary": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet."
}, {
  "ticker": "RNR^E",
  "companyName": "RenaissanceRe Holdings Ltd.",
  "ratingCountBuys": 6,
  "ratingCountHolds": 23,
  "ratingCountSells": 8,
  "buySummary": "In congue. Etiam justo. Etiam pretium iaculis justo.",
  "sellSummary": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris."
}, {
  "ticker": "BPFHP",
  "companyName": "Boston Private Financial Holdings, Inc.",
  "ratingCountBuys": 1,
  "ratingCountHolds": 27,
  "ratingCountSells": 14,
  "buySummary": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
  "sellSummary": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus."
}, {
  "ticker": "BPL",
  "companyName": "Buckeye Partners L.P.",
  "ratingCountBuys": 24,
  "ratingCountHolds": 19,
  "ratingCountSells": 5,
  "buySummary": "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
  "sellSummary": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis."
}, {
  "ticker": "APRI",
  "companyName": "Apricus Biosciences, Inc.",
  "ratingCountBuys": 22,
  "ratingCountHolds": 12,
  "ratingCountSells": 17,
  "buySummary": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
  "sellSummary": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero."
}, {
  "ticker": "QSII",
  "companyName": "Quality Systems, Inc.",
  "ratingCountBuys": 3,
  "ratingCountHolds": 25,
  "ratingCountSells": 29,
  "buySummary": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
  "sellSummary": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus."
}, {
  "ticker": "AIR",
  "companyName": "AAR Corp.",
  "ratingCountBuys": 15,
  "ratingCountHolds": 3,
  "ratingCountSells": 27,
  "buySummary": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
  "sellSummary": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl."
}, {
  "ticker": "GPE^A",
  "companyName": "Georgia Power Company",
  "ratingCountBuys": 4,
  "ratingCountHolds": 11,
  "ratingCountSells": 23,
  "buySummary": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
  "sellSummary": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat."
}, {
  "ticker": "EDR",
  "companyName": "Education Realty Trust Inc.",
  "ratingCountBuys": 19,
  "ratingCountHolds": 15,
  "ratingCountSells": 2,
  "buySummary": "In congue. Etiam justo. Etiam pretium iaculis justo.",
  "sellSummary": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus."
}, {
  "ticker": "LPLA",
  "companyName": "LPL Financial Holdings Inc.",
  "ratingCountBuys": 30,
  "ratingCountHolds": 19,
  "ratingCountSells": 5,
  "buySummary": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
  "sellSummary": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam."
}, {
  "ticker": "CPF",
  "companyName": "CPB Inc.",
  "ratingCountBuys": 17,
  "ratingCountHolds": 12,
  "ratingCountSells": 30,
  "buySummary": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
  "sellSummary": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede."
}, {
  "ticker": "EPAM",
  "companyName": "EPAM Systems, Inc.",
  "ratingCountBuys": 11,
  "ratingCountHolds": 10,
  "ratingCountSells": 6,
  "buySummary": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
  "sellSummary": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero."
}, {
  "ticker": "PGH",
  "companyName": "Pengrowth Energy Corporation",
  "ratingCountBuys": 5,
  "ratingCountHolds": 10,
  "ratingCountSells": 23,
  "buySummary": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
  "sellSummary": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo."
}, {
  "ticker": "NTEST.A",
  "companyName": "NASDAQ TEST STOCK",
  "ratingCountBuys": 29,
  "ratingCountHolds": 6,
  "ratingCountSells": 18,
  "buySummary": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
  "sellSummary": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem."
}, {
  "ticker": "WVVIP",
  "companyName": "Willamette Valley Vineyards, Inc.",
  "ratingCountBuys": 5,
  "ratingCountHolds": 24,
  "ratingCountSells": 9,
  "buySummary": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
  "sellSummary": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui."
}, {
  "ticker": "STBA",
  "companyName": "S&T Bancorp, Inc.",
  "ratingCountBuys": 11,
  "ratingCountHolds": 16,
  "ratingCountSells": 19,
  "buySummary": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
  "sellSummary": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus."
}, {
  "ticker": "PSCH",
  "companyName": "PowerShares S&P SmallCap Health Care Portfolio",
  "ratingCountBuys": 24,
  "ratingCountHolds": 30,
  "ratingCountSells": 9,
  "buySummary": "Fusce consequat. Nulla nisl. Nunc nisl.",
  "sellSummary": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis."
}, {
  "ticker": "VVI",
  "companyName": "Viad Corp",
  "ratingCountBuys": 18,
  "ratingCountHolds": 1,
  "ratingCountSells": 20,
  "buySummary": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
  "sellSummary": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh."
}, {
  "ticker": "CPS",
  "companyName": "Cooper-Standard Holdings Inc.",
  "ratingCountBuys": 11,
  "ratingCountHolds": 24,
  "ratingCountSells": 21,
  "buySummary": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
  "sellSummary": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem."
}, {
  "ticker": "TDJ",
  "companyName": "Telephone and Data Systems, Inc.",
  "ratingCountBuys": 27,
  "ratingCountHolds": 21,
  "ratingCountSells": 23,
  "buySummary": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
  "sellSummary": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
}, {
  "ticker": "SNES",
  "companyName": "SenesTech, Inc.",
  "ratingCountBuys": 3,
  "ratingCountHolds": 8,
  "ratingCountSells": 7,
  "buySummary": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
  "sellSummary": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
}, {
  "ticker": "RESN",
  "companyName": "Resonant Inc.",
  "ratingCountBuys": 2,
  "ratingCountHolds": 8,
  "ratingCountSells": 10,
  "buySummary": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
  "sellSummary": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum."
}, {
  "ticker": "FNY",
  "companyName": "First Trust Mid Cap Growth AlphaDEX Fund",
  "ratingCountBuys": 2,
  "ratingCountHolds": 14,
  "ratingCountSells": 6,
  "buySummary": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
  "sellSummary": "In congue. Etiam justo. Etiam pretium iaculis justo."
}, {
  "ticker": "SBRAP",
  "companyName": "Sabra Healthcare REIT, Inc.",
  "ratingCountBuys": 19,
  "ratingCountHolds": 19,
  "ratingCountSells": 29,
  "buySummary": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
  "sellSummary": "Fusce consequat. Nulla nisl. Nunc nisl."
}, {
  "ticker": "EQFN",
  "companyName": "Equitable Financial Corp.",
  "ratingCountBuys": 2,
  "ratingCountHolds": 27,
  "ratingCountSells": 14,
  "buySummary": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
  "sellSummary": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus."
}, {
  "ticker": "TESS",
  "companyName": "TESSCO Technologies Incorporated",
  "ratingCountBuys": 16,
  "ratingCountHolds": 29,
  "ratingCountSells": 7,
  "buySummary": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
  "sellSummary": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo."
}, {
  "ticker": "QCLN",
  "companyName": "First Trust NASDAQ Clean Edge Green Energy Index Fund",
  "ratingCountBuys": 24,
  "ratingCountHolds": 26,
  "ratingCountSells": 21,
  "buySummary": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
  "sellSummary": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst."
}, {
  "ticker": "SBRAP",
  "companyName": "Sabra Healthcare REIT, Inc.",
  "ratingCountBuys": 15,
  "ratingCountHolds": 28,
  "ratingCountSells": 26,
  "buySummary": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
  "sellSummary": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum."
}, {
  "ticker": "DVCR",
  "companyName": "Diversicare Healthcare Services Inc.",
  "ratingCountBuys": 1,
  "ratingCountHolds": 4,
  "ratingCountSells": 7,
  "buySummary": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
  "sellSummary": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus."
}, {
  "ticker": "FAC",
  "companyName": "First Acceptance Corporation",
  "ratingCountBuys": 11,
  "ratingCountHolds": 10,
  "ratingCountSells": 13,
  "buySummary": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
  "sellSummary": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi."
}, {
  "ticker": "WPCS",
  "companyName": "WPCS International Incorporated",
  "ratingCountBuys": 15,
  "ratingCountHolds": 20,
  "ratingCountSells": 6,
  "buySummary": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
  "sellSummary": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti."
}, {
  "ticker": "RICE",
  "companyName": "Rice Energy Inc.",
  "ratingCountBuys": 14,
  "ratingCountHolds": 5,
  "ratingCountSells": 30,
  "buySummary": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
  "sellSummary": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem."
}, {
  "ticker": "LANC",
  "companyName": "Lancaster Colony Corporation",
  "ratingCountBuys": 18,
  "ratingCountHolds": 18,
  "ratingCountSells": 20,
  "buySummary": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
  "sellSummary": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus."
}, {
  "ticker": "WASH",
  "companyName": "Washington Trust Bancorp, Inc.",
  "ratingCountBuys": 6,
  "ratingCountHolds": 9,
  "ratingCountSells": 25,
  "buySummary": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
  "sellSummary": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius."
}, {
  "ticker": "NCBS",
  "companyName": "Nicolet Bankshares Inc.",
  "ratingCountBuys": 4,
  "ratingCountHolds": 24,
  "ratingCountSells": 6,
  "buySummary": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
  "sellSummary": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus."
}, {
  "ticker": "UA",
  "companyName": "Under Armour, Inc.",
  "ratingCountBuys": 19,
  "ratingCountHolds": 28,
  "ratingCountSells": 30,
  "buySummary": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
  "sellSummary": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem."
}, {
  "ticker": "VG",
  "companyName": "Vonage Holdings Corp.",
  "ratingCountBuys": 20,
  "ratingCountHolds": 28,
  "ratingCountSells": 3,
  "buySummary": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
  "sellSummary": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui."
}, {
  "ticker": "DWAT",
  "companyName": "Arrow DWA Tactical ETF",
  "ratingCountBuys": 26,
  "ratingCountHolds": 6,
  "ratingCountSells": 23,
  "buySummary": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
  "sellSummary": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
}, {
  "ticker": "APVO",
  "companyName": "Aptevo Therapeutics Inc.",
  "ratingCountBuys": 29,
  "ratingCountHolds": 18,
  "ratingCountSells": 11,
  "buySummary": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
  "sellSummary": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem."
}, {
  "ticker": "LVHD",
  "companyName": "Legg Mason Low Volatility High Dividend ETF",
  "ratingCountBuys": 6,
  "ratingCountHolds": 10,
  "ratingCountSells": 29,
  "buySummary": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
  "sellSummary": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo."
}, {
  "ticker": "NRCIB",
  "companyName": "National Research Corporation",
  "ratingCountBuys": 21,
  "ratingCountHolds": 13,
  "ratingCountSells": 27,
  "buySummary": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
  "sellSummary": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh."
}, {
  "ticker": "FCVT",
  "companyName": "First Trust SSI Strategic Convertible Securities ETF",
  "ratingCountBuys": 22,
  "ratingCountHolds": 9,
  "ratingCountSells": 29,
  "buySummary": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
  "sellSummary": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh."
}, {
  "ticker": "CTR",
  "companyName": "ClearBridge Energy MLP Total Return Fund Inc.",
  "ratingCountBuys": 1,
  "ratingCountHolds": 12,
  "ratingCountSells": 6,
  "buySummary": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
  "sellSummary": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum."
}, {
  "ticker": "SBLK",
  "companyName": "Star Bulk Carriers Corp.",
  "ratingCountBuys": 16,
  "ratingCountHolds": 24,
  "ratingCountSells": 14,
  "buySummary": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
  "sellSummary": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat."
}, {
  "ticker": "VGI",
  "companyName": "Virtus Global Multi-Sector Income Fund",
  "ratingCountBuys": 11,
  "ratingCountHolds": 29,
  "ratingCountSells": 11,
  "buySummary": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
  "sellSummary": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
}, {
  "ticker": "ACAD",
  "companyName": "ACADIA Pharmaceuticals Inc.",
  "ratingCountBuys": 25,
  "ratingCountHolds": 26,
  "ratingCountSells": 15,
  "buySummary": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
  "sellSummary": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
}, {
  "ticker": "DGICA",
  "companyName": "Donegal Group, Inc.",
  "ratingCountBuys": 24,
  "ratingCountHolds": 16,
  "ratingCountSells": 30,
  "buySummary": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
  "sellSummary": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi."
}, {
  "ticker": "BCE",
  "companyName": "BCE, Inc.",
  "ratingCountBuys": 25,
  "ratingCountHolds": 29,
  "ratingCountSells": 25,
  "buySummary": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
  "sellSummary": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem."
}, {
  "ticker": "CTV",
  "companyName": "Qwest Corporation",
  "ratingCountBuys": 22,
  "ratingCountHolds": 17,
  "ratingCountSells": 9,
  "buySummary": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
  "sellSummary": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi."
}, {
  "ticker": "BEBE",
  "companyName": "bebe stores, inc.",
  "ratingCountBuys": 16,
  "ratingCountHolds": 27,
  "ratingCountSells": 3,
  "buySummary": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
  "sellSummary": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem."
}, {
  "ticker": "TSLF",
  "companyName": "THL Credit Senior Loan Fund",
  "ratingCountBuys": 4,
  "ratingCountHolds": 1,
  "ratingCountSells": 20,
  "buySummary": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
  "sellSummary": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque."
}, {
  "ticker": "ESCA",
  "companyName": "Escalade, Incorporated",
  "ratingCountBuys": 24,
  "ratingCountHolds": 29,
  "ratingCountSells": 14,
  "buySummary": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
  "sellSummary": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi."
}, {
  "ticker": "CVLY",
  "companyName": "Codorus Valley Bancorp, Inc",
  "ratingCountBuys": 1,
  "ratingCountHolds": 25,
  "ratingCountSells": 1,
  "buySummary": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
  "sellSummary": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
}, {
  "ticker": "PFMT",
  "companyName": "Performant Financial Corporation",
  "ratingCountBuys": 21,
  "ratingCountHolds": 2,
  "ratingCountSells": 21,
  "buySummary": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
  "sellSummary": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi."
}, {
  "ticker": "LMB",
  "companyName": "Limbach Holdings, Inc.",
  "ratingCountBuys": 11,
  "ratingCountHolds": 4,
  "ratingCountSells": 29,
  "buySummary": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
  "sellSummary": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus."
}, {
  "ticker": "DWCH",
  "companyName": "Datawatch Corporation",
  "ratingCountBuys": 25,
  "ratingCountHolds": 3,
  "ratingCountSells": 7,
  "buySummary": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
  "sellSummary": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis."
}, {
  "ticker": "BC",
  "companyName": "Brunswick Corporation",
  "ratingCountBuys": 27,
  "ratingCountHolds": 20,
  "ratingCountSells": 3,
  "buySummary": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
  "sellSummary": "In congue. Etiam justo. Etiam pretium iaculis justo."
}, {
  "ticker": "WSM",
  "companyName": "Williams-Sonoma, Inc.",
  "ratingCountBuys": 23,
  "ratingCountHolds": 13,
  "ratingCountSells": 19,
  "buySummary": "Fusce consequat. Nulla nisl. Nunc nisl.",
  "sellSummary": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros."
}, {
  "ticker": "BBT^D",
  "companyName": "BB&T Corporation",
  "ratingCountBuys": 27,
  "ratingCountHolds": 17,
  "ratingCountSells": 21,
  "buySummary": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
  "sellSummary": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque."
}, {
  "ticker": "EDIT",
  "companyName": "Editas Medicine, Inc.",
  "ratingCountBuys": 13,
  "ratingCountHolds": 10,
  "ratingCountSells": 18,
  "buySummary": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
  "sellSummary": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi."
}, {
  "ticker": "PPHM",
  "companyName": "Peregrine Pharmaceuticals Inc.",
  "ratingCountBuys": 1,
  "ratingCountHolds": 6,
  "ratingCountSells": 20,
  "buySummary": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
  "sellSummary": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem."
}, {
  "ticker": "LDOS",
  "companyName": "Leidos Holdings, Inc.",
  "ratingCountBuys": 25,
  "ratingCountHolds": 6,
  "ratingCountSells": 26,
  "buySummary": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
  "sellSummary": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi."
}, {
  "ticker": "EXLS",
  "companyName": "ExlService Holdings, Inc.",
  "ratingCountBuys": 8,
  "ratingCountHolds": 29,
  "ratingCountSells": 28,
  "buySummary": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
  "sellSummary": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
}, {
  "ticker": "CTMX",
  "companyName": "CytomX Therapeutics, Inc.",
  "ratingCountBuys": 18,
  "ratingCountHolds": 21,
  "ratingCountSells": 3,
  "buySummary": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
  "sellSummary": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem."
}, {
  "ticker": "BLIN          ",
  "companyName": "Bridgeline Digital, Inc.",
  "ratingCountBuys": 29,
  "ratingCountHolds": 2,
  "ratingCountSells": 23,
  "buySummary": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
  "sellSummary": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi."
}, {
  "ticker": "NCV",
  "companyName": "AllianzGI Convertible & Income Fund",
  "ratingCountBuys": 25,
  "ratingCountHolds": 23,
  "ratingCountSells": 25,
  "buySummary": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
  "sellSummary": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus."
}, {
  "ticker": "NVR",
  "companyName": "NVR, Inc.",
  "ratingCountBuys": 17,
  "ratingCountHolds": 16,
  "ratingCountSells": 20,
  "buySummary": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
  "sellSummary": "Fusce consequat. Nulla nisl. Nunc nisl."
}, {
  "ticker": "DEA",
  "companyName": "Easterly Government Properties, Inc.",
  "ratingCountBuys": 8,
  "ratingCountHolds": 9,
  "ratingCountSells": 13,
  "buySummary": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
  "sellSummary": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
}, {
  "ticker": "MX",
  "companyName": "MagnaChip Semiconductor Corporation",
  "ratingCountBuys": 7,
  "ratingCountHolds": 21,
  "ratingCountSells": 10,
  "buySummary": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
  "sellSummary": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui."
}, {
  "ticker": "CLDC",
  "companyName": "China Lending Corporation",
  "ratingCountBuys": 7,
  "ratingCountHolds": 3,
  "ratingCountSells": 16,
  "buySummary": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
  "sellSummary": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi."
}, {
  "ticker": "IHIT",
  "companyName": "Invesco High Income 2023 Target Term Fund",
  "ratingCountBuys": 13,
  "ratingCountHolds": 13,
  "ratingCountSells": 11,
  "buySummary": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
  "sellSummary": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem."
}, {
  "ticker": "FII",
  "companyName": "Federated Investors, Inc.",
  "ratingCountBuys": 23,
  "ratingCountHolds": 14,
  "ratingCountSells": 7,
  "buySummary": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
  "sellSummary": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh."
}, {
  "ticker": "XBIO",
  "companyName": "Xenetic Biosciences, Inc.",
  "ratingCountBuys": 7,
  "ratingCountHolds": 5,
  "ratingCountSells": 24,
  "buySummary": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  "sellSummary": "Phasellus in felis. Donec semper sapien a libero. Nam dui."
}, {
  "ticker": "MDT",
  "companyName": "Medtronic plc",
  "ratingCountBuys": 8,
  "ratingCountHolds": 27,
  "ratingCountSells": 29,
  "buySummary": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
  "sellSummary": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui."
}, {
  "ticker": "SNGXW",
  "companyName": "Soligenix, Inc.",
  "ratingCountBuys": 7,
  "ratingCountHolds": 20,
  "ratingCountSells": 22,
  "buySummary": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
  "sellSummary": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus."
}, {
  "ticker": "HIW",
  "companyName": "Highwoods Properties, Inc.",
  "ratingCountBuys": 23,
  "ratingCountHolds": 25,
  "ratingCountSells": 12,
  "buySummary": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  "sellSummary": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus."
}, {
  "ticker": "TLGT",
  "companyName": "Teligent, Inc.",
  "ratingCountBuys": 10,
  "ratingCountHolds": 23,
  "ratingCountSells": 13,
  "buySummary": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
  "sellSummary": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem."
}, {
  "ticker": "WINA",
  "companyName": "Winmark Corporation",
  "ratingCountBuys": 11,
  "ratingCountHolds": 17,
  "ratingCountSells": 17,
  "buySummary": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
  "sellSummary": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem."
}, {
  "ticker": "EDGW",
  "companyName": "Edgewater Technology, Inc.",
  "ratingCountBuys": 18,
  "ratingCountHolds": 3,
  "ratingCountSells": 5,
  "buySummary": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
  "sellSummary": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede."
}, {
  "ticker": "EGRX",
  "companyName": "Eagle Pharmaceuticals, Inc.",
  "ratingCountBuys": 23,
  "ratingCountHolds": 23,
  "ratingCountSells": 12,
  "buySummary": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
  "sellSummary": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius."
}, {
  "ticker": "MDSO",
  "companyName": "Medidata Solutions, Inc.",
  "ratingCountBuys": 2,
  "ratingCountHolds": 28,
  "ratingCountSells": 29,
  "buySummary": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
  "sellSummary": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui."
}, {
  "ticker": "AJXA",
  "companyName": "Great Ajax Corp.",
  "ratingCountBuys": 28,
  "ratingCountHolds": 2,
  "ratingCountSells": 1,
  "buySummary": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
  "sellSummary": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus."
}, {
  "ticker": "ESGG",
  "companyName": "FlexShares STOXX Global ESG Impact Index Fund",
  "ratingCountBuys": 26,
  "ratingCountHolds": 29,
  "ratingCountSells": 12,
  "buySummary": "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
  "sellSummary": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus."
}, {
  "ticker": "ZNWAA",
  "companyName": "Zion Oil & Gas Inc",
  "ratingCountBuys": 2,
  "ratingCountHolds": 25,
  "ratingCountSells": 21,
  "buySummary": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
  "sellSummary": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus."
}];

module.exports.sampleRatings = sampleRatings;