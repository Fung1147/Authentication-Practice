import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/auth/Login";
import ProtectRoute from "./ProtectRoute";
import Dashboard from "../pages/admin/Dashboard";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      {/* Public */}
      <Route path="/login" element={<Login />} />

      {/* Private */}
      <Route
        path="/dashboard"
        element={
          <ProtectRoute>
            <Dashboard />
          </ProtectRoute>
        }
      />
    </Routes>
  );
};
export default AppRoutes;
