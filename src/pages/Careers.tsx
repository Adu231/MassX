import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Clock, Briefcase, Heart } from "lucide-react";
import SectionHeader from "@/components/features/SectionHeader";

const OPENINGS = [
  { title: "Senior React Developer", type: "Full-Time", location: "Remote / Mumbai", department: "Engineering", skills: ["React", "TypeScript", "Node.js"] },
  { title: "React Native Developer", type: "Full-Time", location: "Remote / Pune", department: "Mobile", skills: ["React Native", "Firebase", "REST APIs"] },
  { title: "UI/UX Designer", type: "Full-Time", location: "Remote", department: "Design", skills: ["Figma", "Prototyping", "User Research"] },
  { title: "Backend Developer", type: "Full-Time", location: "Remote", department: "Engineering", skills: ["Node.js", "MongoDB", "AWS"] },
  { title: "Business Development Executive", type: "Full-Time", location: "Mumbai / Pune", department: "Sales", skills: ["B2B Sales", "IT Services", "Proposal Writing"] },
  { title: "Frontend Intern", type: "Internship", location: "Remote", department: "Engineering", skills: ["React", "CSS", "JavaScript"] },
];

const PERKS = [
  { icon: "🏠", title: "Remote-First", desc: "Work from anywhere in India with flexible hours." },
  { icon: "📈", title: "Growth Opportunities", desc: "Fast-growing startup with clear career paths." },
  { icon: "🎓", title: "Learning Budget", desc: "Annual budget for courses and certifications." },
  { icon: "💻", title: "Equipment Provided", desc: "Macbook and peripherals for new team members." },
  { icon: "🤝", title: "Collaborative Culture", desc: "Transparent, inclusive, and innovation-driven team." },
  { icon: "💰", title: "Competitive Salary", desc: "Market-aligned compensation with performance bonuses." },
];

export default function Careers() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="page-section grid-bg">
        <div className="container-custom text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(0,180,255,0.2)] bg-[rgba(0,180,255,0.05)] mb-6">
            <Heart className="w-4 h-4 text-[#00b4ff]" />
            <span className="section-label">Join MassX</span>
          </div>
          <h1 className="font-heading font-bold text-display-sm lg:text-display-md text-white mb-5 max-w-3xl mx-auto">
            Build the Future with <span className="gradient-text">People Who Care</span>
          </h1>
          <p className="text-[#8b9cc7] text-lg max-w-xl mx-auto">
            Join a passionate team of engineers and designers who are shaping the digital landscape for Indian businesses.
          </p>
        </div>
      </section>

      {/* Perks */}
      <section className="py-16 bg-[#070c18]">
        <div className="container-custom">
          <SectionHeader label="Why MassX" title="Why Join " highlight="Our Team?" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {PERKS.map((p) => (
              <div key={p.title} className="glass-card-hover p-5">
                <div className="text-3xl mb-3">{p.icon}</div>
                <h4 className="font-heading font-semibold text-white mb-1.5">{p.title}</h4>
                <p className="text-[#8b9cc7] text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Openings */}
      <section className="page-section">
        <div className="container-custom">
          <SectionHeader label="Openings" title="Current " highlight="Opportunities" />
          <div className="space-y-4 max-w-3xl mx-auto">
            {OPENINGS.map((job) => (
              <div key={job.title} className="glass-card-hover p-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="font-heading font-semibold text-white text-lg mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-3 text-sm text-[#8b9cc7]">
                      <span className="flex items-center gap-1.5"><Briefcase className="w-3.5 h-3.5 text-[#00b4ff]" />{job.department}</span>
                      <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-[#00b4ff]" />{job.location}</span>
                      <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-[#00b4ff]" />{job.type}</span>
                    </div>
                  </div>
                  <a href="mailto:careers@massx.in" className="btn-primary text-sm py-2.5 px-5">
                    Apply Now <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {job.skills.map((s) => <span key={s} className="badge text-xs">{s}</span>)}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 glass-card p-8 max-w-lg mx-auto">
            <p className="text-white font-medium mb-2">Don't see a role that fits?</p>
            <p className="text-[#8b9cc7] text-sm mb-5">We're always looking for talented people. Send us your profile.</p>
            <a href="mailto:careers@massx.in" className="btn-primary text-sm">
              Send Your Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
