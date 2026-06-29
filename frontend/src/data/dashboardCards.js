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
    icon: FileText,
    color: "text-cyan-400",
  },
  {
    id: 2,
    title: "Alerts",
    icon: TriangleAlert,
    color: "text-red-400",
  },
  {
    id: 3,
    title: "Hosts",
    icon: Server,
    color: "text-green-400",
  },
  {
    id: 4,
    title: "Backend",
    icon: Activity,
    color: "text-purple-400",
  },
];

export default dashboardCards;