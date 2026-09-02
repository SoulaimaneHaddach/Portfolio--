import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ParticleSystem from "../components/ParticleSystem";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: " H Soulaimane",
  description:
    "web developer and IT professional. I build modern, responsive websites and applications using HTML, CSS, JavaScript, Java, and React. I also manage WordPress sites and the MERN Stack, and work with Python. I also have extensive experience in maintaining and managing computers and Windows systems, always providing clean code and an excellent user experience.",
  keywords:
    "web developer, react, next.js, portfolio, frontend developer, full-stack developer",
  authors: [{ name: "Soulaimane" }],
  creator: "Soulaimane",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourwebsite.com",
    siteName: "Soulaimane Portfolio",
    title: "Soulaimane - Junior Developer",
    description: "Portfolio showcasing web development projects and skills",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Soulaimane Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name - Junior Web Developer",
    description: "Portfolio showcasing web development projects and skills",
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
