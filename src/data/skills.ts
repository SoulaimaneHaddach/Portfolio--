export interface Skill {
  name: string;
  level: number; // 0-100
  icon: string;
  category: 'frontend' | 'backend' | 'tools' | 'ai' | 'cms' | 'it';
}

export const skills: Skill[] = [
  { name: "HTML5", level: 95, icon: "Code2", category: "frontend" },
  { name: "CSS3", level: 90, icon: "Palette", category: "frontend" },
  { name: "JavaScript", level: 88, icon: "FileCode", category: "frontend" },
  { name: "React", level: 85, icon: "Atom", category: "frontend" },
  { name: "React Native", level: 85, icon: "Atom", category: "frontend" },
  { name: "Tailwind CSS", level: 90, icon: "Wind", category: "frontend" },
  { name: "UX Design", level: 70, icon: "Layout", category: "frontend" },
  { name: "Registration & Payment Systems", level: 68, icon: "CreditCard", category: "frontend" },

  { name: "Node.js", level: 78, icon: "Server", category: "backend" },
  { name: "Express", level: 75, icon: "Database", category: "backend" },
  { name: "MongoDB", level: 72, icon: "Database", category: "backend" },
  { name: "REST API", level: 80, icon: "Link", category: "backend" },
  { name: "MySQL", level: 70, icon: "DatabaseBackup", category: "backend" },
  { name: "PHP", level: 60, icon: "Braces", category: "backend" },
  { name: "Java", level: 78, icon: "Coffee", category: "backend" },
  { name: "Spring Boot", level: 75, icon: "Leaf", category: "backend" },

  { name: "WordPress", level: 85, icon: "Wordpress", category: "cms" },
  { name: "Kirby CMS", level: 70, icon: "FileStack", category: "cms" },

  { name: "Git", level: 85, icon: "GitBranch", category: "tools" },
  { name: "GitHub", level: 88, icon: "Github", category: "tools" },
  { name: "VS Code", level: 92, icon: "Code", category: "tools" },
  { name: "Linux", level: 70, icon: "Terminal", category: "tools" },
  { name: "PowerShell", level: 65, icon: "TerminalSquare", category: "tools" },
  { name: "Microsoft Office", level: 80, icon: "FileSpreadsheet", category: "tools" },
  { name: "Google Docs/Sheets", level: 75, icon: "FileText", category: "tools" },
  { name: "Figma", level: 65, icon: "Figma", category: "tools" },

  { name: "Python", level: 70, icon: "Code2", category: "ai" },
  { name: "AI Fundamentals", level: 60, icon: "Bot", category: "ai" },

  { name: "PC Maintenance", level: 90, icon: "Wrench", category: "it" },
  { name: "System Installation & Configuration", level: 85, icon: "Settings", category: "it" },
  { name: "Networking Basics", level: 70, icon: "Globe", category: "it" },
  { name: "Troubleshooting", level: 88, icon: "Bug", category: "it" },
];

export const skillCategories = [
  { name: "Frontend Development", key: "frontend" as const },
  { name: "Backend Development", key: "backend" as const },
  { name: "CMS & Web Management", key: "cms" as const },
  { name: "Tools & Workflow", key: "tools" as const },
  { name: "AI & Python", key: "ai" as const },
  { name: "Technical Support & IT", key: "it" as const },
];
