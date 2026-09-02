'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Code2, Cpu } from 'lucide-react';
import CounterAnimation from './CounterAnimation';

const experiences = [
  {
icon: Briefcase,
title: 'Full-Stack Developer & Project Coordinator',
company: 'HealthMap',
period: '2024 - 2025',
type: 'Team Collaboration',
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
  const visibleExperiences = experiences.filter(
    (experience) => experience.title !== 'Education & Certifications'
  );

  const stats = [
    { number: 5, suffix: '+', label: 'years of hands-on experience' },
    { number: 14, suffix: '+', label: 'Projects Completed' },
    { number: 7, suffix: '+', label: 'Months Team Collaboration' },
  ];

  return (
    <section id="experience" className="relative overflow-hidden px-4 py-24 text-slate-900 dark:text-slate-100">
      <div className="relative mx-auto max-w-6xl">
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
            <h2 className="mb-3 text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
              Experience
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-slate-600 dark:text-slate-300"
          >
            Professional background and learning journey
          </motion.p>
        </motion.div>

        <div className="mb-16 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white/75 p-6 transition-all dark:border-slate-800 dark:bg-slate-900/85"
            >
<div className="absolute inset-0 bg-slate-200/50 opacity-0 transition-opacity duration-200 group-hover:opacity-100 dark:bg-slate-800/40" />
              
              <div className="relative">
                <div className="mb-1 text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
                  <CounterAnimation end={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-300">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline experiences */}
        <div className="space-y-6">
          {visibleExperiences.map((exp, index) => {
            const IconComponent = exp.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative rounded-xl border border-slate-200 bg-white/75 p-4 transition-all duration-300 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900/85 dark:hover:border-slate-700 sm:p-6"
              >
                {/* Subtle line accent */}
                <div className="absolute bottom-0 left-0 top-0 w-1 rounded-l-xl bg-slate-200 opacity-80" />
                
                <div className="flex gap-4">
                  {/* Icon */}
                  <motion.div 
                    className="flex-shrink-0"
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-slate-200 bg-slate-100 shadow-sm transition-colors duration-200 dark:border-slate-700 dark:bg-slate-800">
                      <IconComponent className="h-6 w-6 text-black dark:text-slate-100" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <h3 className="mb-1 text-lg font-semibold text-slate-900 transition-colors duration-300 dark:text-white">
                          {exp.title}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-300">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-col sm:flex-row items-end sm:items-center gap-2 sm:gap-3 text-sm flex-shrink-0">
                        <motion.span 
                          className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-900 shadow-sm"
                          transition={{ duration: 0.2 }}
                        >
                          {exp.type}
                        </motion.span>
                        <span className="rounded-md bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300 sm:text-sm">
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    <p className="mb-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
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
                              className="relative flex flex-col gap-3 rounded-lg border border-slate-200 bg-white/80 p-3 transition-all hover:border-slate-300 dark:border-slate-700 dark:bg-slate-900/80 dark:hover:border-slate-600"
                            >
                              {/* Year badge in top right corner */}
                              <div className="absolute top-2 right-2">
                                <motion.span
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  transition={{ duration: 0.2, delay: 0.2 }}
                                  viewport={{ once: true }}
                                  className="rounded-md border border-slate-600 bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-900 shadow-sm"
                                >
                                  {edu.year}
                                </motion.span>
                              </div>

                              <div className="flex items-start gap-3">
                                {/* Icon instead of year */}
                                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-100 shadow-sm transition-colors duration-200 dark:border-slate-700 dark:bg-slate-800">
                                  <EduIcon className="h-6 w-6 text-black dark:text-slate-100" />
                                </div>
                                <div className="flex-1 min-w-0 pr-12">
                                  <div className="mb-1 text-sm font-semibold leading-tight text-slate-900 dark:text-white">
                                    {edu.title}
                                  </div>
                                  <div className="text-xs text-slate-600 dark:text-slate-300">
                                    {edu.school}
                                  </div>
                                </div>
                              </div>
                              
                              {/* Skills for this education */}
                              {edu.skills && (
                                <div className="flex flex-wrap gap-1.5">
                                  {edu.skills.map((skill: string, skillIdx: number) => {
                                    return (
                                      <motion.span
                                        key={skillIdx}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.2, delay: skillIdx * 0.03 }}
                                        viewport={{ once: true }}
                                        className="cursor-default rounded-md border border-slate-700 bg-slate-800 px-2 py-1 text-xs font-medium text-slate-200 transition-all"
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
                        return (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: i * 0.05 }}
                            viewport={{ once: true }}
                            className="cursor-default rounded-lg border border-slate-700 bg-slate-800 px-3 py-1.5 text-xs font-semibold text-slate-200 shadow-sm transition-all"
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