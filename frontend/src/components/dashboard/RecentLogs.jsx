import { useState, useEffect } from "react";
import { getLogs } from "../../services/logService";
import SeverityBadge from "./SeverityBadge";
function RecentLogs() {
  const [search, setSearch] = useState("");
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
 async function loadLogs() {
  try {
    const data = await getLogs();
    setLogs(data);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
}

  loadLogs();
}, []);
  const filteredLogs = logs.filter((log) => {
    const query = search.toLowerCase();

    return (
      log.source.toLowerCase().includes(query) ||
      log.severity.toLowerCase().includes(query) ||
      log.message.toLowerCase().includes(query)
    );
  });
  if (loading) {
  return (
    <div className="mt-8 bg-slate-900 rounded-xl p-6 border border-slate-800">
      <h2 className="text-xl font-bold text-white">
        Recent Security Logs
      </h2>

      <p className="text-slate-400 mt-4">
        Loading logs...
      </p>
    </div>
  );
}
  return (
    <div className="mt-8 bg-slate-900 rounded-xl p-6 border border-slate-800">
      <h2 className="text-xl font-bold mb-4 text-white">
        Recent Security Logs
      </h2>
      <div className="mb-6">
        <input
          type="text"
          placeholder="🔍 Search by source, severity or message..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
      w-full
      bg-slate-800
      border
      border-slate-700
      rounded-xl
      px-4
      py-3
      text-white
      placeholder:text-slate-400
      focus:outline-none
      focus:border-cyan-500
    "
        />
      </div>

      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-slate-700 text-gray-400">
            <th className="text-left py-4 pb-3 text-slate-400 uppercase text-xs tracking-wider">
              Time
            </th>

            <th className="text-left py-4 pb-3 text-slate-400 uppercase text-xs tracking-wider">
              Severity
            </th>

            <th className="text-left py-4 pb-3 text-slate-400 uppercase text-xs tracking-wider">
              Source
            </th>

            <th className="text-left py-4 pb-3 text-slate-400 uppercase text-xs tracking-wider">
              Message
            </th>
          </tr>
        </thead>

        <tbody>
          {filteredLogs.length === 0 ? (
            <tr>
              <td
                colSpan="4"
                className="text-center py-8 text-slate-500"
              >
                No matching logs found.
              </td>
            </tr>
          ) : (
            filteredLogs.map((log) => (
              <tr
                key={log.id}
                className="hover:bg-slate-800/50 transition-colors"
              >
                <td className="py-4">{log.time}</td>

                <td className="py-4">
                  <SeverityBadge severity={log.severity} />
                </td>

                <td className="py-4">{log.source}</td>

                <td className="py-4">{log.message}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default RecentLogs;