import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineTool, AiOutlineAppstore, AiOutlineUser, AiOutlineFileText, AiOutlinePlus, AiOutlineUpload } from "react-icons/ai";
import { GiHeadphones } from "react-icons/gi";
import "./BottomNav.css";

export const BottomNav = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="w-full">
        <section className="block absolute inset-x-0 bottom-0 z-100 bg-gradient-to-tr from-slate-600 rounded-tl-[40%] rounded-tr-[40%] to-emerald-900 xl:py-3 lg:py-3 md:py-3 py-4"
        style={{
          boxShadow: "0 0 10px 5px rgba(0, 255, 0, 0.5)",
          animation: "glow 3s ease-in-out infinite alternate",
        }}>
        <div id="tabs" className="flex justify-center">
          <Link to="/feed" className={`nav-link text-white ${activeTab === "home" ? "active" : ""}`} onClick={() => setActiveTab("home")}>
            <GiHeadphones className="nav-icon" />
          </Link>
          <Link to="/tool" className={`nav-link text-white ${activeTab === "tool" ? "active" : ""}`} onClick={() => setActiveTab("tool")}>
            <AiOutlineTool className="nav-icon" />
          </Link>
          <Link to="/appstore" className={`nav-link text-white ${activeTab === "appstore" ? "active" : ""}`} onClick={() => setActiveTab("appstore")}>
            <AiOutlineUpload className="nav-icon" />
          </Link>
          <Link to="/file" className={`nav-link text-white ${activeTab === "file" ? "active" : ""}`} onClick={() => setActiveTab("file")}>
            <AiOutlineFileText className="nav-icon" />
          </Link>
          <Link to="/user" className={`nav-link text-white ${activeTab === "user" ? "active" : ""}`} onClick={() => setActiveTab("user")}>
            <AiOutlineUser className="nav-icon" />
          </Link>
        </div>
      </section>
    </div>
  );
};
