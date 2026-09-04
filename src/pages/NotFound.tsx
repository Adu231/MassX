import { Link } from "react-router-dom";
import { Home, ArrowLeft, Zap } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center grid-bg px-6 text-center">
      <div className="mb-6">
        <div className="w-16 h-16 rounded-2xl bg-gradient-blue flex items-center justify-center mx-auto mb-4 shadow-glow-blue">
          <Zap className="w-8 h-8 text-white" fill="white" />
        </div>
        <div className="font-heading font-bold text-[8rem] leading-none gradient-text opacity-20 select-none">
          404
        </div>
      </div>
      <h1 className="font-heading font-bold text-white text-display-sm mb-4">Page Not Found</h1>
      <p className="text-[#8b9cc7] text-lg max-w-md mb-8">
        The page you're looking for doesn't exist or has been moved. Let's get you back on track.
      </p>
      <div className="flex gap-4">
        <Link to="/" className="btn-primary">
          <Home className="w-4 h-4" /> Back to Home
        </Link>
        <button onClick={() => history.back()} className="btn-secondary">
          <ArrowLeft className="w-4 h-4" /> Go Back
        </button>
      </div>
    </div>
  );
}
