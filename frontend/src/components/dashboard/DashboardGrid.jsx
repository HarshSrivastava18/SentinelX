import StatusCard from "./StatusCard";

function DashboardGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      <StatusCard title="Total Logs" value="1,254" />
      <StatusCard title="Alerts" value="12" />
      <StatusCard title="Hosts" value="8" />
      <StatusCard title="Backend" value="🟢 Online" />
    </div>
  );
}

export default DashboardGrid;