import { Navigate } from "react-router-dom";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import ForgotPassword from "../pages/auth/ForgotPassword";

const publicRoutes = [
  { path: "*", element: <Navigate to='/login' replace /> },
  { path: "/", element: <Navigate to='/login' replace /> },
  { path: "/login", element: <Login /> },
  { path: "/sign-up", element: <SignUp /> },
  { path: "/forgot-password", element: <ForgotPassword /> },
];

export default publicRoutes;
