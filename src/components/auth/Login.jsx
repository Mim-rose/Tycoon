import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { useAuth } from "../hooks/useAuth";
const Login = () => {
  const { login, googleSignIn, loading } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
   const navigate = useNavigate();
   const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const success = await login(form.email.value, form.password.value);
    if (success) {
      navigate("/"); // or wherever you want after login
    }

  
  };

  return (
    <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email */}
        <div>
          <label className="text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            required
            className="input w-full border border-black rounded-md px-3 py-2"

          />
        </div>

        {/* Password */}
        <div>
          <label className="text-sm font-medium">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              className="input w-full border border-black rounded-md px-3 py-2 pr-12"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        {/* Submit */}
        <button disabled={loading} className="btn btn-primary w-full">
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-grow border-t" />
          <span className="mx-3 text-sm">OR</span>
          <div className="flex-grow border-t" />
        </div>

        {/* Google */}
        <button
          type="button"
          onClick={googleSignIn}
          className="btn btn-outline w-full flex gap-2 justify-center"
        >
          <FcGoogle size={20} />
          Continue with Google
        </button>

        <p className="text-sm text-center">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-600">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
