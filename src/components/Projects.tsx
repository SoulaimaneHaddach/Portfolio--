'use client';

import { ExternalLink, Github, Folder, Star, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '@/data/projects';
import { useEffect, useState, type MouseEvent } from 'react';

export default function Projects() {
  const [filter, setFilter] = useState<string>('all');
  const [currentImageIndex, setCurrentImageIndex] = useState<Record<number, number>>({});

  const categories = ['all', 'fullstack', 'frontend', 'ai', 'static'];

  const filteredProjects =
    filter === 'all' ? projects : projects.filter((project) => project.category === filter);

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
    }, 3000);

    return () => clearInterval(interval);
  }, [filteredProjects]);

  const handlePrevImage = (projectId: number, imagesLength: number, e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + imagesLength) % imagesLength,
    }));
  };

  const handleNextImage = (projectId: number, imagesLength: number, e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % imagesLength,
    }));
  };

  const handleDotClick = (projectId: number, index: number, e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectId]: index,
    }));
  };

  return (
    <section id="projects" className="py-20 text-slate-900 dark:text-slate-100">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-3xl text-center mx-auto">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
            <Folder className="h-4 w-4" />
            Work
          </div>

          <h2 className="mb-4 text-4xl font-bold tracking-[-0.05em] text-slate-900 dark:text-white md:text-5xl">
            Selected Projects
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            A collection of web and mobile applications built with modern technologies.
          </p>
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full px-4 py-2 text-sm font-medium capitalize transition-colors duration-200 ${
                filter === cat
                  ? 'bg-slate-100 text-slate-950'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800'
              }`}
            >
              {cat === 'ai' ? 'AI & ML' : cat.replace('_', ' ')}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => {
              const images = Array.isArray(project.image) ? project.image : [project.image];
              const currentIndex = currentImageIndex[project.id] || 0;
              const currentImg = images[currentIndex];
              const imgSrc = currentImg
                ? currentImg.startsWith('http') || currentImg.startsWith('/')
                  ? currentImg
                  : `/${currentImg}`
                : '';

              return (
                <div
                  key={`${project.id}-${filter}`}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white/80 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900/85 dark:hover:border-slate-700"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`,
                  }}
                >
                  <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-slate-800">
                    {imgSrc ? (
                      <img
                        src={imgSrc}
                        alt={`${project.title} - Image ${currentIndex + 1}`}
                        className="h-full w-full object-cover transition-opacity duration-500"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gray-200 dark:bg-gray-700">
                        <Folder className="h-20 w-20 text-gray-400" />
                      </div>
                    )}

                    {images.length > 1 && (
                      <>
                        <button
                          onClick={(e) => handlePrevImage(project.id, images.length, e)}
                          className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/60 bg-black/30 p-1.5 text-white transition-colors hover:bg-black/50"
                          aria-label="Previous image"
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </button>
                        <button
                          onClick={(e) => handleNextImage(project.id, images.length, e)}
                          className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/60 bg-black/30 p-1.5 text-white transition-colors hover:bg-black/50"
                          aria-label="Next image"
                        >
                          <ChevronRight className="h-4 w-4" />
                        </button>

                        <div className="absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
                          {images.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={(e) => handleDotClick(project.id, idx, e)}
                              className={`h-2 rounded-full transition-all duration-300 ${
                                idx === currentIndex ? 'w-6 bg-white' : 'w-2 bg-white/50 hover:bg-white/75'
                              }`}
                              aria-label={`Go to image ${idx + 1}`}
                            />
                          ))}
                        </div>

                        <div className="absolute right-2 top-2 rounded-full bg-black/60 px-2 py-1 text-xs font-medium text-white">
                          {currentIndex + 1} / {images.length}
                        </div>
                      </>
                    )}

                    <div className="absolute inset-0 flex items-center justify-center gap-3 bg-slate-950/30 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full bg-white p-2.5 text-slate-900 transition-colors hover:bg-slate-100"
                          aria-label="View live demo"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      ) : (
                        <span className="rounded-full bg-white/40 p-2.5 text-slate-200" aria-hidden>
                          <ExternalLink className="h-4 w-4" />
                        </span>
                      )}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-white p-2.5 text-slate-900 transition-colors hover:bg-slate-100"
                        aria-label="View GitHub"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    </div>

                    {project.featured && (
                      <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-amber-900">
                        <Star className="h-3 w-3 fill-current" />
                        Featured
                      </div>
                    )}

                    <div className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-700 dark:bg-slate-900/90 dark:text-slate-200">
                      {project.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="mb-4 line-clamp-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                      {project.description}
                    </p>

                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-slate-200 bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-medium text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400">
                          +{project.techStack.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="flex gap-4 border-t border-slate-200 pt-4 dark:border-slate-700">
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white group/link"
                        >
                          <ExternalLink className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                          Live Demo
                        </a>
                      ) : (
                        <span className="flex items-center gap-2 text-sm font-semibold text-slate-500 dark:text-slate-400">
                          <span className="h-4 w-4" />
                          Not launched yet
                        </span>
                      )}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white group/link"
                      >
                        <Github className="h-4 w-4 transition-transform group-hover/link:rotate-12" />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-20">
              <div className="mb-6 rounded-full bg-slate-100 p-6 dark:bg-slate-800">
                <Search className="h-16 w-16 text-slate-400" />
              </div>
              <h3 className="mb-2 text-2xl font-bold text-slate-900 dark:text-white">
                No Projects Found
              </h3>
              <p className="mb-6 text-slate-600 dark:text-slate-400">
                Try selecting a different category
              </p>
              <button
                onClick={() => setFilter('all')}
                className="rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white transition-colors hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
              >
                View All Projects
              </button>
            </div>
          )}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-6 rounded-2xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-700 dark:bg-slate-900">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-slate-900 p-3 dark:bg-slate-100">
                <Github className="h-6 w-6 text-white dark:text-slate-900" />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  More on GitHub
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Check out my other projects
                </p>
              </div>
            </div>

            <a
              href="https://github.com/SoulaimaneHaddach"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white transition-colors hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
            >
              <Github className="h-5 w-5" />
              View GitHub Profile
              <span className="transition-transform group-hover:translate-x-1">→</span>
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
