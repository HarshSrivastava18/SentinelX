import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Dashboard from "../pages/Dashboard";
import Logs from "../pages/Logs";
import Alerts from "../pages/Alerts";
import Settings from "../pages/Settings";

function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <Dashboard />
          </MainLayout>
        }
      />

      <Route
        path="/logs"
        element={
          <MainLayout>
            <Logs />
          </MainLayout>
        }
      />

      <Route
        path="/alerts"
        element={
          <MainLayout>
            <Alerts />
          </MainLayout>
        }
      />

      <Route
        path="/settings"
        element={
          <MainLayout>
            <Settings />
          </MainLayout>
        }
      />
    </Routes>
  );
}

export default AppRoutes;