import dashboardCards from "../../data/dashboardCards";
import StatusCard from "./StatusCard";

function DashboardGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {dashboardCards.map((card) => (
        <StatusCard
          key={card.id}
          title={card.title}
          value={card.value}
        />
      ))}
    </div>
  );
}

export default DashboardGrid;