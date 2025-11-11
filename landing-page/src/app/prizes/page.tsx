"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrizesPage() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#0A0A12] text-white px-6 pt-32 pb-14">
        <div className="max-w-5xl mx-auto">

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Prizes & Recognition
          </h1>

          <p className="text-gray-300 text-lg mb-12 max-w-3xl">
            Hackathon 2026 rewards innovation, creativity, and technical excellence. 
            Top-performing teams will receive cash prizes, certificates, recognition, 
            and exclusive opportunities to showcase their talent.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-[#161622] border border-yellow-500/60 p-6 rounded-xl shadow-lg hover:border-yellow-400 transition">
              <h2 className="text-xl font-bold text-yellow-300">1st Place</h2>
              <p className="text-3xl font-bold mt-2 text-yellow-400">₹50,000</p>
              <p className="text-gray-300 text-sm mt-3">
                + Trophy & Certificate of Excellence
              </p>
            </div>

            <div className="bg-[#161622] border border-gray-400 p-6 rounded-xl shadow-lg hover:border-gray-300 transition">
              <h2 className="text-xl font-bold text-gray-200">2nd Place</h2>
              <p className="text-3xl font-bold mt-2 text-gray-100">₹40,000</p>
              <p className="text-gray-300 text-sm mt-3">
                + Trophy & Certificate of Excellence
              </p>
            </div>

            <div className="bg-[#161622] border border-orange-500/60 p-6 rounded-xl shadow-lg hover:border-orange-400 transition">
              <h2 className="text-xl font-bold text-orange-300">3rd Place</h2>
              <p className="text-3xl font-bold mt-2 text-orange-400">₹30,000</p>
              <p className="text-gray-300 text-sm mt-3">
                + Trophy & Certificate of Excellence
              </p>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Certificates & Awards
          </h2>

          <div className="bg-[#161622] border border-gray-700 p-6 rounded-xl mb-10">
            <ul className="space-y-3 text-gray-300 text-sm list-disc pl-5">
              <li><span className="text-blue-400 font-medium">Certificate of Participation</span> — All registered participants</li>
              <li><span className="text-green-400 font-medium">Certificate of Appreciation</span> — Scoring ≥ 50% or in top 75%</li>
              <li><span className="text-purple-400 font-medium">Outstanding Performer Certificate</span> — Top 10% participants</li>
              <li><span className="text-pink-400 font-medium">Special Jury Awards</span> — Most Innovative & Social Impact Teams</li>
            </ul>
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Additional Benefits
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-14">
            {[
              "Free accommodation during final round",
              "Networking opportunities with industry mentors",
              "Exclusive internship & mentorship opportunities",
              "Campus experience & gala dinner at NIT Silchar",
            ].map((benefit, idx) => (
              <div key={idx} className="bg-[#161622] border border-gray-700 p-6 rounded-xl">
                <p className="text-gray-300 text-sm">{benefit}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="/register"
              className="bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-3 rounded-lg text-sm font-semibold hover:opacity-80 transition"
            >
              Register Now
            </a>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}
