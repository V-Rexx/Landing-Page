"use client";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface Question {
  _id: string;
  question: string;
  options: string[];
  answer?: string;
}

export default function AssessmentPage() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [current, setCurrent] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(1800); // 15 min

  useEffect(() => {
    fetch("/api/questions")
      .then((res) => res.json())
      .then((data) => setQuestions(data.questions))
      .catch((err) => console.error("Error fetching questions:", err));
  }, []);

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

  const goNext = () => {
    if (current < questions.length - 1) setCurrent(current + 1);
  };

  const goPrev = () => {
    if (current > 0) setCurrent(current - 1);
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="min-h-screen bg-gray-50 text-gray-900 px-6 pt-24 pb-10 flex justify-center">
        <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-8">
          {!submitted ? (
            <>
              {/* MAIN QUESTION SECTION */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-gray-800">
                    Question {current + 1} of {questions.length}
                  </h2>
                  <p className="text-red-500 font-semibold">
                    ⏰ {formatTime(timeLeft)}
                  </p>
                </div>

                {questions.length > 0 && (
                  <div>
                    <p className="text-gray-800 text-lg mb-6">
                      {questions[current].question}
                    </p>
                    <div className="space-y-3">
                      {questions[current].options.map((opt) => (
                        <label
                          key={opt}
                          className={`flex items-center border rounded-lg px-4 py-3 cursor-pointer transition ${
                            answers[questions[current]._id] === opt
                              ? "bg-blue-50 border-blue-400"
                              : "border-gray-300 hover:bg-gray-100"
                          }`}
                        >
                          <input
                            type="radio"
                            name={questions[current]._id}
                            value={opt}
                            checked={answers[questions[current]._id] === opt}
                            onChange={(e) =>
                              handleChange(questions[current]._id, e.target.value)
                            }
                            className="mr-3 accent-blue-500"
                          />
                          {opt}
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex justify-between mt-10">
                  <button
                    onClick={goPrev}
                    disabled={current === 0}
                    className={`px-5 py-2 rounded-lg font-semibold ${
                      current === 0
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                        : "bg-gray-800 text-white hover:bg-gray-700"
                    }`}
                  >
                    Previous
                  </button>

                  {current === questions.length - 1 ? (
                    <button
                      onClick={handleSubmit}
                      className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold"
                    >
                      Submit Test
                    </button>
                  ) : (
                    <button
                      onClick={goNext}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold"
                    >
                      Next
                    </button>
                  )}
                </div>
              </div>

              {/* SIDE NAVIGATION PANEL */}
              <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 h-fit sticky top-24">
                <h3 className="text-lg font-semibold mb-4 text-gray-700">
                  Question Navigator
                </h3>
                <div className="grid grid-cols-5 gap-3">
                  {questions.map((q, idx) => {
                    const attempted = answers[q._id];
                    return (
                      <button
                        key={q._id}
                        onClick={() => setCurrent(idx)}
                        className={`w-10 h-10 rounded-full font-semibold ${
                          idx === current
                            ? "bg-blue-600 text-white"
                            : attempted
                            ? "bg-green-200 text-green-800"
                            : "bg-gray-200 text-gray-800"
                        }`}
                      >
                        {idx + 1}
                      </button>
                    );
                  })}
                </div>

                <div className="mt-6 border-t border-gray-300 pt-3 text-sm">
                  <p className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-green-300 rounded-full"></span>{" "}
                    Attempted
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-gray-300 rounded-full"></span>{" "}
                    Not Attempted
                  </p>
                </div>
              </div>
            </>
          ) : (
            <div className="col-span-2 flex flex-col justify-center items-center bg-white rounded-2xl shadow-lg border border-gray-200 p-10">
              <h2 className="text-3xl font-bold text-green-600 mb-4">
                 Test Submitted Successfully!
              </h2>
              <p className="text-lg text-gray-800">
                Your Score:{" "}
                <span className="font-bold text-blue-600">{score}/60</span>
              </p>
            </div>
          )}
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
