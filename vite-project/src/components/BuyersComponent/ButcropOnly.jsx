import React, { useState } from 'react';
import axios from 'axios';

const ButcropOnly = () => {
  const [cropName, setCropname] = useState('');
  const [arraya, setArray] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:9808/api/buy/crop',
        {
          cropName: cropName.trim().toLowerCase(),
        },
        { withCredentials: true }
      );
      if (response) {
        console.log(response);
        setArray(response.data.findcrop);
        console.log(response.data.findcrop);
      }
    } catch (e) {
      if (e.response && e.response.status === 400) {
        alert(e.response.data.message);
      } else if (!e.response) {
        alert('server issues');
      }
      console.log(e);
    }
  }

  return (
    <div className="min-h-screen  bg-gray-800 flex flex-col items-center pt-6 px-4">
        <h1 className="text-2xl font-bold text-yellow-700 mb-4 text-center">🔍 Search Crops by Name & Location</h1>

      <div className="bg-white p-4 rounded-xl shadow-md w-full max-w-4xl mb-6">
        
        <form onSubmit={handleSubmit} className="flex flex-wrap gap-4 items-end justify-center">
          <div className="flex flex-col w-full sm:w-[240px]">
            <label htmlFor="cropName" className="text-sm font-medium text-gray-700 mb-1">
              Crop Name
            </label>
            <input
              onChange={(e) => setCropname(e.target.value)}
              type="text"
              id="cropName"
              placeholder="e.g., Wheat"
              required
              className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-green-400 outline-none"
            />
          </div>

          <button
            type="submit"
            className="h-[42px] px-4 bg-yellow-600 hover:bg-yellow-700 text-white text-sm rounded-md font-medium transition self-end"
          >
            Search
          </button>
        </form>
      </div>

      {/* Table Output */}
      {arraya.length > 0 && (
        <div className="w-full max-w-4xl bg-white shadow-md rounded-lg overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="px-3 py-2 text-left">Crop Name</th>
                <th className="px-3 py-2 text-left">Pickup Location</th>
                <th className="px-3 py-2 text-left">Crop Price</th>
                <th className="px-3 py-2 text-left">Crop Quantity</th>
                <th className="px-3 py-2 text-left">Phone Number</th>
              </tr>
            </thead>
            <tbody>
              {arraya.map((value, index) => (
                <tr key={index} className="border-b hover:bg-green-50">
                  <td className="px-3 py-2 capitalize">{value.cropName}</td>
                  <td className="px-3 py-2 capitalize">{value.Pickup_Location}</td>
                  <td className="px-3 py-2">₹{value.cropPrice}</td>
                  <td className="px-3 py-2">{value.cropQuantity} kg</td>
                  <td className="px-3 py-2">{value.phoneNumber}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ButcropOnly;
