"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RegisterPage() {
  const [form, setForm] = useState({
    teamName: "",
    institution: "",
    leaderName: "",
    leaderEmail: "",
    leaderPassword: "",
    confirmPassword: "",
    member1Name: "",
    member1Email: "",
    member2Name: "",
    member2Email: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    const {
      teamName,
      institution,
      leaderName,
      leaderEmail,
      leaderPassword,
      confirmPassword,
    } = form;

    if (!teamName || !institution || !leaderName || !leaderEmail || !leaderPassword || !confirmPassword) {
      setError("⚠️ Please fill all required fields.");
      return;
    }

    if (leaderPassword !== confirmPassword) {
      setError("⚠️ Passwords do not match.");
      return;
    }

    // TODO: Replace with backend API call to send confirmation emails
    setSuccess(true);
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#16163F] text-white px-6 pt-32 pb-14">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Register for ByteBattle 2025
          </h1>

          <p className="text-gray-300 text-lg mb-10 max-w-2xl">
            The <span className="text-blue-400 font-medium">Team Leader</span> must fill this form.  
            You can register a team of up to <span className="text-blue-400 font-medium">3 members</span>.  
            Teammates will receive a confirmation email to verify participation.
          </p>

          {/* Event Info */}
          <div className="bg-[#161622] border border-gray-700 p-6 rounded-xl mb-10">
            <ul className="text-gray-300 space-y-3 text-sm">
              <li><span className="text-blue-400 font-medium">Registration Deadline:</span> 30 December 2025</li>
              <li>💰 <span className="text-blue-400 font-medium">Fee:</span> ₹2000 per team</li>
              <li>👥 <span className="text-blue-400 font-medium">Team Size:</span> Up to 3 members</li>
              <li>📍 <span className="text-blue-400 font-medium">Final Round:</span> NIT Silchar Campus</li>
            </ul>
          </div>

          {/* Registration Form */}
          <div className="bg-[#161622] border border-gray-700 p-8 rounded-xl mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-center text-blue-400">
              Team Registration Form (Leader)
            </h2>

            <form onSubmit={handleSubmit} className="grid gap-5">

              {/* Team Info */}
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="teamName"
                  placeholder="Team Name"
                  value={form.teamName}
                  onChange={handleChange}
                  className="p-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  name="institution"
                  placeholder="Institution / College Name"
                  value={form.institution}
                  onChange={handleChange}
                  className="p-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Leader Info */}
              <div className="bg-gray-900/40 p-4 rounded-lg border border-gray-700">
                <h3 className="text-lg font-semibold text-purple-400 mb-3">Team Leader Details</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="leaderName"
                    placeholder="Leader Full Name"
                    value={form.leaderName}
                    onChange={handleChange}
                    className="p-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="email"
                    name="leaderEmail"
                    placeholder="Leader Email"
                    value={form.leaderEmail}
                    onChange={handleChange}
                    className="p-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="password"
                    name="leaderPassword"
                    placeholder="Password"
                    value={form.leaderPassword}
                    onChange={handleChange}
                    className="p-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    className="p-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Teammate Info */}
              <div className="bg-gray-900/40 p-4 rounded-lg border border-gray-700">
                <h3 className="text-lg font-semibold text-purple-400 mb-3">Teammates Details (Optional)</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="member1Name"
                    placeholder="Member 1 Name"
                    value={form.member1Name}
                    onChange={handleChange}
                    className="p-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="email"
                    name="member1Email"
                    placeholder="Member 1 Email"
                    value={form.member1Email}
                    onChange={handleChange}
                    className="p-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    name="member2Name"
                    placeholder="Member 2 Name"
                    value={form.member2Name}
                    onChange={handleChange}
                    className="p-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="email"
                    name="member2Email"
                    placeholder="Member 2 Email"
                    value={form.member2Email}
                    onChange={handleChange}
                    className="p-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Feedback */}
              {error && <p className="text-red-400 text-sm">{error}</p>}
              {success && (
                <p className="text-green-400 text-sm">
                  ✅ Registration submitted! Confirmation emails will be sent to your teammates.
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-500 to-blue-500 py-3 rounded-lg font-semibold text-white hover:opacity-90 transition-all"
              >
                Submit Team Registration
              </button>
            </form>
          </div>

          {/* Payment Info */}
          <div className="bg-[#161622] border border-gray-700 p-6 rounded-xl mb-12">
            <h3 className="text-lg font-semibold text-purple-400 mb-2">Payment Details</h3>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>Account Number: <span className="text-blue-400 font-medium">XXXXXX</span></li>
              <li>Account Holder: <span className="text-blue-400 font-medium">YYYY</span></li>
              <li>Bank: <span className="text-blue-400 font-medium">SBI, NIT Silchar Branch</span></li>
              <li>IFSC Code: <span className="text-blue-400 font-medium">SBIN0007061</span></li>
            </ul>
          </div>

          {/* Back */}
          <div className="text-center">
            <a
              href="/"
              className="bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-3 rounded-lg text-sm font-semibold hover:opacity-80 transition"
            >
              Back to Home
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
