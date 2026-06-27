import {
  LayoutDashboard,
  FileText,
  TriangleAlert,
  Settings,
} from "lucide-react";

const navigation = [
  {
    id: 1,
    title: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    id: 2,
    title: "Logs",
    path: "/logs",
    icon: FileText,
  },
  {
    id: 3,
    title: "Alerts",
    path: "/alerts",
    icon: TriangleAlert,
  },
  {
    id: 4,
    title: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

export default navigation;