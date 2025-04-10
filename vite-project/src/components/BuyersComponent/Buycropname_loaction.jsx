import React, { useState } from 'react';
import axios from 'axios';

const BuyCropNameLocation = () => {
  const [cropName, setCropname] = useState("");
  const [Pickup_Location, setPickuplocation] = useState("");
  const [get_data, set_data] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:9808/api/buy/crop/place/location",
        {
          cropName: cropName.trim().toLowerCase(),
          Pickup_Location: Pickup_Location.trim().toLowerCase(),
        },
        { withCredentials: true }
      );
      if (response) {
        console.log(response);
        alert("We got the crops! Here we go.");
        set_data(response.data.find_Crop_location);
      }
    } catch (e) {
      if (e.response && e.response.status === 400) {
        alert("Crop is not available.");
      }
      console.log(e);
    }
  }

  return (
    <div className="min-h-screen  bg-gray-800 flex flex-col items-center pt-6 px-4">

      {/* Header */}
      <h1 className="text-2xl font-bold text-sky-700 mb-4 text-center">🔍 Search Crops by Name & Location</h1>

      {/* Form */}
      <div className="bg-white p-5 rounded-xl shadow-md w-full max-w-5xl mb-6">
        <form onSubmit={handleSubmit} className="flex flex-wrap items-end justify-center gap-4">
          <div className="flex flex-col w-full sm:w-[220px]">
            <label htmlFor="cropName" className="text-sm font-medium text-gray-700 mb-1">Crop Name</label>
            <input
              onChange={(e) => setCropname(e.target.value)}
              type="text"
              id="cropName"
              placeholder="e.g., Wheat"
              required
              className="px-3 py-2 border border-sky-300 rounded-md shadow-sm focus:ring-2 focus:ring-sky-400 outline-none"
            />
          </div>

          <div className="flex flex-col w-full sm:w-[220px]">
            <label htmlFor="pickupLocation" className="text-sm font-medium text-gray-700 mb-1">Pickup Location</label>
            <input
              onChange={(e) => setPickuplocation(e.target.value)}
              type="text"
              id="pickupLocation"
              placeholder="e.g., Lucknow"
              required
              className="px-3 py-2 border border-sky-300 rounded-md shadow-sm focus:ring-2 focus:ring-sky-400 outline-none"
            />
          </div>

          <button
            type="submit"
            className="h-[42px] px-6 bg-sky-600 hover:bg-sky-700 text-white text-sm rounded-md font-semibold transition"
          >
            Search
          </button>
        </form>
      </div>

      {/* Table Output */}
      {get_data.length > 0 && (
        <div className="w-full max-w-4xl bg-white shadow-md rounded-lg overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-sky-600 text-white">
              <tr>
                <th className="px-3 py-2 text-left">Crop Name</th>
                <th className="px-3 py-2 text-left">Pickup Location</th>
                <th className="px-3 py-2 text-left">Crop Price</th>
                <th className="px-3 py-2 text-left">Crop Quantity</th>
                <th className="px-3 py-2 text-left">Phone Number</th>
              </tr>
            </thead>
            <tbody>
              {get_data.map((value, index) => (
                <tr key={index} className="border-b hover:bg-sky-50">
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

export default BuyCropNameLocation;
