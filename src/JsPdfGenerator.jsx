import React, { useState } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import PdfGenerator from './PdfGenerator';

const JsPdfGenerator = () => {
  const [invoiceData, setInvoiceData] = useState({
    invoiceNumber: '',
    dateOfInvoice: '',
    billTo: '',
    description1: '',
    amount1: '',
    description2: '',
    amount2: '',
    subTotal: '',
    igst: '',
    total: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInvoiceData({
      ...invoiceData,
      [name]: value,
    });
  };

  const generatePDF = () => {
    const doc = new jsPDF();

    // Header-------------------------------
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text('Panorama Software Solutions', 10, 10);

    doc.setTextColor(61, 121, 216);
    doc.text(`INVOICE NO: ${invoiceData.invoiceNumber}`, 150, 10);
    doc.setTextColor(0, 0, 0);

    doc.text('621-622, Tower 1, Assotech Business Cresterra', 10, 20);
    doc.text('Sector - 135, Noida, Uttar Pradesh - 201305', 10, 30);

    // Bank Details---------------------------
    doc.text('Bank Details:', 10, 40);
    doc.text('Name - Panorama Software Solutions', 10, 50);
    doc.text('Account No - 50200035450418', 10, 60);
    doc.text('IFSC Code - HDFC0002253', 10, 70);

    // Invoice Info-----------------------------
    doc.text(`Date of Invoice: ${invoiceData.dateOfInvoice}`, 150, 50);
    doc.text('GSTIN: 03AAWFP4507D1ZB', 150, 60);
    doc.text('PAN: AAWFP4507D', 150, 70);

    // Bill To-------------------------------
    doc.setFontSize(14);
    doc.setTextColor(61, 121, 216);
    doc.text('BILL TO', 10, 90);
    doc.setFontSize(12);
    doc.text(invoiceData.billTo, 10, 100);

    doc.setTextColor(0, 0, 0);

    // Table--------------------------------------
    doc.autoTable({
      startY: 110,
      head: [['DESCRIPTION', 'SAC CODE', 'AMOUNT']],
      body: [
        [invoiceData.description1, '9983', `${invoiceData.amount1} INR`],
        [invoiceData.description2, '9983', `${invoiceData.amount2} INR`],
      ],
      styles: {
        lineColor: [0, 0, 0], // Black border
        lineWidth: 0.5, // Border width
        halign: 'center', // Center align text in columns
      },
      headStyles: {
        fillColor: [255, 255, 255], // White background for header
        textColor: [0, 0, 0], // Black text for header
        lineWidth: 0.5, // Header border width
      },
      theme: 'grid', // Grid style
    });

    // Totals
    const finalY = doc.lastAutoTable.finalY; // The y-coordinate where the table ends
    doc.text(`SUBTOTAL: ${invoiceData.subTotal}`, 150, finalY + 10);
    doc.text(`IGST 18%: ${invoiceData.igst}`, 150, finalY + 20);
    doc.text(`TOTAL: ${invoiceData.total}`, 150, finalY + 30);

    // Footer
    doc.text('Thanks for your Business.', 10, finalY + 50);

    // Save PDF
    doc.save('invoice.pdf');
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg">
        <h1 className="text-2xl font-bold text-center mb-6">Invoice Generator</h1>
        <div className="space-y-1">
          <div>
            <label className="block text-sm font-medium text-gray-700">Invoice Number</label>
            <input className="w-full mt-1 p-2 border-2 border-gray-300 rounded-lg" type="text" name="invoiceNumber" onChange={handleChange} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Date of Invoice</label>
            <input className="w-full mt-1 p-2 border-2 border-gray-300 rounded-lg" type="text" name="dateOfInvoice" onChange={handleChange} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Bill To</label>
            <input className="w-full mt-1 p-2 border-2 border-gray-300 rounded-lg" type="text" name="billTo" onChange={handleChange} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description 1</label>
            <input className="w-full mt-1 p-2 border-2 border-gray-300 rounded-lg" type="text" name="description1" onChange={handleChange} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Amount 1</label>
            <input className="w-full mt-1 p-2 border-2 border-gray-300 rounded-lg" type="text" name="amount1" onChange={handleChange} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description 2</label>
            <input className="w-full mt-1 p-2 border-2 border-gray-300 rounded-lg" type="text" name="description2" onChange={handleChange} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Amount 2</label>
            <input className="w-full mt-1 p-2 border-2 border-gray-300 rounded-lg" type="text" name="amount2" onChange={handleChange} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">SubTotal</label>
            <input className="w-full mt-1 p-2 border-2 border-gray-300 rounded-lg" type="text" name="subTotal" onChange={handleChange} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">IGST</label>
            <input className="w-full mt-1 p-2 border-2 border-gray-300 rounded-lg" type="text" name="igst" onChange={handleChange} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Total</label>
            <input className="w-full mt-1 p-2 border-2 border-gray-300 rounded-lg" type="text" name="total" onChange={handleChange} />
          </div>
        </div>
        <button
          className="w-full mt-6 py-2 px-4 bg-indigo-500 text-white font-bold rounded-lg hover:bg-indigo-600"
          onClick={generatePDF}
        >
          Export PDF
        </button>
        {/* <PdfGenerator /> */}
      </div>
    </div>
  );
};

export default JsPdfGenerator;
