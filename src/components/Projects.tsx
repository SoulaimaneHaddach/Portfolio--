'use client';

import { ExternalLink, Github, Folder, Star, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '@/data/projects';
import { useState, useEffect } from 'react';

export default function Projects() {
  const [filter, setFilter] = useState<string>('all');
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<Record<number, number>>({});
  
  const categories = ['all', 'fullstack', 'frontend', 'ai', 'static'];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);



  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 100);
    return () => clearTimeout(timer);
  }, [filter]);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => {
        const updated = { ...prev };
        filteredProjects.forEach((project) => {
          const images = Array.isArray(project.image) ? project.image : [project.image];
          if (images.length > 1) {
            updated[project.id] = ((prev[project.id] || 0) + 1) % images.length;
          }
        });
        return updated;
      });
    }, 3000);  // Change image time
    return () => clearInterval(interval);
  }, [filteredProjects]);

  const handlePrevImage = (projectId: number, imagesLength: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + imagesLength) % imagesLength,
    }));
  };

  const handleNextImage = (projectId: number, imagesLength: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % imagesLength,
    }));
  };

  const handleDotClick = (projectId: number, index: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectId]: index,
    }));
  };

  return (
    <section id="projects" >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-4">
            <Folder className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
              Portfolio
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Sample Work
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work and side projects
          </p>
        </div>

        {/* Simple Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-xl font-medium capitalize transition-all duration-300 ${
                filter === cat
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg scale-105'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:scale-105 hover:shadow-md'
              }`}
            >
              {cat === 'ai' ? 'AI & ML' : cat.replace('_', ' ')}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <div
                key={`${project.id}-${filter}`}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 opacity-0"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`
                }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">
                  {(() => {
                    const images = Array.isArray(project.image) ? project.image : [project.image];
                    const currentIndex = currentImageIndex[project.id] || 0;
                    const currentImg = images[currentIndex];
                    
                    const imgSrc = currentImg
                      ? (currentImg.startsWith('http') || currentImg.startsWith('/')
                          ? currentImg
                          : `/${currentImg}`)
                      : '';

                    return (
                      <>
                        {imgSrc ? (
                          <img
                            src={imgSrc}
                            alt={`${project.title} - Image ${currentIndex + 1}`}
                            className="w-full h-full object-cover transition-opacity duration-500"
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                            <Folder className="w-20 h-20 text-gray-400" />
                          </div>
                        )}

                        {/* Carousel Controls - Only show if multiple images */}
                        {images.length > 1 && (
                          <>
                            {/* Navigation Arrows */}
                            <button
                              onClick={(e) => handlePrevImage(project.id, images.length, e)}
                              className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 bg-black/50 hover:bg-black/70 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                              aria-label="Previous image"
                            >
                              <ChevronLeft className="w-4 h-4" />
                            </button>
                            <button
                              onClick={(e) => handleNextImage(project.id, images.length, e)}
                              className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-black/50 hover:bg-black/70 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                              aria-label="Next image"
                            >
                              <ChevronRight className="w-4 h-4" />
                            </button>

                            {/* Dots Indicator */}
                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                              {images.map((_, idx) => (
                                <button
                                  key={idx}
                                  onClick={(e) => handleDotClick(project.id, idx, e)}
                                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    idx === currentIndex
                                      ? 'bg-white w-6'
                                      : 'bg-white/50 hover:bg-white/75'
                                  }`}
                                  aria-label={`Go to image ${idx + 1}`}
                                />
                              ))}
                            </div>

                            {/* Image Counter */}
                            <div className="absolute top-2 right-2 px-2 py-1 bg-black/60 text-white text-xs rounded-full font-medium">
                              {currentIndex + 1} / {images.length}
                            </div>
                          </>
                        )}
                      </>
                    );
                  })()}
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full hover:bg-purple-600 hover:text-white transition-all transform hover:scale-110"
                    aria-label="View live demo"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full hover:bg-gray-900 hover:text-white transition-all transform hover:scale-110"
                    aria-label="View GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>

                {/* Badges */}
                {project.featured && (
                  <div className="absolute top-3 right-3 px-3 py-1 bg-yellow-400 text-gray-900 text-xs font-bold rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" />
                    Featured
                  </div>
                )}
                
                <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-xs font-semibold rounded-full capitalize">
                  {project.category}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-xs font-medium">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:underline text-sm font-semibold group/link"
                  >
                    <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:underline text-sm font-semibold group/link"
                  >
                    <Github className="w-4 h-4 group-hover/link:rotate-12 transition-transform" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))
          ) : (
            // Empty State
            <div className="col-span-full flex flex-col items-center justify-center py-20">
              <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-full mb-6">
                <Search className="w-16 h-16 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                No Projects Found
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Try selecting a different category
              </p>
              <button
                onClick={() => setFilter('all')}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
              >
                View All Projects
              </button>
            </div>
          )}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col items-center gap-6 p-8 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl border-2 border-purple-200 dark:border-purple-800">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full">
                <Github className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  More on GitHub
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Check out my other projects
                </p>
              </div>
            </div>
            
            <a
              href="https://github.com/SoulaimaneHaddach"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
              View GitHub Profile
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}