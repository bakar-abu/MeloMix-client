import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineTool,
  AiOutlineAppstore,
  AiOutlineUser,
  AiOutlineFileText,
} from "react-icons/ai";
import "./BottomNav.css";

export const BottomNav = () => {
  const [activeTab, setActiveTab] = useState("home"); // Sets default active tab

  return (
    <div className="w-full">
      <section className="block absolute inset-x-0 bottom-0 z-100 bg-gradient-to-tr from-slate-600 rounded-tl-[40%] rounded-tr-[40%] to-emerald-900 xl:py-3 lg:py-3 md:py-3 py-4"
        style={{
          boxShadow: "0 0 10px 5px rgba(0, 255, 0, 0.5)",
          animation: "glow 3s ease-in-out infinite alternate",
        }}>
        <div id="tabs" className="flex justify-center">
          <Link to="/home"
            className={`w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2  ${activeTab === "home" ? "active:text-teal-500 " : ""}`}
            onClick={() => setActiveTab("home")}>
            <AiOutlineHome  className="inline-block mb-1 md:mb-0 text-2xl md:text-4xl text-amber-50"/>
          </Link>
          <Link to="/tool"
            className={`w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2  ${activeTab === "tool" ? "active:text-teal-500" : ""}`}
            onClick={() => setActiveTab("tool")}>
            <AiOutlineTool  className="inline-block mb-1 md:mb-0 text-2xl md:text-4xl text-amber-50"/>
          </Link>
          <Link to="/appstore"
            className={`w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2  ${activeTab === "appstore" ? "active:text-teal-500" : ""}`}
            onClick={() => setActiveTab("appstore")}>
            <AiOutlineAppstore  className="inline-block mb-1 md:mb-0 text-2xl md:text-4xl text-amber-50"/>
          </Link>
          <Link to="/file"
            className={`w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2  ${activeTab === "file" ? "active:text-teal-500" : ""}`}
            onClick={() => setActiveTab("file")}>
            <AiOutlineFileText  className="inline-block mb-1 md:mb-0 text-2xl md:text-4xl text-amber-50"/>
          </Link>
          <Link to="/user"
            className={`w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2  ${activeTab === "user" ? "active:text-teal-500" : ""}`}
            onClick={() => setActiveTab("user")}>
            <AiOutlineUser  className="inline-block mb-1 md:mb-0 text-2xl md:text-4xl text-amber-50"/>
          </Link>
        </div>
      </section>
    </div>
  );
};
