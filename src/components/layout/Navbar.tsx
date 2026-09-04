import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, Zap } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { currentUser, logout, isAdmin } = useAuth();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setUserMenuOpen(false);
  }, [pathname]);

  const handleLogout = () => {
    logout();
    navigate("/");
    setUserMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#03060d]/90 backdrop-blur-xl border-b border-[rgba(0,180,255,0.1)] shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-[70px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-blue flex items-center justify-center shadow-glow-blue">
              <Zap className="w-5 h-5 text-white" fill="white" />
            </div>
            <span className="font-heading font-bold text-xl">
              <span className="gradient-text-blue">Mass</span>
              <span className="text-white">X</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  pathname === item.href
                    ? "text-[#00b4ff] bg-[rgba(0,180,255,0.08)]"
                    : "text-[#8b9cc7] hover:text-white hover:bg-[rgba(255,255,255,0.05)]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA + Auth */}
          <div className="hidden lg:flex items-center gap-3">
            {currentUser ? (
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg border border-[rgba(0,180,255,0.2)] text-sm text-[#8b9cc7] hover:text-white hover:border-[rgba(0,180,255,0.4)] transition-all"
                >
                  <div className="w-7 h-7 rounded-full bg-gradient-blue flex items-center justify-center text-white text-xs font-bold">
                    {currentUser.name.charAt(0)}
                  </div>
                  <span>{currentUser.name.split(" ")[0]}</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                {userMenuOpen && (
                  <div className="absolute right-0 top-full mt-2 w-48 glass-card border border-[rgba(0,180,255,0.15)] py-1 shadow-glass">
                    {isAdmin ? (
                      <Link to="/admin/dashboard" className="block px-4 py-2.5 text-sm text-[#8b9cc7] hover:text-white hover:bg-[rgba(0,180,255,0.06)] transition-colors">
                        Admin Dashboard
                      </Link>
                    ) : (
                      <Link to="/dashboard" className="block px-4 py-2.5 text-sm text-[#8b9cc7] hover:text-white hover:bg-[rgba(0,180,255,0.06)] transition-colors">
                        My Dashboard
                      </Link>
                    )}
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2.5 text-sm text-red-400 hover:text-red-300 hover:bg-[rgba(239,68,68,0.06)] transition-colors"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login" className="btn-secondary text-sm py-2 px-4">
                Login
              </Link>
            )}
            <Link to="/contact" className="btn-primary text-sm py-2 px-5">
              Start a Project
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg text-[#8b9cc7] hover:text-white hover:bg-[rgba(255,255,255,0.05)] transition-all"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden glass-card rounded-xl mx-0 mb-4 border border-[rgba(0,180,255,0.1)] overflow-hidden">
            <div className="p-4 space-y-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    pathname === item.href
                      ? "text-[#00b4ff] bg-[rgba(0,180,255,0.08)]"
                      : "text-[#8b9cc7] hover:text-white hover:bg-[rgba(255,255,255,0.05)]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-3 pb-1 flex flex-col gap-2">
                {currentUser ? (
                  <>
                    <Link to={isAdmin ? "/admin/dashboard" : "/dashboard"} className="btn-secondary text-sm py-2.5 text-center">
                      {isAdmin ? "Admin Dashboard" : "My Dashboard"}
                    </Link>
                    <button onClick={handleLogout} className="text-sm text-red-400 py-2">
                      Logout
                    </button>
                  </>
                ) : (
                  <Link to="/login" className="btn-secondary text-sm py-2.5 text-center">
                    Login
                  </Link>
                )}
                <Link to="/contact" className="btn-primary text-sm py-2.5 text-center justify-center">
                  Start a Project
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
