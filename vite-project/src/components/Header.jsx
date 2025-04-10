import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [Showfarmers, setShowfarmers] = useState(false);
  const [Showbuyers, setShowbuyers] = useState(false);
  return (
    <div className="bg-gray-800 p-4 shadow-md">

    
      {Showfarmers && !Showbuyers&& (
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center bg-white-800 p-4 rounded-lg shadow-lg">


          <h1 className="text-green-600 text-2xl font-bold mb-4 md:mb-0">Farmer Portal</h1>
          <nav className="flex flex-wrap justify-center md:justify-end gap-3 md:gap-4">
            <Link to="/" className="px-5 py-2 text-sm md:text-base bg-blue-500 text-white rounded-md shadow hover:bg-blue-700 transition">
              Home
            </Link>
            <Link to="/login" className="px-5 py-2 text-sm md:text-base bg-red-500 text-white rounded-md shadow hover:bg-red-700 transition">
              Login
            </Link>
            <Link to="/sign" className="px-5 py-2 text-sm md:text-base bg-yellow-500 text-white rounded-md shadow hover:bg-yellow-700 transition">
              Sign Up
            </Link>
            <Link to="/addcrops" className="px-5 py-2 text-sm md:text-base bg-teal-500 text-white rounded-md shadow hover:bg-teal-700 transition">
              Add Crop
            </Link>
            <Link to="/sellingcrops" className="px-5 py-2 text-sm md:text-base bg-pink-500 text-white rounded-md shadow hover:bg-pink-700 transition">
              Your Selling Crops
            </Link>
            <Link to="/getcropdetails" className="px-5 py-2 text-sm md:text-base bg-gray-500 text-white rounded-md shadow hover:bg-gray-700 transition">
              Crop Details
            </Link>
            <Link to="/getalldata" className="px-5 py-2 text-sm md:text-base bg-orange-500 text-white rounded-md shadow hover:bg-orange-700 transition">
              All Crop Data
            </Link>
            <Link to="/userInfo" className="px-5 py-2 text-sm md:text-base bg-purple-500 text-white rounded-md shadow hover:bg-purple-700 transition">
              User Info
            </Link>
          </nav>
        </div>
      )}
      {Showbuyers && !Showfarmers && (
  <div className="container mx-auto flex flex-col md:flex-row justify-between items-center bg-gray-800 p-4 rounded-lg shadow-lg">
    <h1 className="text-green-600 text-2xl font-bold mb-4 md:mb-0">Farmer Portal</h1>
    <nav className="flex flex-wrap justify-center md:justify-end gap-3 md:gap-4">
      <Link
        to="/"
        className="px-5 py-2 text-sm md:text-base bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
      >
        Home
      </Link>
      <Link
        to="/loginbuyers"
        className="px-5 py-2 text-sm md:text-base bg-red-500 text-white rounded-md shadow hover:bg-red-600 transition"
      >
        Login Buyers
      </Link>
      <Link
        to="/signupbuyers"
        className="px-5 py-2 text-sm md:text-base bg-yellow-500 text-white rounded-md shadow hover:bg-yellow-600 transition"
      >
        Sign Up Buyers
      </Link>
      <Link
        to="/buycroponly"
        className="px-5 py-2 text-sm md:text-base bg-emerald-500 text-white rounded-md shadow hover:bg-emerald-600 transition"
      >
        BuyCrop
      </Link>
      <Link
        to="/buycropnamelocation"
        className="px-5 py-2 text-sm md:text-base bg-orange-500 text-white rounded-md shadow hover:bg-orange-600 transition"
      >
        BuyCropLocation
      </Link>
      <Link
        to="/buycropnamequantity"
        className="px-5 py-2 text-sm md:text-base bg-teal-500 text-white rounded-md shadow hover:bg-teal-600 transition"
      >
        BuyCropQuantity
      </Link>
      <Link
        to="/buylocationquantity"
        className="px-5 py-2 text-sm md:text-base bg-fuchsia-500 text-white rounded-md shadow hover:bg-fuchsia-600 transition"
      >
        BuyLocationQuantity
      </Link>
      <Link
  to="/buyerinfo"
  className="px-5 py-2 text-sm md:text-base bg-black text-white rounded-md shadow hover:bg-gray-800 transition"
>
  BuyersInfo
</Link>

    </nav>
  </div>
)}

      {/* Farmer Account Button */}
      <div className="flex justify-center mt-4">
      <div className="flex justify-center gap-4 mt-4">
        <button
          onClick={() => setShowfarmers(!Showfarmers)}
          className="px-6 py-2 bg-white text-green-600 font-semibold rounded-lg shadow-md hover:bg-green-500 hover:text-white transition duration-300"
        >
          Farmer Account
        </button>
        <button
          onClick={() => setShowbuyers(!Showbuyers)}
          className="px-6 py-2 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition duration-300"
        >
          Buyer Account
        </button>
      </div>
      </div>
    </div>
  );
};

export default Header;
