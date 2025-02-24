import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuth } from "../features/auth/authSlice";

const ProtectedRoute = () => {
  const {isAuthenticated} = useSelector(selectAuth);
  return isAuthenticated ? <Outlet /> : <Navigate to="/signin" replace />;
};

export default ProtectedRoute;