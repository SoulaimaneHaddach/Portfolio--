'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function DismissibleLegalPage({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        router.push('/#footer');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [router]);

  const handleBackgroundClick = (event: React.MouseEvent<HTMLElement>) => {
    if (event.target === event.currentTarget) {
      router.push('/#footer');
    }
  };

  return (
    <main
      onClick={handleBackgroundClick}
      className="min-h-screen px-6 pb-20 pt-32 text-slate-800 dark:text-slate-200"
    >
      {children}
    </main>
  );
}
