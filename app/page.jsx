import Link from 'next/link';
import Image from 'next/image';
import BookCallCTA from '@/components/BookCallCTA';

const stats = [
  { label: 'Avg. Time to Present', value: '5 days' },
  { label: 'Roles Filled', value: '600+' },
  { label: 'Retention at 12 Months', value: '91%' },
];

const specialties = [
  'CNC Machinists',
  'Setup Machinist',
  'CNC Programmers',
  'CMM Programmers',
  'Production Scheduling',
  'Swiss Operators',
  'Applications Engineers',
  'Shop Leadership',
];
const cncImages = [
  {
    src: '/cnc-spindle.jpg',
    alt: 'CNC spindle cutting a precision metal cavity',
    label: 'Precision CNC and Manufacturing Experience',
    note: 'Candidates screened for speed, technical ability, judgement, and reliability',
    position: 'object-center',
  },
  {
    src: '/cnc-gearcut.jpg',
    alt: 'Gear cutting process on an advanced CNC machine',
    label: 'Precision Tolerance Finishing Across All Industries',
    note: 'Precision roles where micron-level quality and consistency matter.',
    position: 'object-center',
  },
  {
    src: '/cnc-spindle.jpg',
    alt: 'Close-up of CNC spindle and chips during active machining',
    label: 'Complex Machining Environments',
    note: 'Operators who can hold tolerance under speed and production pressure.',
    position: 'object-top',
  },
];

export default function HomePage() {
  return (
    <>
      <section className="section-wrap pb-10">
        <p className="kicker">Precision Recruiting</p>
        <div className="mt-6 grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-10">
          <div>
            <h1 className="font-[var(--font-space)] text-3xl font-bold leading-tight text-white sm:text-4xl md:text-6xl">
              Build your{' '}
              <span className="bg-gradient-to-r from-slate-200 via-sky-300 to-slate-400 bg-clip-text text-transparent">
                dream CNC team
              </span>{' '}
              without slowing production.
            </h1>
            <p className="mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
              MachiningTalent connects precision manufacturers with proven machining professionals across setup, programming,
              and operations leadership.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
              <a
                href="https://calendly.com/arun-jolly/machiningtalent-intro-call"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full bg-spark-500 px-6 py-3 text-sm font-bold text-white hover:bg-spark-600 sm:w-auto"
              >
                Book a Call
              </a>
              <Link
                href="/employers"
                className="inline-flex w-full items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-slate-200 hover:border-white/40 hover:text-white sm:w-auto"
              >
                Hire Talent
              </Link>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 sm:grid-rows-2">
            <article className="panel group relative overflow-hidden sm:col-span-2">
              <Image
                src={cncImages[0].src}
                alt={cncImages[0].alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={`h-60 w-full object-cover transition duration-500 group-hover:scale-[1.02] md:h-72 ${cncImages[0].position}`}
              />
              <div className="h-60 md:h-72" />
              <div className="absolute inset-0 bg-gradient-to-t from-steel-950 via-steel-950/20 to-transparent" />
              <div className="absolute bottom-0 p-4 sm:p-5">
                <p className="text-[11px] font-semibold tracking-[0.1em] text-cyan-200 sm:text-xs sm:uppercase sm:tracking-[0.2em]">{cncImages[0].label}</p>
                <p className="mt-2 hidden max-w-xl text-sm text-slate-100 sm:block">{cncImages[0].note}</p>
              </div>
            </article>

            {cncImages.slice(1).map((image) => (
              <article key={image.label} className="panel group relative overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 24vw"
                  className={`h-52 w-full object-cover transition duration-500 group-hover:scale-[1.03] md:h-48 ${image.position}`}
                />
                <div className="h-52 md:h-48" />
                <div className="absolute inset-0 bg-gradient-to-t from-steel-950 via-steel-950/20 to-transparent" />
                <div className="absolute bottom-0 p-4">
                  <p className="text-[11px] font-semibold tracking-[0.1em] text-cyan-200 sm:text-xs sm:uppercase sm:tracking-[0.2em]">{image.label}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrap pt-0">
        <div className="panel p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Role Coverage</p>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {specialties.map((item) => (
              <span key={item} className="rounded-full border border-white/15 bg-white/5 px-3.5 py-2 text-xs font-medium text-slate-100 sm:px-4 sm:text-sm">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrap pt-0">
        <div className="grid gap-4 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="panel p-6">
              <p className="text-3xl font-bold text-white">{stat.value}</p>
              <p className="mt-2 text-sm text-slate-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-wrap pt-0">
        <div className="grid gap-5 md:grid-cols-3">
          <div className="panel p-6">
            <p className="text-sm font-semibold text-cyan-200">1. Discovery</p>
            <h2 className="mt-2 text-xl font-bold text-white">Define your must-haves</h2>
            <p className="mt-3 text-sm text-slate-300">We align on machine types, tolerances, schedule, and team culture.</p>
          </div>
          <div className="panel p-6">
            <p className="text-sm font-semibold text-cyan-200">2. Vetting</p>
            <h2 className="mt-2 text-xl font-bold text-white">Skill + floor fit screening</h2>
            <p className="mt-3 text-sm text-slate-300">Each candidate is screened on technical depth and production reliability.</p>
          </div>
          <div className="panel p-6">
            <p className="text-sm font-semibold text-cyan-200">3. Placement</p>
            <h2 className="mt-2 text-xl font-bold text-white">Launch and retention support</h2>
            <p className="mt-3 text-sm text-slate-300">We support offer, onboarding, and first-90-day retention check-ins.</p>
          </div>
        </div>
      </section>

      <BookCallCTA />
    </>
  );
}
