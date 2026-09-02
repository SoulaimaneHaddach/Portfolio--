'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
}

export default function ParticleSystem() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const setCanvasSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.max(1, Math.floor(window.innerWidth * dpr));
      canvas.height = Math.max(1, Math.floor(window.innerHeight * dpr));
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const buildParticles = (): Particle[] => {
      const area = window.innerWidth * window.innerHeight;
      const count = Math.max(18, Math.min(42, Math.floor(area / 18000)));
      const particles: Particle[] = [];

      for (let i = 0; i < count; i += 1) {
        particles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * 0.22,
          vy: (Math.random() - 0.5) * 0.22,
          radius: Math.random() * 1.7 + 0.9,
          alpha: Math.random() * 0.42 + 0.18,
        });
      }

      return particles;
    };

    let particles = buildParticles();
    let animationFrameId = 0;

    const getParticleColor = () => (
      document.documentElement.classList.contains('dark')
        ? '148, 163, 184'
        : '2, 132, 199'
    );

    const drawStatic = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const particleColor = getParticleColor();
      ctx.clearRect(0, 0, w, h);

      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.fillStyle = `rgba(${particleColor}, ${particle.alpha})`;
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const animate = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const particleColor = getParticleColor();

      ctx.clearRect(0, 0, w, h);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < -10 || particle.x > w + 10) particle.vx *= -1;
        if (particle.y < -10 || particle.y > h + 10) particle.vy *= -1;

        ctx.beginPath();
        ctx.fillStyle = `rgba(${particleColor}, ${particle.alpha})`;
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i += 1) {
        for (let j = i + 1; j < particles.length; j += 1) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(${particleColor}, ${0.12 * (1 - distance / 120)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animationFrameId = window.requestAnimationFrame(animate);
    };

    setCanvasSize();

    if (prefersReducedMotion) {
      drawStatic();
    } else {
      animate();
    }

    const handleResize = () => {
      setCanvasSize();
      particles = buildParticles();
      if (prefersReducedMotion) {
        drawStatic();
      }
    };

    window.addEventListener('resize', handleResize);

    const themeObserver = new MutationObserver(() => {
      if (prefersReducedMotion) {
        drawStatic();
      }
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      themeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-80 dark:opacity-45"
    />
  );
}
