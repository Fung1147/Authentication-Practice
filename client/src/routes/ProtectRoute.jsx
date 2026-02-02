import useAuthStore from "../store/authStore";
import { Navigate  } from "react-router-dom";

const ProtectRoute = ({ children }) => {
  const user = useAuthStore((state) => state.user);
  const token = useAuthStore((state) => state.token);

  // ไม่มี user หรือ token เด้งกลับหน้า Login
  if (!user || !token) {
    return <Navigate to="/login" />
  }
  return children
};

export default ProtectRoute;
