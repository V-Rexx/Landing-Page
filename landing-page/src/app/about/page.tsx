export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0A0A12] text-white px-6 py-14">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          About ByteBattle 2025
        </h1>

        <p className="text-gray-300 max-w-3xl text-lg mb-10">
          ByteBattle 2025 is a national-level coding challenge hosted by 
          <span className="text-blue-400 font-semibold"> NIT Silchar</span>, bringing together
          the brightest minds in software development, AI, and innovation.
          Over multiple rounds—online and offline—participants will build creative, 
          scalable, and real-world solutions to emerging technology challenges.
        </p>

        {/* Section */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Why ByteBattle 2025?
        </h2>
        <p className="text-gray-400 mb-8">
          This hackathon is more than just a competition — it's a launchpad for innovation, creativity, and real-world impact.
          Participants will dive into the most transformative technologies of our era, including Artificial Intelligence, Machine Learning and Software Development.

          Over the course of the event, you will work on real industry-aligned challenges, collaborate with talented peers from across the country, and gain hands-on exposure to cutting-edge problem-solving environments. Guided by mentors and supported by expert sessions, every participant will have the opportunity to learn, experiment, build, and push the boundaries of what’s possible — transforming bold ideas into working solutions.
        </p>

        {/* Highlight Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {[
            { title: "National Level Competition", desc: "Open to students across India — UG, PG, PhD" },
            { title: "AI/ML Focus", desc: "Solve real-world challenges using emerging tech" },
            { title: "Multi-stage Rounds", desc: "Online screening → AI problem round → Live campus finale" },
            { title: "Certificates & Prizes", desc: "Top performers receive cash prizes and recognition" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-[#161622] border border-gray-700 p-6 rounded-xl shadow hover:border-blue-500 transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-400">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* About NIT Silchar */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          About NIT Silchar
        </h2>
        <p className="text-gray-400 mb-8">
          The National Institute of Technology Silchar is one of India's leading institutions 
          for technical education and research. Ranked among top engineering colleges, 
          NIT Silchar is committed to fostering innovation, creativity, and excellence.
        </p>

        <div className="bg-[#161622] border border-gray-700 p-6 rounded-xl shadow mb-14">
          <h3 className="text-xl font-semibold mb-2 text-purple-400">Recognitions</h3>
          <ul className="text-gray-300 text-sm space-y-2 list-disc pl-4">
            <li>NIRF Engineering Rank: 40 (2024)</li>
            <li>QS Asia University Rank: 541 (2025)</li>
            <li>Global Green Metric Rank: 205 (2022)</li>
            <li>Hub for AI, ML & emerging tech research</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="/"
            className="bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-3 rounded-lg text-sm font-medium hover:opacity-80 transition"
          >
            Back to Home
          </a>
        </div>

      </div>
    </div>
  );
}
