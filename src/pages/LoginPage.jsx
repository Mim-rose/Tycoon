import { useAuthContext } from "../components/context/AuthContext";
import { Navigate } from "react-router-dom";
import Login from "../components/auth/Login";

const LoginPage = () => {
  const { user, loading } = useAuthContext();

  if (loading) return null; // or a spinner

  if (user) return <Navigate to="/" />; // redirect if already logged in

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Login />
    </div>
  );
};

export default LoginPage;