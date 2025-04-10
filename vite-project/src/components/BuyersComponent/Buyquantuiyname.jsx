import React, { useState } from 'react';
import axios from 'axios';

const Buyquantuiyname = () => {
  const [cropName, setCropname] = useState("");
  const [cropQuantity, setcropQuantity] = useState("");
  const [get_data, set_data] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:9808/api/buy/crop/quantity/name",
        {
          cropName: cropName.trim().toLowerCase(),
          cropQuantity: cropQuantity.trim().toLowerCase(),
        },
        { withCredentials: true }
      );
      if (response) {
        alert("We got the crops, here you go!");
        set_data(response.data.crop_get);
      }
    } catch (e) {
      if (e.response && e.response.status === 400) {
        alert("Crop not available.");
      }
      console.log(e);
    }
  }

  return (
    <div className="min-h-screen  bg-gray-800 flex flex-col items-center pt-6 px-4">
      {/* Header */}
      <h2 className="text-2xl font-bold text-center text-violet-700 mb-6">🔍 Find Crops by Name & Quantity</h2>

      {/* Form */}
      <div className="bg-white p-5 rounded-xl shadow-md w-full max-w-5xl mb-6">
        <form onSubmit={handleSubmit} className="flex flex-wrap items-end justify-center gap-4">
          <div className="flex flex-col w-full sm:w-[220px]">
            <label className="text-sm font-medium text-gray-700 mb-1">Crop Name</label>
            <input
              onChange={(e) => setCropname(e.target.value)}
              type="text"
              placeholder="e.g., Onion"
              required
              className="px-3 py-2 border border-violet-300 rounded-md shadow-sm focus:ring-2 focus:ring-violet-500 outline-none text-sm"
            />
          </div>

          <div className="flex flex-col w-full sm:w-[220px]">
            <label className="text-sm font-medium text-gray-700 mb-1">Crop Quantity</label>
            <input
              onChange={(e) => setcropQuantity(e.target.value)}
              type="text"
              placeholder="e.g., 15"
              required
              className="px-3 py-2 border border-violet-300 rounded-md shadow-sm focus:ring-2 focus:ring-violet-500 outline-none text-sm"
            />
          </div>

          <button
            type="submit"
            className="h-[42px] px-6 bg-violet-600 hover:bg-violet-700 text-white text-sm rounded-md font-semibold transition"
          >
            Search
          </button>
        </form>
      </div>

      {/* Table */}
      {get_data.length > 0 && (
        <div className="w-full max-w-5xl bg-white shadow-lg rounded-xl overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-violet-600 text-white">
              <tr>
                <th className="px-4 py-3 text-left">Crop Name</th>
                <th className="px-4 py-3 text-left">Pickup Location</th>
                <th className="px-4 py-3 text-left">Price</th>
                <th className="px-4 py-3 text-left">Quantity</th>
                <th className="px-4 py-3 text-left">Phone Number</th>
              </tr>
            </thead>
            <tbody>
              {get_data.map((value, index) => (
                <tr key={index} className="border-b hover:bg-violet-50">
                  <td className="px-4 py-2 capitalize">{value.cropName}</td>
                  <td className="px-4 py-2 capitalize">{value.Pickup_Location}</td>
                  <td className="px-4 py-2">₹{value.cropPrice}</td>
                  <td className="px-4 py-2">{value.cropQuantity} kg</td>
                  <td className="px-4 py-2">{value.phoneNumber}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Buyquantuiyname;
