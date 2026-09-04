import { useState, useRef, useEffect } from "react";
import { Bot, X, Send, User, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

interface Message {
  id: string;
  role: "bot" | "user";
  text: string;
  links?: { label: string; href: string }[];
}

const INITIAL_MESSAGE: Message = {
  id: "1",
  role: "bot",
  text: "Hi! I'm MassX AI Assistant 👋 How can I help you today?",
  links: [
    { label: "View Our Services", href: "/services" },
    { label: "See Portfolio", href: "/portfolio" },
    { label: "Contact Us", href: "/contact" },
  ],
};

const BOT_RESPONSES: Record<string, { text: string; links?: { label: string; href: string }[] }> = {
  services: {
    text: "MassX offers Mobile App Development, Website Development, Web Application Development, UI/UX Design, Custom Software, and API & Backend Development.",
    links: [{ label: "View All Services", href: "/services" }],
  },
  mobile: {
    text: "We develop Android, iOS, and cross-platform mobile apps using React Native and Flutter. Apps include push notifications, API integrations, and location services.",
    links: [{ label: "Mobile App Services", href: "/services" }],
  },
  website: {
    text: "We build modern, responsive, SEO-optimized websites for businesses, startups, and entrepreneurs across India.",
    links: [{ label: "Website Development", href: "/services" }],
  },
  price: {
    text: "Our pricing depends on project complexity. We offer Fixed-Price, Time & Material, and Monthly Retainer models. Let's discuss your project!",
    links: [{ label: "Get a Quote", href: "/contact" }],
  },
  contact: {
    text: "You can reach MassX at hello@massx.in or call +91 98765 43210. WhatsApp us anytime!",
    links: [{ label: "Contact Page", href: "/contact" }],
  },
  portfolio: {
    text: "We've built e-commerce platforms, healthcare apps, SaaS tools, logistics dashboards, and more. Check out our portfolio!",
    links: [{ label: "View Portfolio", href: "/portfolio" }],
  },
  human: {
    text: "Of course! A MassX team member will connect with you shortly. You can also reach us directly via WhatsApp or email.",
    links: [{ label: "WhatsApp MassX", href: "https://wa.me/919876543210" }, { label: "Send Email", href: "mailto:hello@massx.in" }],
  },
  appointment: {
    text: "You can book a free discovery call or consultation with us. Fill in the appointment form and we'll confirm a suitable time.",
    links: [{ label: "Book Appointment", href: "/contact#appointment" }],
  },
};

function getBotResponse(input: string): { text: string; links?: { label: string; href: string }[] } {
  const lower = input.toLowerCase();
  if (lower.includes("human") || lower.includes("talk") || lower.includes("person") || lower.includes("agent")) return BOT_RESPONSES.human;
  if (lower.includes("mobile") || lower.includes("app") || lower.includes("android") || lower.includes("ios")) return BOT_RESPONSES.mobile;
  if (lower.includes("website") || lower.includes("web")) return BOT_RESPONSES.website;
  if (lower.includes("price") || lower.includes("cost") || lower.includes("quote") || lower.includes("budget")) return BOT_RESPONSES.price;
  if (lower.includes("contact") || lower.includes("email") || lower.includes("phone") || lower.includes("reach")) return BOT_RESPONSES.contact;
  if (lower.includes("portfolio") || lower.includes("project") || lower.includes("work")) return BOT_RESPONSES.portfolio;
  if (lower.includes("service") || lower.includes("what do you")) return BOT_RESPONSES.services;
  if (lower.includes("appointment") || lower.includes("meeting") || lower.includes("call") || lower.includes("schedule")) return BOT_RESPONSES.appointment;
  return {
    text: "I can help you with information about our services, projects, pricing, and contact details. Or would you like to talk to a human?",
    links: [
      { label: "Our Services", href: "/services" },
      { label: "Talk to a Human", href: "https://wa.me/919876543210" },
    ],
  };
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg: Message = { id: Date.now().toString(), role: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    await new Promise((r) => setTimeout(r, 800 + Math.random() * 400));

    const response = getBotResponse(input);
    const botMsg: Message = {
      id: (Date.now() + 1).toString(),
      role: "bot",
      text: response.text,
      links: response.links,
    };
    setMessages((prev) => [...prev, botMsg]);
    setIsTyping(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open chat"
        className="fixed bottom-5 right-5 z-40 w-14 h-14 rounded-full bg-gradient-blue flex items-center justify-center shadow-glow-blue hover:scale-110 transition-all duration-200"
      >
        {isOpen ? <X className="w-6 h-6 text-white" /> : <Bot className="w-6 h-6 text-white" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-5 z-40 w-[340px] max-w-[calc(100vw-2.5rem)] glass-card border border-[rgba(0,180,255,0.2)] shadow-glass overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-blue px-4 py-3 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">MassX Assistant</p>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-white/70 text-xs">Online</span>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="h-72 overflow-y-auto p-4 space-y-3">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex gap-2 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${
                    msg.role === "bot"
                      ? "bg-gradient-blue"
                      : "bg-[rgba(0,180,255,0.15)] border border-[rgba(0,180,255,0.3)]"
                  }`}
                >
                  {msg.role === "bot" ? (
                    <Bot className="w-3.5 h-3.5 text-white" />
                  ) : (
                    <User className="w-3.5 h-3.5 text-[#00b4ff]" />
                  )}
                </div>
                <div className={`max-w-[80%] ${msg.role === "user" ? "items-end" : "items-start"} flex flex-col gap-1.5`}>
                  <div
                    className={`px-3 py-2 rounded-xl text-sm leading-relaxed ${
                      msg.role === "bot"
                        ? "bg-[rgba(0,180,255,0.08)] border border-[rgba(0,180,255,0.12)] text-[#c0d0f0]"
                        : "bg-gradient-blue text-white"
                    }`}
                  >
                    {msg.text}
                  </div>
                  {msg.links && msg.links.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {msg.links.map((link) => (
                        link.href.startsWith("/") ? (
                          <Link
                            key={link.href}
                            to={link.href}
                            className="flex items-center gap-1 text-xs text-[#00b4ff] border border-[rgba(0,180,255,0.25)] px-2.5 py-1 rounded-full hover:bg-[rgba(0,180,255,0.1)] transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {link.label} <ExternalLink className="w-2.5 h-2.5" />
                          </Link>
                        ) : (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-xs text-[#00b4ff] border border-[rgba(0,180,255,0.25)] px-2.5 py-1 rounded-full hover:bg-[rgba(0,180,255,0.1)] transition-colors"
                          >
                            {link.label} <ExternalLink className="w-2.5 h-2.5" />
                          </a>
                        )
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex gap-2">
                <div className="w-7 h-7 rounded-full bg-gradient-blue flex items-center justify-center">
                  <Bot className="w-3.5 h-3.5 text-white" />
                </div>
                <div className="px-3 py-2.5 rounded-xl bg-[rgba(0,180,255,0.08)] border border-[rgba(0,180,255,0.12)]">
                  <div className="flex gap-1">
                    {[0, 1, 2].map((i) => (
                      <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#00b4ff] animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-[rgba(0,180,255,0.1)]">
            <div className="flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask anything..."
                className="input-field flex-1 text-sm py-2 px-3"
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim()}
                className="w-10 h-10 rounded-lg bg-gradient-blue flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-glow-blue transition-all"
                aria-label="Send message"
              >
                <Send className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
