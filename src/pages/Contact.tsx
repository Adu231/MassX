import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle, Calendar } from "lucide-react";
import { CONTACT_INFO } from "@/constants/data";
import { toast } from "sonner";

const SERVICES_LIST = ["Mobile App Development", "Website Development", "Web Application Development", "UI/UX Design", "Custom Software", "API & Backend Development", "Maintenance & Support", "Other"];
const BUDGETS = ["Under ₹50,000", "₹50,000 – ₹1,00,000", "₹1,00,000 – ₹3,00,000", "₹3,00,000 – ₹10,00,000", "₹10,00,000+", "Let's Discuss"];

export default function Contact() {
  const [activeTab, setActiveTab] = useState<"enquiry" | "appointment">("enquiry");
  const [submitted, setSubmitted] = useState(false);
  const [apptSubmitted, setApptSubmitted] = useState(false);

  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", service: "", budget: "", description: "", contactMethod: "Email", message: "" });
  const [appt, setAppt] = useState({ name: "", email: "", phone: "", date: "", time: "", purpose: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await new Promise((r) => setTimeout(r, 1000));
    const enquiries = JSON.parse(localStorage.getItem("massx_enquiries") || "[]");
    enquiries.push({ ...form, id: Date.now().toString(), status: "New", createdAt: new Date().toISOString() });
    localStorage.setItem("massx_enquiries", JSON.stringify(enquiries));
    setSubmitted(true);
    toast.success("Enquiry submitted successfully!");
  };

  const handleApptSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await new Promise((r) => setTimeout(r, 1000));
    const appointments = JSON.parse(localStorage.getItem("massx_appointments") || "[]");
    appointments.push({ ...appt, id: Date.now().toString(), status: "Pending", createdAt: new Date().toISOString() });
    localStorage.setItem("massx_appointments", JSON.stringify(appointments));
    setApptSubmitted(true);
    toast.success("Appointment request sent!");
  };

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));
  const updateA = (k: string, v: string) => setAppt((a) => ({ ...a, [k]: v }));

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="page-section grid-bg">
        <div className="container-custom text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(0,180,255,0.2)] bg-[rgba(0,180,255,0.05)] mb-6">
            <span className="section-label">Get In Touch</span>
          </div>
          <h1 className="font-heading font-bold text-display-sm lg:text-display-md text-white mb-5 max-w-2xl mx-auto">
            Let's Start Your <span className="gradient-text">Next Project</span>
          </h1>
          <p className="text-[#8b9cc7] text-lg max-w-xl mx-auto">
            Tell us about your project and we'll get back to you within 24 hours. Free consultation, no strings attached.
          </p>
        </div>
      </section>

      <section className="page-section bg-[#070c18]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Left Info */}
            <div>
              <h3 className="font-heading font-bold text-white text-xl mb-6">Contact Information</h3>
              <div className="space-y-5 mb-8">
                {[
                  { icon: Mail, label: "Email", value: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
                  { icon: Phone, label: "Phone", value: CONTACT_INFO.phone, href: `tel:${CONTACT_INFO.phone}` },
                  { icon: MapPin, label: "Location", value: CONTACT_INFO.address, href: "#" },
                ].map(({ icon: Icon, label, value, href }) => (
                  <a key={label} href={href} className="flex items-start gap-4 glass-card-hover p-4 group">
                    <div className="w-10 h-10 rounded-xl bg-[rgba(0,180,255,0.1)] border border-[rgba(0,180,255,0.2)] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-[#00b4ff]" />
                    </div>
                    <div>
                      <p className="text-[#4a5680] text-xs mb-0.5">{label}</p>
                      <p className="text-white text-sm group-hover:text-[#00b4ff] transition-colors">{value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent("Hi MassX! I'd like to discuss a project.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center bg-[#25D366] hover:shadow-[0_0_24px_rgba(37,211,102,0.4)]"
                style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
              >
                <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
              </a>

              <div className="glass-card p-5 mt-6">
                <h4 className="font-heading font-semibold text-white text-sm mb-3">Response Time</h4>
                <div className="space-y-2">
                  {[
                    ["Email / Form", "Within 24 hours"],
                    ["WhatsApp", "Within 2 hours"],
                    ["Phone", "Immediate"],
                  ].map(([ch, time]) => (
                    <div key={ch} className="flex justify-between text-xs">
                      <span className="text-[#8b9cc7]">{ch}</span>
                      <span className="text-[#00b4ff]">{time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-2">
              {/* Tab */}
              <div className="flex gap-3 mb-7">
                {(["enquiry", "appointment"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      activeTab === tab
                        ? "bg-gradient-blue text-white shadow-glow-blue"
                        : "border border-[rgba(0,180,255,0.15)] text-[#8b9cc7] hover:text-white"
                    }`}
                  >
                    {tab === "enquiry" ? <><Send className="w-4 h-4" /> Send Enquiry</> : <><Calendar className="w-4 h-4" /> Book Appointment</>}
                  </button>
                ))}
              </div>

              {/* Enquiry Form */}
              {activeTab === "enquiry" && (
                submitted ? (
                  <div className="glass-card p-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-[rgba(0,180,255,0.1)] border border-[rgba(0,180,255,0.3)] flex items-center justify-center mx-auto mb-5">
                      <CheckCircle className="w-8 h-8 text-[#00b4ff]" />
                    </div>
                    <h3 className="font-heading font-bold text-white text-xl mb-3">Enquiry Submitted!</h3>
                    <p className="text-[#8b9cc7] leading-relaxed">Thank you for contacting MassX. Our team will get back to you within 24 hours.</p>
                    <button onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", company: "", service: "", budget: "", description: "", contactMethod: "Email", message: "" }); }} className="btn-secondary mt-6 text-sm">
                      Submit Another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="glass-card p-7 space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-[#8b9cc7] mb-2">Name *</label>
                        <input value={form.name} onChange={(e) => update("name", e.target.value)} className="input-field" placeholder="Your full name" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#8b9cc7] mb-2">Email *</label>
                        <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className="input-field" placeholder="your@email.com" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#8b9cc7] mb-2">Phone *</label>
                        <input type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} className="input-field" placeholder="+91 98765 43210" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#8b9cc7] mb-2">Company/Organization</label>
                        <input value={form.company} onChange={(e) => update("company", e.target.value)} className="input-field" placeholder="Your company name" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-[#8b9cc7] mb-2">Service Required *</label>
                        <select value={form.service} onChange={(e) => update("service", e.target.value)} className="input-field" required>
                          <option value="">Select a service</option>
                          {SERVICES_LIST.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#8b9cc7] mb-2">Budget Range</label>
                        <select value={form.budget} onChange={(e) => update("budget", e.target.value)} className="input-field">
                          <option value="">Select budget</option>
                          {BUDGETS.map((b) => <option key={b} value={b}>{b}</option>)}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#8b9cc7] mb-2">Project Description *</label>
                      <textarea value={form.description} onChange={(e) => update("description", e.target.value)} className="input-field h-28 resize-none" placeholder="Describe your project and what you want to achieve..." required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#8b9cc7] mb-2">Preferred Contact Method</label>
                      <div className="flex gap-3 flex-wrap">
                        {["Email", "Phone", "WhatsApp"].map((m) => (
                          <button
                            key={m}
                            type="button"
                            onClick={() => update("contactMethod", m)}
                            className={`px-4 py-2 rounded-lg text-sm transition-all ${form.contactMethod === m ? "bg-gradient-blue text-white" : "border border-[rgba(0,180,255,0.15)] text-[#8b9cc7] hover:text-white"}`}
                          >
                            {m}
                          </button>
                        ))}
                      </div>
                    </div>
                    <button type="submit" className="btn-primary w-full justify-center py-3.5">
                      <Send className="w-4 h-4" /> Submit Enquiry
                    </button>
                  </form>
                )
              )}

              {/* Appointment Form */}
              {activeTab === "appointment" && (
                apptSubmitted ? (
                  <div className="glass-card p-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-[rgba(0,180,255,0.1)] border border-[rgba(0,180,255,0.3)] flex items-center justify-center mx-auto mb-5">
                      <CheckCircle className="w-8 h-8 text-[#00b4ff]" />
                    </div>
                    <h3 className="font-heading font-bold text-white text-xl mb-3">Appointment Requested!</h3>
                    <p className="text-[#8b9cc7] leading-relaxed">We'll confirm your appointment within a few hours. Looking forward to talking!</p>
                    <button onClick={() => { setApptSubmitted(false); setAppt({ name: "", email: "", phone: "", date: "", time: "", purpose: "", message: "" }); }} className="btn-secondary mt-6 text-sm">
                      Book Another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApptSubmit} className="glass-card p-7 space-y-5" id="appointment">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-[#8b9cc7] mb-2">Name *</label>
                        <input value={appt.name} onChange={(e) => updateA("name", e.target.value)} className="input-field" placeholder="Your full name" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#8b9cc7] mb-2">Email *</label>
                        <input type="email" value={appt.email} onChange={(e) => updateA("email", e.target.value)} className="input-field" placeholder="your@email.com" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#8b9cc7] mb-2">Phone *</label>
                        <input type="tel" value={appt.phone} onChange={(e) => updateA("phone", e.target.value)} className="input-field" placeholder="+91 98765 43210" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#8b9cc7] mb-2">Purpose *</label>
                        <select value={appt.purpose} onChange={(e) => updateA("purpose", e.target.value)} className="input-field" required>
                          <option value="">Select purpose</option>
                          <option>Project Discovery Call</option>
                          <option>Technical Consultation</option>
                          <option>Partnership Discussion</option>
                          <option>General Inquiry</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#8b9cc7] mb-2">Preferred Date *</label>
                        <input type="date" value={appt.date} onChange={(e) => updateA("date", e.target.value)} className="input-field" required min={new Date().toISOString().split("T")[0]} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#8b9cc7] mb-2">Preferred Time *</label>
                        <select value={appt.time} onChange={(e) => updateA("time", e.target.value)} className="input-field" required>
                          <option value="">Select time</option>
                          {["10:00 AM", "11:00 AM", "12:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"].map((t) => (
                            <option key={t}>{t}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#8b9cc7] mb-2">Additional Notes</label>
                      <textarea value={appt.message} onChange={(e) => updateA("message", e.target.value)} className="input-field h-24 resize-none" placeholder="Any additional information..." />
                    </div>
                    <button type="submit" className="btn-primary w-full justify-center py-3.5">
                      <Calendar className="w-4 h-4" /> Request Appointment
                    </button>
                  </form>
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
