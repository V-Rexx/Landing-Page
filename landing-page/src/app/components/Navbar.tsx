"use client";

import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#16163F] text-white px-10 py-4 flex items-center justify-between shadow-md border-b border-[#2A2A6A]">
      
      <div className="flex items-center space-x-3">
        <div className="bg-[#2A2A6A] text-white font-bold px-3 py-1 rounded-md">
          HF
        </div>
        <h1 className="text-xl font-bold tracking-wide">Nit Silchar</h1>
      </div>

      <div className="hidden md:flex space-x-8 font-semibold text-sm uppercase">
        <a href="/" className="hover:text-[#9D9DFF] transition">Home</a>
        <a href="/about" className="hover:text-[#9D9DFF] transition">About the Event</a>
        <a href="/events" className="hover:text-[#9D9DFF] transition">Rounds/Format</a>
        <a href="/prizes" className="hover:text-[#9D9DFF] transition">Prizes</a>
        <a href="#" className="hover:text-[#9D9DFF] transition">Contact</a>
      </div>

      <div className="space-x-4">
        <a href="/register">
          <button className="border border-white px-3 py-2 rounded-md font-bold hover:bg-white hover:text-[#16163F] transition">
            Register Now
          </button>
        </a>
        <button className="border border-white px-3 py-2 rounded-md font-bold hover:bg-white hover:text-[#16163F] transition">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
