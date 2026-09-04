import { Link } from "react-router-dom";
import { Zap, Mail, Phone, MapPin, Linkedin, Instagram, Facebook, Twitter, Youtube, Github } from "lucide-react";
import { CONTACT_INFO } from "@/constants/data";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#030509] border-t border-[rgba(0,180,255,0.08)]">
      <div className="container-custom pt-16 pb-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-blue flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" fill="white" />
              </div>
              <span className="font-heading font-bold text-xl">
                <span className="gradient-text-blue">Mass</span>
                <span className="text-white">X</span>
              </span>
            </Link>
            <p className="text-[#4a5680] text-sm leading-relaxed mb-5">
              India's forward-thinking technology startup delivering cutting-edge mobile apps, websites, and digital solutions for modern businesses.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Linkedin, href: CONTACT_INFO.social.linkedin, label: "LinkedIn" },
                { icon: Instagram, href: CONTACT_INFO.social.instagram, label: "Instagram" },
                { icon: Facebook, href: CONTACT_INFO.social.facebook, label: "Facebook" },
                { icon: Twitter, href: CONTACT_INFO.social.twitter, label: "Twitter" },
                { icon: Github, href: CONTACT_INFO.social.github, label: "GitHub" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-[rgba(0,180,255,0.12)] flex items-center justify-center text-[#4a5680] hover:text-[#00b4ff] hover:border-[rgba(0,180,255,0.4)] transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-2.5">
              {[
                { label: "About MassX", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Blog", href: "/blog" },
                { label: "Careers", href: "/careers" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-[#4a5680] hover:text-[#00b4ff] text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2.5">
              {[
                "Mobile App Development",
                "Website Development",
                "Web App Development",
                "UI/UX Design",
                "Custom Software",
                "API & Backend",
                "Maintenance & Support",
              ].map((svc) => (
                <li key={svc}>
                  <Link to="/services" className="text-[#4a5680] hover:text-[#00b4ff] text-sm transition-colors">
                    {svc}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2.5 text-[#4a5680] text-sm">
                <Mail className="w-4 h-4 text-[#00b4ff] flex-shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-[#00b4ff] transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-[#4a5680] text-sm">
                <Phone className="w-4 h-4 text-[#00b4ff] flex-shrink-0" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-[#00b4ff] transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-[#4a5680] text-sm">
                <MapPin className="w-4 h-4 text-[#00b4ff] flex-shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.address}</span>
              </li>
            </ul>

            {/* Newsletter */}
            <div>
              <p className="text-white text-sm font-medium mb-2">Stay updated</p>
              {subscribed ? (
                <p className="text-[#00b4ff] text-sm">Thanks for subscribing!</p>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    className="input-field flex-1 text-sm py-2 px-3"
                    required
                  />
                  <button type="submit" className="btn-primary text-sm py-2 px-3 whitespace-nowrap">
                    Join
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        <div className="divider-glow mb-6" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[#4a5680] text-xs">
          <p>© {new Date().getFullYear()} MassX Technology. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/privacy-policy" className="hover:text-[#00b4ff] transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[#00b4ff] transition-colors">Terms & Conditions</Link>
            <Link to="/faq" className="hover:text-[#00b4ff] transition-colors">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
