import { Navigate, Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { FileText, Calendar, User, LogOut, Bell, Clock } from "lucide-react";
import type { Enquiry, Appointment } from "@/types";

const STATUS_COLORS: Record<string, string> = {
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

export default function UserDashboard() {
  const { currentUser, logout, isAuthenticated } = useAuth();
  const [enquiries] = useLocalStorage<Enquiry[]>("massx_enquiries", []);
  const [appointments] = useLocalStorage<Appointment[]>("massx_appointments", []);

  if (!isAuthenticated) return <Navigate to="/login" />;
  if (currentUser?.role === "admin") return <Navigate to="/admin/dashboard" />;

  const myEnquiries = enquiries.filter((e) => e.email === currentUser?.email);
  const myAppointments = appointments.filter((a) => a.email === currentUser?.email);

  return (
    <div className="min-h-screen pt-24 pb-16 grid-bg">
      <div className="container-custom max-w-5xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-heading font-bold text-white text-display-sm">
              Hello, <span className="gradient-text-blue">{currentUser?.name.split(" ")[0]}</span>
            </h1>
            <p className="text-[#8b9cc7] mt-1">Manage your enquiries and appointments</p>
          </div>
          <button onClick={logout} className="btn-secondary text-sm py-2 px-4">
            <LogOut className="w-4 h-4" /> Logout
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { icon: FileText, label: "Total Enquiries", value: myEnquiries.length, color: "#00b4ff" },
            { icon: Clock, label: "Pending Enquiries", value: myEnquiries.filter((e) => e.status === "New").length, color: "#f59e0b" },
            { icon: Calendar, label: "Appointments", value: myAppointments.length, color: "#7c3aed" },
            { icon: Bell, label: "Confirmed", value: myAppointments.filter((a) => a.status === "Confirmed").length, color: "#10b981" },
          ].map(({ icon: Icon, label, value, color }) => (
            <div key={label} className="glass-card p-5">
              <Icon className="w-5 h-5 mb-3" style={{ color }} />
              <div className="font-heading font-bold text-2xl text-white mb-1">{value}</div>
              <div className="text-[#4a5680] text-xs">{label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Enquiries */}
          <div className="glass-card p-6">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-heading font-semibold text-white">My Enquiries</h3>
              <Link to="/contact" className="badge text-xs">+ New</Link>
            </div>
            {myEnquiries.length === 0 ? (
              <div className="text-center py-10">
                <FileText className="w-10 h-10 text-[#4a5680] mx-auto mb-3" />
                <p className="text-[#4a5680] text-sm">No enquiries yet</p>
                <Link to="/contact" className="btn-primary text-xs mt-4 py-2 px-4">Submit Enquiry</Link>
              </div>
            ) : (
              <div className="space-y-3">
                {myEnquiries.map((e) => (
                  <div key={e.id} className="border border-[rgba(0,180,255,0.1)] rounded-xl p-4">
                    <div className="flex justify-between items-start mb-2">
                      <p className="text-white text-sm font-medium">{e.service}</p>
                      <span className={`text-xs px-2.5 py-1 rounded-full border ${STATUS_COLORS[e.status]}`}>{e.status}</span>
                    </div>
                    <p className="text-[#8b9cc7] text-xs line-clamp-2">{e.description}</p>
                    <p className="text-[#4a5680] text-xs mt-2">{new Date(e.createdAt).toLocaleDateString("en-IN")}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Appointments */}
          <div className="glass-card p-6">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-heading font-semibold text-white">My Appointments</h3>
              <Link to="/contact" className="badge text-xs">+ Book</Link>
            </div>
            {myAppointments.length === 0 ? (
              <div className="text-center py-10">
                <Calendar className="w-10 h-10 text-[#4a5680] mx-auto mb-3" />
                <p className="text-[#4a5680] text-sm">No appointments yet</p>
                <Link to="/contact" className="btn-primary text-xs mt-4 py-2 px-4">Book Appointment</Link>
              </div>
            ) : (
              <div className="space-y-3">
                {myAppointments.map((a) => (
                  <div key={a.id} className="border border-[rgba(0,180,255,0.1)] rounded-xl p-4">
                    <div className="flex justify-between items-start mb-2">
                      <p className="text-white text-sm font-medium">{a.purpose}</p>
                      <span className={`text-xs px-2.5 py-1 rounded-full border ${STATUS_COLORS[a.status]}`}>{a.status}</span>
                    </div>
                    <div className="flex gap-3 text-[#8b9cc7] text-xs">
                      <span>{a.date}</span>
                      <span>·</span>
                      <span>{a.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Profile */}
        <div className="glass-card p-6 mt-6">
          <h3 className="font-heading font-semibold text-white mb-5 flex items-center gap-2">
            <User className="w-5 h-5 text-[#00b4ff]" /> Profile Information
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: "Name", value: currentUser?.name },
              { label: "Email", value: currentUser?.email },
              { label: "Member Since", value: currentUser?.createdAt ? new Date(currentUser.createdAt).toLocaleDateString("en-IN") : "" },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="text-[#4a5680] text-xs mb-1">{label}</p>
                <p className="text-white text-sm">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
