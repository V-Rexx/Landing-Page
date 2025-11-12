"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const events = [
  {
    title: "Registration Opens",
    date: "Nov 1, 2025",
    mode: "Online",
    details: "Registration portal opens for Hackathon 2026",
  },
  {
    title: "Hackathon 2026 Launch Meetup",
    date: "Dec 10, 2025",
    mode: "Virtual",
    details: "Kickoff session and event briefing",
  },
  {
    title: "Online Assessment Round",
    date: "Jan 10, 2026",
    mode: "Online Test",
    details: "MCQ + coding screening test",
  },
  {
    title: "AI/ML Bootcamp",
    date: "Jan 20, 2026",
    mode: "In-person",
    details: "Hands-on sessions at NIT Silchar",
  },
  {
    title: "Team Networking Session",
    date: "Feb 10, 2026",
    mode: "In-person",
    details: "Meet other teams & share ideas",
  },
  {
    title: "Final Round — Hackathon 2026",
    date: "Feb 28, 2026",
    mode: "On-Campus",
    details: "Live finale & project presentations",
  },
];

export default function EventsRoadmap() {
  return (
    <div className="flex flex-col min-h-screen bg-[#16163F] text-white">
      <Navbar />
      {/* Spacer to offset fixed navbar height */}
      <div className="h-24 mt-32" />
      <main className="grow px-6 pb-14">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Hackathon 2026 — Event Roadmap
          </h1>
          <p className="text-gray-400 mb-12">
            Timeline of all hackathon events
          </p>
          <div className="space-y-10 relative border-l border-gray-700 pl-6">
            {events.map((ev, idx) => (
              <div key={idx} className="relative">
                <div className="absolute -left-3.5 w-6 h-6 rounded-full bg-linear-to-r from-purple-500 to-blue-500 border border-gray-900 shadow-lg"></div>
                <div className="bg-[#1B1B3A] border border-gray-700 p-5 rounded-xl shadow hover:border-blue-500 transition">
                  <span
                    className={`text-xs px-2 py-1 rounded-md ${
                      ev.mode.toLowerCase().includes("online")
                        ? "bg-blue-600/30 text-blue-400"
                        : "bg-green-600/30 text-green-400"
                    }`}
                  >
                    {ev.mode}
                  </span>
                  <h2 className="mt-2 text-lg font-semibold">{ev.title}</h2>
                  <p className="text-gray-400 text-sm mt-1">🗓 {ev.date}</p>
                  <p className="text-gray-300 text-sm mt-2">
                    {ev.details}
                  </p>
                  <button className="mt-3 bg-linear-to-r from-purple-500 to-blue-500 px-4 py-2 rounded-md text-xs font-medium hover:opacity-80 transition">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
