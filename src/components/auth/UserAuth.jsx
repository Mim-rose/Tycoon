import { useAuthContext } from "../context/AuthContext";
import { useAuth } from "../hooks/useAuth";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const UserAuth = () => {
  const { user } = useAuthContext();
  const { logout } = useAuth();

  const initials = user?.displayName
    ? user.displayName[0].toUpperCase()
    : user?.email?.[0].toUpperCase();

  const name = user?.displayName || user?.email;

  if (!user) {
    return (
      <div className="flex gap-3">
        <Link
          to="/login"
          className="flex items-center gap-1 border px-4 py-2 rounded hover:bg-gray-100"
        >
          <FaUserCircle /> Login
        </Link>

        <Link
          to="/register"
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Sign Up
        </Link>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <div className="w-9 h-9 rounded-full bg-indigo-500 text-white flex items-center justify-center font-semibold">
        {initials}
      </div>
      <span className="font-medium">{name}</span>
      <button
        onClick={logout}
        className="text-sm px-3 py-1 border rounded hover:bg-gray-100"
      >
        Logout
      </button>
    </div>
  );
};

export default UserAuth;