"use client";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface Question {
  _id: string;
  question: string;
  options: string[];
  answer: string; // stored in backend but not sent to client ideally
}

export default function AssessmentPage() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutes

  // Fetch questions
  useEffect(() => {
    fetch("/api/questions")
      .then((res) => res.json())
      .then((data) => setQuestions(data.questions))
      .catch(() => console.error("Failed to load questions"));
  }, []);

  // Timer
  useEffect(() => {
    if (submitted) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [submitted]);

  const handleChange = (qid: string, ans: string) => {
    setAnswers({ ...answers, [qid]: ans });
  };

  const handleSubmit = async () => {
    const res = await fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ answers }),
    });
    const data = await res.json();
    setScore(data.score);
    setSubmitted(true);
  };

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="min-h-screen bg-[#0E0E2] text-white px-6 pt-28 pb-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center text-white-400 mb-6">
            ByteBattle 2025 – Round 1 (MCQ)
          </h1>

          {!submitted ? (
            <>
              <div className="flex justify-between items-center mb-6">
                <p className="text-gray-300">Total Questions: {questions.length}</p>
                <p className="text-red-400 font-semibold">⏰ Time Left: {formatTime(timeLeft)}</p>
              </div>

              {questions.map((q, idx) => (
                <div key={q._id} className="mb-6 bg-[#161622] p-5 rounded-xl border border-gray-700">
                  <p className="mb-3 text-gray-200 font-medium">
                    {idx + 1}. {q.question}
                  </p>
                  {q.options.map((opt) => (
                    <label key={opt} className="block mb-1 cursor-pointer">
                      <input
                        type="radio"
                        name={q._id}
                        value={opt}
                        checked={answers[q._id] === opt}
                        onChange={(e) => handleChange(q._id, e.target.value)}
                        className="mr-2"
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              ))}

              <div className="text-center mt-10">
                <button
                  onClick={handleSubmit}
                  className="bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all"
                >
                  Submit Assessment
                </button>
              </div>
            </>
          ) : (
            <div className="text-center mt-20">
              <h2 className="text-3xl text-green-400 font-semibold mb-4"> Submitted Successfully!</h2>
              <p className="text-gray-300 text-lg">
                Your Score: <span className="text-blue-400 font-bold">{score}/100</span>
              </p>
            </div>
          )}
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
