import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

const PrivateRoute = ({ component: Component }) => {
  const { user } = useAuthStore();

  return user.isAuthenticated ? <Component /> : <Navigate to="/login" />;
};

export default PrivateRoute;
