import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Zap, Eye, EyeOff, LogIn } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const { login, loading, error } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await login(email, password);
    if (result.success) {
      toast.success(`Welcome back, ${result.user?.name}!`);
      navigate(result.user?.role === "admin" ? "/admin/dashboard" : "/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-20 pb-12 grid-bg">
      <div className="w-full max-w-md px-6">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-blue flex items-center justify-center shadow-glow-blue">
              <Zap className="w-5 h-5 text-white" fill="white" />
            </div>
            <span className="font-heading font-bold text-2xl">
              <span className="gradient-text-blue">Mass</span>
              <span className="text-white">X</span>
            </span>
          </Link>
          <h1 className="font-heading font-bold text-display-sm text-white mb-2">Welcome Back</h1>
          <p className="text-[#8b9cc7] text-sm">Login to your MassX account</p>
        </div>

        <div className="glass-card p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-[#8b9cc7] mb-2">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#8b9cc7] mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-field pr-12"
                  placeholder="Enter your password"
                  required
                  minLength={6}
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#4a5680] hover:text-[#8b9cc7] transition-colors"
                >
                  {showPass ? <EyeOff className="w-4.5 h-4.5" /> : <Eye className="w-4.5 h-4.5" />}
                </button>
              </div>
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/25 rounded-lg px-4 py-3 text-red-400 text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full justify-center py-3.5 text-base disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <><LogIn className="w-5 h-5" /> Login</>
              )}
            </button>
          </form>

          <div className="mt-6 pt-5 border-t border-[rgba(0,180,255,0.1)] text-center">
            <p className="text-[#8b9cc7] text-sm">
              Don't have an account?{" "}
              <Link to="/signup" className="text-[#00b4ff] font-medium hover:underline">
                Sign Up
              </Link>
            </p>
          </div>

          {/* Demo credentials */}
          <div className="mt-4 p-4 rounded-lg bg-[rgba(0,180,255,0.05)] border border-[rgba(0,180,255,0.12)]">
            <p className="text-xs font-medium text-[#00b4ff] mb-2">Demo Credentials</p>
            <div className="space-y-1 text-xs text-[#4a5680]">
              <p>Admin: <span className="text-[#8b9cc7]">admin@massx.in</span> / any password (6+ chars)</p>
              <p>User: <span className="text-[#8b9cc7]">demo@massx.in</span> / any password (6+ chars)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
