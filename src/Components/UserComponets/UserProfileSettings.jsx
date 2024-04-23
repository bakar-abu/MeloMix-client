import React, { useState } from "react";
import { HiOutlineUser } from "react-icons/hi";

export const UserProfileSettings = () => {
  const [userName, setUserName] = useState("John Doe");
  const [password, setPassword] = useState("********");

  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="flex-row justify-center items-center md:pt-8 pt-4 ">
      <p className="text-white text-4xl font-semibold text-center">Update User</p>
      <div
        className="w-[90%] bg-gradient-to-tr to-emerald-600 from-teal-900 opacity-50 hover:opacity-100 rounded-lg border-l-3 border-lime-600 shadow-md mx-auto md:mt-5 mt-2 flex justify-between"
        style={{
          boxShadow: "0 0 10px 5px #059669",
        }}
      >
        <div className="md:w-[50%] w-[40%] flex justify-center items-center text-white text-[100px]">
          <div className="bg-white rounded-full md:h-40 md:w-40 h-24 w-24 flex items-center justify-center">
            <HiOutlineUser className="text-emerald-600 md:text-[100px] text-[70px]" />
          </div>
        </div>
        <div className="md:w-[50%] w-[60%] flex justify-center items-start flex-col p-4">
          <label htmlFor="userName">User Name:</label>
          <input
            type="text"
            id="userName"
            value={userName}
            onChange={handleNameChange}
            className="border rounded-md px-2 py-1 mb-2 text-sm md:text-base"
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="border rounded-md px-2 py-1 mb-2 text-sm md:text-base"
          />
          <button className="bg-emerald-600 hover:bg-garden text-white md:px-[17%] px-[35%] py-1 mt-2 hover:opacity-45 rounded-md shadow-md">
            Update
          </button>
        </div>
      </div> 

      <hr className="md:mt-10 mt-5 w-[90%]  mx-auto "></hr>
    </div>
  );
};