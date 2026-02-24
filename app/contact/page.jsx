export default function ContactPage() {
  return (
    <section className="section-wrap">
      <p className="kicker">Contact</p>
      <h1 className="mt-4 font-[var(--font-space)] text-3xl font-bold text-white sm:text-4xl md:text-5xl">Book a call with Machining Talent.</h1>
      <p className="mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
        Tell us whether you are hiring or exploring new opportunities. We will respond within one business day.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <div className="panel p-5 sm:p-6">
          <h2 className="text-xl font-bold text-white">Schedule</h2>
          <p className="mt-3 text-slate-300">
            Pick a time directly on Calendly and we will confirm the intro call right away.
          </p>
          <a
            href="https://calendly.com/arun-jolly/machiningtalent-intro-call"
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-spark-500 px-5 py-2.5 text-sm font-bold text-white hover:bg-spark-600 sm:w-auto"
          >
            Book a Call
          </a>
        </div>

        <div className="panel p-5 sm:p-6">
          <h2 className="text-xl font-bold text-white">Who we serve</h2>
          <ul className="mt-3 space-y-2 text-slate-300">
            <li>Employers with urgent CNC and leadership openings</li>
            <li>Machinists, setup technicians, and programmers</li>
            <li>U.S.-based precision manufacturing teams</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
