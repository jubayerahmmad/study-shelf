import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loader from "../components/Loader";

const ProtectedRoute = ({ children }) => {
  const { user, loader } = useAuth();
  const { pathname } = useLocation();
  if (loader) {
    return <Loader></Loader>;
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={pathname}></Navigate>;
};

export default ProtectedRoute;
