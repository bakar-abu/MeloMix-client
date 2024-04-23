import React from 'react';
import { AiOutlineSearch, AiOutlineBell, AiOutlineUser, AiOutlineLogout } from 'react-icons/ai';
import { PiWaveformBold } from "react-icons/pi";
import {  useNavigate } from 'react-router-dom';
import { AuthenticationPage } from '../../Pages';

export const TopNav = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from local storage
    navigate("/WelcomePage"); // Redirect to the login page
  };
  return (
    <nav className="bg-gradient-to-tr from-slate-600 to-emerald-900 rounded-b-3xl p-4 sticky top-0 z-10">
      <div className="flex items-center justify-between w-full">
        {/* Logo and title */}
        <div className="flex items-center text-white">
          <PiWaveformBold className="mr-2 text-xl md:text-3xl" />
          <span className="font-bold text-lg md:text-2xl">MeloMix</span>
        </div>

        {/* Search bar centered */}
        <div className="flex-grow flex items-center justify-center">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search..."
              className="bg-white rounded-full pl-8 pr-4 py-1.5 outline-none w-40 md:w-64 text-sm md:text-base transition-opacity duration-200"
            />
            <AiOutlineSearch className="absolute left-2 md:left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
          </div>
        </div>

        {/* Notification and profile icons */}
        <div className="flex items-center">

          <AiOutlineBell className="text-white mr-2 md:mr-4 hover:text-teal-500" size={18}  />
          <AiOutlineLogout className="text-white hover:text-teal-500" size={18} onClick={handleLogout} />
        </div>
      </div>
    </nav>
  );
};
