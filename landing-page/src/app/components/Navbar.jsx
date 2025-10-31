"use client";
import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-[#16163F] text-white px-10 py-4 flex items-center justify-between  shadow-md border border-[#2A2A6A]">
      {/* Left Logo */}
      <div className="flex items-center space-x-3">
        <div className="bg-[#2A2A6A] text-white font-bold px-3 py-1 rounded-md">HF</div>
        <h1 className="text-xl font-bold tracking-wide">Nit Silchar</h1>
      </div>

      {/* Center Links */}
      <div className="hidden md:flex space-x-8 font-semibold text-sm uppercase">
        <a href="#" className="hover:text-[#9D9DFF] transition">Home</a>
        <a href="#" className="hover:text-[#9D9DFF] transition">About the Event</a>
        <a href="#" className="hover:text-[#9D9DFF] transition">Rounds/Format</a>
        <a href="#" className="hover:text-[#9D9DFF] transition">Prizes</a>
        <a href="#" className="hover:text-[#9D9DFF] transition">Registration</a>
        <a href="#" className="hover:text-[#9D9DFF] transition">Contact</a>
        <a href="#" className="hover:text-[#9D9DFF] transition">Login</a>
      </div>

      {/* Right Button */}
      <button className="border border-white px-5 py-2 rounded-md font-bold hover:bg-white hover:text-[#16163F] transition">
        START HACKING
      </button>
    </nav>
  );
}
