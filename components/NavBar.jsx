import Link from 'next/link';
import Image from 'next/image';

const links = [
  { href: '/', label: 'Home' },
  { href: '/employers', label: 'Employers' },
  { href: '/candidates', label: 'For Candidates' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function NavBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-steel-950/80 backdrop-blur">
      <div className="mx-auto w-full max-w-6xl px-4 py-2.5 sm:px-6 md:px-8 md:py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="inline-flex items-center">
            <Image
              src="/logo-header.png"
              alt="Machining Talent"
              width={1280}
              height={460}
              priority
              className="h-14 w-auto max-w-[82vw] object-contain sm:h-16 md:h-28 lg:h-36 md:max-w-none"
            />
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-medium text-slate-300 transition hover:text-white">
                {link.label}
              </Link>
            ))}
            <a
              href="https://calendly.com/arun-jolly/machiningtalent-intro-call"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-spark-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-spark-600"
            >
              Book a Call
            </a>
          </nav>
        </div>

        <nav className="mt-2 md:hidden">
          <div className="rounded-2xl border border-white/15 bg-white/[0.04] p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
            <div className="grid grid-cols-3 gap-2">
              {links.slice(0, 3).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex h-10 items-center justify-center rounded-xl border border-white/15 bg-gradient-to-b from-white/[0.07] to-white/[0.02] px-2 text-center text-[11px] font-semibold tracking-[0.03em] text-slate-100"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mt-2 flex justify-center gap-2">
              {links.slice(3).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex h-10 min-w-[108px] items-center justify-center rounded-xl border border-white/15 bg-gradient-to-b from-white/[0.07] to-white/[0.02] px-3 text-center text-[11px] font-semibold tracking-[0.03em] text-slate-100"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
