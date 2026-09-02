'use client';

import { Github, Mail, Phone, MapPin, Linkedin, Code2, Instagram  } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/SoulaimaneHaddach', 
      label: 'GitHub',
    },
    { 
      icon: Mail, 
      href: 'mailto:soulaimanok@gmail.com', 
      label: 'Email',
    },
    { 
      icon: Linkedin, 
      href: 'https://linkedin.com/in/soulaimane-haddach', 
      label: 'LinkedIn',
    },
    { icon: Instagram, href: 'https://instagram.com/soulaimane_hdx', label: 'Instagram', color: 'hover:text-rose-500' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ];

  return (
    <footer className="bg-slate-100/80 text-slate-700 dark:bg-slate-950/85 dark:text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-3 gap-12">
          {/* About Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Soulaimane Haddach
            </h3>
            <p className="leading-relaxed text-slate-600 dark:text-slate-400">
Full-Stack Developer building modern web and mobile applications with a focus on performance, usability, and clean code.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden rounded-xl border border-slate-300 bg-white p-3 transition-colors duration-200 hover:border-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-slate-500"
                    aria-label={social.label}
                  >
                    <div className="absolute inset-0 bg-slate-100 opacity-0 transition-opacity duration-200 group-hover:opacity-100 dark:bg-slate-800"></div>
                    <IconComponent className="relative z-10 h-5 w-5 text-slate-900 dark:text-white" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-lg font-bold text-slate-900 dark:text-white">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-slate-600 transition-colors duration-200 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  >
                    <span className="h-0.5 w-0 rounded-full bg-slate-700 transition-all duration-200 group-hover:w-4 dark:bg-slate-300"></span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-6 flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white">
              <Mail className="h-5 w-5 text-slate-700 dark:text-slate-300" />
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="group">
                <div className="flex items-start gap-3 text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
                  <Mail className="mt-0.5 h-5 w-5 text-slate-500" />
                  <div>
                    <div className="mb-1 text-xs text-slate-500">Email</div>
                    <a href="mailto:soulaimanok@gmail.com" className="break-all text-slate-800 transition-colors hover:text-slate-950 dark:text-slate-200 dark:hover:text-white">
                      soulaimanok@gmail.com
                    </a>
                  </div>
                </div>
              </li>
              <li className="group">
                <div className="flex items-start gap-3 text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
                  <Phone className="mt-0.5 h-5 w-5 text-slate-500" />
                  <div>
                    <div className="mb-1 text-xs text-slate-500">Phone / WhatsApp</div>
                    <a href="https://wa.me/212773171275" className="transition-colors hover:text-green-600 dark:hover:text-green-400">
                      +212 773-171275
                    </a>
                  </div>
                </div>
              </li>
              <li className="group">
                <div className="flex items-start gap-3 text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
                  <MapPin className="mt-0.5 h-5 w-5 text-slate-500" />
                  <div>
                    <div className="mb-1 text-xs text-slate-500">Location</div>
                    <span>Morocco</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-300 py-6 dark:border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-center text-sm text-slate-500 md:text-left">
              © {new Date().getFullYear()} Haddach Soulaimane. All rights reserved.
            </p>
            
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Code2 className="w-4 h-4" />
              <span>Built with Next.js & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}