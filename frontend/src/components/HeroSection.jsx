import React from "react";
import { useState } from "react";
function HeroSection() {
  return (
    <div className="section-main-top">
      <div className="text-center max-w-7xl mx-auto pt-36 rounded-2xl">
        <span className="top-text-portal text-sm font-semibold text-black px-3 py-1 rounded-full">
          Top Job Portal
        </span>
        <h1 className="text-4xl font-bold text-gray-900 mt-4">
          Find & Land Your <span className="text-[#f83002]">Dream Job</span>
        </h1>
        <p className="text-gray-600 mt-3 text-lg">
          Discover thousands of job opportunities across various industries.
          Apply now and take the next step in your career.
        </p>
        <div className="w-1/2 py-5 rounded-full shadow mx-auto flex align-center border-2 ">
          <img
            src="http://static.naukimg.com/s/7/103/i/search.57b43584.svg"
            alt=""
          />
          <input type="text" className="" />
          <button> Search </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
