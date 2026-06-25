'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
}

export default function MagneticButton({ 
  children, 
  className = '', 
  href, 
  onClick,
  target,
  rel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const Component = href ? 'a' : 'button';

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <motion.div
        animate={position}
        transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      >
        <Component
          href={href}
          onClick={onClick}
          target={target}
          rel={rel}
          className={`relative overflow-hidden group ${className}`}
        >
          <span className="relative z-10">{children}</span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"
            initial={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 0.2 }}
            transition={{ duration: 0.3 }}
          />
        </Component>
      </motion.div>
    </div>
  );
}