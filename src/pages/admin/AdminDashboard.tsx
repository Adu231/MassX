import { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import {
  LayoutDashboard, FileText, Briefcase, Users, Calendar, Newspaper, LogOut,
  Mail, TrendingUp, CheckCircle, Clock, AlertCircle, Zap, Edit, Trash2, Eye
} from "lucide-react";
import type { Enquiry, Appointment } from "@/types";
import { PROJECTS, BLOG_POSTS } from "@/constants/data";

type Section = "dashboard" | "enquiries" | "appointments" | "blogs" | "projects" | "users";

const STATUS_STYLES: Record<string, string> = {
  New: "text-blue-400 bg-blue-400/10 border-blue-400/25",
  Contacted: "text-yellow-400 bg-yellow-400/10 border-yellow-400/25",
  "In Progress": "text-purple-400 bg-purple-400/10 border-purple-400/25",
  Converted: "text-green-400 bg-green-400/10 border-green-400/25",
  Closed: "text-gray-400 bg-gray-400/10 border-gray-400/25",
  Pending: "text-yellow-400 bg-yellow-400/10 border-yellow-400/25",
  Confirmed: "text-blue-400 bg-blue-400/10 border-blue-400/25",
  Completed: "text-green-400 bg-green-400/10 border-green-400/25",
  Cancelled: "text-red-400 bg-red-400/10 border-red-400/25",
};

export default function AdminDashboard() {
  const { currentUser, logout, isAdmin } = useAuth();
  const [activeSection, setActiveSection] = useState<Section>("dashboard");
  const [enquiries, setEnquiries] = useLocalStorage<Enquiry[]>("massx_enquiries", []);
  const [appointments, setAppointments] = useLocalStorage<Appointment[]>("massx_appointments", []);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  if (!isAdmin) return <Navigate to="/login" />;

  const updateEnquiryStatus = (id: string, status: Enquiry["status"]) => {
    setEnquiries(enquiries.map((e) => (e.id === id ? { ...e, status } : e)));
  };

  const updateApptStatus = (id: string, status: Appointment["status"]) => {
    setAppointments(appointments.map((a) => (a.id === id ? { ...a, status } : a)));
  };

  const navItems = [
    { id: "dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { id: "enquiries", icon: Mail, label: "Enquiries", badge: enquiries.filter((e) => e.status === "New").length },
    { id: "appointments", icon: Calendar, label: "Appointments", badge: appointments.filter((a) => a.status === "Pending").length },
    { id: "blogs", icon: Newspaper, label: "Blogs" },
    { id: "projects", icon: Briefcase, label: "Projects" },
    { id: "users", icon: Users, label: "Users" },
  ] as const;

  return (
    <div className="min-h-screen bg-[#03060d] flex pt-0">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? "w-60" : "w-16"} bg-[#070c18] border-r border-[rgba(0,180,255,0.08)] flex flex-col transition-all duration-300 fixed left-0 top-0 bottom-0 z-30`}>
        {/* Logo */}
        <div className="h-16 flex items-center px-4 border-b border-[rgba(0,180,255,0.08)]">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-blue flex items-center justify-center flex-shrink-0">
              <Zap className="w-4 h-4 text-white" fill="white" />
            </div>
            {sidebarOpen && (
              <span className="font-heading font-bold text-base">
                <span className="gradient-text-blue">Mass</span><span className="text-white">X</span>
                <span className="text-[#4a5680] text-xs font-normal ml-1">Admin</span>
              </span>
            )}
          </Link>
        </div>

        {/* Nav */}
        <nav className="flex-1 py-4 px-3 space-y-1">
          {navItems.map(({ id, icon: Icon, label, badge }) => (
            <button
              key={id}
              onClick={() => setActiveSection(id as Section)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeSection === id
                  ? "bg-[rgba(0,180,255,0.12)] text-[#00b4ff] border border-[rgba(0,180,255,0.25)]"
                  : "text-[#4a5680] hover:text-white hover:bg-[rgba(255,255,255,0.04)]"
              }`}
            >
              <Icon className="w-4.5 h-4.5 flex-shrink-0" />
              {sidebarOpen && (
                <span className="flex-1 text-left">{label}</span>
              )}
              {sidebarOpen && badge !== undefined && badge > 0 && (
                <span className="bg-[#00b4ff] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">{badge}</span>
              )}
            </button>
          ))}
        </nav>

        {/* User / Logout */}
        <div className="px-3 pb-4 border-t border-[rgba(0,180,255,0.08)] pt-4">
          {sidebarOpen && (
            <div className="flex items-center gap-2 px-3 py-2 mb-2">
              <div className="w-7 h-7 rounded-full bg-gradient-blue flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                {currentUser?.name.charAt(0)}
              </div>
              <div className="min-w-0">
                <p className="text-white text-xs font-medium truncate">{currentUser?.name}</p>
                <p className="text-[#4a5680] text-[10px] truncate">{currentUser?.email}</p>
              </div>
            </div>
          )}
          <button
            onClick={logout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-[#4a5680] hover:text-red-400 hover:bg-red-400/5 transition-all"
          >
            <LogOut className="w-4 h-4 flex-shrink-0" />
            {sidebarOpen && "Logout"}
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className={`flex-1 ${sidebarOpen ? "ml-60" : "ml-16"} transition-all duration-300`}>
        {/* Top Bar */}
        <header className="h-16 border-b border-[rgba(0,180,255,0.08)] bg-[#070c18] flex items-center px-6 sticky top-0 z-20">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="w-9 h-9 flex items-center justify-center rounded-lg text-[#4a5680] hover:text-white hover:bg-[rgba(255,255,255,0.05)] transition-all mr-4">
            <LayoutDashboard className="w-4.5 h-4.5" />
          </button>
          <h2 className="font-heading font-semibold text-white capitalize">{activeSection}</h2>
        </header>

        <div className="p-6">
          {/* Dashboard */}
          {activeSection === "dashboard" && (
            <div>
              <h3 className="font-heading font-bold text-white text-xl mb-6">Overview</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {[
                  { icon: Mail, label: "Total Enquiries", value: enquiries.length, color: "#00b4ff", sub: `${enquiries.filter((e) => e.status === "New").length} new` },
                  { icon: Calendar, label: "Appointments", value: appointments.length, color: "#7c3aed", sub: `${appointments.filter((a) => a.status === "Pending").length} pending` },
                  { icon: Briefcase, label: "Projects", value: PROJECTS.length, color: "#10b981", sub: `${PROJECTS.filter((p) => p.status === "Live").length} live` },
                  { icon: Newspaper, label: "Blog Posts", value: BLOG_POSTS.length, color: "#f59e0b", sub: "Published" },
                ].map(({ icon: Icon, label, value, color, sub }) => (
                  <div key={label} className="glass-card p-5">
                    <div className="flex items-center justify-between mb-3">
                      <Icon className="w-5 h-5" style={{ color }} />
                      <TrendingUp className="w-4 h-4 text-green-400" />
                    </div>
                    <div className="font-heading font-bold text-2xl text-white mb-1">{value}</div>
                    <p className="text-[#4a5680] text-xs">{label}</p>
                    <p className="text-[#8b9cc7] text-xs mt-1">{sub}</p>
                  </div>
                ))}
              </div>

              {/* Recent Enquiries */}
              <div className="glass-card p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-heading font-semibold text-white">Recent Enquiries</h4>
                  <button onClick={() => setActiveSection("enquiries")} className="text-[#00b4ff] text-xs hover:underline">View All</button>
                </div>
                {enquiries.length === 0 ? (
                  <p className="text-[#4a5680] text-sm text-center py-8">No enquiries yet</p>
                ) : (
                  <div className="space-y-3">
                    {enquiries.slice(0, 5).map((e) => (
                      <div key={e.id} className="flex items-center justify-between p-3 border border-[rgba(0,180,255,0.08)] rounded-xl">
                        <div>
                          <p className="text-white text-sm font-medium">{e.name}</p>
                          <p className="text-[#4a5680] text-xs">{e.service} · {e.email}</p>
                        </div>
                        <span className={`text-xs px-2.5 py-1 rounded-full border ${STATUS_STYLES[e.status]}`}>{e.status}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Enquiries */}
          {activeSection === "enquiries" && (
            <div className="glass-card p-6">
              <div className="flex items-center gap-4 mb-6 flex-wrap">
                <h3 className="font-heading font-semibold text-white">All Enquiries</h3>
                <span className="badge">{enquiries.length} total</span>
              </div>
              {enquiries.length === 0 ? (
                <div className="text-center py-16">
                  <AlertCircle className="w-12 h-12 text-[#4a5680] mx-auto mb-3" />
                  <p className="text-[#4a5680]">No enquiries yet</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {enquiries.map((e) => (
                    <div key={e.id} className="border border-[rgba(0,180,255,0.1)] rounded-xl p-5">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div>
                          <p className="text-white font-semibold">{e.name}</p>
                          <p className="text-[#8b9cc7] text-sm">{e.email} · {e.phone}</p>
                          {e.company && <p className="text-[#4a5680] text-xs">{e.company}</p>}
                        </div>
                        <span className={`text-xs px-3 py-1 rounded-full border flex-shrink-0 ${STATUS_STYLES[e.status]}`}>{e.status}</span>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-3 mb-3 text-sm">
                        <div><span className="text-[#4a5680]">Service: </span><span className="text-[#8b9cc7]">{e.service}</span></div>
                        {e.budget && <div><span className="text-[#4a5680]">Budget: </span><span className="text-[#8b9cc7]">{e.budget}</span></div>}
                      </div>
                      <p className="text-[#8b9cc7] text-sm mb-4 leading-relaxed">{e.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {(["New", "Contacted", "In Progress", "Converted", "Closed"] as Enquiry["status"][]).map((s) => (
                          <button
                            key={s}
                            onClick={() => updateEnquiryStatus(e.id, s)}
                            className={`text-xs px-3 py-1.5 rounded-lg transition-all ${e.status === s ? "bg-gradient-blue text-white" : "border border-[rgba(0,180,255,0.15)] text-[#4a5680] hover:text-white"}`}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Appointments */}
          {activeSection === "appointments" && (
            <div className="glass-card p-6">
              <div className="flex items-center gap-4 mb-6">
                <h3 className="font-heading font-semibold text-white">Appointments</h3>
                <span className="badge">{appointments.length} total</span>
              </div>
              {appointments.length === 0 ? (
                <div className="text-center py-16">
                  <Calendar className="w-12 h-12 text-[#4a5680] mx-auto mb-3" />
                  <p className="text-[#4a5680]">No appointments yet</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {appointments.map((a) => (
                    <div key={a.id} className="border border-[rgba(0,180,255,0.1)] rounded-xl p-5">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <p className="text-white font-semibold">{a.name}</p>
                          <p className="text-[#8b9cc7] text-sm">{a.email} · {a.phone}</p>
                        </div>
                        <span className={`text-xs px-3 py-1 rounded-full border flex-shrink-0 ${STATUS_STYLES[a.status]}`}>{a.status}</span>
                      </div>
                      <div className="flex flex-wrap gap-4 mb-3 text-sm">
                        <span className="text-[#8b9cc7]">📅 {a.date}</span>
                        <span className="text-[#8b9cc7]">🕐 {a.time}</span>
                        <span className="text-[#8b9cc7]">📋 {a.purpose}</span>
                      </div>
                      {a.message && <p className="text-[#4a5680] text-sm mb-4">{a.message}</p>}
                      <div className="flex flex-wrap gap-2">
                        {(["Pending", "Confirmed", "Completed", "Cancelled"] as Appointment["status"][]).map((s) => (
                          <button
                            key={s}
                            onClick={() => updateApptStatus(a.id, s)}
                            className={`text-xs px-3 py-1.5 rounded-lg transition-all ${a.status === s ? "bg-gradient-blue text-white" : "border border-[rgba(0,180,255,0.15)] text-[#4a5680] hover:text-white"}`}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Blogs */}
          {activeSection === "blogs" && (
            <div className="glass-card p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-heading font-semibold text-white">Blog Management</h3>
                <button className="btn-primary text-sm py-2 px-4">+ Add Blog</button>
              </div>
              <div className="space-y-3">
                {BLOG_POSTS.map((post) => (
                  <div key={post.id} className="flex items-center gap-4 p-4 border border-[rgba(0,180,255,0.08)] rounded-xl">
                    <img src={post.image} alt={post.title} className="w-16 h-12 rounded-lg object-cover flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm font-medium truncate">{post.title}</p>
                      <div className="flex gap-3 text-xs text-[#4a5680] mt-0.5">
                        <span>{post.date}</span><span>·</span><span>{post.author}</span><span>·</span><span>{post.category}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="w-8 h-8 flex items-center justify-center rounded-lg text-[#4a5680] hover:text-[#00b4ff] hover:bg-[rgba(0,180,255,0.06)] transition-all"><Eye className="w-4 h-4" /></button>
                      <button className="w-8 h-8 flex items-center justify-center rounded-lg text-[#4a5680] hover:text-white hover:bg-[rgba(255,255,255,0.04)] transition-all"><Edit className="w-4 h-4" /></button>
                      <button className="w-8 h-8 flex items-center justify-center rounded-lg text-[#4a5680] hover:text-red-400 hover:bg-red-400/5 transition-all"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Projects */}
          {activeSection === "projects" && (
            <div className="glass-card p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-heading font-semibold text-white">Project Management</h3>
                <button className="btn-primary text-sm py-2 px-4">+ Add Project</button>
              </div>
              <div className="space-y-3">
                {PROJECTS.map((project) => (
                  <div key={project.id} className="flex items-center gap-4 p-4 border border-[rgba(0,180,255,0.08)] rounded-xl">
                    <img src={project.image} alt={project.title} className="w-16 h-12 rounded-lg object-cover flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm font-medium truncate">{project.title}</p>
                      <div className="flex gap-3 text-xs mt-0.5">
                        <span className="text-[#4a5680]">{project.category}</span>
                        <span className={`${STATUS_STYLES[project.status]} px-1.5 py-0.5 rounded border text-[10px]`}>{project.status}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Link to={`/portfolio/${project.id}`} className="w-8 h-8 flex items-center justify-center rounded-lg text-[#4a5680] hover:text-[#00b4ff] hover:bg-[rgba(0,180,255,0.06)] transition-all"><Eye className="w-4 h-4" /></Link>
                      <button className="w-8 h-8 flex items-center justify-center rounded-lg text-[#4a5680] hover:text-white hover:bg-[rgba(255,255,255,0.04)] transition-all"><Edit className="w-4 h-4" /></button>
                      <button className="w-8 h-8 flex items-center justify-center rounded-lg text-[#4a5680] hover:text-red-400 hover:bg-red-400/5 transition-all"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Users */}
          {activeSection === "users" && (
            <div className="glass-card p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-heading font-semibold text-white">User Management</h3>
                <span className="badge">Mocked Data</span>
              </div>
              <div className="space-y-3">
                {[
                  { name: "Demo User", email: "demo@massx.in", role: "User", joined: "Jun 2024", active: true },
                  { name: "Admin User", email: "admin@massx.in", role: "Admin", joined: "Jan 2024", active: true },
                ].map((user) => (
                  <div key={user.email} className="flex items-center justify-between p-4 border border-[rgba(0,180,255,0.08)] rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-gradient-blue flex items-center justify-center text-white font-bold text-sm">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">{user.name}</p>
                        <p className="text-[#4a5680] text-xs">{user.email} · Joined {user.joined}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="badge text-xs">{user.role}</span>
                      <div className={`w-2 h-2 rounded-full ${user.active ? "bg-green-400" : "bg-red-400"}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
