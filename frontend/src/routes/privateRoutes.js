import { Navigate } from "react-router-dom";
import PrivateLayout from "../layout/PrivateLayout";
import Server from "../pages/Server";
import Dashboard from "../pages/Dashboard";
import Apps from "../pages/Apps";
import Alert from "../pages/Alert";
import Settings from "../pages/Settings";

const privateRoutes = [
  {
    element: <PrivateLayout />,
    children: [
      { path: "*", element: <Navigate to='/dashboard' /> },
      { path: "/", element: <Navigate to='/dashboard' /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/server", element: <Server /> },
      { path: "/apps", element: <Apps /> },
      { path: "/alert", element: <Alert /> },
      { path: "/settings", element: <Settings /> },
    ],
  },
];

export default privateRoutes;
