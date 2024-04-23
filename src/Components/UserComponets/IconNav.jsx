import React, { useState } from 'react';
import { HiUpload, HiOutlineBadgeCheck, HiOutlineNewspaper } from 'react-icons/hi';

export const IconNav = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className="w-[90%] bg-gradient-to-tr to-emerald-600 from-teal-900 opacity-50 hover:opacity-100 rounded-lg border-l-3 border-lime-600 shadow-md mx-auto md:mt-5 flex justify-center mb-10">
      <div className="nav-item" style={{ width: '10%', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <HiUpload className="text-4xl text-white" onClick={() => handleClick('uploads')} />
        <span >Your Uploads</span>
      </div>
      <div className="nav-item" style={{ width: '30%', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <HiOutlineBadgeCheck className={`text-4xl text-white ${activeComponent === 'premium' ? 'active' : ''}`} onClick={() => handleClick('premium')} />
        <span >Premium</span>
      </div>
      <div className="nav-item" style={{ width: '10%', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <HiOutlineNewspaper className={`text-4xl text-white ${activeComponent === 'feed' ? 'active' : ''}`} onClick={() => handleClick('feed')} />
        <span >Feed</span>
      </div>
    </div>
  );
};
