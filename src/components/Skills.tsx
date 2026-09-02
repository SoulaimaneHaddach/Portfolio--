'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills, skillCategories } from '@/data/skills';
import * as Icons from 'lucide-react';
import { TrendingUp, Award, Zap, Rocket, Lightbulb, Handshake } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Get skills for active category
  const displayedSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(s => s.category === activeCategory);

  // Group skills by category for "all" view
  const groupedSkills = activeCategory === 'all'
    ? skillCategories.map(cat => ({
        category: cat,
        skills: skills.filter(s => s.category === cat.key)
      }))
    : null;

  // Calculate stats
  const totalSkills = skills.length;
  const advancedSkills = skills.filter(s => s.level >= 80).length;
  const averageLevel = Math.round(skills.reduce((acc, s) => acc + s.level, 0) / skills.length);

  return (
    <section id="skills" className="relative py-20 px-4">
      <div className="absolute inset-x-0 top-0 h-0" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Header with badge */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.2 }}
              className="mb-4 inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm dark:border-slate-700 dark:bg-slate-900"
            >
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                Technical Arsenal
              </span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & Technologies
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
              Tools and technologies I use to bring ideas to life
            </p>

            {/* Stats Cards */}
            <div className="mx-auto mb-8 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900"
              >
                <div className="mb-1 flex items-center justify-center gap-2">
                  <Zap className="h-4 w-4 text-slate-700 dark:text-slate-300" />
                  <span className="text-2xl font-bold text-slate-900 dark:text-white">{totalSkills}</span>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400">Total Skills</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900"
              >
                <div className="mb-1 flex items-center justify-center gap-2">
                  <Award className="h-4 w-4 text-slate-700 dark:text-slate-300" />
                  <span className="text-2xl font-bold text-slate-900 dark:text-white">{advancedSkills}</span>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400">Advanced (80%+)</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900"
              >
                <div className="mb-1 flex items-center justify-center gap-2">
                  <TrendingUp className="h-4 w-4 text-slate-700 dark:text-slate-300" />
                  <span className="text-2xl font-bold text-slate-900 dark:text-white">{averageLevel}%</span>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400">Avg Proficiency</p>
              </motion.div>
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-5 py-2.5 rounded-lg font-medium transition-colors duration-300 relative overflow-hidden ${
                activeCategory === 'all'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              <span className="relative z-10">All Skills</span>
            </button>
            {skillCategories.map((category) => {
              const categoryCount = skills.filter(s => s.category === category.key).length;
              return (
                <button
                  key={category.key}
                  onClick={() => setActiveCategory(category.key)}
                  className={`px-5 py-2.5 rounded-lg font-medium transition-colors duration-300 ${
                    activeCategory === category.key
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {category.name}
                    <span className={`rounded-full px-1.5 py-0.5 text-xs ${
                      activeCategory === category.key
                        ? 'bg-white/15 text-white'
                        : 'bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-200'
                    }`}>
                      {categoryCount}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Skills Display */}
          <AnimatePresence mode="wait">
            {activeCategory === 'all' ? (
              <motion.div
                key="all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {groupedSkills?.map((group, groupIndex) => {
                  const IconComponent = (Icons as any)[group.skills[0]?.icon] || Icons.Code;
                  
                  return (
                    <motion.div
                      key={group.category.key}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: groupIndex * 0.1 }}
                      className="rounded-xl border border-slate-200 bg-white/80 p-6 shadow-sm transition-colors duration-200 hover:border-slate-300 dark:border-slate-700 dark:bg-slate-900/85 dark:hover:border-slate-600"
                    >
                      <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-300 dark:border-gray-600">
                        <div className="rounded-lg bg-slate-100 p-3 dark:bg-slate-800">
                          <IconComponent className="h-6 w-6 text-slate-700 dark:text-slate-200" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-xl text-gray-900 dark:text-white">
                            {group.category.name}
                          </h3>
                          <p className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                            <span className="h-1.5 w-1.5 rounded-full bg-slate-500"></span>
                            {group.skills.length} {group.skills.length === 1 ? 'skill' : 'skills'}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {group.skills.map((skill) => {
                          // Determine skill level badge and color
                          const levelColor = skill.level >= 90 
                            ? 'bg-slate-900 text-white border-slate-900' 
                            : skill.level >= 80 
                              ? 'bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700'
                              : 'bg-white text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700';
                          
                          return (
                            <span
                              key={skill.name}
                              className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-sm font-semibold ${levelColor}`}
                              title={`${skill.level}% proficiency`}
                            >
                              {skill.name}
                            </span>
                          );
                        })}
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            ) : (
              // Detailed card view for specific category
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
              >
                {displayedSkills.map((skill, index) => {
                  const IconComponent = (Icons as any)[skill.icon] || Icons.Code;
                  
                  // Get skill level color
                  const levelBarColor = skill.level >= 90 
                    ? 'bg-sky-700' 
                    : skill.level >= 80 
                      ? 'bg-sky-600'
                      : skill.level >= 70
                        ? 'bg-sky-500'
                        : 'bg-slate-500';
                  const levelTextColor = skill.level >= 70 ? 'text-sky-700 dark:text-sky-400' : 'text-slate-600 dark:text-slate-400';
                  
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: index * 0.05,
                        type: 'spring',
                        stiffness: 100
                      }}
                      className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white/80 p-6 shadow-sm transition-colors dark:border-slate-700 dark:bg-slate-900/85 dark:hover:border-sky-700"
                    >
                      <div className="relative">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="rounded-lg bg-sky-50 p-3 dark:bg-sky-950/60">
                            <IconComponent className="h-6 w-6 text-sky-700 dark:text-sky-400" />
                          </div>
                          <h4 className="flex-1 text-lg font-bold text-slate-900 transition-colors dark:text-white group-hover:text-sky-700 dark:group-hover:text-sky-400">
                            {skill.name}
                          </h4>
                        </div>

                        {/* Progress bar */}
                        <div className="mb-2 h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: index * 0.05, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className={`relative h-full overflow-hidden rounded-full ${levelBarColor}`}
                          >
                          </motion.div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                            Proficiency Level
                          </span>
                          <span className={`text-sm font-bold ${levelTextColor}`}>
                            {skill.level}%
                          </span>
                        </div>
                      </div>

                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Additional Skills Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 grid gap-6 md:grid-cols-3"
          >
            <motion.div 
              className="group rounded-xl border border-slate-200 bg-white/80 p-8 text-center shadow-sm transition-colors dark:border-slate-700 dark:bg-slate-900/85 dark:hover:border-sky-700"
            >
              <Rocket className="mx-auto mb-4 h-9 w-9 text-sky-700 dark:text-sky-400" />
              <h4 className="mb-2 text-xl font-bold text-slate-900 transition-colors dark:text-white group-hover:text-sky-700 dark:group-hover:text-sky-400">
                Fast Learner
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Quick to adapt and master new technologies
              </p>
            </motion.div>
            
            <motion.div 
              className="group rounded-xl border border-slate-200 bg-white/80 p-8 text-center shadow-sm transition-colors dark:border-slate-700 dark:bg-slate-900/85 dark:hover:border-sky-700"
            >
              <Lightbulb className="mx-auto mb-4 h-9 w-9 text-sky-700 dark:text-sky-400" />
              <h4 className="mb-2 text-xl font-bold text-slate-900 transition-colors dark:text-white group-hover:text-sky-700 dark:group-hover:text-sky-400">
                Problem Solver
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Creative solutions to complex challenges
              </p>
            </motion.div>
            
            <motion.div 
              className="group rounded-xl border border-slate-200 bg-white/80 p-8 text-center shadow-sm transition-colors dark:border-slate-700 dark:bg-slate-900/85 dark:hover:border-sky-700"
            >
              <Handshake className="mx-auto mb-4 h-9 w-9 text-sky-700 dark:text-sky-400" />
              <h4 className="mb-2 text-xl font-bold text-slate-900 transition-colors dark:text-white group-hover:text-sky-700 dark:group-hover:text-sky-400">
                Team Player
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Excellent communication and collaboration
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}