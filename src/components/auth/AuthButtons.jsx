import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { useAuthContext } from "../context/AuthContext";
const AuthButtons = () => {
  const { user } = useAuthContext();

  // USER LOGGED IN
  if (user) {
    return (
      <div className="flex items-center gap-2 text-sm font-medium">
        <FiUser size={18} />
        <span>{user.email}</span>
      </div>
    );
  }

  // USER NOT LOGGED IN
  return (
    <div className="flex items-center gap-2 text-sm">
      <FiUser size={20} />
      <Link to="/login" className="hover:underline">
        Log in
      </Link>
      <span>/</span>
      <Link to="/register" className="hover:underline">
        Register
      </Link>
    </div>
  );
};

export default AuthButtons;
