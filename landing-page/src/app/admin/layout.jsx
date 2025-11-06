'use client';
import Sidebar from '../components/admin/Sidebar';
import Topbar from '../components/admin/Topbar';
import React from 'react';

export default function AdminLayout({ children }) {
  return (
    <div className="flex h-screen bg-[#0B0B1F] text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Area */}
      <div className="flex flex-col flex-1">
        <Topbar />
        <main className="flex-1 overflow-y-auto p-6 bg-[#111133]/40 backdrop-blur-md">
          {children}
        </main>
      </div>
    </div>
  );
}
