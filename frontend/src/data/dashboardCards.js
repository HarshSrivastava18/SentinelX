import {
  FileText,
  TriangleAlert,
  Server,
  Activity,
} from "lucide-react";

const dashboardCards = [
  {
    id: 1,
    title: "Total Logs",
    key: "totalLogs",
    icon: FileText,
    color: "text-cyan-400",
    trend: "+12%",
  },
  {
    id: 2,
    title: "Alerts",
    key: "alerts",
    icon: TriangleAlert,
    color: "text-red-400",
    trend: "-5%",
  },
  {
    id: 3,
    title: "Hosts",
    key: "hosts",
    icon: Server,
    color: "text-green-400",
    trend: "+3%",
  },
  {
    id: 4,
    title: "Backend",
    key: "status",
    icon: Activity,
    color: "text-emerald-400",
    trend: "Live",
  },
];

export default dashboardCards;