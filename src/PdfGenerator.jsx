import React, { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const PdfGenerator = () => {
  const printRef = useRef();

  const generatePdf = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL('image/png');

    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('generated.pdf');
  };

  return (
    <div>
      <div ref={printRef} style={{ padding: 20, border: '1px solid #ccc' }}>
        <h1>Invoice</h1>
        <p>Invoice Number: <strong>001</strong></p>
        <p>Date: <strong>2024-01-01</strong></p>
        <p>Customer Name: <strong>John Doe</strong></p>
        <table style={{ width: '100%', marginTop: 20, borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #000' }}>Description</th>
              <th style={{ border: '1px solid #000' }}>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #000' }}>Product 1</td>
              <td style={{ border: '1px solid #000' }}>$50.00</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #000' }}>Product 2</td>
              <td style={{ border: '1px solid #000' }}>$30.00</td>
            </tr>
          </tbody>
        </table>
        <h2>Total: $80.00</h2>
      </div>
      <button className='border-2 border-black bg-indigo-300' onClick={generatePdf} style={{ marginTop: 20 }}>
        Export as PDF
      </button>
    </div>
  );
};

export default PdfGenerator;
