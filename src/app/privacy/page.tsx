import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DismissibleLegalPage from '@/components/DismissibleLegalPage';

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <DismissibleLegalPage>
      <article className="mx-auto max-w-3xl space-y-8 rounded-xl border border-slate-200 bg-white/85 p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900/85">
        <header className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Legal</p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Privacy Policy</h1>
        </header>

        <section className="space-y-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
<p>
  This website is operated by Haddach Soulaimane. I respect your privacy and only collect personal information that you voluntarily provide through the contact form or other direct communication methods.
</p>
<p>
  The information you provide may include your name, email address, message content, and any other details you choose to share. This information is used to respond to your inquiries, discuss potential projects, and communicate with prospective clients or collaborators.
</p>
<p>
  I do not sell or rent personal information. I do not use personal information for marketing purposes without your consent. Where applicable, third-party services such as Formspree may process information submitted through the contact form as part of the communication workflow.
</p>
<p>
  This website may use basic analytics and hosting or server logs for purposes such as monitoring website performance, detecting errors, and maintaining security. Such information is used for operational purposes and is not intentionally used to create marketing profiles.
</p>
<p>
  You may contact me to request access to, correction of, or deletion of personal information you have voluntarily provided, subject to applicable laws and any necessary legal or operational requirements.
</p>

        </section>
      </article>
      <div className="mx-auto mt-8 max-w-3xl">
        <Link href="/#footer" className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
          ← Back to home
        </Link>
      </div>
      </DismissibleLegalPage>
      <Footer />
    </>
  );
}
