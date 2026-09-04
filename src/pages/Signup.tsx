import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Zap, Eye, EyeOff, UserPlus, CheckCircle } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const { signup, loading, error } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) { toast.error("Please agree to the Terms & Conditions."); return; }
    const result = await signup(name, email, password);
    if (result.success) {
      toast.success("Account created! Welcome to MassX.");
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-20 pb-12 grid-bg">
      <div className="w-full max-w-md px-6">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-blue flex items-center justify-center shadow-glow-blue">
              <Zap className="w-5 h-5 text-white" fill="white" />
            </div>
            <span className="font-heading font-bold text-2xl">
              <span className="gradient-text-blue">Mass</span><span className="text-white">X</span>
            </span>
          </Link>
          <h1 className="font-heading font-bold text-display-sm text-white mb-2">Create Account</h1>
          <p className="text-[#8b9cc7] text-sm">Join MassX to track your projects and enquiries</p>
        </div>

        <div className="glass-card p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-[#8b9cc7] mb-2">Full Name</label>
              <input value={name} onChange={(e) => setName(e.target.value)} className="input-field" placeholder="Your full name" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#8b9cc7] mb-2">Email Address</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input-field" placeholder="your@email.com" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#8b9cc7] mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-field pr-12"
                  placeholder="Min. 6 characters"
                  required minLength={6}
                />
                <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#4a5680] hover:text-[#8b9cc7] transition-colors">
                  {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <label className="flex items-start gap-3 cursor-pointer group">
              <button
                type="button"
                onClick={() => setAgreed(!agreed)}
                className={`w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5 transition-all ${agreed ? "bg-gradient-blue" : "border border-[rgba(0,180,255,0.25)]"}`}
              >
                {agreed && <CheckCircle className="w-3.5 h-3.5 text-white" />}
              </button>
              <span className="text-[#8b9cc7] text-sm leading-snug">
                I agree to the{" "}
                <Link to="/terms" className="text-[#00b4ff] hover:underline">Terms & Conditions</Link>
                {" "}and{" "}
                <Link to="/privacy-policy" className="text-[#00b4ff] hover:underline">Privacy Policy</Link>
              </span>
            </label>

            {error && (
              <div className="bg-red-500/10 border border-red-500/25 rounded-lg px-4 py-3 text-red-400 text-sm">{error}</div>
            )}

            <button type="submit" disabled={loading} className="btn-primary w-full justify-center py-3.5 text-base disabled:opacity-60 disabled:cursor-not-allowed">
              {loading ? <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <><UserPlus className="w-5 h-5" /> Create Account</>}
            </button>
          </form>

          <div className="mt-6 pt-5 border-t border-[rgba(0,180,255,0.1)] text-center">
            <p className="text-[#8b9cc7] text-sm">
              Already have an account?{" "}
              <Link to="/login" className="text-[#00b4ff] font-medium hover:underline">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
