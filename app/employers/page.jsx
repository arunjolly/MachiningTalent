import BookCallCTA from '@/components/BookCallCTA';

const painPoints = [
  'Open reqs delaying spindle uptime',
  'Too many resumes, too few true machinists',
  'Missed delivery dates from staffing gaps',
];

const offerings = [
  'Direct-hire recruiting for machinists and programmers',
  'Confidential replacement searches for key leaders',
  'Contract-to-hire options for urgent production needs',
  'Compensation benchmarking for precision roles',
];

export default function EmployersPage() {
  return (
    <>
      <section className="section-wrap">
        <p className="kicker">For Employers</p>
        <h1 className="mt-4 font-[var(--font-space)] text-4xl font-bold text-white md:text-5xl">Recruiting built for high-precision shops.</h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-300">
          We specialize in placing vetted CNC and other manufacturing talent that can hold tolerance, protect output, and strengthen your floor.
        </p>
      </section>

      <section className="section-wrap pt-0">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="panel p-6">
            <h2 className="text-2xl font-bold text-white">Common challenges</h2>
            <ul className="mt-4 space-y-3 text-slate-300">
              {painPoints.map((item) => (
                <li key={item} className="rounded-lg border border-white/10 bg-white/5 px-4 py-3">{item}</li>
              ))}
            </ul>
          </div>
          <div className="panel p-6">
            <h2 className="text-2xl font-bold text-white">How we help</h2>
            <ul className="mt-4 space-y-3 text-slate-300">
              {offerings.map((item) => (
                <li key={item} className="rounded-lg border border-white/10 bg-white/5 px-4 py-3">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <BookCallCTA title="Need a critical role filled this quarter?" subtitle="Book a call and get a focused search strategy in under 20 minutes." />
    </>
  );
}
