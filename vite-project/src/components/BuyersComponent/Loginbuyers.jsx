import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Mycontext from "../farmersComponets/Context";
import axios from "axios";

const Loginbuyers = () => {
  const { email, Setemail, password, setPassword } = useContext(Mycontext);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const send_data = await axios.post(
        "http://localhost:9808/api/auth/buy/buyer/login",
        { email, password },
        { withCredentials: true }
      );
      if (send_data) {
        console.log(send_data);
        alert("Login successful!");
      }
    } catch (e) {
      if (e.response && e.response.status === 400) {
        alert("Wrong credentials! Please try again or sign up.");
      } else {
        alert("Something went wrong, please try again.");
      }
    }
  }

  return (
    <div className="flex flex-col md:flex-row h-screen items-center justify-center  bg-gray-800">
      <div className="w-full max-w-md p-8 bg-gray-800 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-6">
          🛒 Welcome Back, Buyer!
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email Input */}
          <div>
            <input
              type="email"
              placeholder="📧 Enter your Email"
              onChange={(e) => Setemail(e.target.value)}
              className="w-full p-3 border border-green-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 placeholder-gray-600"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <input
              type="password"
              placeholder="🔑 Enter your Password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-green-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 placeholder-gray-600"
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-green-700 text-white p-3 rounded-lg shadow-md hover:bg-green-800 transition font-semibold text-lg"
          >
            Login 🧺
          </button>
        </form>

        {/* Signup Link */}
        <div className="mt-5 text-center">
          <p className="text-gray-700 text-lg">New to the marketplace?</p>
          <Link
            to="/signupbuyers"
            className="mt-2 inline-block bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-yellow-600 transition"
          >
            Sign Up 🌱
          </Link>
        </div>

        {/* Buyer Message */}
        <div className="mt-6 p-4 bg-green-100 text-green-800 text-center rounded-lg shadow-md">
          <h1 className="text-lg font-semibold">
            🧺 Find fresh produce directly from farmers near you. Support local, eat healthy! 🌾
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Loginbuyers;
