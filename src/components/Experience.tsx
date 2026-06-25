'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Code2, Cpu, ArrowUpRight } from 'lucide-react';
import CounterAnimation from './CounterAnimation';

const experiences = [
  {
icon: Briefcase,
title: 'Full-Stack Developer & Project Coordinator',
company: 'HealthMap',
period: '2024 - 2025',
type: 'Team Collaboration',
typeColor: 'from-emerald-500 to-green-500',
description:
'Collaborated with a development team for 7 months to design and build a large-scale application. Contributed across frontend, backend, and database development while supporting project coordination and team workflows.',
stack: [
'React',
'Node.js',
'Express',
'MySQL',
'Git',
'GitHub'
],
},
  {
icon: Cpu,
title: 'Freelance IT Support Technician',
company: 'Self-Employed',
period: '2020 - Present',
type: 'Freelance',
typeColor: 'from-orange-500 to-red-500',
description:
'Provided hardware maintenance, system troubleshooting, operating system installation, performance optimization, networking setup, and technical support for home and business clients.',
stack: [
'Windows',
'Linux',
'Networking',
'Hardware',
'System Administration',
'Troubleshooting'
],
},
  {
    icon: GraduationCap,
    title: 'Education & Certifications',
    company: 'OFPPT & Online Platforms',
    period: '2021 - Present',
    type: 'Education',
    typeColor: 'from-blue-500 to-purple-500',
    description: 'Comprehensive education in web development, entrepreneurship, and technical systems. Continuous learning in modern technologies.',
    stack: [],
    education: [
      { 
        year: '2025', 
        title: 'Diploma in Web Development', 
        school: 'OFPPT',
        icon: Code2,
        skills: ['HTML', 'CSS', 'JavaScript', 'Web Development']
      },
      { 
        year: '2024', 
        title: 'Innovation Entrepreneuriale Program', 
        school: 'OFPPT',
        icon: Briefcase,
        skills: ['Entrepreneurship', 'Innovation', 'Project Management']
      },
      { 
        year: '2024', 
        title: 'Industrial Electrical Maintenance', 
        school: 'OFPPT',
        icon: Cpu,
        skills: ['Electrical Systems', 'Maintenance', 'Troubleshooting']
      },
      { 
        year: '2025+', 
        title: 'Continuous Learning', 
        school: 'Various Platforms',
        icon: GraduationCap,
        skills: ['C', 'Angular', 'AI Integration', 'DevOps']
      },
    ]
  },
];

