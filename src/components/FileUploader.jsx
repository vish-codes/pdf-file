import React, { useState } from 'react';
import Papa from 'papaparse';
import * as XLSX from 'xlsx';

function FileUploader() {
  const [data, setData] = useState([]);
//   console.log(data);
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    console.log(file);
    if (file) {
      const fileExtension = file.name.split('.').pop();

      if (fileExtension === 'csv') {
        // Parse CSV file
        Papa.parse(file, {
          header: true,
          complete: (results) => {
            setData(results.data);
            console.log(results.data);
          },
          error: (error) => {
            console.error('Error parsing CSV:', error);
          },
        });
      } else if (fileExtension === 'xlsx' || fileExtension === 'xls') {
        // Parse Excel file
        const reader = new FileReader();
        reader.onload = (e) => {
          const binaryString = e.target.result;
          const workbook = XLSX.read(binaryString, { type: 'binary' });
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          const csvData = XLSX.utils.sheet_to_csv(worksheet);
          Papa.parse(csvData, {
            header: true,
            complete: (results) => {
              setData(results.data);
              console.log(results.data);
            },
            error: (error) => {
              console.error('Error parsing Excel:', error);
            },
          });
        };
        reader.readAsBinaryString(file);
      } else {
        alert('Unsupported file format. Please upload a CSV or Excel file.');
      }
    }
  };

  return (
    <div>
      <input
        type="file"
        onChange={handleFileUpload}
        accept=".csv, .xlsx, .xls"
      />
      {/* <h3>Uploaded Data:</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </div>
  );
}

export default FileUploader;
