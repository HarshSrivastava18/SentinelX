function StatusCard({ title, value }) {
  return (
    <div className="bg-slate-900 rounded-xl shadow-lg p-6 border border-slate-800">
      <h3 className="text-gray-400 text-sm">
        {title}
      </h3>

      <p className="text-3xl font-bold mt-2 text-white">
        {value}
      </p>
    </div>
  );
}

export default StatusCard;