import React, { useState, useEffect } from 'react';
import { jsPDF } from 'jspdf';

const FinalTableV1 = () => {
  const [inputText, setInputText] = useState('');
  const [pdfUrl, setPdfUrl] = useState('');
  const [resourcesArr, setresourcesArr] = useState([
    {
      userId: '123',
      username: 'Anand Vishwakarma',
      workingOn: 'Maf Carrefour',
      sacCode: '2329',
      fromDate: '1st July',
      toDate: '30th July 2024',
      days: 21,
      hours: 8,
      payPerDay: 100,
    },
    {
      userId: '123',
      username: 'John Doe',
      workingOn: 'Maf Carrefour',
      sacCode: '2329',
      fromDate: '1st July',
      toDate: '30th July 2024',
      days: 21,
      hours: 8,
      payPerDay: 100,
    },
    {
      userId: '123',
      username: 'John Doe',
      workingOn: 'Maf Carrefour',
      sacCode: '2329',
      fromDate: '1st July',
      toDate: '30th July 2024',
      days: 21,
      hours: 8,
      payPerDay: 100,
    },
  ]);

  useEffect(() => {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: [270, 225], // w,h
    });

    // MAIN TABLE HERE...***...***...***...***...***...***

    const startY = 100; // Initial Y pos.
    const rowHeight = 14; // Height row
    const numRows = resourcesArr.length;
    const tableHeight = rowHeight * numRows + 25; // calc. dynamic table height
    const totalTableHeight = startY + tableHeight;

    // Draw Table Rectangle ~dynamic~
    doc.rect(30, startY, 165, tableHeight);

    // Heading Divider -------------
    doc.line(30, startY + 7, 195, startY + 7); // Divider below headings

    // Vertical Dividers -----------------
    doc.line(130, startY, 130, totalTableHeight);
    doc.line(160, startY, 160, totalTableHeight);

    // Table Headings --------------------
    doc.setFontSize(10.5);
    doc.setFont('helvetica', 'bold');
    doc.text('DESCRIPTION', 66, startY + 5);
    doc.text('SAC CODE', 135, startY + 5);
    doc.text('AMOUNT', 169, startY + 5);

    // Draw Rows for Each Resource
    resourcesArr.forEach((res, index) => {
      let currentY;

      currentY = startY + 11 + index * rowHeight;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7.5);
      doc.text(
        `Consultancy charges ${res.username} on ${res.workingOn} (${res.userId})`,
        31.5,
        currentY
      );
      doc.text(`(${res.fromDate} - ${res.toDate})`, 31.5, currentY + 3.3);

      doc.setFont('helvetica', 'bold');
      doc.text(
        `${res.days} Days * ${res.hours} Hours * INR`,
        31.5,
        currentY + 6.7
      );

      doc.setFont('helvetica', 'normal');
      doc.text('INR', 185, currentY + 3.3);

      // ------- SAP CODE ----------------//
      doc.text(`${res.sacCode}`, 141, currentY + 3.3);

      // Draw line below each row (won't be for last one)
      if (index < numRows - 1) {
        doc.line(30, currentY + 10, 195, currentY + 10);
      }
    });

    // Subtotal, IGST, and Total Positioning
    const subtotalY = totalTableHeight - 10;
    const igstY = subtotalY + 7;
    const totalY = igstY + 7;

    doc.line(30, subtotalY - 9, 195, subtotalY - 9); // Divider for subtotal -------------------

    doc.text('SUBTOTAL', 31.5, subtotalY - 5);
    doc.text('INR', 185, subtotalY - 5);

    doc.line(30, igstY - 10, 195, igstY - 10); // Divider for IGSTb ------------------
    doc.text('IGST 18%', 31.5, igstY - 6);
    doc.text('INR', 185, igstY - 6);

    doc.line(30, totalY - 10.5, 195, totalY - 10.5); // Divider for TOTAL ------------------
    doc.setFont('helvetica', 'bold');
    doc.text('TOTAL', 31.5, totalY - 6.5);
    doc.text('INR', 185, totalY - 6.5);

    // Thank You Message Position --------------------
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.text('Thanks for your business.', 28, totalY + 14);

    // Generate a blob URL for the PDF ------------------
    const pdfBlob = doc.output('blob');
    const url = URL.createObjectURL(pdfBlob);

    setPdfUrl(url);

    return () => URL.revokeObjectURL(url); // Cleanup the URL when the component unmounts
  }, [inputText, resourcesArr]); // Depend on inputText and resourcesArr to trigger re-render

  return (
    <div>
      <label>Invoice no.</label>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Type something to update PDF"
      />
      {pdfUrl && (
        <iframe
          src={pdfUrl}
          style={{ width: '100%', height: '800px' }}
          frameBorder="0"
          title="PDF Preview"
        ></iframe>
      )}
    </div>
  );
};

export default FinalTableV1;
