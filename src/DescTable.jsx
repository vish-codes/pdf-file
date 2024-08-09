import React, { useState } from 'react';

const DescTable = () => {
  const [rows, setRows] = useState([
    { description: '', sacCode: '9983', amount: '' },
    { description: '', sacCode: '9983', amount: '' },
  ]);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedRows = [...rows];
    updatedRows[index][name] = value;
    setRows(updatedRows);
  };

  const calculateTotals = () => {
    const subTotal = rows.reduce(
      (acc, row) => acc + parseFloat(row.amount || 0),
      0
    );
    const igst = subTotal * 0.18;
    const total = subTotal + igst;
    return { subTotal, igst, total };
  };

  const { subTotal, igst, total } = calculateTotals();

  return (
    <div className="p-4">
      <table className="min-w-full border-2 border-gray-800 border-collapse">
        <thead>
          <tr>
            <th className="border border-gray-800 px-4 py-2 text-left">
              DESCRIPTION
            </th>
            <th className="border border-gray-800 px-4 py-2 text-left">
              SAC CODE
            </th>
            <th className="border border-gray-800 px-4 py-2 text-right">
              AMOUNT
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td className="border border-gray-800 px-4 py-2">
                <input
                  type="text"
                  name="description"
                  value={row.description}
                  onChange={(e) => handleInputChange(index, e)}
                  className="w-full px-2 py-1 border rounded"
                />
              </td>
              <td className="border border-gray-800 px-4 py-2">
                {row.sacCode}
              </td>
              <td className="border border-gray-800 px-4 py-2 text-right">
                <input
                  type="number"
                  name="amount"
                  value={row.amount}
                  onChange={(e) => handleInputChange(index, e)}
                  className="w-full text-right px-2 py-1 border rounded"
                />
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td
              className="border border-gray-800 px-4 py-2 text-right font-bold"
              colSpan="2"
            >
              SUBTOTAL
            </td>
            <td className="border border-gray-800 px-4 py-2 text-right">
              {subTotal.toFixed(2)}
            </td>
          </tr>
          <tr>
            <td
              className="border border-gray-800 px-4 py-2 text-right font-bold"
              colSpan="2"
            >
              IGST 18%
            </td>
            <td className="border border-gray-800 px-4 py-2 text-right">
              {igst.toFixed(2)}
            </td>
          </tr>
          <tr>
            <td
              className="border border-gray-800 px-4 py-2 text-right font-bold"
              colSpan="2"
            >
              TOTAL
            </td>
            <td className="border border-gray-800 px-4 py-2 text-right">
              {total.toFixed(2)}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default DescTable;
