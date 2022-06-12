import React, { useState, useEffect, useRef } from 'react';
import { postData, getDataFile } from '../functions/functions';
import ViewChart from './ViewChart';
import { DownloadCSV } from './DownloadCSV';
import { ChartDescription } from './ChartDescription';

async function getNamesFiles() {
  try {
    console.log('START function getNamesFiles()');
    console.log('END function getNamesFiles()');
    return await postData('/api/message/getdircsv', {})
  } catch (e) { console.log('ERROR function getNamesFiles', e) }
}

async function firstLoadDataFile(nameFilesSelect) {
  try {
    const funOne = await getNamesFiles();
    funOne.namesFiles.reverse().forEach((elem) => nameFilesSelect.push(elem));
    const nameFile = funOne.namesFiles[0];
    console.log('nameFilesSelect_=', nameFilesSelect);
    console.log('nameFile firstLoadDataFile=', nameFile);
    return await getDataFile(nameFile)
  } catch (e) { console.log(e) }
}

export const Chart = () => {
  const [dataCsv, setDataCsv] = useState([]);
  const nameFilesSelect = useRef([]);

  const updateData = (value) => {
    setDataCsv(value)
  }

  const hook = () => {
    firstLoadDataFile(nameFilesSelect.current).then((loadfile) => {
      console.log('END twoAsyncFunction loadfile=', loadfile);
      setDataCsv(loadfile);
    })
  };
  // Tell react to run useEffect once the component is loaded
  useEffect(hook, []);

  return (
    <>
      <ChartDescription />
      <section id="DownloadCSV">
        <DownloadCSV nameFilesSelect={nameFilesSelect.current} updateData={updateData} />
      </section>
      <section id="ViewChart">
        <ViewChart ViewChart={dataCsv} />
      </section>
    </>
  )
}
