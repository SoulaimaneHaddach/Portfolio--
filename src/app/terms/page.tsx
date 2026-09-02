import Link from 'next/link';

export default function TermsPage() {
  return (
    <main className="min-h-screen px-6 py-20 text-slate-800 dark:text-slate-200">
      <article className="mx-auto max-w-3xl space-y-8 rounded-xl border border-slate-200 bg-white/85 p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900/85">
        <Link
          href="/"
          className="inline-block text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
          ← Back to home
        </Link>

        <header className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Legal
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Terms of Service
          </h1>
        </header>

        <section className="space-y-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
          <p>
            By accessing and using this portfolio website, you agree to use it
            lawfully and respectfully. The content of this website is provided
            for informational and professional purposes.
          </p>
          <p>
            The project descriptions, portfolio content, and written materials
            on this website represent the work and professional profile of
            Haddach Soulaimane.
          </p>
          <p>
            External links and third-party services are provided for convenience
            and are subject to their respective terms, policies, and conditions.
          </p>
          <p>
            This website is a personal portfolio and is not intended for product
            sales, reservations, or other commercial services. Project
            inquiries, freelance opportunities, and collaboration requests
            should be submitted through the available contact methods.
          </p>
          <p>
            The content of this website and its legal pages may be updated from
            time to time to keep the information accurate and relevant.
          </p>
          <p>
            When using the contact form or other contact methods, please provide
            accurate information and communicate respectfully.
          </p>
        </section>
      </article>
    </main>
  );
}
