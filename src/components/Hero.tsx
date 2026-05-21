'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, MessageCircle, Sparkles, Code2, Rocket } from 'lucide-react';
import TypingEffect from './TypingEffect';
import MagneticButton from './MagneticButton';
import TiltCard from './TiltCard';
import RevealText from './RevealText';

export default function Hero() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/solaymane403', label: 'GitHub', color: 'hover:text-gray-900 dark:hover:text-white' },
    { icon: Linkedin, href: 'https://linkedin.com/in/soulaimane-haddach', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: Mail, href: 'mailto:soulaimanok@gmail.com', label: 'Email', color: 'hover:text-red-500' },
  ];

  const stats = [
    { icon: Code2, value: '15+', label: 'Projects', color: 'from-blue-500 to-cyan-500' },
    { icon: Sparkles, value: '3+', label: 'Years Exp', color: 'from-purple-500 to-pink-500' },
    { icon: Rocket, value: '100%', label: 'Dedication', color: 'from-orange-500 to-red-500' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 ">
      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-700" />
      
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-[1600px] mx-auto">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-full"
            >
              <Sparkles className="w-4 h-4 text-purple-500" />
              <span className="text-sm font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Available for Freelance
              </span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <RevealText
                text="Hi, I'm"
                className="text-2xl md:text-3xl font-medium text-gray-600 dark:text-gray-400"
              />
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold"
              >
                <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Haddach Soulaimane
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-medium min-h-[40px]"
              >
                <TypingEffect
                  texts={[
                    'Full-Stack Developer 💻',
                    'Front-End: React & Next.js ⚛️',
                    'Back-End: Node.js & MERN Stack 🛠️',
                    'WordPress Expert 🌐',
                    'AI & Python Enthusiast 🤖',
                    'PC & IT Systems Technician 🖥️'
                  ]}
                  speed={80}
                  delay={2500}
                />
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed"
            >
  Full-stack developer skilled in{' '}
  <span className="font-semibold text-purple-600 dark:text-purple-400">
    HTML, CSS, JavaScript, Java, React, Next.js
  </span>, and{' '}
  <span className="font-semibold text-purple-600 dark:text-purple-400">
    WordPress, MERN Stack, Python (AI Basics)
  </span>. Also experienced in{' '}
  <span className="font-semibold text-purple-600 dark:text-purple-400">
    PC maintenance and Windows systems
  </span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <MagneticButton
                href="#contact"
                className="btn-primary group"
              >
                <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Let's Talk
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-20 rounded-lg"
                  initial={false}
                  whileHover={{ scale: 1.05 }}
                />
              </MagneticButton>

              <MagneticButton
                href="Haddach_Soulaimane_CV.pdf"
                className="btn-secondary group"
              >
                <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                Download CV
              </MagneticButton>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4 pt-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`group relative p-4 bg-gray-100 dark:bg-gray-800 rounded-xl transition-all ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - 3D Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <TiltCard>
              <div className="relative">
                {/* Main card */}
                <div className="relative w-full max-w-lg mx-auto aspect-square rounded-3xl bg-gradient-to-br from-purple-500 via-blue-500 to-purple-600 p-1 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-3xl flex items-center justify-center overflow-hidden">
                    <img src="IMG_1404.png" alt="Haddach Soulaimane" className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* Floating stats */}
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.15, type: 'spring' }}
                    className={`absolute ${
                      index === 0 ? 'top-10 -left-4' : 
                      index === 1 ? 'bottom-20 -left-8' : 
                      'top-20 -right-4'
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="card p-4 backdrop-blur-xl bg-white/90 dark:bg-gray-800/90 shadow-2xl"
                    >
                      <div className={`p-3 bg-gradient-to-br ${stat.color} rounded-lg mb-2`}>
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                        {stat.label}
                      </div>
                    </motion.div>
                  </motion.div>
                ))}

                {/* Decorative elements */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full"
                >
                  <div className="w-full h-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl" />
                </motion.div>
              </div>
            </TiltCard>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gray-400"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-2 bg-gray-400 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}