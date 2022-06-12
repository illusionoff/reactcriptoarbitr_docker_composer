const processFile = async () => {
  let count = 0;
  dataObj = { number: [], buyGate: [], buyBith: [], sellGate: [], sellBith: [], diffSell: [], diffBuy: [], timeServer: [], timeGate: [], timeBith: [], percentBonus: [], buyOrSellGate: [], buyOrSellBith: [], init: [] };
  records = [];
  const parser = fs
    .createReadStream(CSVFilePath)
    .pipe(parse({
      // CSV options if any
      // comment: '#',
      // columns: ['col', 'buyGate', 'buyBith', 'sellGate', 'sellBith', 'diffSell', 'diffBuy', 'timeServer', 'timeBith', 'init']
      // columns: true
    }));
  for await (const record of parser) {
    // Work with each record
    records.push(record);
    if (count === 0) dataObj.names = record
    else {
      let countObj = 0;
      Object.keys(dataObj).forEach(key => {
        if (key != 'names') dataObj[key].push(record[countObj]);
        countObj++;
      })
    };
    count++;
  }
  return dataObj
}

module.exports = processFile;
