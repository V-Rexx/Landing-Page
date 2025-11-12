"use client";

import React from "react";

const Navbar: React.FC = () => {
  return (
    <div className="flex justify-center fixed w-full  mt-5 z-[99999]">
      <nav className="flex justify-between items-center w-[80%] w-full mx-8 px-3  py-3 rounded-2xl shadow-lg backdrop-blur-md bg-white/10 border-white/20 text-white z-50 transition-all duration-300">
        {/* Left Logo */}
        <div className="flex items-center  space-x-3">
          <div className="bg-[#2A2A6A] text-white font-bold px-3 py-1 rounded-md">HF</div>
          <h1 className="text-xl font-bold tracking-wide">Nit Silchar</h1>
        </div>

        {/* Center Links */}
        <div className="hidden md:flex space-x-8 font-semibold text-sm uppercase">
          <a href="/" className="hover:text-[#9D9DFF] transition">Home</a>
          <a href="/about" className="hover:text-[#9D9DFF] transition">About</a>
          <a href="/events" className="hover:text-[#9D9DFF] transition">Rounds</a>
          <a href="/prizes" className="hover:text-[#9D9DFF] transition">Prizes</a>
          <a href="#" className="hover:text-[#9D9DFF] transition">Contact</a>
        </div>

        {/* Right Button */}
        <div className="space-x-10">
          <a href="/register">
            <button className="border border-white px-3 py-2 rounded-md font-bold hover:bg-white hover:text-[#16163F] transition cursor-pointer">
              Register Now
            </button>
          </a>
          <a href="/login">
            
          <button className="border border-white px-3 py-2 rounded-md font-bold hover:bg-white hover:text-[#16163F] transition cursor-pointer">
            Login
          </button>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
