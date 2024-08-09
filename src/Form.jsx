// src/Form.js
import React, { useState } from 'react';
import jsPDF from 'jspdf';
import AddResources from './AddResources';

const Form = () => {
  const [companyName, setCompanyName] = useState('');
  const [gstNumber, setGstNumber] = useState('');
  const [result, setResult] = useState(null);
  const [isResourcesFormOn, setIsResourcesFormOn] = useState(false);
  const [resources, setResources] = useState({
    userId: '',
    username: '',
    payPerDay: '',
    days: '',
  });

  function getresourcesData(data) {
    setResources({
      userId: data.userId,
      username: data.username,
      payPerDay: data.pay,
      days: data.days,
    });
    setIsResourcesFormOn(false);
  }
  console.log(resources);

  const handleCalculation = () => {
    const calculatedResult = parseFloat(salary) * parseFloat(payPerDay);
    setResult(calculatedResult);
  };

  function toggleResourcesFormOn() {
    setIsResourcesFormOn(true);
  }

  const handleDownloadPDF = () => {
    const doc = new jsPDF();

    doc.addImage(`./images/panorama-new.png`, 'PNG', 10, 10, 50, 20);

    doc.setFontSize(20);
    doc.line(20, 20, 60, 20);

    doc.text('Invoice', 90, 20);

    doc.setFontSize(14);
    doc.text(`Company: ${companyName}`, 25, 60);

    doc.text(`GST Number: ${gstNumber}`, 25, 70);

    // Define the text and its position
    const text = 'Hello, World!';
    const x = 10;
    const y = 20;
    const textWidth = doc.getTextWidth(text);
    const textHeight = 10; // Approximate height of the text

    // Draw the text
    doc.text(text, x, y);

    // Draw a border around the text
    const borderMargin = 2; // Margin between the text and the border
    doc.rect(
      x - borderMargin,
      y - textHeight - borderMargin,
      textWidth + 2 * borderMargin,
      textHeight + 2 * borderMargin
    );

    // doc.text(`Username: ${username}`, 25, 90);
    // doc.text(`Pay Per Day: ${payPerDay} (in rupees)`, 25, 100);
    // // doc.text(`Salary: ${payPerDay}`, 25, 70);
    // doc.text(`Days in current month: ${salary} (in rupees)`, 25, 110);

    // doc.text(`Total: ~${result}`, 25, 130);

    doc.save('Invoice.pdf');
  };

  return (
    <div>
      <h1>Invoice Form</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCalculation();
        }}
      >
        <label htmlFor="companyName">Company Name:</label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <br />

        <label htmlFor="gstNumber">GST Number:</label>
        <input
          type="text"
          id="gstNumber"
          name="gstNumber"
          value={gstNumber}
          onChange={(e) => setGstNumber(e.target.value)}
        />
        <br />
        <button type="submit">Calculate</button>
        <br />
        <button onClick={toggleResourcesFormOn}>Add resources</button>
      </form>
      <ResourcesComponent />
      {isResourcesFormOn ? (
        <AddResources getresourcesData={getresourcesData} />
      ) : null}

      <>
        <h2>Result: ₹{result}</h2>
        <button onClick={handleDownloadPDF}>Download PDF</button>
      </>
    </div>
  );
};

export default Form;

function ResourcesComponent() {
  return (
    <div>
      <p>User: Anand(P1220)</p>
      <p>pay: 40</p>
      <p>working Days: 22</p>
    </div>
  );
}
