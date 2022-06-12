// Проверяем функцию processFile которая читает файл .csv
// парсит его при помощи csv-parse и возвращает объект удобный для отрисовки графиков
const assert = require("assert").strict;
const fs = require("fs");
const { processFile } = require("../../routes/routerMessage.js");

const FILE_FOLDER_ACTUAL = "./mochaTesting/processFile/sampleActual";
const FILE_FOLDER_TEST = "./mochaTesting/processFile/testData";
const FILE_NAMES = ["file_1.csv", "file_2.csv"];
const SAMPLE_FILE_NAMES_ACTUAL = ["sample_1.json", "sample_2.json"];

const sampleFile_1 = fs.readFileSync(
  `${FILE_FOLDER_ACTUAL}/${SAMPLE_FILE_NAMES_ACTUAL[0]}`,
  "utf8"
);
const sampleFile_2 = fs.readFileSync(
  `${FILE_FOLDER_ACTUAL}/${SAMPLE_FILE_NAMES_ACTUAL[1]}`,
  "utf8"
);
const sampleFileObj_1 = JSON.parse(sampleFile_1);
const sampleFileObj_2 = JSON.parse(sampleFile_2);

describe(" Test function processFile() test file #1", function () {
  it("should view data object for chart test file #1", function () {
    processFile(`${FILE_FOLDER_TEST}/${FILE_NAMES[0]}`)
      .then((dataObj) => {
        assert.deepStrictEqual(sampleFileObj_1, dataObj);
      })
      .catch(console.error)
  });
});

describe(" Test function processFile() test file #2", function () {
  it("should view data object for chart test file #2", function () {
    processFile(`${FILE_FOLDER_TEST}/${FILE_NAMES[1]}`)
      .then((dataObj) => {
        assert.deepStrictEqual(sampleFileObj_2, dataObj);
      })
      .catch(console.error)
  });
});
