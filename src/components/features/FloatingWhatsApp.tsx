import { MessageCircle } from "lucide-react";
import { CONTACT_INFO } from "@/constants/data";

export default function FloatingWhatsApp() {
  const message = encodeURIComponent("Hi MassX! I'm interested in your services. Can we talk?");
  const href = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-24 right-5 z-40 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_4px_30px_rgba(37,211,102,0.6)] hover:scale-110 transition-all duration-200"
    >
      <MessageCircle className="w-6 h-6 text-white fill-white" />
    </a>
  );
}
