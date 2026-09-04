import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PROJECTS } from "@/constants/data";
import ProjectCard from "@/components/features/ProjectCard";
import SectionHeader from "@/components/features/SectionHeader";

const CATEGORIES = ["All", "Web Application", "Mobile App", "Website"];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="page-section grid-bg">
        <div className="container-custom text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(0,180,255,0.2)] bg-[rgba(0,180,255,0.05)] mb-6">
            <span className="section-label">Our Portfolio</span>
          </div>
          <h1 className="font-heading font-bold text-display-sm lg:text-display-md text-white mb-6 max-w-3xl mx-auto">
            Projects That <span className="gradient-text">Define Excellence</span>
          </h1>
          <p className="text-[#8b9cc7] text-lg max-w-2xl mx-auto">
            A curated showcase of digital products we've engineered for clients across industries and verticals throughout India.
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="page-section bg-[#070c18]">
        <div className="container-custom">
          {/* Filters */}
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-gradient-blue text-white shadow-glow-blue"
                    : "border border-[rgba(0,180,255,0.15)] text-[#8b9cc7] hover:text-[#00b4ff] hover:border-[rgba(0,180,255,0.35)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-[#4a5680]">No projects found in this category.</div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container-custom text-center">
          <div className="glass-card p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,180,255,0.05)] to-[rgba(124,58,237,0.05)]" />
            <div className="relative z-10">
              <h2 className="font-heading font-bold text-display-sm text-white mb-4">Ready to be our next <span className="gradient-text">success story?</span></h2>
              <p className="text-[#8b9cc7] text-lg mb-8 max-w-lg mx-auto">Let's build a digital product that gets results for your business.</p>
              <Link to="/contact" className="btn-primary text-base py-3.5 px-8">
                Start Your Project <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
