import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PiWaveformBold } from 'react-icons/pi'; // Import your PiWaveformBold icon component

export const NotFound404 = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleRedirect = () => {
    if (token) {
      navigate('/home');
    } else {
      navigate('/welcomepage');
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mx-auto mt-80  text-white">
      <PiWaveformBold className="mr-2 text-xl md:text-[100px]" />
      <h1 className="text-3xl md:text-4xl font-bold mb-4">404 Not Found</h1>
      <p className="text-center mb-8">The page you are looking for does not exist.</p>
      <button 
        className="bg-emerald-950 opacity-45  hover:bg-emerald-300 text-white font-bold py-2 px-4 rounded"
        onClick={handleRedirect}
      >
        {token ? 'Go to Home' : 'Go to Welcome Page'}
      </button>
    </div>
  );
};

export default NotFound404;
