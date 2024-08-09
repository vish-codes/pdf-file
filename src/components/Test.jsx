import React from 'react';

export default function Test() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex border-2 border-black divide-x divide-gray-300">
        <div className="px-10 py-6">
          <div className="text-left">
            <p className="text-xl">
              <strong>Bank Details:</strong>
              <br />
            </p>
            <p className="text-xl">
              Name: Panorama 123testing
              <br />
            </p>
            <p className="text-xl">
              Account No: 123testing
              <br />
            </p>
            <p className="text-xl">
              IFSC Code: H123testing
              <br />
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center bg-white divide-y divide-gray-300 text-left">
          <div className="p-4">
            <strong>Date of Invoice:</strong> 12/11/2024
          </div>
          <div className="p-4">
            <strong>GSTIN:</strong> 1249249nfifsf
          </div>
          <div className="p-4">
            <strong>PAN:</strong> 1249249nfifffsf
          </div>
        </div>
      </div>
    </div>
  );
}
