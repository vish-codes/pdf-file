import React, { useState, useEffect } from 'react';
import { jsPDF } from 'jspdf';

const Test1 = () => {
  const [inputText, setInputText] = useState('');
  const [pdfUrl, setPdfUrl] = useState('');

  const generatePDF = () => {
    const doc = new jsPDF();

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
    doc.text(`21st July, 2024`, 154.6, 60.5);
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
    doc.setFontSize(8)
    doc.setTextColor(0, 0, 0);
    doc.text('BILL TO', 34, 85.5).rect(32, 81, 52, 7);
    doc.setFontSize(12);
    // doc.text('One two three', 10, 100);

    // To-Adress ----------------------------
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.text('StatusNeo Technology Consulting Pvt Ltd', 30, 98);

    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.text('E-2324, Palam Vihar', 30, 106);
    doc.text('Gurugram, Gurgaon', 30, 110);
    doc.text('Haryana - 122017', 30, 114);

    // Gst IN --------------------------------
    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');
    doc.text('GSTIN: ', 30, 122);
    doc.text('06ABDCS4762Q1ZP', 43, 122);

    doc.setFontSize(9);
    // main table ---------------------------- // START // ------------------------------------- //
    doc.rect(30, 130, 165, 42);
    //      ( x   y    w   h )

    // -----------divider for heading --------------------- //
    doc.line(30, 137, 195, 137);
    //       xst.yst.xend.yend.

    // -----------verticle dividers ---------------------- //
    doc.line(130, 130, 130, 172);
    doc.line(160, 130, 160, 172);

    doc.setFont('helvetica', 'bold');

    //------------------ Actual heading (no-dividers) ---------//

    doc.text('DESCRIPTION', 70, 134.5);
    doc.text('SAC CODE', 137, 134.5);
    doc.text('AMOUNT', 170, 134.5);

    // -----------------------Resources data with amounts ---------------------//
    doc.setFontSize(7.5);
    doc.setFont('helvetica', 'normal');
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
        doc.setFontSize(9)
    doc.text('Thanks for your business.', 28, 183)

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
  }, [inputText]);

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
