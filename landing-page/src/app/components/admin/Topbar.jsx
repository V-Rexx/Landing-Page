'use client';
import { Bell, UserCircle } from 'lucide-react';

export default function Topbar() {
  return (
    <header className="flex justify-between items-center px-6 py-3 border-b border-white/10 bg-white/5 backdrop-blur-xl sticky top-0 z-50">
      <h2 className="text-lg font-semibold tracking-wide">Dashboard</h2>

      <div className="flex items-center gap-4">
        <button className="relative p-2 hover:bg-white/10 rounded-full transition">
          <Bell size={18} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>
        <div className="flex items-center gap-2">
          <UserCircle size={24} />
          <span className="text-sm">Admin</span>
        </div>
      </div>
    </header>
  );
}
