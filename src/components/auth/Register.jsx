import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { useAuth } from "../hooks/useAuth";
const Register = () => {
  const { register, googleSignIn, loading } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    register(
      form.email.value,
      form.password.value,
      form.confirmPassword.value
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md space-y-4 bg-white shadow-lg rounded-2xl p-6"
    >
      <h2 className="text-2xl font-bold text-center">Create Account</h2>

      <input name="email" required placeholder="Email" className="input w-full" />

      {/* Password */}
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Password"
          required
          className="input w-full pr-10"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2"
        >
          {showPassword ? <EyeOff /> : <Eye />}
        </button>
      </div>

      {/* Confirm */}
      <div className="relative">
        <input
          type={showConfirm ? "text" : "password"}
          name="confirmPassword"
          placeholder="Confirm Password"
          required
          className="input w-full pr-10"
        />
        <button
          type="button"
          onClick={() => setShowConfirm(!showConfirm)}
          className="absolute right-3 top-1/2 -translate-y-1/2"
        >
          {showConfirm ? <EyeOff /> : <Eye />}
        </button>
      </div>

      <button className="btn btn-primary w-full">
        {loading ? "Creating..." : "Register"}
      </button>

      <button
        type="button"
        onClick={googleSignIn}
        className="btn btn-outline w-full flex justify-center gap-2"
      >
        <FcGoogle /> Sign up with Google
      </button>
    </form>
  );
};

export default Register;
