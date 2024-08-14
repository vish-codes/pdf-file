import React, { useState } from 'react';
import {
  FaCalendarAlt,
  FaUser,
  FaFileInvoice,
  FaBuilding,
  FaMapMarkerAlt,
  FaDollarSign,
  FaCalendarDay,
} from 'react-icons/fa';
import { Ri24HoursFill } from 'react-icons/ri';
import { GrResources } from 'react-icons/gr';
import { IoCodeWorking } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';
import { motion } from 'framer-motion';

const TestitingCompV3 = () => {
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [isResourcesFormVisible, setIsResourcesFormVisible] = useState(true);
  const [resouceDataBeforeSubmission, setResouceDataBeforeSubmission] =
    useState([]);
  const [address, setAddress] = useState({
    line1: '',
    line2: '',
    cityState: '',
  });
  const [resource, setResource] = useState({
    name: '',
    resource: '',
    resourceCode: '',
    fromDate: '',
    toDate: '',
    amount: '',
    days: '',
    hours: '',
  });
  const [errors, setErrors] = useState({});

  function handleAddResource() {
    if (
      !(
        resource.name &&
        resource.resource &&
        resource.resourceCode &&
        resource.fromDate &&
        resource.toDate &&
        resource.amount &&
        resource.days &&
        resource.hours
      )
    )
      return;
    console.log(resource);
    setIsResourcesFormVisible(true);
    setResouceDataBeforeSubmission((prevData) => [
      ...prevData,
      {
        name: resource.name,
        resource: resource.resource,
        resourceCode: resource.resourceCode,
        fromDate: resource.fromDate,
        toDate: resource.toDate,
        amount: resource.amount,
        days: resource.days,
        hours: resource.hours,
      },
    ]);
    setResource({
      name: '',
      resource: '',
      resourceCode: '',
      fromDate: '',
      toDate: '',
      amount: '',
      days: '',
      hours: '',
    });
  }

  function handleRemoveResource(name) {
    const updatedResources = resouceDataBeforeSubmission.filter(
      (r) => r.name !== name
    );
    setResouceDataBeforeSubmission(updatedResources);
  }

  //   console.log(resouceDataBeforeSubmission);

  const validateForm = () => {
    let newErrors = {};
    if (!invoiceNumber.trim())
      newErrors.invoiceNumber = 'Invoice number is required';
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!date) newErrors.date = 'Date is required';
    if (!address.line1.trim()) newErrors.line1 = 'Address Line 1 is required';
    if (!address.cityState.trim())
      newErrors.cityState = 'City and State are required';
    if (!resource.fromDate || !resource.toDate)
      newErrors.dateRange = 'Both dates are required';
    if (!resource.amount.trim()) newErrors.amount = 'Amount is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', {
        invoiceNumber,
        name,
        date,
        address,
        resource,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md"
      >
        <h1 className="text-3xl font-bold text-center text-indigo-700 mb-8">
          Invoice Form
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Existing fields --------------------------------------- */}
          <div>
            <label
              htmlFor="invoiceNumber"
              className="block text-lg font-medium text-gray-700 mb-1"
            >
              Invoice Number :
            </label>
            <div className="relative">
              <FaFileInvoice className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                id="invoiceNumber"
                value={invoiceNumber}
                onChange={(e) => setInvoiceNumber(e.target.value)}
                className={`pl-10 w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  errors.invoiceNumber ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter invoice number"
                aria-invalid={errors.invoiceNumber ? 'true' : 'false'}
                aria-describedby={
                  errors.invoiceNumber ? 'invoiceNumber-error' : undefined
                }
              />
            </div>
            {/* {errors.invoiceNumber && (
              <p id="invoiceNumber-error" className="mt-1 text-sm text-red-600">
                {errors.invoiceNumber}
              </p>
            )} */}
          </div>
          {/* Address fields ------------------------------------- */}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-1">
              Address :
            </label>
            <div className="space-y-2">
              <div className="relative">
                <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={address.line1}
                  onChange={(e) =>
                    setAddress({ ...address, line1: e.target.value })
                  }
                  className={`pl-10 w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    errors.line1 ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Address Line 1"
                />
              </div>
              <div className="relative">
                <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={address.line2}
                  onChange={(e) =>
                    setAddress({ ...address, line2: e.target.value })
                  }
                  className={`pl-10 w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500  ${
                    errors.line1 ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Address Line 2"
                />
              </div>
              <div className="relative">
                <FaBuilding className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={address.cityState}
                  onChange={(e) =>
                    setAddress({ ...address, cityState: e.target.value })
                  }
                  className={`pl-10 w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    errors.cityState ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="City, State"
                />
              </div>
            </div>
            {/* {errors.line1 && (
              <p className="mt-1 text-sm text-red-600">{errors.line1}</p>
            )}
            {errors.cityState && (
              <p className="mt-1 text-sm text-red-600">{errors.cityState}</p>
            )} */}
          </div>
          {/* Resource fields --------------------------------------- */}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-1">
              Resource Details :
            </label>

            <div className="relative">
              {/* /-/-/-/-/---------------LIST OF RESOURCES-------- */}
              {/* {resource.name &&  */}
              {isResourcesFormVisible &&
                resouceDataBeforeSubmission.map((values, index) => (
                  <div
                    className="relative flex justify-between bg-green-300 p-2 my-3 rounded border cursor-pointer"
                    key={index}
                  >
                    <div>{values.name}</div>
                    <RxCross2
                      className="mt-1"
                      onClick={() => handleRemoveResource(values.name)}
                    />
                  </div>
                ))}
              {/* /-/-/-/-/---------------END OF RESOURCES-------- */}
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={resource.name}
                  onChange={(e) =>
                    setResource({ ...resource, name: e.target.value })
                  }
                  className={`pl-10 w-full mb-2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    errors.cityState ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Name"
                />
              </div>
              <div className="relative">
                <GrResources className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={resource.resource}
                  onChange={(e) =>
                    setResource({ ...resource, resource: e.target.value })
                  }
                  className={`pl-10 w-full mb-2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    errors.cityState ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Resource"
                />
              </div>
              <div className="relative">
                <IoCodeWorking className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={resource.resourceCode}
                  onChange={(e) =>
                    setResource({ ...resource, resourceCode: e.target.value })
                  }
                  className={`pl-10 w-full mb-2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    errors.cityState ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Resource Code"
                />
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="relative w-1/3 mb-2">
                <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="date"
                  value={resource.fromDate}
                  onChange={(e) =>
                    setResource({ ...resource, fromDate: e.target.value })
                  }
                  className={`pl-10 w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    errors.amount ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="From"
                />
              </div>
              <div className="relative w-1/3">
                <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="date"
                  value={resource.toDate}
                  onChange={(e) =>
                    setResource({ ...resource, toDate: e.target.value })
                  }
                  className={`pl-10 w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    errors.amount ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="To"
                />
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="relative w-1/3">
                <FaCalendarDay className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="number"
                  value={resource.days}
                  onChange={(e) =>
                    setResource({ ...resource, days: e.target.value })
                  }
                  className={`pl-10 w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    errors.amount ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Days"
                />
              </div>
              <div className="relative w-1/3">
                <Ri24HoursFill className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="number"
                  value={resource.hours}
                  onChange={(e) =>
                    setResource({ ...resource, hours: e.target.value })
                  }
                  className={`pl-10 w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    errors.amount ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Hours"
                />
              </div>
              <div className="relative w-1/3">
                <FaDollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="number"
                  value={resource.amount}
                  onChange={(e) =>
                    setResource({ ...resource, amount: e.target.value })
                  }
                  className={`pl-10 w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    errors.amount ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Amount"
                />
              </div>
            </div>
            <button
              onClick={handleAddResource}
              className="space-y-2 text-gray-700 my-2 p-2 border  text-white rounded bg-indigo-600 text-sm"
            >
              Add Resource +
            </button>
            {/* {errors.dateRange && (
              <p className="mt-1 text-sm text-red-600">{errors.dateRange}</p>
            )}
            {errors.amount && (
              <p className="mt-1 text-sm text-red-600">{errors.amount}</p>
            )} */}
          </div>
          {/* Submit button ----------------------------------------- */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-          hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-300"
          >
            Submit Invoice
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default TestitingCompV3;
