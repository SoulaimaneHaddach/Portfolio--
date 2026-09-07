import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ParticleSystem from "../components/ParticleSystem";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Soulaimane Haddach - Full-Stack Developer",
  description:
    "Full-Stack Developer and IT professional with hands-on experience in building modern web applications and managing complete software projects from development to deployment. Experienced in both frontend and backend development, with a strong understanding of software architecture, databases, version control, and Linux environments. I also bring extensive practical experience in computer maintenance, system administration, and technical support. Passionate about solving complex problems, learning new technologies, and building reliable, user-focused solutions.",
  keywords:
    "Full-Stack Developer, IT Professional, Software Engineering, Web Application Development, Frontend Development, Backend Development, REST APIs, Database Design, Linux, Git, Application Deployment, System Administration, IT Support, Computer Hardware, Technical Troubleshooting, Problem Solving, Project Coordination",
  authors: [{ name: "Soulaimane Haddach" }],
  creator: "Soulaimane Haddach",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://soulaimane-haddach.netlify.app",
    siteName: "Soulaimane Haddach Portfolio",
    title: "Soulaimane Haddach - Full-Stack Developer",
    description: "Portfolio showcasing development projects and skills",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Soulaimane Haddach Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Soulaimane Haddach - Full-Stack Developer",
    description: "Portfolio showcasing development projects and skills",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/s logo.png" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var savedTheme = localStorage.getItem('theme') || 'dark';
                  document.documentElement.classList.toggle('dark', savedTheme === 'dark');
                  document.documentElement.style.colorScheme = savedTheme;
                } catch (error) {}
              })();
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ParticleSystem />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}