export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-[#0A0A12] text-white px-6 py-14">
      <div className="max-w-4xl mx-auto">

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Register for ByteBattle 2025
        </h1>

        <p className="text-gray-300 text-lg mb-10 max-w-2xl">
          Be a part of a national-level coding competition and showcase your innovation skills 
          in AI, Machine Learning, and emerging technologies. Teams of up to 
          <span className="text-blue-400 font-medium"> 3 participants</span> are allowed.
        </p>

        {/* Important Info */}
        <div className="bg-[#161622] border border-gray-700 p-6 rounded-xl mb-10">
          <ul className="text-gray-300 space-y-3 text-sm">
            <li> <span className="text-blue-400 font-medium">Registration Deadline:</span> 30 December 2025</li>
            <li>💰 <span className="text-blue-400 font-medium">Fee:</span> ₹2000 per team</li>
            <li>👥 <span className="text-blue-400 font-medium">Team Size:</span> Up to 3 members</li>
            <li>📍 <span className="text-blue-400 font-medium">Final Round:</span> NIT Silchar Campus</li>
            <li>🏨 Free accommodation for finalists</li>
          </ul>
        </div>

        {/* Register Button */}
        <div className="text-center mb-12">
          <a
            href="https://forms.gle/your_registration_form_link"
            target="_blank"
            className="bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-3 rounded-lg text-base font-semibold hover:opacity-80 transition"
          >
            Register Now
          </a>
          <p className="text-gray-400 text-sm mt-2">
            (Redirects to Google Registration Form)
          </p>
        </div>

        {/* Steps */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          How to Register
        </h2>

        <div className="grid gap-4 mb-14">
          {[
            "Form a team of up to three members.",
            "Click the 'Register Now' button and fill out the form.",
            "Make the payment using the provided bank details.",
            "Upload payment receipt in the form.",
            "Wait for confirmation mail from organizers.",
          ].map((step, idx) => (
            <div
              key={idx}
              className="bg-[#161622] border border-gray-700 p-4 rounded-lg text-gray-300 text-sm"
            >
              ✅ {step}
            </div>
          ))}
        </div>

        {/* Bank Details Block */}
        <div className="bg-[#161622] border border-gray-700 p-6 rounded-xl mb-12">
          <h3 className="text-lg font-semibold text-purple-400 mb-2">Payment Details</h3>
          <ul className="text-gray-300 text-sm space-y-1">
            <li>Account Number: <span className="text-blue-400 font-medium">XXXXXX</span></li>
            <li>Account Holder: <span className="text-blue-400 font-medium">YYYY</span></li>
            <li>Bank: <span className="text-blue-400 font-medium">SBI, NIT Silchar Branch</span></li>
            <li>IFSC Code: <span className="text-blue-400 font-medium">SBIN0007061</span></li>
          </ul>
        </div>

        {/* CTA */}
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
  );
}
