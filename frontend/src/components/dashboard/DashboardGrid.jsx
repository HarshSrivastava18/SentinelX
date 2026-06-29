import dashboardCards from "../../data/dashboardCards";
import StatusCard from "./StatusCard";

function DashboardGrid({ stats }) {
  const values = {
    "Total Logs": stats.totalLogs,
    Alerts: stats.alerts,
    Hosts: stats.hosts,
    Backend: stats.status,
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {dashboardCards.map((card) => (
        <StatusCard
          key={card.id}
          title={card.title}
          value={values[card.title]}
          icon={card.icon}
          color={card.color}
        />
      ))}
    </div>
  );
}

export default DashboardGrid;