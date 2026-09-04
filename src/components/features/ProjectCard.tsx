import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import type { Project } from "@/types";

const STATUS_COLORS: Record<string, string> = {
  "Live": "text-green-400 bg-green-400/10 border-green-400/25",
  "Completed": "text-blue-400 bg-blue-400/10 border-blue-400/25",
  "In Progress": "text-yellow-400 bg-yellow-400/10 border-yellow-400/25",
};

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="glass-card-hover overflow-hidden group">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#03060d] via-transparent to-transparent opacity-80" />
        <div className="absolute top-3 left-3">
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${STATUS_COLORS[project.status]}`}>
            {project.status}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span className="text-xs text-[#8b9cc7] bg-[rgba(3,6,13,0.8)] px-2.5 py-1 rounded-full border border-[rgba(255,255,255,0.06)]">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-heading font-semibold text-white text-heading-sm mb-2 line-clamp-1">{project.title}</h3>
        <p className="text-[#8b9cc7] text-sm leading-relaxed mb-4 line-clamp-2">{project.description}</p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.slice(0, 3).map((t) => (
            <span key={t} className="badge text-xs">{t}</span>
          ))}
          {project.technologies.length > 3 && (
            <span className="badge text-xs">+{project.technologies.length - 3}</span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <Link
            to={`/portfolio/${project.id}`}
            className="btn-primary text-xs py-2 px-4 flex-1 justify-center"
          >
            View Details <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-[rgba(0,180,255,0.2)] text-[#00b4ff] hover:bg-[rgba(0,180,255,0.08)] transition-all"
              aria-label="View live site"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-[rgba(255,255,255,0.08)] text-[#8b9cc7] hover:text-white hover:bg-[rgba(255,255,255,0.05)] transition-all"
              aria-label="View on GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
