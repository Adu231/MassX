import { ArrowRight, Smartphone, Globe, Layout, Palette, Code2, Server, Wrench, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import type { Service } from "@/types";

const ICONS: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  Smartphone,
  Globe,
  Layout,
  Palette,
  Code2,
  Server,
  Wrench,
  TrendingUp,
};

interface ServiceCardProps {
  service: Service;
  compact?: boolean;
}

export default function ServiceCard({ service, compact = false }: ServiceCardProps) {
  const Icon = ICONS[service.icon] || Code2;

  if (compact) {
    return (
      <div className="glass-card-hover p-6">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
          style={{ background: `${service.color}18`, border: `1px solid ${service.color}30` }}
        >
          <Icon className="w-6 h-6" style={{ color: service.color }} />
        </div>
        <h3 className="font-heading font-semibold text-white text-heading-sm mb-2">{service.title}</h3>
        <p className="text-[#8b9cc7] text-sm leading-relaxed mb-4">{service.description}</p>
        <Link
          to="/services"
          className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
          style={{ color: service.color }}
        >
          Learn More <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    );
  }

  return (
    <div className="glass-card-hover p-7">
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
        style={{ background: `${service.color}18`, border: `1px solid ${service.color}30` }}
      >
        <Icon className="w-7 h-7" style={{ color: service.color }} />
      </div>
      <h3 className="font-heading font-semibold text-white text-heading-xl mb-3">{service.title}</h3>
      <p className="text-[#8b9cc7] leading-relaxed mb-5">{service.description}</p>

      <div className="mb-5">
        <p className="text-xs font-medium text-[#4a5680] uppercase tracking-wider mb-2">Key Features</p>
        <div className="flex flex-wrap gap-1.5">
          {service.features.slice(0, 4).map((f) => (
            <span key={f} className="badge">{f}</span>
          ))}
        </div>
      </div>

      <div className="mb-5">
        <p className="text-xs font-medium text-[#4a5680] uppercase tracking-wider mb-2">Technologies</p>
        <div className="flex flex-wrap gap-1.5">
          {service.technologies.map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded border border-[rgba(255,255,255,0.06)] text-[#8b9cc7]">{t}</span>
          ))}
        </div>
      </div>

      <Link to="/contact" className="btn-primary text-sm w-full justify-center">
        Start This Project <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
