import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FAQS } from "@/constants/data";
import SectionHeader from "@/components/features/SectionHeader";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(FAQS.map((f) => f.category)))];
  const filtered = activeCategory === "All" ? FAQS : FAQS.filter((f) => f.category === activeCategory);

  return (
    <div className="pt-20">
      <section className="page-section grid-bg">
        <div className="container-custom">
          <SectionHeader
            label="FAQ"
            title="Frequently Asked "
            highlight="Questions"
            subtitle="Everything you need to know about working with MassX. Can't find your answer? Contact us directly."
          />

          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  activeCategory === cat
                    ? "bg-gradient-blue text-white"
                    : "border border-[rgba(0,180,255,0.15)] text-[#8b9cc7] hover:text-[#00b4ff]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {filtered.map((faq) => (
              <div key={faq.id} className="glass-card overflow-hidden">
                <button
                  onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="text-white font-medium pr-4">{faq.question}</span>
                  {openId === faq.id ? (
                    <ChevronUp className="w-5 h-5 text-[#00b4ff] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#4a5680] flex-shrink-0" />
                  )}
                </button>
                {openId === faq.id && (
                  <div className="px-5 pb-5 pt-0 border-t border-[rgba(0,180,255,0.08)]">
                    <p className="text-[#8b9cc7] leading-relaxed pt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-[#8b9cc7] mb-4">Still have questions?</p>
            <Link to="/contact" className="btn-primary">
              Contact MassX <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
