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
  startDate: string;
  endDate: string;
  bullets: string[];
};

export type Skill = {
  category: string;
  items: string[];
};

// Utility function to calculate duration between two dates
export function calculateDuration(startDate: string, endDate: string): string {
  const monthMap: { [key: string]: number } = {
    january: 0, february: 1, march: 2, april: 3, may: 4, june: 5,
    july: 6, august: 7, september: 8, october: 9, november: 10, december: 11
  };

  const parseDate = (dateStr: string): Date => {
    if (dateStr.toLowerCase() === "present") {
      return new Date();
    }

    // Parse "Month Year" format (e.g., "August 2024")
    const parts = dateStr.trim().split(/\s+/);
    if (parts.length === 2) {
      const monthName = parts[0].toLowerCase();
      const year = parseInt(parts[1], 10);
      const month = monthMap[monthName] ?? 0;
      return new Date(year, month, 1);
    }

    // Fallback to standard date parsing
    return new Date(dateStr);
  };

  const start = parseDate(startDate);
  const end = parseDate(endDate);

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  const parts: string[] = [];
  if (years > 0) {
    parts.push(`${years} Year${years !== 1 ? "s" : ""}`);
  }
  if (months > 0) {
    parts.push(`${months} Month${months !== 1 ? "s" : ""}`);
  }

  return parts.length > 0 ? parts.join(" ") : "< 1 Month";
}

export const DATA = {
  siteName: "XVerse",
  name: "Swastik Pathak",
  role: "Full Stack Developer",
  location: "Canada",
  profileImage: "/client/public/profile.jpg", // Replace with your professional photo
  bio: "Full Stack Developer with 3+ years delivering scalable web applications using JavaScript, MERN, ASP.NET Core, and RESTful APIs. Proven success improving performance by 30% through cross-functional collaboration and modern tech implementation.Based in Ontario, Canada—authorized to work. Actively seeking Software Engineering, Full Stack Development, and API Development roles.",
  
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
      title: "Kids Game Recommendation System",
      description: "A data-driven MERN stack web app that recommends engaging and educational games for kids using game metadata and popularity metrics. Features interactive embeds, modern UI, Jenkins CI/CD, and agile collaboration via Trello and Microsoft Teams.",
      techStack: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "CI/CD"],
      liveUrl: "#",
      githubUrl: "https://github.com/Swastik41/kids-game-recommendation-system",
      image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=800&q=80"
    },
    {
      id: 2,
      title: "Task Manager with GraphQL & React",
      description: "A robust, business-ready full-stack Task Management solution engineered with React, GraphQL, Node.js, and MongoDB. Demonstrates best practices in UI/UX, component-based architecture, and GraphQL API development.",
      techStack: ["React", "GraphQL", "Node.js", "MongoDB", "Apollo", "JavaScript"],
      liveUrl: "#",
      githubUrl: "https://github.com/Swastik41/task-manager-graphql-react",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80"
    },
    {
      id: 3,
      title: "Fitness Tracker",
      description: "An interactive web-based application designed to help users monitor and improve their fitness by tracking BMI, heart rate (BPM), step count, and more. Features interactive image gallery and theme toggle (light/dark mode).",
      techStack: ["HTML", "CSS", "JavaScript", "LocalStorage", "Charts"],
      liveUrl: "#",
      githubUrl: "https://github.com/Swastik41/Fitness_Tracker",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80"
    },
    {
      id: 4,
      title: "Grind IT - Basketball Shooting Machine",
      description: "A responsive website project designed to showcase the Grind IT Basketball Shooting Machine, including product details, training tips, and SEO optimization elements.",
      techStack: ["HTML", "CSS", "JavaScript", "Responsive Design", "SEO"],
      liveUrl: "https://grindit.netlify.app/",
      githubUrl: "https://github.com/Swastik41/Grind_IT",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80"
    },
    {
      id: 5,
      title: "House Price Prediction",
      description: "A data science project for predicting house prices using machine learning algorithms with comprehensive datasets and analysis.",
      techStack: ["Python", "Machine Learning", "Data Science", "Pandas", "Scikit-learn"],
      liveUrl: "#",
      githubUrl: "https://github.com/Swastik41/House-Price-Prediction",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
    }
  ],

  experience: [
  {
    id: 1,
    role: "Freelance Developer",
    company: "Self-Employed",
    startDate: "August 2024",
    endDate: "Present",
    bullets: [
      "Designed and developed full-stack web applications using MERN stack for diverse clients across multiple industries",
      "Provided end-to-end IT solutions including web development, API design, database optimization, and deployment services",
      "Delivered responsive, high-performance applications with focus on user experience and scalability",
      "Managed client relationships, technical requirements gathering, and project timelines to ensure successful delivery"
    ]
  },
  {
    id: 2,
    role: "Operation Support Analyst",
    company: "PMC Retail",
    startDate: "September 2023",
    endDate: "August 2024",
    bullets: [
      "Analyzed operational data to identify trends and support data-driven decision-making, enhancing overall efficiency",
      "Collaborated with cross-functional teams to streamline processes, resulting in quicker issue resolution and improved service delivery",
      "Developed comprehensive reports and maintained meticulous documentation to ensure transparency and accountability in operations",
      "Provided technical support and troubleshooting for web-based systems and applications"
    ]
  },
  {
    id: 3,
    role: "Full Stack Developer",
    company: "Enlighten Infosystems",
    startDate: "July 2022",
    endDate: "August 2023",
    bullets: [
      "Developed and maintained responsive web applications, significantly enhancing user experience and engagement",
      "Collaborated with cross-functional teams to implement innovative solutions, improving project delivery timelines",
      "Utilized modern frameworks and technologies, achieving a 30% increase in application performance",
      "Contributed to a positive team culture by sharing knowledge and best practices with colleagues"
    ]
  },
  {
    id: 4,
    role: "Software Engineer",
    company: "StyleDraft",
    startDate: "January 2021",
    endDate: "June 2022",
    bullets: [
      "Developed and maintained dynamic web applications using MySQL, JavaScript, and Bootstrap, enhancing user experience",
      "Implemented Object-Oriented Programming principles to streamline code efficiency and maintainability",
      "Collaborated with cross-functional teams to solve complex problems, resulting in a 30% reduction in project turnaround time",
      "Designed and optimized database schemas to improve application performance and data integrity"
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
    github: "https://github.com/Swastik41",
    linkedin: "https://www.linkedin.com/in/swastik-pathak-3306371ba/",
    email: "swastikpathak.107@gmail.com"
  }
};
