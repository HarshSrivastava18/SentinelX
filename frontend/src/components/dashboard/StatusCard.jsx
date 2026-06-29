import { TrendingUp } from "lucide-react";

function StatusCard({ title, value, icon: Icon, color }) {
  return (
    <div
      className="
        bg-slate-900
        border border-slate-800
        rounded-2xl
        p-6
        transition-all
        duration-300
        hover:border-cyan-500
        hover:shadow-2xl
        hover:-translate-y-1
      "
    >
      <div className="flex justify-between items-start">
        <div>
          <p className="text-slate-400 text-sm">{title}</p>

          <h2 className="text-4xl font-bold mt-3 text-white">
            {value}
          </h2>

          <div className="flex items-center gap-2 mt-4 text-green-400 text-sm">
            <TrendingUp size={16} />
            <span>12% this week</span>
          </div>
        </div>

        <div className={`p-4 rounded-xl bg-slate-800 ${color}`}>
          <Icon size={30} />
        </div>
      </div>
    </div>
  );
}

export default StatusCard;