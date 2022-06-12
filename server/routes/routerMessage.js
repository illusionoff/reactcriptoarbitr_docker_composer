const { Router } = require('express');
const router = Router();
const { check, validationResult, body } = require('express-validator'); // body дополнительно взял
const config = require('config');
const fs = require("fs");
const parse = require('csv-parse');
// "FILES_FOLDER": "./testCSV/"
//let path = "../../178.20.42.150.sslip.io/html/logs/";
// Currently "../../projectSave/criptoarbitrsumsave/current_2/criptoarbitr_test/logs/"
const FILES_FOLDER = config.get('FILES_FOLDER');
// '/api/message'
console.log('FILES_FOLDER=', FILES_FOLDER);

const processFile = async (CSVFilePath) => {
  let count = 0;
  dataObj = { number: [], buyGate: [], buyBith: [], sellGate: [], sellBith: [], diffSell: [], diffBuy: [], timeServer: [], timeGate: [], timeBith: [], percentBonus: [], buyOrSellGate: [], buyOrSellBith: [], init: [] };
  records = [];
  const parser = fs
    // .createReadStream(`${__dirname}/fs_read.csv`)
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
    if (count === 0) dataObj.names = record//console.log('Names=', record)
    else {
      let countObj = 0;
      Object.keys(dataObj).forEach(key => {
        // elem[key]
        if (key != 'names') dataObj[key].push(record[countObj]);
        countObj++;
      })
    };
    count++;
  }
  // console.log('processFile dataObj=', dataObj)
  return dataObj//records
}

router.post('/getdircsv',
  [], async function (req, res) {
    try {
      fs.readdir(FILES_FOLDER, (err, files) => {
        res.status(201).json({ namesFiles: files });
      });
      console.log('api/message/getdircsv');
    } catch (err) {
      console.error('/getdircsv ', err.message);
      // res.status(err.statusCode || 500).json({ 'message': err.message || 'Что-то пошло не так, попробуйте снова' });
      res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
    }
  });

router.post('/loadfile',
  [
    // check('name', 'Вы ввели имя меньше двух символов или более 30 символов')
    body('name')
      // .notEmpty()
      .isLength({ min: 14, max: 30 }) // .isEmpty() работает наоборот если не пусто то вызывает ошибку
      .withMessage("Вы ввели имя файла меньше четырнадцати символов или более 30 символов")
      .trim()
      .escape(),
  ], async function (req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          // message: 'Некорректный данные '
          message: errors.array()[0].msg
        })
      }
      const { name } = req.body
      console.log('api/message/loadfile routerMessage name', name);
      processFile(`${FILES_FOLDER}${name}`)
        .then((dataObj) => {
          res.status(201).json(dataObj);
        })
        .catch(console.error)
    } catch (err) {
      console.error(`Error while getting quotes `, err.message);
      // res.status(err.statusCode || 500).json({ 'message': err.message || 'Что-то пошло не так, попробуйте снова' });
      res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
    }
  });

// module.exports = router
// export { router, processFile };
module.exports = { router, processFile }
