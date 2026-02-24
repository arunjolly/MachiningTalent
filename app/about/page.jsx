import BookCallCTA from '@/components/BookCallCTA';

export default function AboutPage() {
  return (
    <>
      <section className="section-wrap">
        <p className="kicker">About Us</p>
        <h1 className="mt-4 font-[var(--font-space)] text-3xl font-bold text-white sm:text-4xl md:text-5xl">We recruit like production depends on it.</h1>
        <p className="mt-4 max-w-3xl text-base text-slate-300 sm:text-lg">
          MachiningTalent was built by recruiting professionals who focus exclusively on precision machining and advanced manufacturing.
        </p>
      </section>

      <section className="section-wrap pt-0">
        <div className="grid gap-5 md:grid-cols-3">
          <article className="panel p-5 sm:p-6">
            <h2 className="text-xl font-bold text-white">Industry Focus</h2>
            <p className="mt-3 text-sm text-slate-300">CNC milling, turning, Swiss, EDM, and quality roles across aerospace, medical, and defense suppliers.</p>
          </article>
          <article className="panel p-5 sm:p-6">
            <h2 className="text-xl font-bold text-white">Quality Over Volume</h2>
            <p className="mt-3 text-sm text-slate-300">We run disciplined searches and present a short list of candidates with real production credibility.</p>
          </article>
          <article className="panel p-5 sm:p-6">
            <h2 className="text-xl font-bold text-white">Long-Term Fit</h2>
            <p className="mt-3 text-sm text-slate-300">Placements are measured by retention, team impact, and sustainable shop performance.</p>
          </article>
        </div>
      </section>

      <BookCallCTA title="Want to work with machining specialists?" subtitle="Book a call to discuss your hiring goals or career move." />
    </>
  );
}
