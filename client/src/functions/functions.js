const memoize = require("memoizee");

function once(fn, context) {
  let result;
  return function () {
    if (fn) {
      result = fn.apply(context || this, arguments);
      fn = null;
    }
    return result;
  };
}
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *client
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return await response.json(); // parses JSON response into native JavaScript objects
}

const getDataCSV = async (InputData, updateDataFunc) => {
  try {
    postData('/api/message/loadfile', { name: InputData }) //{ name: state.value }
      .then((data) => {
        console.log(data); // JSON data parsed by `response.json()` call
        console.log('запрос загрузки данных выбранного файла /api/message/loadfile ');
        updateDataFunc(data);// изменяем стейт в Chart.js
      });
  } catch (e) { console.log(e) }
}

let namesArray = [];
async function getDataFile(nameFile) {
  namesArray.push(nameFile);
  console.log('namesArray=', namesArray);
  console.log('START function getDataFile()');
  try {
    console.log('END function getDataFile()');
    const result = await postData('/api/message/loadfile', { name: nameFile });
    console.log('result download data from server=', result);
    return result
  } catch (e) { console.log('ERROR function getDataFile', e) }
}

let getDataFileMemo = memoize(getDataFile);

export { once, postData, getDataCSV, getDataFileMemo, getDataFile };
