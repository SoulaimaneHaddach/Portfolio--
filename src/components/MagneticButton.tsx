'use client';

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
  const Component = href ? 'a' : 'button';

  return (
    <div className="inline-block transition-transform duration-200 hover:-translate-y-0.5">
      <Component
        href={href}
        onClick={onClick}
        target={target}
        rel={rel}
        className={`relative overflow-hidden group ${className}`}
      >
        <span className="relative z-10">{children}</span>
      </Component>
    </div>
  );
}