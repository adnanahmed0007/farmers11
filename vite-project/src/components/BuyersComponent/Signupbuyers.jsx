import React, { useContext, useState } from "react";
import axios from "axios";
import Mycontext from "../farmersComponets/Context";
import { Link } from "react-router-dom";

const Signupbuyers = () => {
  const {
    fullName,
    SetFullname,
    phoneNumber,
    SetPhonenumber,
    address,
    Setaddress,
    email,
    Setemail,
    password,
    setPassword,
    Setage,
    age,
  } = useContext(Mycontext);

  const [data, setData] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
   
    try {
      if (email && password && age && phoneNumber && fullName && address) {
        const send_data = await axios.post(
          "http://localhost:9808/api/auth/buy/buyer/signup",
          {
            fullName,
            phoneNumber,
            email,
            password,
            address,
            age,
          },
          { withCredentials: true }
        );

        if (send_data) {

          console.log(send_data.data.User);
          setData(send_data.data.User);
          alert("Signup successful! Please check your email for verification.");
        }
      }
    } catch (e) {

      if (e.response && e.response.status === 400) {
        console.log(e)
      } else {
        alert("Something went wrong, please try again.");
      }
      console.log(e);
    }
  }

  return (
    <div className="flex flex-col md:flex-row h-screen items-center justify-center  bg-gray-800">




      {/* Left Section - Welcome Message */}
      <div className="md:w-1/2 p-6 text-center md:text-left">
        <h1 className="text-4xl font-extrabold text-green-800">
          🛍 Join Our Marketplace!
        </h1>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          Buy fresh farm produce directly from trusted farmers. Sign up today
          and start shopping for healthy, organic goods!
        </p>
        <p className="mt-4 text-lg text-gray-600 italic">
          "Support local farmers, eat fresh, and live healthy!" 🍎🥦
        </p>
      </div>

      {/* Right Section - Signup Form */}
      <div className="md:w-2/5 flex items-center justify-center p-6">
        <div className="max-w-md w-full p-8  bg-gray-800 border-green-300 rounded-2xl">
          <h2 className="text-3xl font-bold mb-6 text-center text-green-700">
            Buyer Signup
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              onChange={(e) => SetFullname(e.target.value)}
              type="text"
              placeholder="👤 Full Name"
              className="w-full p-4 text-lg border border-green-400 rounded-lg focus:ring-2 focus:ring-green-600 placeholder-gray-600"
              required
            />
            <input
              onChange={(e) => Setaddress(e.target.value)}
              type="text"
              placeholder="📍 Address"
              className="w-full p-4 text-lg border border-green-400 rounded-lg focus:ring-2 focus:ring-green-600 placeholder-gray-600"
              required
            />
            <input
              onChange={(e) => Setage(e.target.value)}
              type="number"
              placeholder="🎂 Age"
              className="w-full p-4 text-lg border border-green-400 rounded-lg focus:ring-2 focus:ring-green-600 placeholder-gray-600"
              required
            />
            <input
              onChange={(e) => Setemail(e.target.value)}
              type="email"
              placeholder="📧 Email"
              className="w-full p-4 text-lg border border-green-400 rounded-lg focus:ring-2 focus:ring-green-600 placeholder-gray-600"
              required
            />
            <input
              onChange={(e) => SetPhonenumber(e.target.value)}
              type="tel"
              placeholder="📞 Phone Number"
              className="w-full p-4 text-lg border border-green-400 rounded-lg focus:ring-2 focus:ring-green-600 placeholder-gray-600"
              required
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="🔑 Password"
              className="w-full p-4 text-lg border border-green-400 rounded-lg focus:ring-2 focus:ring-green-600 placeholder-gray-600"
              required
            />

            <button
              type="submit"
              className="w-full bg-green-700 text-white p-4 text-lg rounded-lg shadow-md hover:bg-green-800 transition font-semibold"
            >
              Sign Up 🛒
            </button>
          </form>

          {/* Already Have an Account? */}
          <p className="text-center mt-4 text-gray-700 text-lg">
            Already have an account?{" "}
            <Link
              to={"/loginbuyers"}
              className="text-green-700 font-semibold hover:underline"
            >
              Login here
            </Link>
          </p>

          {/* Display Signup Details After Submission */}
          {data && (
            <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-green-700">
                Signup Successful!
              </h2>
              <p>
                <strong>👤 Name:</strong> {data.fullName}
              </p>
              <p>
                <strong>🎂 Age:</strong> {data.age}
              </p>
              <p>
                <strong>📍 Address:</strong> {data.address}
              </p>
              <p>
                <strong>📞 Phone:</strong> {data.phoneNumber}
              </p>
              <p>
                <strong>📧 Email:</strong> {data.email}
              </p>
              <p className="text-green-600 font-semibold mt-2">
                Welcome to our marketplace! 🎉
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signupbuyers;
