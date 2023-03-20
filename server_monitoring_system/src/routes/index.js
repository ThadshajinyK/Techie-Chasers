import { useRoutes } from "react-router-dom";
import publicRoutes from "./publicRoutes";
import privateRoutes from "./privateRoutes";
import { Navigate } from "react-router-dom";
import PrivateLayout from "../layout/PrivateLayout";
import Server from "../pages/Server";
import Dashboard from "../pages/Dashboard";
import Apps from "../pages/Apps";
import Alert from "../pages/Alert";
import Settings from "../pages/Settings";

import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import ForgotPassword from "../pages/auth/ForgotPassword";



const Routes = () => {
  
  return useRoutes( [{ path: "*", element: <Navigate to='/login' replace /> },
  { path: "/", element: <Navigate to='/login' replace /> },
  { path: "/login", element: <Login /> },
  { path: "/sign-up", element: <SignUp /> },
  { path: "/forgot-password", element: <ForgotPassword /> },

    {
      element: <PrivateLayout />,
      children: [
        
        { path: "/dashboard", element: <Dashboard /> },
        { path: "/server", element: <Server /> },
        { path: "/apps", element: <Apps /> },
        { path: "/alert", element: <Alert /> },
        { path: "/settings", element: <Settings /> },
      ],
    },
  ]);
};

export default Routes;
