import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", logs: 120 },
  { day: "Tue", logs: 180 },
  { day: "Wed", logs: 95 },
  { day: "Thu", logs: 210 },
  { day: "Fri", logs: 260 },
  { day: "Sat", logs: 140 },
  { day: "Sun", logs: 170 },
];



function LogChart() {
  return (
    <div className="mt-8 bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <h2 className="text-xl font-bold text-white mb-6">
        Log Activity (Last 7 Days)
      </h2>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid stroke="#334155" strokeDasharray="3 3" />

            <XAxis dataKey="day" stroke="#94A3B8" />

            <YAxis stroke="#94A3B8" />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="logs"
              stroke="#06B6D4"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default LogChart;