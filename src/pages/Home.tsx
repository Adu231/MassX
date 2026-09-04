import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, Play, Star, CheckCircle, Zap, Target, TrendingUp, Users, Shield, IndianRupee, FileSearch, Map, Palette, Code2, Rocket, HeartHandshake } from "lucide-react";
import { SERVICES, PROJECTS, TESTIMONIALS, TECH_STACK, WHY_CHOOSE_US, WORK_PROCESS, STATS } from "@/constants/data";
import ServiceCard from "@/components/features/ServiceCard";
import ProjectCard from "@/components/features/ProjectCard";
import BlogCard from "@/components/features/BlogCard";
import SectionHeader from "@/components/features/SectionHeader";
import { BLOG_POSTS } from "@/constants/data";
import heroImg from "@/assets/hero-bg.jpg";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap, Target, TrendingUp, Users, Shield, IndianRupee,
  FileSearch, Map, Palette, Code2, CheckCircle, Rocket, HeartHandshake,
};

export default function Home() {
  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="MassX Technology" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#03060d]/60 via-[#03060d]/40 to-[#03060d]" />
          <div className="grid-bg absolute inset-0 opacity-40" />
        </div>

        {/* Glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#00b4ff]/8 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#7c3aed]/8 blur-[120px] pointer-events-none" />

        <div className="relative z-10 container-custom text-center">
          {/* Label */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(0,180,255,0.2)] bg-[rgba(0,180,255,0.05)] mb-8">
            <span className="glow-dot animate-pulse-glow" />
            <span className="text-[#00b4ff] text-sm font-medium">India's Next-Generation Tech Partner</span>
          </div>

          {/* Headline */}
          <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-[4.5rem] leading-[1.08] text-white mb-6 max-w-5xl mx-auto">
            We Build{" "}
            <span className="gradient-text">Digital Products</span>
            <br />
            That Drive Real Growth
          </h1>

          <p className="text-[#8b9cc7] text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            MassX delivers custom mobile apps, websites, and software solutions for startups and businesses across India — built with cutting-edge technology and a client-first mindset.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/contact" className="btn-primary text-base py-3.5 px-8">
              Start Your Project <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/portfolio" className="btn-secondary text-base py-3.5 px-8">
              <Play className="w-4 h-4" />
              Explore Our Work
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {STATS.map((stat) => (
              <div key={stat.label} className="glass-card p-4 text-center">
                <div className="font-heading font-bold text-2xl gradient-text-blue mb-1">{stat.value}</div>
                <div className="text-[#4a5680] text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <ChevronRight className="w-5 h-5 text-[#4a5680] rotate-90" />
        </div>
      </section>

      {/* ── SERVICES PREVIEW ── */}
      <section className="page-section grid-bg">
        <div className="container-custom">
          <SectionHeader
            label="What We Do"
            title="Services Designed to "
            highlight="Transform Your Business"
            subtitle="From concept to deployment, we deliver comprehensive technology solutions tailored to your unique needs."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.slice(0, 8).map((service) => (
              <ServiceCard key={service.id} service={service} compact />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="btn-secondary">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section className="page-section">
        <div className="container-custom">
          <SectionHeader
            label="Technology Expertise"
            title="Powered by "
            highlight="Modern Technologies"
            subtitle="We stay current with industry-leading tools and frameworks to deliver future-ready solutions."
          />
          <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-4">
            {TECH_STACK.map((tech) => (
              <div key={tech.name} className="glass-card-hover p-3 flex flex-col items-center gap-2 group">
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="w-8 h-8 object-contain filter brightness-90 group-hover:brightness-110 transition-all"
                />
                <span className="text-[10px] text-[#4a5680] group-hover:text-[#8b9cc7] transition-colors text-center leading-tight">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO PREVIEW ── */}
      <section className="page-section bg-[#070c18]">
        <div className="container-custom">
          <SectionHeader
            label="Our Work"
            title="Projects That "
            highlight="Speak for Themselves"
            subtitle="A selection of digital products we've engineered for clients across industries."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.filter((p) => p.featured).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/portfolio" className="btn-secondary">
              View All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="page-section">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="glow-dot" />
                <span className="section-label">Why MassX</span>
              </div>
              <h2 className="font-heading font-bold text-display-sm lg:text-display-md text-white mb-5">
                The Partner Your <span className="gradient-text">Business Deserves</span>
              </h2>
              <p className="text-[#8b9cc7] text-lg leading-relaxed mb-8">
                We combine technical excellence with genuine care for your success. Every project receives our full commitment from the first call to post-launch support.
              </p>
              <Link to="/about" className="btn-primary">
                About MassX <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {WHY_CHOOSE_US.map((item) => {
                const Icon = ICON_MAP[item.icon] || Zap;
                return (
                  <div key={item.title} className="glass-card-hover p-5">
                    <div className="w-10 h-10 rounded-xl bg-[rgba(0,180,255,0.1)] border border-[rgba(0,180,255,0.2)] flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-[#00b4ff]" />
                    </div>
                    <h4 className="font-heading font-semibold text-white text-sm mb-1.5">{item.title}</h4>
                    <p className="text-[#8b9cc7] text-xs leading-relaxed">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── WORK PROCESS ── */}
      <section className="page-section bg-[#070c18] grid-bg">
        <div className="container-custom">
          <SectionHeader
            label="How We Work"
            title="Our "
            highlight="Development Process"
            subtitle="A structured, transparent approach that delivers quality results on time, every time."
          />
          <div className="relative">
            <div className="hidden lg:block absolute top-8 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-[rgba(0,180,255,0.2)] to-transparent" />
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-5">
              {WORK_PROCESS.map((step, i) => {
                const Icon = ICON_MAP[step.icon] || Code2;
                return (
                  <div key={step.step} className="flex flex-col items-center text-center group">
                    <div className="relative mb-4">
                      <div className="w-16 h-16 rounded-2xl bg-[rgba(0,180,255,0.08)] border border-[rgba(0,180,255,0.2)] flex items-center justify-center group-hover:border-[rgba(0,180,255,0.5)] group-hover:shadow-glow-blue transition-all duration-300">
                        <Icon className="w-7 h-7 text-[#00b4ff]" />
                      </div>
                      <div className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-gradient-blue flex items-center justify-center text-white font-bold text-[10px]">
                        {i + 1}
                      </div>
                    </div>
                    <h4 className="font-heading font-semibold text-white text-xs mb-1">{step.title}</h4>
                    <p className="text-[#4a5680] text-[11px] leading-relaxed">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="page-section">
        <div className="container-custom">
          <SectionHeader
            label="Client Stories"
            title="What Our "
            highlight="Clients Say"
            subtitle="Real feedback from businesses and founders who trusted MassX to build their digital products."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="glass-card-hover p-6">
                <div className="flex mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-[#8b9cc7] text-sm leading-relaxed mb-5 italic">"{t.review}"</p>
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-[rgba(0,180,255,0.2)]"
                  />
                  <div>
                    <p className="text-white font-medium text-sm">{t.name}</p>
                    <p className="text-[#4a5680] text-xs">{t.role} · {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOG PREVIEW ── */}
      <section className="page-section bg-[#070c18]">
        <div className="container-custom">
          <SectionHeader
            label="Insights"
            title="Latest from the "
            highlight="MassX Blog"
            subtitle="Technology insights, development tips, and startup advice from the MassX team."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/blog" className="btn-secondary">
              Read All Articles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="page-section">
        <div className="container-custom">
          <div className="relative glass-card overflow-hidden p-10 md:p-16 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,180,255,0.06)] to-[rgba(124,58,237,0.06)]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-blue rounded-b-full" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(0,180,255,0.2)] bg-[rgba(0,180,255,0.05)] mb-6">
                <span className="glow-dot animate-pulse-glow" />
                <span className="text-[#00b4ff] text-sm font-medium">Ready to Build Something Great?</span>
              </div>
              <h2 className="font-heading font-bold text-display-sm lg:text-display-md text-white mb-4">
                Have an idea? <span className="gradient-text">Let's build it together.</span>
              </h2>
              <p className="text-[#8b9cc7] text-lg max-w-xl mx-auto mb-8">
                From mobile apps to enterprise software — MassX turns your vision into a powerful digital product. Let's talk.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-primary text-base py-3.5 px-8">
                  Start a Project <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/contact" className="btn-secondary text-base py-3.5 px-8">
                  Book a Free Call
                </Link>
              </div>

              <div className="flex items-center justify-center gap-8 mt-10">
                {["Free Consultation", "No Hidden Costs", "On-time Delivery"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-[#8b9cc7]">
                    <CheckCircle className="w-4 h-4 text-[#00b4ff]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
