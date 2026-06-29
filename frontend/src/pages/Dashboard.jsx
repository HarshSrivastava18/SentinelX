import { useEffect, useState } from "react";

import DashboardGrid from "../components/dashboard/DashboardGrid";
import RecentLogs from "../components/dashboard/RecentLogs";

import { getDashboard } from "../services/dashboardService";

function Dashboard() {

    const [stats, setStats] = useState(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    useEffect(() => {

        async function loadDashboard() {

            try {

                const data = await getDashboard();

                console.log(data);

                setStats(data);

            } catch (err) {

                setError("Failed to load dashboard.");

            } finally {

                setLoading(false);

            }

        }

        loadDashboard();

    }, []);

    if (loading) {
        return <h2 className="text-white">Loading Dashboard...</h2>;
    }

    if (error) {
        return <h2 className="text-red-500">{error}</h2>;
    }

    return (
        <>
            <h1 className="text-3xl font-bold mb-8">
                Dashboard
            </h1>

            <DashboardGrid stats={stats} />

            <RecentLogs />
        </>
    );
}

export default Dashboard;