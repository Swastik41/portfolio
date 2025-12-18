export type Project = {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  image?: string;
};

export type Experience = {
  id: number;
  role: string;
  company: string;
  duration: string;
  startDate: string;
  endDate: string;
  bullets: string[];
};

export type Skill = {
  category: string;
  items: string[];
};

export const DATA = {
  name: "Alex Developer",
  role: "MERN Stack Developer",
  location: "United States",
  bio: "I'm a passionate full-stack developer specializing in the MERN stack. Building scalable web applications with modern technologies.",
  
  about: "I'm a full-stack developer with a focus on building high-quality web applications using MongoDB, Express, React, and Node.js. I love solving complex problems and creating intuitive user experiences. When I'm not coding, you'll find me exploring new technologies and contributing to open-source projects.",
  
  highlights: [
    "1+ year of professional MERN stack development",
    "Passionate about building scalable and performant applications",
    "Strong foundation in frontend and backend technologies",
    "Experience with modern development tools and practices"
  ],

  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured online store with shopping cart, payment integration, and admin dashboard.",
      techStack: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80"
    },
    {
      id: 2,
      title: "Social Media Dashboard",
      description: "Real-time analytics dashboard for managing multiple social media accounts.",
      techStack: ["React", "Redux", "Express", "Socket.io", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Collaborative project management tool with real-time collaboration features.",
      techStack: ["React", "Firebase", "Tailwind CSS", "React Query"],
      liveUrl: "#",
      githubUrl: "#",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80"
    },
    {
      id: 4,
      title: "Weather Forecast API",
      description: "Weather aggregation service with accurate local forecasts and alerts.",
      techStack: ["Node.js", "Express", "Redis", "OpenWeather API"],
      liveUrl: "#",
      githubUrl: "#",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80"
    },
    {
      id: 5,
      title: "Fitness Tracker",
      description: "Mobile-first fitness tracking application with workout logging and analytics.",
      techStack: ["React Native", "GraphQL", "MongoDB", "Node.js"],
      liveUrl: "#",
      githubUrl: "#",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80"
    },
    {
      id: 6,
      title: "Recipe Finder",
      description: "Smart recipe search engine based on available ingredients.",
      techStack: ["React", "API Integration", "CSS Modules", "Node.js"],
      liveUrl: "#",
      githubUrl: "#",
      image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&q=80"
    }
  ],

  experience: [
    {
      id: 1,
      role: "MERN Stack Developer",
      company: "Tech Solutions Inc.",
      duration: "1 Year",
      startDate: "2023",
      endDate: "2024",
      bullets: [
        "Developed and maintained responsive web applications using React and Node.js",
        "Collaborated with cross-functional teams to design and implement new features",
        "Optimized application performance and improved code quality through code reviews",
        "Worked with MongoDB to design and maintain efficient database schemas"
      ]
    }
  ],

  skills: [
    {
      category: "Frontend",
      items: ["React", "TypeScript", "Tailwind CSS", "Redux", "Next.js", "Framer Motion"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "GraphQL", "REST APIs"]
    },
    {
      category: "Tools & Others",
      items: ["Git", "Docker", "AWS", "Vercel", "GitHub", "VS Code", "Figma", "Linux"]
    }
  ],

  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "hello@example.com"
  }
};
