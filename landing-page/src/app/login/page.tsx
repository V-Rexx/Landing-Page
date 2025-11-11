"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const router = useRouter();
  const formRef = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (mode === "signup" && !form.name) return setError("Please enter your name.");
    if (!form.email || !form.password) return setError("All fields are required.");

    if (mode === "login") {
      if (form.email === "admin@hackathon.com" && form.password === "hack2026") {
        router.push("/admin/dashboard");
      } else setError("Invalid credentials.");
    } else {
      router.push("/");
    }
  };

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // If clicked outside the form container
    if (formRef.current && !formRef.current.contains(e.target as Node)) {
      router.push("/"); // redirect to homepage
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800"
      onClick={handleBackgroundClick}
    >
      <div
        ref={formRef}
        className="w-full max-w-md bg-gray-800/80 backdrop-blur-xl border border-gray-700 rounded-2xl shadow-2xl p-8"
      >
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          {mode === "login" ? "Login to Hackathon 2026" : "Sign Up for Hackathon 2026"}
        </h1>

        <div className="flex justify-center mb-6 space-x-2">
          <button
            onClick={() => setMode("login")}
            className={`px-4 py-2 rounded-lg font-semibold ${
              mode === "login" ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-300"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setMode("signup")}
            className={`px-4 py-2 rounded-lg font-semibold ${
              mode === "signup" ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-300"
            }`}
          >
            Signup
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === "signup" && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition-all text-white font-semibold py-3 rounded-lg"
          >
            {mode === "login" ? "Login" : "Create Account"}
          </button>
        </form>

        <p className="text-gray-400 text-center mt-4 text-sm">
          {mode === "login" ? (
            <>
              Don’t have an account?{" "}
              <button
                onClick={() => setMode("signup")}
                className="text-blue-400 hover:text-blue-300 underline"
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                onClick={() => setMode("login")}
                className="text-blue-400 hover:text-blue-300 underline"
              >
                Login
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
