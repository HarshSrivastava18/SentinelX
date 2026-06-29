import StatusCard from "./StatusCard";

function DashboardGrid({ stats }) {

    const cards = [

        {
            id: 1,
            title: "Total Logs",
            value: stats.totalLogs,
        },

        {
            id: 2,
            title: "Alerts",
            value: stats.alerts,
        },

        {
            id: 3,
            title: "Hosts",
            value: stats.hosts,
        },

        {
            id: 4,
            title: "Backend",
            value: stats.status,
        }

    ];

    return (

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

            {cards.map((card) => (

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