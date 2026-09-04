import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { SERVICES } from "@/constants/data";
import ServiceCard from "@/components/features/ServiceCard";
import SectionHeader from "@/components/features/SectionHeader";

export default function Services() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="page-section grid-bg">
        <div className="container-custom text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(0,180,255,0.2)] bg-[rgba(0,180,255,0.05)] mb-6">
            <span className="section-label">Our Services</span>
          </div>
          <h1 className="font-heading font-bold text-display-sm lg:text-display-md text-white mb-6 max-w-3xl mx-auto">
            End-to-End <span className="gradient-text">Technology Services</span> for Modern Businesses
          </h1>
          <p className="text-[#8b9cc7] text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            From ideation to deployment and beyond — we offer comprehensive digital services to build, grow, and scale your technology products.
          </p>
          <Link to="/contact" className="btn-primary text-base py-3.5 px-8">
            Get a Free Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="page-section bg-[#070c18]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="page-section">
        <div className="container-custom">
          <SectionHeader
            label="How We Engage"
            title="Flexible "
            highlight="Engagement Models"
            subtitle="Choose the pricing and collaboration model that best fits your project and team."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Fixed Price",
                icon: "🎯",
                description: "Best for well-defined projects with clear scope and deliverables.",
                features: ["Clear scope & milestones", "Predictable budget", "Defined timeline", "Best for MVPs", "Milestone-based payments"],
                cta: "Get Fixed Quote",
                highlight: false,
              },
              {
                title: "Time & Material",
                icon: "⏱️",
                description: "Best for evolving projects that require flexibility in scope and direction.",
                features: ["Flexible scope", "Pay as you go", "Weekly billing", "Ideal for complex projects", "Dedicated team"],
                cta: "Discuss T&M",
                highlight: true,
              },
              {
                title: "Monthly Retainer",
                icon: "🔄",
                description: "Best for ongoing development, maintenance, and feature expansion.",
                features: ["Dedicated hours/month", "Priority support", "Code reviews", "Performance monitoring", "Ongoing enhancements"],
                cta: "Start Retainer",
                highlight: false,
              },
            ].map((model) => (
              <div
                key={model.title}
                className={`glass-card-hover p-8 relative ${model.highlight ? "border-[rgba(0,180,255,0.4)] shadow-card-hover" : ""}`}
              >
                {model.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 badge text-xs font-semibold py-1 px-3">Most Popular</div>
                )}
                <div className="text-4xl mb-4">{model.icon}</div>
                <h3 className="font-heading font-bold text-white text-xl mb-2">{model.title}</h3>
                <p className="text-[#8b9cc7] text-sm mb-5 leading-relaxed">{model.description}</p>
                <ul className="space-y-2.5 mb-7">
                  {model.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-[#8b9cc7]">
                      <CheckCircle className="w-4 h-4 text-[#00b4ff] flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className={model.highlight ? "btn-primary w-full justify-center text-sm" : "btn-secondary w-full justify-center text-sm"}>
                  {model.cta} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container-custom">
          <div className="glass-card p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,180,255,0.06)] to-[rgba(124,58,237,0.06)]" />
            <div className="relative z-10">
              <h2 className="font-heading font-bold text-display-sm text-white mb-4">
                Not sure which service you need? <span className="gradient-text">Let's talk.</span>
              </h2>
              <p className="text-[#8b9cc7] text-lg mb-8 max-w-xl mx-auto">Our team will understand your requirements and recommend the best approach for your project.</p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link to="/contact" className="btn-primary text-base py-3.5 px-8">Book a Free Call <ArrowRight className="w-5 h-5" /></Link>
                <Link to="/portfolio" className="btn-secondary text-base py-3.5 px-8">See Our Work</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
