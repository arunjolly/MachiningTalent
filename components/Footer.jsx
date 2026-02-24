import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-steel-900/60">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between md:px-8 md:py-10">
        <div>
          <p className="text-sm font-semibold text-white">Machining Talent</p>
          <p className="mt-1 text-sm text-slate-300">Part of Fulton River, LLC</p>
          <p className="mt-1 max-w-xl text-sm text-slate-400">Precision machining recruiting for shops that cannot miss production.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
          <Link href="/employers" className="hover:text-white">Employers</Link>
          <Link href="/candidates" className="hover:text-white">For Candidates</Link>
          <Link href="/about" className="hover:text-white">About</Link>
          <Link href="/contact" className="hover:text-white">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