export default function Experience() {
  const stats = [
    { number: 5, suffix: '+', label: 'years of hands-on experience' },
    { number: 14, suffix: '+', label: 'Projects Completed' },
    { number: 7, suffix: '+', label: 'Months Team Collaboration' },
  ];

  return (
    <section id="experience" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent dark:via-blue-950/10 pointer-events-none" />
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent mb-3">
              Experience
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-400"
          >
            Professional background and learning journey
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -2 }}
              className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-800/30 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all overflow-hidden group"
            >
              {/* Subtle */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-1">
                  <CounterAnimation end={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="space-y-6">
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 4 }}
                className="relative bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 transition-all duration-300 group"
              >
                {/* Subtle line accent */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-l-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="flex gap-4">
                  {/* Icon */}
                  <motion.div 
                    className="flex-shrink-0"
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center group-hover:from-blue-50 group-hover:to-purple-50 dark:group-hover:from-blue-900/20 dark:group-hover:to-purple-900/20 transition-all duration-300 shadow-sm">
                      <IconComponent className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          {exp.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-col sm:flex-row items-end sm:items-center gap-2 sm:gap-3 text-sm flex-shrink-0">
                        <motion.span 
                          className={`px-3 py-1.5 bg-gradient-to-r ${exp.typeColor} text-white rounded-lg text-xs font-semibold shadow-sm`}
                          whileHover={{ scale: 1.05, y: -2 }}
                          transition={{ type: 'spring', stiffness: 400 }}
                        >
                          {exp.type}
                        </motion.span>
                        <span className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm font-medium bg-gray-100 dark:bg-gray-700/50 px-3 py-1 rounded-md">
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Education Timeline*/}
                    {'education' in exp && exp.education && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {exp.education.map((edu: any, idx: number) => {
                          const EduIcon = edu.icon;
                          return (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: idx * 0.1 }}
                              viewport={{ once: true }}
                              className="relative flex flex-col gap-3 p-3 rounded-lg bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10 border border-blue-200/30 dark:border-blue-700/30 hover:border-blue-300/50 dark:hover:border-blue-600/50 transition-all"
                            >
                              {/* Year badge in top right corner */}
                              <div className="absolute top-2 right-2">
                                <motion.span
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  transition={{ duration: 0.2, delay: 0.2 }}
                                  viewport={{ once: true }}
                                  whileHover={{ scale: 1.05 }}
                                  className="px-2.5 py-1 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-md text-xs font-bold border border-blue-400/30 shadow-sm"
                                >
                                  {edu.year}
                                </motion.span>
                              </div>

                              <div className="flex items-start gap-3">
                                {/* Icon instead of year */}
                                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-md">
                                  <EduIcon className="w-6 h-6 text-white" />
                                </div>
                                <div className="flex-1 min-w-0 pr-12">
                                  <div className="font-semibold text-gray-900 dark:text-white text-sm leading-tight mb-1">
                                    {edu.title}
                                  </div>
                                  <div className="text-xs text-gray-600 dark:text-gray-400">
                                    {edu.school}
                                  </div>
                                </div>
                              </div>
                              
                              {/* Skills for this education */}
                              {edu.skills && (
                                <div className="flex flex-wrap gap-1.5">
                                  {edu.skills.map((skill: string, skillIdx: number) => {
                                    const getColor = (techName: string) => {
                                      if (techName.includes('Web') || techName.includes('HTML') || techName.includes('CSS') || techName.includes('JavaScript'))
                                        return 'from-orange-500/10 to-red-500/10 border-orange-500/30 dark:border-orange-500/20 text-orange-700 dark:text-orange-400';
                                      if (techName.includes('Angular') || techName.includes('C'))
                                        return 'from-red-500/10 to-pink-500/10 border-red-500/30 dark:border-red-500/20 text-red-700 dark:text-red-400';
                                      if (techName.includes('Electrical') || techName.includes('Maintenance') || techName.includes('Troubleshooting'))
                                        return 'from-yellow-500/10 to-orange-500/10 border-yellow-500/30 dark:border-yellow-500/20 text-yellow-700 dark:text-yellow-400';
                                      if (techName.includes('Entrepreneur') || techName.includes('Innovation') || techName.includes('Project'))
                                        return 'from-pink-500/10 to-rose-500/10 border-pink-500/30 dark:border-pink-500/20 text-pink-700 dark:text-pink-400';
                                      if (techName.includes('AI') || techName.includes('DevOps'))
                                        return 'from-purple-500/10 to-indigo-500/10 border-purple-500/30 dark:border-purple-500/20 text-purple-700 dark:text-purple-400';
                                      return 'from-blue-500/10 to-indigo-500/10 border-blue-500/30 dark:border-blue-500/20 text-blue-700 dark:text-blue-400';
                                    };
                                    
                                    return (
                                      <motion.span
                                        key={skillIdx}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.2, delay: skillIdx * 0.03 }}
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.05 }}
                                        className={`px-2 py-1 bg-gradient-to-br ${getColor(skill)} rounded-md text-xs font-medium border transition-all cursor-default`}
                                      >
                                        {skill}
                                      </motion.span>
                                    );
                                  })}
                                </div>
                              )}
                            </motion.div>
                          );
                        })}
                      </div>
                    )}

                    {/* Tech Stack with stagger animation and colors*/}
                    {exp.stack.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.stack.map((tech, i) => {
                        const getColor = (techName: string) => {
                          if (techName.includes('React') || techName.includes('Next')) 
                            return 'from-cyan-500/10 to-blue-500/10 border-cyan-500/30 dark:border-cyan-500/20 text-cyan-700 dark:text-cyan-400 hover:border-cyan-500/50';
                          if (techName.includes('Spring') || techName.includes('Java')) 
                            return 'from-green-500/10 to-emerald-500/10 border-green-500/30 dark:border-green-500/20 text-green-700 dark:text-green-400 hover:border-green-500/50';
                          if (techName.includes('TypeScript') || techName.includes('Node')) 
                            return 'from-blue-500/10 to-indigo-500/10 border-blue-500/30 dark:border-blue-500/20 text-blue-700 dark:text-blue-400 hover:border-blue-500/50';
                          if (techName.includes('Cloud') || techName.includes('AI')) 
                            return 'from-purple-500/10 to-pink-500/10 border-purple-500/30 dark:border-purple-500/20 text-purple-700 dark:text-purple-400 hover:border-purple-500/50';
                          if (techName.includes('Tailwind') || techName.includes('CSS')) 
                            return 'from-sky-500/10 to-cyan-500/10 border-sky-500/30 dark:border-sky-500/20 text-sky-700 dark:text-sky-400 hover:border-sky-500/50';
                          if (techName.includes('System') || techName.includes('Administration'))
                            return 'from-gray-500/10 to-slate-500/10 border-gray-500/30 dark:border-gray-500/20 text-gray-700 dark:text-gray-400 hover:border-gray-500/50';
                          return 'from-gray-500/10 to-gray-500/10 border-gray-500/30 dark:border-gray-500/20 text-gray-700 dark:text-gray-400 hover:border-gray-500/50';
                        };
                        
                        return (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: i * 0.05 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.1, y: -3 }}
                            className={`px-3 py-1.5 bg-gradient-to-br ${getColor(tech)} rounded-lg text-xs font-semibold border transition-all cursor-default shadow-sm`}
                          >
                            {tech}
                          </motion.span>
                        );
                      })}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}