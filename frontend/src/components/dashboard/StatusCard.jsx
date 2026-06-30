import { TrendingUp } from "lucide-react";

function StatusCard({
  title,
  value,
  icon: Icon,
  color,
  trend,
}) {
  return (
    <div
      className="
        group
        bg-slate-900
        border
        border-slate-800
        rounded-2xl
        p-6
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-cyan-500
        hover:shadow-xl
      "
    >
      <div className="flex justify-between items-start">

        <div>

          <p className="text-slate-400 text-sm">
            {title}
          </p>

          <h2 className="text-4xl font-bold text-white mt-3">
            {value}
          </h2>

          <div className="flex items-center gap-2 mt-5 text-green-400 text-sm">

            <TrendingUp size={15} />

            <span>{trend}</span>

          </div>

        </div>

        <div
          className={`
            ${color}
            bg-slate-800
            p-4
            rounded-xl
            group-hover:scale-110
            transition
          `}
        >
          <Icon size={30}/>
        </div>

      </div>
    </div>
  );
}

export default StatusCard;