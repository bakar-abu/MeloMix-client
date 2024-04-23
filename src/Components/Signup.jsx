import React, { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

export const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const baseUrl = process.env.REACT_APP_URI;

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }
    axios
      .post(`${baseUrl}/user`, { name, email, password })
      .then((result) => {
        console.log(result);
        setMessage("Signup successful. You can now login.");
        setRedirectToLogin(true);
      })
      .catch((err) => console.log(err));
  };

  if (redirectToLogin) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="flex flex-col items-center justify-center lg:mt-0 md:mt-0 mt-6">
      <div className="text-white text-4xl font-semibold text-center mb-4">
        Sign Up
      </div>
      {message && <div className="text-red-500 mb-4">{message}</div>}
      <form
        className="w-full max-w-md bg-gradient-to-tr to-emerald-600 from-teal-900 opacity-50 p-4 hover:opacity-100 rounded-lg shadow-md md:mt-5 mt-2 justify-between"
        onSubmit={handleSignupSubmit}
      >
        <label className="block text-white mb-2">Name:</label>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={handleNameChange}
          className="border rounded-md px-3 py-2 mb-4 text-sm w-full text-emerald-950"
        />
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
        <label className="block text-white mb-2">Confirm Password:</label>
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          className="border rounded-md px-3 py-2 mb-4 text-sm w-full text-emerald-950"
        />
        <button
          type="submit"
          className="bg-emerald-600 hover:bg-teal-600 text-white px-4 py-2 rounded-md w-full"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

