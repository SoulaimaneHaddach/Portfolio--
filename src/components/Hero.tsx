'use client';

import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  Download,
  MessageCircle,
  Clock3,
  Code2,
  Rocket,
  Instagram,
} from 'lucide-react';
import TypingEffect from './TypingEffect';
import MagneticButton from './MagneticButton';
import TiltCard from './TiltCard';
import RevealText from './RevealText';

export default function Hero() {
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/SoulaimaneHaddach',
      label: 'GitHub',
      color: 'hover:text-slate-900 dark:hover:text-white',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/soulaiman-haddash-06a15b387/',
      label: 'LinkedIn',
      color: 'hover:text-sky-700',
    },
    {
      icon: Mail,
      href: 'mailto:soulaimanok@gmail.com',
      label: 'Email',
      color: 'hover:text-slate-700',
    },
    {
      icon: Instagram,
      href: 'https://instagram.com/soulaimane_hdx',
      label: 'Instagram',
      color: 'hover:text-rose-600',
    },
  ];

  const stats = [
    { icon: Code2, value: '17+', label: 'Projects' },
    { icon: Clock3, value: '4+', label: 'Years Exp' },
    { icon: Rocket, value: '', label: 'Self-Taught' },
  ];

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center pt-20">
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-slate-100/80 to-transparent dark:from-slate-900/80" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
        <div className="mx-auto grid max-w-[1600px] items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 shadow-sm dark:border-slate-700 dark:bg-slate-900/80">
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                just... be happy
              </span>
            </div>

            <div className="space-y-4">
              <RevealText
                text="Hi, I&apos;m"
                className="text-2xl font-medium text-gray-600 md:text-3xl dark:text-gray-400"
              />

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-5xl font-bold tracking-tight text-slate-900 md:text-6xl lg:text-7xl dark:text-white"
              >
                <span className="text-slate-900 dark:text-white">Haddach Soulaimane</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="min-h-[40px] text-2xl font-medium text-slate-700 md:text-3xl dark:text-slate-300"
              >
                <TypingEffect
                  texts={[
                    'Full-Stack Developer',
                    'Building Web & Mobile Apps',
                    'React • Next.js • Node.js',
                    'IT Systems & Support',
                    'Problem Solver',
                  ]}
                  speed={80}
                  delay={2500}
                />
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg leading-relaxed text-slate-600 md:text-xl dark:text-slate-300"
            >
              Full-Stack Developer building modern web and mobile applications with{' '}
              <span className="font-semibold text-slate-900 dark:text-white">
                React, Node.js, Express, and MySQL
              </span>
              . Strong background in{' '}
              <span className="font-semibold text-slate-900 dark:text-white">
                IT systems, troubleshooting, and problem-solving
              </span>
              .
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <MagneticButton href="#contact" className="btn-primary group">
                <MessageCircle className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5" />
                Let&apos;s Talk
              </MagneticButton>

              <MagneticButton href="Haddach_Soulaimane_CV.pdf" className="btn-secondary group">
                <Download className="h-5 w-5 transition-transform group-hover:translate-y-1" />
                Download CV
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4 pt-4"
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-colors dark:border-slate-700 dark:bg-slate-900"
                    aria-label={social.label}
                  >
                    <Icon className={`h-6 w-6 text-slate-700 transition-colors dark:text-slate-200 ${social.color}`} />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <TiltCard>
              <div className="relative">
                <div className="relative mx-auto aspect-square w-full max-w-lg overflow-hidden rounded-[24px] border border-slate-200 bg-stone-100 shadow-sm dark:border-slate-700 dark:bg-slate-900">
                  <div className="flex h-full w-full items-center justify-center overflow-hidden">
                    <img src="IMG_1404.png" alt="Haddach Soulaimane" className="h-full w-full object-cover" />
                  </div>
                </div>

                {stats.map((stat, index) => {
                  const Icon = stat.icon;

                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 + index * 0.15, duration: 0.35 }}
                      className={`absolute ${
                        index === 0 ? 'top-6 -left-2' : index === 1 ? 'bottom-8 -left-2' : 'top-12 -right-2'
                      }`}
                    >
                      <div className="rounded-xl border border-slate-200 bg-white/90 px-3 py-2 shadow-sm backdrop-blur-[1px] dark:border-slate-700 dark:bg-slate-900/90">
                        <div className="mb-2 inline-flex rounded-md bg-slate-800 p-2 dark:bg-slate-700">
                          <Icon className="h-4 w-4 text-white" />
                        </div>
                        <div className="text-lg font-bold text-slate-900 dark:text-white">{stat.value}</div>
                        <div className="text-[10px] font-medium uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400">
                          {stat.label}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </TiltCard>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-gray-400">
            <span className="text-sm font-medium">Explore My Work</span>
            <div className="flex h-10 w-6 justify-center rounded-full border-2 border-gray-400 p-2">
              <div className="h-2 w-1 rounded-full bg-gray-400" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
