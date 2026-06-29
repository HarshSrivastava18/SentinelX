import mockLogs from "../../data/mockLogs";

function RecentLogs() {
  return (
    <div className="mt-8 bg-slate-900 rounded-xl p-6 border border-slate-800">
      <h2 className="text-xl font-bold mb-4 text-white">
        Recent Security Logs
      </h2>

      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-slate-700 text-gray-400">
            <th className="pb-3">Time</th>
            <th className="pb-3">Severity</th>
            <th className="pb-3">Source</th>
            <th className="pb-3">Message</th>
          </tr>
        </thead>

        <tbody>
          {mockLogs.map((log) => (
            <tr
              key={log.id}
              className="border-b border-slate-800"
            >
              <td className="py-3">{log.time}</td>
              <td>{log.severity}</td>
              <td>{log.source}</td>
              <td>{log.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecentLogs;