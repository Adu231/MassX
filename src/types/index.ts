export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  color: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  problem?: string;
  solution?: string;
  technologies: string[];
  features?: string[];
  image: string;
  status: "Completed" | "In Progress" | "Live";
  liveUrl?: string;
  githubUrl?: string;
  appUrl?: string;
  featured?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  author: string;
  authorAvatar?: string;
  date: string;
  category: string;
  tags: string[];
  image: string;
  readTime: string;
  seoTitle?: string;
  seoDescription?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  avatar?: string;
  review: string;
  rating: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar?: string;
  linkedin?: string;
  github?: string;
}

export interface Enquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  budget?: string;
  description: string;
  contactMethod: string;
  message?: string;
  status: "New" | "Contacted" | "In Progress" | "Converted" | "Closed";
  createdAt: string;
}

export interface Appointment {
  id: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  purpose: string;
  message?: string;
  status: "Pending" | "Confirmed" | "Completed" | "Cancelled";
  createdAt: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: "user" | "admin";
  avatar?: string;
  createdAt: string;
  isActive: boolean;
}

export interface NewsletterSubscriber {
  id: string;
  email: string;
  subscribedAt: string;
  isActive: boolean;
}
