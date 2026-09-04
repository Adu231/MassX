import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, CheckCircle, Tag } from "lucide-react";
import { PROJECTS } from "@/constants/data";

const STATUS_COLORS: Record<string, string> = {
  "Live": "text-green-400 bg-green-400/10 border-green-400/25",
  "Completed": "text-blue-400 bg-blue-400/10 border-blue-400/25",
  "In Progress": "text-yellow-400 bg-yellow-400/10 border-yellow-400/25",
};

export default function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) return <Navigate to="/portfolio" />;

  return (
    <div className="pt-20">
      <div className="page-section">
        <div className="container-custom max-w-4xl">
          {/* Back */}
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-[#8b9cc7] hover:text-[#00b4ff] transition-colors mb-8 text-sm">
            <ArrowLeft className="w-4 h-4" /> Back to Portfolio
          </Link>

          {/* Header */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className={`text-sm font-medium px-3 py-1 rounded-full border ${STATUS_COLORS[project.status]}`}>
                {project.status}
              </span>
              <span className="badge">{project.category}</span>
            </div>
            <h1 className="font-heading font-bold text-display-sm text-white mb-4">{project.title}</h1>
            <p className="text-[#8b9cc7] text-lg leading-relaxed">{project.description}</p>
          </div>

          {/* Image */}
          <div className="rounded-2xl overflow-hidden mb-10 ring-1 ring-[rgba(0,180,255,0.15)]">
            <img src={project.image} alt={project.title} className="w-full h-80 object-cover" />
          </div>

          {/* Actions */}
          {(project.liveUrl || project.githubUrl || project.appUrl) && (
            <div className="flex gap-3 mb-10">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm py-2.5 px-5">
                  View Live Site <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm py-2.5 px-5">
                  <Github className="w-4 h-4" /> GitHub
                </a>
              )}
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {/* Problem */}
            {project.problem && (
              <div className="glass-card p-6">
                <h3 className="font-heading font-semibold text-white mb-3">Problem Statement</h3>
                <p className="text-[#8b9cc7] leading-relaxed">{project.problem}</p>
              </div>
            )}
            {/* Solution */}
            {project.solution && (
              <div className="glass-card p-6">
                <h3 className="font-heading font-semibold text-white mb-3">Our Solution</h3>
                <p className="text-[#8b9cc7] leading-relaxed">{project.solution}</p>
              </div>
            )}
          </div>

          {/* Features */}
          {project.features && (
            <div className="glass-card p-6 mb-6">
              <h3 className="font-heading font-semibold text-white mb-4">Key Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((f) => (
                  <div key={f} className="flex items-center gap-2.5 text-[#8b9cc7] text-sm">
                    <CheckCircle className="w-4 h-4 text-[#00b4ff] flex-shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies */}
          <div className="glass-card p-6 mb-10">
            <h3 className="font-heading font-semibold text-white mb-4">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span key={t} className="flex items-center gap-1.5 badge text-sm">
                  <Tag className="w-3 h-3" /> {t}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="glass-card p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,180,255,0.05)] to-[rgba(124,58,237,0.05)]" />
            <div className="relative z-10">
              <h3 className="font-heading font-bold text-white text-xl mb-3">Want a Similar Solution?</h3>
              <p className="text-[#8b9cc7] mb-6">Let's build a product tailored to your specific business needs and goals.</p>
              <Link to="/contact" className="btn-primary">Start Your Project</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
