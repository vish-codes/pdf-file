import React from 'react';
import { saveAs } from 'file-saver';
import { pdf } from '@react-pdf/renderer';
import NewForm from './NewForm';

const DownloadButton = () => {
  const downloadPdf = async () => {
    const fileName = 'test.pdf';
    const blob = await pdf(<NewForm />).toBlob();
    saveAs(blob, fileName);
  };

  return <button onClick={downloadPdf}>Download PDF</button>;
};

export default DownloadButton;
