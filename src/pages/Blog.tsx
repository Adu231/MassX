import { useState } from "react";
import { Search } from "lucide-react";
import { BLOG_POSTS } from "@/constants/data";
import BlogCard from "@/components/features/BlogCard";
import SectionHeader from "@/components/features/SectionHeader";

const CATEGORIES = ["All", "Mobile Development", "Web Development", "UI/UX Design", "Startup", "SEO & Marketing", "Backend Development"];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = BLOG_POSTS.filter((p) => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch = !search || p.title.toLowerCase().includes(search.toLowerCase()) || p.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="page-section grid-bg">
        <div className="container-custom text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(0,180,255,0.2)] bg-[rgba(0,180,255,0.05)] mb-6">
            <span className="section-label">MassX Blog</span>
          </div>
          <h1 className="font-heading font-bold text-display-sm lg:text-display-md text-white mb-5 max-w-3xl mx-auto">
            Technology Insights & <span className="gradient-text">Expert Advice</span>
          </h1>
          <p className="text-[#8b9cc7] text-lg max-w-xl mx-auto mb-8">
            Stay ahead with our latest articles on mobile development, web technology, startups, and digital strategy.
          </p>
          {/* Search */}
          <div className="max-w-lg mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#4a5680]" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search articles..."
              className="input-field pl-12"
            />
          </div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="page-section bg-[#070c18]">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-gradient-blue text-white shadow-glow-blue"
                    : "border border-[rgba(0,180,255,0.15)] text-[#8b9cc7] hover:text-[#00b4ff] hover:border-[rgba(0,180,255,0.35)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-[#4a5680]">
              No articles found. Try a different search or category.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
