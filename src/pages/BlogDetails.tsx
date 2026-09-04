import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Clock, User, Calendar, Tag, Share2 } from "lucide-react";
import { BLOG_POSTS } from "@/constants/data";

export default function BlogDetails() {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" />;

  const relatedPosts = BLOG_POSTS.filter((p) => p.id !== post.id && p.category === post.category).slice(0, 3);

  const sampleContent = `
${post.excerpt}

## Overview

The technology landscape is constantly evolving, and staying ahead requires a combination of technical depth and strategic thinking. In this article, we explore the core concepts and practical applications that define modern development practices.

## Key Concepts

Understanding the fundamentals is essential before diving into advanced topics. Whether you're building your first product or scaling an existing platform, the principles remain consistent: build for users, optimize for performance, and design for scale.

### Modern Architecture Patterns

Contemporary software development has moved beyond monolithic architectures toward more distributed, maintainable patterns. Component-based design, microservices, and API-first approaches have become standard practice.

**Key benefits include:**
- Better code reusability and maintainability
- Improved team scalability
- Independent deployment capabilities
- Enhanced testing and quality assurance

## Practical Implementation

When implementing these concepts in real projects, the most important factor is starting simple and iterating. Begin with a clear understanding of your users' needs and build incrementally.

### Performance Considerations

Performance is not an afterthought — it should be designed into your product from day one. Key areas to focus on include:

1. **Bundle optimization** — Reduce JavaScript payload size through code splitting
2. **Image optimization** — Use modern formats and lazy loading
3. **Caching strategies** — Implement appropriate caching at multiple levels
4. **Core Web Vitals** — Monitor and optimize LCP, FID, and CLS metrics

## Conclusion

Building great digital products requires a blend of technical skills, user empathy, and strategic thinking. The most successful products are those that solve real problems simply and reliably.

At MassX, we apply these principles to every project we build — ensuring our clients receive technology that's not just functional, but genuinely impactful.
  `.trim();

  return (
    <div className="pt-20">
      <div className="page-section">
        <div className="container-custom max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-[#8b9cc7] hover:text-[#00b4ff] transition-colors mb-8 text-sm">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="badge">{post.category}</span>
            <span className="flex items-center gap-1.5 text-xs text-[#4a5680]">
              <Clock className="w-3.5 h-3.5" /> {post.readTime}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-[#4a5680]">
              <Calendar className="w-3.5 h-3.5" /> {post.date}
            </span>
          </div>

          <h1 className="font-heading font-bold text-display-sm text-white mb-5 leading-tight">{post.title}</h1>

          {/* Author */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-blue flex items-center justify-center text-white font-bold text-sm">
                {post.author.charAt(0)}
              </div>
              <div>
                <p className="text-white text-sm font-medium">{post.author}</p>
                <p className="text-[#4a5680] text-xs">MassX Team</p>
              </div>
            </div>
            <button className="btn-secondary text-xs py-2 px-3">
              <Share2 className="w-3.5 h-3.5" /> Share
            </button>
          </div>

          {/* Featured Image */}
          <div className="rounded-2xl overflow-hidden mb-10 ring-1 ring-[rgba(0,180,255,0.15)]">
            <img src={post.image} alt={post.title} className="w-full h-64 object-cover" />
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none">
            {sampleContent.split("\n").map((line, i) => {
              if (line.startsWith("## ")) return <h2 key={i} className="font-heading font-bold text-white text-2xl mt-8 mb-4">{line.slice(3)}</h2>;
              if (line.startsWith("### ")) return <h3 key={i} className="font-heading font-semibold text-white text-xl mt-6 mb-3">{line.slice(4)}</h3>;
              if (line.startsWith("**") && line.endsWith("**")) return <p key={i} className="text-white font-semibold mt-4 mb-2">{line.slice(2, -2)}</p>;
              if (line.startsWith("- ") || line.match(/^\d+\. /)) return (
                <div key={i} className="flex gap-2 text-[#8b9cc7] mb-1.5 text-sm">
                  <span className="text-[#00b4ff] mt-0.5">•</span>
                  <span>{line.replace(/^[-\d]+[.) ] /, "")}</span>
                </div>
              );
              if (line.trim() === "") return <div key={i} className="h-3" />;
              return <p key={i} className="text-[#8b9cc7] leading-relaxed text-sm mb-3">{line}</p>;
            })}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-[rgba(0,180,255,0.1)]">
            {post.tags.map((t) => (
              <span key={t} className="flex items-center gap-1.5 badge text-xs">
                <Tag className="w-3 h-3" /> {t}
              </span>
            ))}
          </div>

          {/* Related */}
          {relatedPosts.length > 0 && (
            <div className="mt-12">
              <h3 className="font-heading font-semibold text-white text-xl mb-5">Related Articles</h3>
              <div className="space-y-4">
                {relatedPosts.map((p) => (
                  <Link key={p.id} to={`/blog/${p.slug}`} className="glass-card-hover p-4 flex gap-4 group">
                    <img src={p.image} alt={p.title} className="w-20 h-16 rounded-lg object-cover flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium text-sm group-hover:text-[#00b4ff] transition-colors line-clamp-2">{p.title}</p>
                      <p className="text-[#4a5680] text-xs mt-1">{p.date} · {p.readTime}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
