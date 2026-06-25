'use client';

import { Github, Mail, Heart, Linkedin, Twitter, Code2, Sparkles, Instagram  } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/SoulaimaneHaddach', 
      label: 'GitHub',
      gradient: 'from-gray-600 to-gray-800'
    },
    { 
      icon: Mail, 
      href: 'mailto:soulaimanok@gmail.com', 
      label: 'Email',
      gradient: 'from-purple-600 to-pink-600'
    },
    { 
      icon: Linkedin, 
      href: 'https://linkedin.com/in/soulaimane-haddach', 
      label: 'LinkedIn',
      gradient: 'from-blue-600 to-cyan-600'
    },
    { icon: Instagram, href: 'https://instagram.com/soulaimane_hdx', label: 'Instagram', color: 'hover:text-pink-500' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-3 gap-12">
          {/* About Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">
              Soulaimane Haddach
            </h3>
            <p className="text-gray-400 leading-relaxed">
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
                    className="group relative p-3 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 overflow-hidden"
                    aria-label={social.label}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${social.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                    <IconComponent className="w-5 h-5 relative z-10 transform group-hover:scale-110 group-hover:rotate-12 transition-transform" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-purple-400" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-6 transition-all duration-300 rounded-full"></span>
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Mail className="w-5 h-5 text-purple-400" />
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="group">
                <div className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors">
                  <span className="text-2xl transform group-hover:scale-125 transition-transform">📧</span>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Email</div>
                    <a href="mailto:soulaimanok@gmail.com" className="hover:text-purple-400 transition-colors break-all">
                      soulaimanok@gmail.com
                    </a>
                  </div>
                </div>
              </li>
              <li className="group">
                <div className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors">
                  <span className="text-2xl transform group-hover:scale-125 transition-transform">📱</span>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Phone / WhatsApp</div>
                    <a href="https://wa.me/212773171275" className="hover:text-green-400 transition-colors">
                      +212 773-171275
                    </a>
                  </div>
                </div>
              </li>
              <li className="group">
                <div className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors">
                  <span className="text-2xl transform group-hover:scale-125 transition-transform">📍</span>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Location</div>
                    <span>Morocco</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Haddach Soulaimane. All rights reserved.
            </p>
            
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <Code2 className="w-4 h-4" />
              <span>Built with Next.js & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}