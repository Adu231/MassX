import { ArrowRight, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";
import type { BlogPost } from "@/types";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="glass-card-hover overflow-hidden group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#03060d]/80 to-transparent" />
        <div className="absolute top-3 left-3">
          <span className="badge">{post.category}</span>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-4 text-xs text-[#4a5680] mb-3">
          <span className="flex items-center gap-1.5">
            <User className="w-3.5 h-3.5" />
            {post.author}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {post.readTime}
          </span>
          <span>{post.date}</span>
        </div>

        <h3 className="font-heading font-semibold text-white text-heading-sm mb-2 line-clamp-2 leading-snug">
          {post.title}
        </h3>
        <p className="text-[#8b9cc7] text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>

        <Link
          to={`/blog/${post.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[#00b4ff] hover:gap-2.5 transition-all"
        >
          Read Article <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  );
}
