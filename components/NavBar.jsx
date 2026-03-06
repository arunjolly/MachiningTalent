'use client';

import { useEffect, useState } from 'react';
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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event) {
      if (event.key === 'Escape') setOpen(false);
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-steel-950/85 backdrop-blur">
      <div className="mx-auto w-full max-w-6xl px-4 py-2.5 sm:px-6 md:px-8 md:py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="inline-flex items-center" onClick={() => setOpen(false)}>
            <Image
              src="/logo-header.png"
              alt="Machining Talent"
              width={1280}
              height={460}
              priority
              className="h-20 w-auto max-w-[92vw] object-contain sm:h-20 md:h-28 lg:h-36 md:max-w-none"
            />
          </Link>

          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            className="group relative -translate-x-1 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/25 bg-gradient-to-b from-white/12 to-white/[0.03] text-slate-100 shadow-[0_10px_22px_rgba(2,6,23,0.35)] transition hover:border-white/45 hover:from-white/18 hover:to-white/[0.06]"
          >
            <span className="sr-only">Menu</span>
            <span className="relative h-[18px] w-6">
              <span
                className={`absolute left-0 top-0 h-0.5 w-6 rounded bg-current transition ${open ? 'translate-y-[8px] rotate-45' : ''}`}
              />
              <span className={`absolute left-0 top-[8px] h-0.5 w-6 rounded bg-current transition ${open ? 'opacity-0' : ''}`} />
              <span
                className={`absolute left-0 top-[16px] h-0.5 w-6 rounded bg-current transition ${open ? '-translate-y-[8px] -rotate-45' : ''}`}
              />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <>
          <button
            type="button"
            aria-label="Close menu overlay"
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-black/55 backdrop-blur-[1px]"
          />

          <div className="fixed inset-x-4 top-[98px] z-50 mx-auto w-auto max-w-6xl sm:inset-x-6 sm:top-[108px] md:inset-x-8 md:top-[118px] lg:top-[154px]">
            <nav className="overflow-hidden rounded-2xl border border-slate-600/70 bg-[#0a1220] p-2 shadow-2xl" aria-label="Site menu">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/12"
                >
                  <span>{link.label}</span>
                  <span className="text-slate-300">›</span>
                </Link>
              ))}
            </nav>
          </div>
        </>
      ) : null}
    </header>
  );
}
