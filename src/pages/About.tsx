import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Heart, Linkedin, Github } from "lucide-react";
import { TEAM_MEMBERS, STATS, TECH_STACK } from "@/constants/data";
import SectionHeader from "@/components/features/SectionHeader";

const VALUES = [
  { icon: "⚡", title: "Innovation First", description: "We embrace emerging technologies and creative thinking to build solutions ahead of the curve." },
  { icon: "🎯", title: "Client Success", description: "Your business growth is our primary metric. We design every decision around delivering real results." },
  { icon: "🔒", title: "Quality & Reliability", description: "Rigorous testing and best practices ensure every product we ship is solid, secure, and dependable." },
  { icon: "💡", title: "Transparency", description: "Honest communication and clear reporting throughout every stage of development." },
  { icon: "🤝", title: "Partnership Mindset", description: "We build long-term relationships — not one-time transactions. Your success is our ongoing commitment." },
  { icon: "🚀", title: "Continuous Growth", description: "We invest in learning and staying at the forefront of technology trends for our clients' benefit." },
];

const MILESTONES = [
  { year: "2020", event: "MassX Founded", desc: "Started with a vision to bring world-class tech to Indian businesses." },
  { year: "2021", event: "First 10 Projects", desc: "Delivered mobile and web solutions for early clients across Mumbai and Pune." },
  { year: "2022", event: "Team Expansion", desc: "Grew to a full-stack team with dedicated mobile, web, and design specialists." },
  { year: "2023", event: "50 Projects Milestone", desc: "Crossed 50 delivered projects with clients across 8 Indian cities." },
  { year: "2024", event: "SaaS & Enterprise", desc: "Started delivering enterprise-level SaaS and complex business software." },
  { year: "2026", event: "Pan-India Operations", desc: "Now serving clients across all major Indian cities with remote-first delivery." },
];

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="page-section grid-bg">
        <div className="container-custom text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(0,180,255,0.2)] bg-[rgba(0,180,255,0.05)] mb-6">
            <span className="section-label">About MassX</span>
          </div>
          <h1 className="font-heading font-bold text-display-sm lg:text-display-md text-white mb-6 max-w-3xl mx-auto">
            Building Technology That <span className="gradient-text">Powers Progress</span>
          </h1>
          <p className="text-[#8b9cc7] text-lg max-w-2xl mx-auto leading-relaxed">
            MassX is a technology startup founded with a singular mission: to help Indian businesses and startups compete globally through world-class digital products.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-[#070c18]">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {STATS.map((stat) => (
              <div key={stat.label} className="glass-card p-6 text-center">
                <div className="font-heading font-bold text-3xl gradient-text-blue mb-2">{stat.value}</div>
                <div className="text-[#4a5680] text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="page-section">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-card-hover p-8">
              <div className="w-12 h-12 rounded-2xl bg-[rgba(0,180,255,0.1)] border border-[rgba(0,180,255,0.2)] flex items-center justify-center mb-5">
                <Eye className="w-6 h-6 text-[#00b4ff]" />
              </div>
              <h3 className="font-heading font-bold text-white text-xl mb-3">Our Vision</h3>
              <p className="text-[#8b9cc7] leading-relaxed">
                To become India's most trusted technology partner for startups and businesses — known for building digital products that are technically excellent, visually outstanding, and commercially impactful.
              </p>
            </div>
            <div className="glass-card-hover p-8">
              <div className="w-12 h-12 rounded-2xl bg-[rgba(0,229,255,0.1)] border border-[rgba(0,229,255,0.2)] flex items-center justify-center mb-5">
                <Target className="w-6 h-6 text-[#00e5ff]" />
              </div>
              <h3 className="font-heading font-bold text-white text-xl mb-3">Our Mission</h3>
              <p className="text-[#8b9cc7] leading-relaxed">
                To deliver high-quality, affordable, and scalable technology solutions that empower Indian businesses to grow, compete globally, and achieve their full potential through technology.
              </p>
            </div>
            <div className="glass-card-hover p-8">
              <div className="w-12 h-12 rounded-2xl bg-[rgba(124,58,237,0.1)] border border-[rgba(124,58,237,0.2)] flex items-center justify-center mb-5">
                <Heart className="w-6 h-6 text-[#7c3aed]" />
              </div>
              <h3 className="font-heading font-bold text-white text-xl mb-3">Our Philosophy</h3>
              <p className="text-[#8b9cc7] leading-relaxed">
                Technology should serve people, not the other way around. We build products that are intuitive, reliable, and genuinely useful — solving real problems for real users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="page-section bg-[#070c18] grid-bg">
        <div className="container-custom">
          <SectionHeader label="What Drives Us" title="Our Core " highlight="Values" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {VALUES.map((v) => (
              <div key={v.title} className="glass-card-hover p-6">
                <div className="text-3xl mb-4">{v.icon}</div>
                <h4 className="font-heading font-semibold text-white mb-2">{v.title}</h4>
                <p className="text-[#8b9cc7] text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="page-section">
        <div className="container-custom">
          <SectionHeader label="The Team" title="Meet the People " highlight="Behind MassX" subtitle="Our team of passionate engineers and designers building your digital future." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.id} className="glass-card-hover p-6 text-center group">
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <img src={member.avatar} alt={member.name} className="w-full h-full rounded-full object-cover ring-2 ring-[rgba(0,180,255,0.2)] group-hover:ring-[rgba(0,180,255,0.5)] transition-all" />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#00b4ff] border-2 border-[#03060d]" />
                </div>
                <h4 className="font-heading font-semibold text-white mb-1">{member.name}</h4>
                <p className="text-[#00b4ff] text-sm mb-3">{member.role}</p>
                <p className="text-[#8b9cc7] text-xs leading-relaxed mb-4">{member.bio}</p>
                <div className="flex items-center justify-center gap-2">
                  {member.linkedin && (
                    <a href={member.linkedin} className="w-8 h-8 rounded-lg border border-[rgba(0,180,255,0.15)] flex items-center justify-center text-[#4a5680] hover:text-[#00b4ff] hover:border-[rgba(0,180,255,0.4)] transition-all">
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {member.github && (
                    <a href={member.github} className="w-8 h-8 rounded-lg border border-[rgba(255,255,255,0.06)] flex items-center justify-center text-[#4a5680] hover:text-white transition-all">
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="page-section bg-[#070c18]">
        <div className="container-custom">
          <SectionHeader label="Our Journey" title="The MassX " highlight="Story" />
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#00b4ff] via-[rgba(0,180,255,0.3)] to-transparent" />
              <div className="space-y-8">
                {MILESTONES.map((m, i) => (
                  <div key={m.year} className="relative flex gap-6 pl-20">
                    <div className="absolute left-5 w-6 h-6 rounded-full bg-gradient-blue flex items-center justify-center ring-4 ring-[#070c18]">
                      <span className="w-2 h-2 rounded-full bg-white" />
                    </div>
                    <div className={`glass-card-hover p-5 flex-1 ${i % 2 === 0 ? "" : "bg-[rgba(0,180,255,0.02)]"}`}>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="badge">{m.year}</span>
                        <h4 className="font-heading font-semibold text-white">{m.event}</h4>
                      </div>
                      <p className="text-[#8b9cc7] text-sm">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="page-section">
        <div className="container-custom">
          <SectionHeader label="Technical Expertise" title="Technologies We " highlight="Master" subtitle="Our team is proficient in the tools and frameworks that modern digital products demand." />
          <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-4">
            {TECH_STACK.map((tech) => (
              <div key={tech.name} className="glass-card-hover p-3 flex flex-col items-center gap-2 group">
                <img src={tech.logo} alt={tech.name} className="w-8 h-8 object-contain filter brightness-90 group-hover:brightness-110 transition-all" />
                <span className="text-[10px] text-[#4a5680] group-hover:text-[#8b9cc7] transition-colors text-center">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="page-section bg-[#070c18]">
        <div className="container-custom text-center">
          <div className="glass-card p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,180,255,0.06)] to-[rgba(124,58,237,0.06)]" />
            <div className="relative z-10">
              <h2 className="font-heading font-bold text-display-sm text-white mb-4">Let's Build Something <span className="gradient-text">Remarkable</span></h2>
              <p className="text-[#8b9cc7] text-lg mb-8 max-w-xl mx-auto">Ready to partner with a team that's as invested in your success as you are?</p>
              <Link to="/contact" className="btn-primary text-base py-3.5 px-8">
                Start the Conversation <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
