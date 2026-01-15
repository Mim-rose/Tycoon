import { useAuthContext } from "../components/context/AuthContext";
import { Navigate } from "react-router-dom";
import Register from "../components/auth/Register";

const RegisterPage = () => {
  const { user, loading } = useAuthContext();

  if (loading) return null;

  if (user) return <Navigate to="/" />;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Register />
    </div>
  );
};

export default RegisterPage;