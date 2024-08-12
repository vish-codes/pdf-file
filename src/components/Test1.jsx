import React, { useState, useEffect } from 'react';
import { jsPDF } from 'jspdf';

const Test1 = () => {
  const [inputText, setInputText] = useState('');
  const [pdfUrl, setPdfUrl] = useState('');

  // Values variables START -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
  const [dateOfInvoices, setDateOfInvoices] = useState(new Date());

  const [BilliedCompanyDetails, setBilliedCompanyDetails] = useState({
    companyName: 'StatusNeo Technology Consulting Pvt Ltd',
    addressLine1: 'E-2324, Palam Vihar',
    addressLine2: 'Gurugram, Gurgaon',
    stateName: 'Haryana',
    zipCode: '122017',
    gstIn: '06ABDCS4762Q1ZP',
  });

  const [resourcesArr, setresourcesArr] = useState([
    {
      userId: '123',
      username: 'John Doe',
      workingOn: 'Maf Carrefour',
      sacCode: '2329',
      fromDate: '1st July',
      toDate: '30th July 2024',
      days: 21,
      hours: 8,
      payPerDay: 3000,
    },
    {
      userId: '321',
      username: 'Bill Gates',
      workingOn: 'Maf Carrefour',
      sacCode: '2332',
      fromDate: '1st July',
      toDate: '30th July 2024',
      days: 21,
      hours: 9,
      payPerDay: 1200,
    },
  ]);

  // const [amount, setAmount] = useState([]);

  // getting total amount calculation from resourcesArr

  // useEffect(() => {
  //   const calculatedAmounts = resourcesArr.map(
  //     (resource) => resource.days * resource.payPerDay
  //   );

  //   setAmount(calculatedAmounts);
  // }, [resourcesArr]);

  // console.log(amount);
  const day = dateOfInvoices.getDate();
  const month = dateOfInvoices.getMonth() + 1;
  const year = dateOfInvoices.getFullYear();

  // Values variables END-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
  const generatePDF = () => {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: [270, 225], // w,h
    });

    // doc.text(inputText || 'Hello world!', 10, 10);

    // Header-------------------------------
    doc.setFontSize(15);
    doc.setTextColor(0, 0, 0);
    doc.text('Panorama Software Solutions', 30, 32);

    doc.setFont('helvetica', 'bold');
    doc.setTextColor(61, 121, 216);
    doc.text(`INVOICE NO: GST/24-25/0000`, 112, 32);
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'normal');

    doc.setFontSize(9.5);
    doc.text('621-622, Tower 1, Assotech Business Cresterra', 30, 42);
    doc.text('Sector - 135, Noida,', 30, 46);
    doc.text('Uttar Pradesh - 201305', 30, 50);

    // Bank Details---------------------------
    // Border Rectangle ----------------------
    doc.rect(30, 56, 170, 20);
    // vertical Divider ----------------------
    doc.line(110, 56, 110, 76);
    // multi horizonal divider ---------------
    doc.line(110, 62, 200, 62);
    doc.line(110, 69, 200, 69);
    // ---------------------------------------
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text('Bank Details:', 32, 60.5);
    doc.setFont('helvetica', 'normal');
    doc.text('Name - Panorama Software Solutions', 32, 65);
    doc.text('Account No - 50200035450418', 32, 69);
    doc.text('IFSC Code - HDFC0002253', 32, 73);
    doc.setFont('helvetica', 'bold');
    // Invoice Info-----------------------------
    doc.setFontSize(8.8);
    doc.text(`Date of Invoice: `, 130, 60.5);
    doc.setFont('helvetica', 'normal');
    doc.text(`${day}/${month > 9 ? month : `0${month}`}/${year}`, 154.6, 60.5);
    doc.setFont('helvetica', 'bold');
    doc.text('GSTIN: ', 130, 67);
    doc.setFont('helvetica', 'normal');
    doc.text('03AAWFP4507D1ZB', 141.8, 67);
    doc.setFont('helvetica', 'bold');
    doc.text('PAN: ', 130, 73.5);
    doc.setFont('helvetica', 'normal');
    doc.text('AAWFP4507D', 139, 73.5);
    doc.setFontSize(10);
    // // Bill To-------------------------------
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(0, 0, 0);
    doc.text('BILL TO', 34, 85.5).rect(32, 81, 52, 7);
    doc.setFontSize(12);
    // doc.text('One two three', 10, 100);

    // To-Adress ----------------------------
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.text(BilliedCompanyDetails.companyName, 30, 98);

    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.text(BilliedCompanyDetails.addressLine1, 30, 106);
    doc.text(BilliedCompanyDetails.addressLine2, 30, 110);
    doc.text(
      `${BilliedCompanyDetails.stateName} - ${BilliedCompanyDetails.zipCode}`,
      30,
      114
    );

    // Gst IN --------------------------------
    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');
    doc.text('GSTIN: ', 30, 122);
    doc.text(BilliedCompanyDetails.gstIn, 43, 122);

    doc.setFontSize(9);
    // main table ---------------------------- // START // ------------------------------------- //
    // doc.rect(30, 130, 165, 42);
    //      ( x   y    w   h ) 42
    // doc.rect(30, 137, 165, 14);  h=> 35 - 21 == 14

    // -----------divider for heading --------------------- //
    // doc.line(30, 137, 195, 137);
    //       xst.yst.xend.yend.

    // -----------verticle dividers ---------------------- //
    // doc.line(130, 130, 130, 172);
    // doc.line(160, 130, 160, 172);

    doc.setFont('helvetica', 'bold');

    //------------------ Actual heading (no-dividers) ---------//

    // doc.text('DESCRIPTION', 70, 134.5);
    // doc.text('SAC CODE', 137, 134.5);
    // doc.text('AMOUNT', 170, 134.5);
    /*
    // -----------------------Resources data with amounts ---------------------//
    doc.setFontSize(7.5);
    doc.setFont('helvetica', 'normal');

    resourcesArr.map((res) => {
      doc.text(
        `Consultancy charges ${res.username} on ${res.workingOn} (${res.userId})`,
        31.5,
        141.5
      );
      doc.text(`(${res.fromDate} - ${res.toDate})`, 31.5, 144.8);
      doc.setFont('helvetica', 'bold');
      doc.text(`${res.days} Days * ${res.hours} Hours * INR`, 31.5, 148.2);

      doc.setFont('helvetica', 'normal');
      doc.text('INR', 185, 145);

      // ------- SAP CODE ----------------//
      doc.text(`${res.sacCode}`, 141, 144.8);
    });
    /*
    doc.text(
      'Consultancy charges Ankur Chaudhary on Maf Carrefour (C087)',
      31.5,
      141.5
    );
    doc.text('(1st December - 31st December 2024)', 31.5, 144.8);
    doc.setFont('helvetica', 'bold');
    doc.text('21 Days * 8 Hours * INR', 31.5, 148.2);

    doc.setFont('helvetica', 'normal');
    doc.text('INR', 185, 145);

    // ------- SAP CODE ----------------//
    doc.text('9983', 141, 144.8); 

    // divider for resources horizontal //
    doc.line(30, 151, 195, 151);

    // divider for subtotal horizontal //

    doc.line(30, 158, 195, 158);

    // -----------------------Subtotal row ---------------------//
    doc.setFont('helvetica', 'bold');
    doc.text('SUBTOTAL', 31.5, 155);
    doc.setFont('helvetica', 'normal');

    doc.text('INR', 185, 155);

    // divider for IGST % horizontal //

    doc.line(30, 165, 195, 165);

    // -----------------------Subtotal row ---------------------//

    doc.setFont('helvetica', 'bold');
    doc.text('IGST 18%', 31.5, 162);
    doc.setFont('helvetica', 'normal');

    doc.text('INR', 185, 162);

    // -----------------------TOTAL row ---------------------//

    doc.setFont('helvetica', 'bold');
    doc.text('TOTAL', 31.5, 169);

    doc.text('INR', 185, 169);
    doc.setFont('helvetica', 'normal');

    // -----------------------Thanks row ---------------------//
    doc.setFontSize(9);
    doc.text('Thanks for your business.', 28, 183);
*/

    // MAIN TABLE HERE...***...***...***...***...***...***

    const startY = 130; // Initial Y pos.
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
        `${res.days} Days * ${res.hours} Hours * ${res.payPerDay} INR`,
        31.5,
        currentY + 6.7
      );

      doc.setFont('helvetica', 'normal');
      const temp = res.payPerDay * res.days;
      doc.text(temp.toString(), 173, currentY + 3.3);

      doc.text('INR', 185, currentY + 3.3);
      // ------- SAC CODE ----------------//
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
    doc.text('Thanks for your business.', 28, totalY + 8);

    // -----------------------blob preview-----------------//

    // Generate a blob URL for the PDF
    const pdfBlob = doc.output('blob');
    const url = URL.createObjectURL(pdfBlob);

    setPdfUrl(url);
  };

  useEffect(() => {
    // Generate the PDF whenever inputText changes
    generatePDF();

    // Clean up the blob URL when the component unmounts or updates
    return () => URL.revokeObjectURL(pdfUrl);
  }, [inputText, resourcesArr]);

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

export default Test1;
