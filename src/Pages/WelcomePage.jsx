import React, { useState } from "react";
import { PiWaveformBold } from "react-icons/pi";
import { Login, Signup } from "../Components";

export const WelcomePage = () => {
  const [showLogin, setShowLogin] = useState(true); // State to toggle between Login and Signup

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="w-[90%]  pt-3 mx-auto flex lg:flex-row md:flex-row flex-col items-center justify-center ">
      <div className="lg:w-[50%] md:w-[50%] w-[100%] flex flex-col items-center text-white ">
        <div className="flex lg:items-center md:items-center items-center ">
          <PiWaveformBold className="mr-2 text-[60px] md:text-[100px]" />
          <span className="font-bold text-[30px] md:text-[70px]">MeloMix</span>
        </div>
        <span className="mt-2 text-center">
          Welcome to MeloMix where you can listen to Quran in your favorite
          Qari's voice
        </span>
      </div>

      <div className="lg:w-[50%] md:w-[50%] w-[100%] h-[400px] flex flex-col items-center text-white">
        
        {showLogin ? <Login /> : <Signup />}{" "}
        {/* Conditional rendering based on showLogin state */}
        <hr className="bg-emerald-950 opacity-[70%]  border-1 w-72 mt-6" />
        <button onClick={toggleForm} className="mt-3 text-white ">
          
          {showLogin
            ? "Don't have an account? Sign up"
            : "Already have an account? Log in"}
        </button>
      </div>
    </div>
  );
};
