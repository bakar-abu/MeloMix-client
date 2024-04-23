import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_URI}/user/login`, {
        email,
        password,
      });
      const { token, message } = response.data;
      if (token) {
        localStorage.setItem("token", token); // Store token in local storage
        navigate('/home'); // Redirect to the home page
      } else {
        setMessage(message);
        setShowModal(true);
      }
    } catch (error) {
      console.error(error);
      setMessage("An error occurred. Please try again.");
      setShowModal(true);
    }
  };


  return (
    <div className="flex flex-col items-center justify-center mt-6">
      <div className="text-white text-4xl font-semibold text-center mb-4">
        Login
      </div>
      <form
        className="w-full max-w-md bg-gradient-to-tr to-emerald-600 from-teal-900 opacity-50 p-4 hover:opacity-100 rounded-lg shadow-md"
        onSubmit={handleLoginSubmit}
      >
        <label className="block text-white mb-2">Email:</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          className="border rounded-md px-3 py-2 mb-4 text-sm w-full text-emerald-950"
        />
        <label className="block text-white mb-2">Password:</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          className="border rounded-md px-3 py-2 mb-4 text-sm w-full text-emerald-950"
        />
        <button
          className="bg-emerald-600 hover:bg-teal-600 text-white px-4 py-2 rounded-md w-full"
          type="submit"
        >
          Login
        </button>
        {showModal && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-white rounded shadow-lg text-emerald-950">
            <p>{message}</p>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        )}
      </form>
    </div>
  );
};
