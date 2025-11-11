export default function AdminDashboard() {
  const stats = [
    { title: 'Active Users', value: '1,204', change: '+8.2%' },
    { title: 'Projects', value: '32', change: '+2 this week' },
    { title: 'Revenue', value: '$4,580', change: '+12%' },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold tracking-wide">Welcome, Admin 👋</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((s) => (
          <div
            key={s.title}
            className="p-6 bg-white/10 border border-white/10 rounded-2xl backdrop-blur-lg shadow-md hover:bg-white/20 transition"
          >
            <h2 className="text-gray-300 text-sm font-medium">{s.title}</h2>
            <p className="text-3xl font-bold mt-2">{s.value}</p>
            <p className="text-sm text-blue-400 mt-1">{s.change}</p>
          </div>
        ))}
      </div>

      {/* Placeholder sections for charts / tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-6 bg-white/10 border border-white/10 rounded-2xl h-64 backdrop-blur-md">
          <h3 className="font-semibold mb-2">User Growth</h3>
          <div className="h-full flex items-center justify-center text-gray-500">[Chart Placeholder]</div>
        </div>
        <div className="p-6 bg-white/10 border border-white/10 rounded-2xl h-64 backdrop-blur-md">
          <h3 className="font-semibold mb-2">Recent Activity</h3>
          <div className="h-full flex items-center justify-center text-gray-500">[Table Placeholder]</div>
        </div>
      </div>
    </div>
  );
}
