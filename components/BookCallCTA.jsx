export default function BookCallCTA({ title = 'Need CNC talent fast?', subtitle = 'Book a 20-minute call and we will map your hiring plan.' }) {
  return (
    <section className="section-wrap pt-0">
      <div className="panel overflow-hidden border-cyan-400/30 bg-gradient-to-r from-cyan-500/20 via-steel-800 to-spark-500/20 p-5 shadow-glow sm:p-6 md:p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="kicker">Fast Start</p>
            <h3 className="mt-4 text-xl font-bold text-white sm:text-2xl md:text-3xl">{title}</h3>
            <p className="mt-2 max-w-2xl text-slate-200">{subtitle}</p>
          </div>
          <a
            href="https://calendly.com/arun-jolly/machiningtalent-intro-call"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-steel-900 transition hover:bg-slate-100 sm:w-fit"
          >
            Book a Call
          </a>
        </div>
      </div>
    </section>
  );
}
