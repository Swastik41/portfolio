import { Code2, Server, Database, Layout, ExternalLink, Github, Award, Briefcase, Mail } from "lucide-react";

export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  repoUrl: string;
  featured?: boolean;
};

export type Certification = {
  id: number;
  title: string;
  issuer: string;
  date: string;
  url: string;
};

export type Experience = {
  id: number;
  role: string;
  company: string;
  duration: string;
  description: string[];
};

export const DATA = {
  profile: {
    name: "Alex Developer",
    role: "MERN Stack Developer",
    tagline: "Building scalable, high-performance web applications with modern technologies.",
    about: "I'm a passionate full-stack developer specializing in the MERN stack. I love building clean, user-friendly interfaces and robust backend systems. Always learning, always coding.",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "mailto:hello@example.com"
    }
  },
  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured online store with cart, payments, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      repoUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "Social Media Dashboard",
      description: "Real-time analytics dashboard for social media management.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      tags: ["React", "Redux", "Express", "Socket.io"],
      liveUrl: "#",
      repoUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Collaborative project management tool with drag-and-drop interface.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
      tags: ["React", "Firebase", "Tailwind"],
      liveUrl: "#",
      repoUrl: "#",
      featured: true
    },
    {
      id: 4,
      title: "Weather Forecast API",
      description: "Weather aggregation service providing accurate local forecasts.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
      tags: ["Node.js", "Express", "Redis"],
      liveUrl: "#",
      repoUrl: "#",
      featured: true
    },
    {
      id: 5,
      title: "Fitness Tracker",
      description: "Mobile-first application for tracking workouts and nutrition.",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
      tags: ["React Native", "GraphQL", "MongoDB"],
      liveUrl: "#",
      repoUrl: "#",
      featured: false
    },
    {
      id: 6,
      title: "Recipe Finder",
      description: "Search engine for recipes based on ingredients you have.",
      image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&q=80",
      tags: ["React", "API Integration", "CSS Modules"],
      liveUrl: "#",
      repoUrl: "#",
      featured: false
    },
    {
      id: 7,
      title: "Chat Application",
      description: "Real-time messaging app with group chats and file sharing.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
      tags: ["React", "Socket.io", "Node.js"],
      liveUrl: "#",
      repoUrl: "#",
      featured: false
    },
    {
      id: 8,
      title: "Portfolio v1",
      description: "My previous portfolio website built with HTML/CSS.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80",
      tags: ["HTML", "SASS", "JavaScript"],
      liveUrl: "#",
      repoUrl: "#",
      featured: false
    }
  ],
  certifications: [
    {
      id: 1,
      title: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "2023",
      url: "#"
    },
    {
      id: 2,
      title: "Full Stack Web Development",
      issuer: "Udacity",
      date: "2022",
      url: "#"
    },
    {
      id: 3,
      title: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      date: "2022",
      url: "#"
    }
  ],
  experience: [
    {
      id: 1,
      role: "Junior Full Stack Developer",
      company: "Tech Solutions Inc.",
      duration: "1 Year",
      description: [
        "Developed and maintained responsive web applications using React and Node.js.",
        "Collaborated with cross-functional teams to define, design, and ship new features.",
        "Optimized application performance and improved code quality through reviews."
      ]
    }
  ]
};
