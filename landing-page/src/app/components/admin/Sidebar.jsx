'use client';
import Link from 'next/link';
import { LayoutDashboard, Users, BarChart2, Settings } from 'lucide-react';

export default function Sidebar() {
  const links = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Users', href: '#', icon: Users },
    { name: 'Analytics', href: '#', icon: BarChart2 },
    { name: 'Settings', href: '#', icon: Settings },
  ];

  return (
    <aside className="w-64 bg-white/10 backdrop-blur-xl border-r border-white/10 flex flex-col">
      <div className="p-6 border-b border-white/10">
        <h1 className="text-2xl font-bold tracking-wide bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Admin
        </h1>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {links.map(({ name, href, icon: Icon }) => (
          <Link
            key={name}
            href={href}
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/10 transition"
          >
            <Icon size={18} className="text-blue-400" />
            <span>{name}</span>
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-white/10 text-sm text-gray-400">
        © 2025 Admin Panel
      </div>
    </aside>
  );
}
