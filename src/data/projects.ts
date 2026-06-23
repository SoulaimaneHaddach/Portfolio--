/* eslint-disable react/no-unescaped-entities */
export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string | string[]; 
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  category: 'frontend' | 'fullstack' | 'ai' | 'static';
  featured: boolean;
}

export const projects: Project[] = [
{
  id: 1,
  title: "Weather Dashboard",
  description: "A responsive weather app with real-time forecasts and modern UI.",
  longDescription:
    "The Weather Dashboard is a sleek and responsive web application that provides real-time weather data and a detailed 5-day forecast for any city worldwide. Built with React, TypeScript, Tailwind CSS, and Webpack, it offers a clean interface, smooth performance, and accurate data powered by the OpenWeatherMap API.",
  image: ["weather-1.png", "weather-2.png", "weather-3.png"],
  techStack: ["React", "TypeScript", "Tailwind CSS", "Webpack", "OpenWeatherMap API"],
  liveUrl: "https://weather-oha.netlify.app/",
  githubUrl: "https://github.com/SoulaimaneHaddach/Weather-dashboard",
  category: "frontend",
  featured: true,
},
  {
    id: 2,
    title: "Tic-Tac-Toe-Game",
    description: "Tic-Tac-Toe Game — Play for free against the AI (Easy / Medium / Hard) without logging in. Ranked play, the dashboard, and multiplayer require you to log in.",
    longDescription: "Tech Stack: React 18, Tailwind CSS, PostCSS, Autoprefixer, Axios, STOMP, SockJS, Context API, lucide-react, React Testing Library, Jest, JDK 25, Maven Wrapper, MySQL, PowerShell.",
    image: ["gamehub-1.png","gamehub-2.png","gamehub-3.png"],
    techStack: ["React 18", "Tailwind CSS", "PostCSS", "Axios", "STOMP", "SockJS", "lucide-react",  "JDK 25", "Maven Wrapper", "MySQL"],
    liveUrl: "https://takigame.netlify.app",
    githubUrl: "https://github.com/SoulaimaneHaddachTic-Tac-Toe-Game.git",
    category: "frontend",
    featured: false,
  },

  {
    id: 3,
    title: "old 2021 portfolio",
    description: "the new path of 2021 portfolio site ",
    longDescription: "",
    image: ["2021-1.png", "2021-2.png", "2021-3.png", "2021-4.png", "2021-5.png"],
    techStack: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://soulaimneper.netlify.app",
    githubUrl: "https://github.com/SoulaimaneHaddach/2021-SITE",
    category: "ai",
    featured: true,
  },
  {
    id: 4,
    title: "shop",
    description: "Modern",
    longDescription: "",
    image: ["2021 web-1.png","2021 web-2.png","2021 web-3.png"],
    techStack: ["HTML5", "CSS3"],
    liveUrl: "https://oldstore.netlify.app",
    githubUrl: "https://github.com/SoulaimaneHaddach/moharej-store",
    category: "static",
    featured: true,
  },
    {
    id: 5,
    title: "ready welcome page for users",
    description: "full welcome page",
    longDescription: "",
    image:["welcome-1.png","welcome-2.png"],
    techStack: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://blog-platform-demo.vercel.app",
    githubUrl: "https://github.com/SoulaimaneHaddach/despl-blod",
    category: "fullstack",
    featured: false,
  },
{
  id: 6,
  title: "MY Calculator",
  description: "A simple and responsive calculator built with pure HTML, CSS, and JavaScript.",
  longDescription:
    "MY Calculator is a lightweight and responsive web application developed using pure HTML, CSS, and JavaScript. It performs basic arithmetic operations such as addition, subtraction, multiplication, and division with smooth button interactions and a modern, minimal UI design. This project highlights clean front-end structure, CSS styling, and DOM manipulation techniques without relying on frameworks.",
  image: ["Calculator.png"],
  techStack: ["HTML5", "CSS3", "JavaScript"],
  liveUrl: "https://culios.netlify.app/",
  githubUrl: "https://github.com/solaymane403/MY-Calculator",
  category: "frontend",
  featured: false,
},


];

export const featuredProjects = projects.filter(p => p.featured);
