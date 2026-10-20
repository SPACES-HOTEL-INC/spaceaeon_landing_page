import { ArrowUpRight, ShieldCheck, Star, Compass, Home } from 'lucide-react';
import { routes } from '../config/routes';
import { useReveal } from '../hooks/useReveal';

const STATS = [
  { value: '5', label: 'Space Verticals' },
  { value: '12k+', label: 'Curated Listings' },
  { value: '98%', label: 'Verified Hosts' },
];

export default function Hero() {
  const ref = useReveal();

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[80vh] flex-col justify-center overflow-hidden pt-24 pb-12 sm:pt-28 lg:pt-32"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-tint/70 via-bg to-bg" />
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-navy/10 blur-3xl" />
        <div className="absolute -right-24 top-40 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-8xl px-5 sm:px-8 lg:px-12">
        {/* Opening statement — big & bold */}
        <div className="mx-auto max-w-5xl text-center reveal" style={{ transitionDelay: '40ms' }}>
          <h1 className="font-display font-extrabold leading-[0.98] tracking-tight text-ink"
              style={{ fontSize: 'clamp(3rem, 7.5vw, 6.25rem)' }}>
            The premium
            <span className="block text-gradient-navy">multi-vertical space ecosystem</span>
          </h1>
          <h2 className="mx-auto mt-6 max-w-3xl font-display text-[var(--fs-display)] font-extrabold leading-[1.05] text-ink">
            One ecosystem for every kind of
            <span className="text-gradient-navy"> extraordinary space</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[var(--fs-lead)] text-ink/70">
            Spaceaeon unifies Stays, Shortlets, Villas, Event Spaces, and Resorts into a single
            premium marketplace — where guests discover remarkable places and hosts turn property
            into predictable income.
          </p>
        </div>

        {/* Dual action cards */}
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 reveal" style={{ transitionDelay: '140ms' }}>
          {/* Guests */}
          <a
            href={routes.client.explore}
            className="group relative overflow-hidden rounded-3xl border border-line bg-white p-7 shadow-[0_12px_40px_rgba(11,31,77,0.08)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(11,31,77,0.14)] sm:p-8"
          >
            <div className="relative z-10 flex items-start justify-between">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-navy-tint text-navy">
                <Compass className="h-6 w-6" />
              </span>
              <ArrowUpRight className="h-5 w-5 text-navy/40 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-navy" />
            </div>
            <h3 className="mt-5 font-display text-2xl font-bold text-ink">For Guests</h3>
            <p className="mt-2 text-sm text-ink/70">
              Explore verified stays & spaces across five verticals — book with confidence,
              backed by secure payments and real reviews.
            </p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy">
              Explore Stays & Spaces
              <ArrowUpRight className="h-4 w-4" />
            </span>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1 rounded-full bg-verified-soft px-2.5 py-1 text-xs font-semibold text-verified-dark">
                <ShieldCheck className="h-3 w-3" /> Verified listings
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-gold-soft px-2.5 py-1 text-xs font-semibold text-gold-dark">
                <Star className="h-3 w-3 fill-gold-dark" /> Top rated
              </span>
            </div>
          </a>

          {/* Hosts */}
          <a
            href={routes.host.registration}
            className="group relative overflow-hidden rounded-3xl bg-navy p-7 text-white shadow-[var(--shadow-navy)] transition-all hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,51,173,0.38)] sm:p-8"
          >
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
            <div className="relative z-10 flex items-start justify-between">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/15 text-white">
                <Home className="h-6 w-6" />
              </span>
              <ArrowUpRight className="h-5 w-5 text-white/60 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
            </div>
            <h3 className="mt-5 font-display text-2xl font-bold">For Homeowners</h3>
            <p className="mt-2 text-sm text-white/80">
              Become a host on the Spaceaeon HM platform — list in minutes, automate bookings,
              and maximize earnings across every vertical.
            </p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-white">
              Become a Host
              <ArrowUpRight className="h-4 w-4" />
            </span>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full bg-white/15 px-2.5 py-1 text-xs font-semibold text-white">
                Smart pricing
              </span>
              <span className="rounded-full bg-white/15 px-2.5 py-1 text-xs font-semibold text-white">
                Auto management
              </span>
            </div>
          </a>
        </div>

        {/* Stats strip */}
        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-3 gap-4 rounded-3xl border border-line bg-white/70 p-5 shadow-sm backdrop-blur reveal" style={{ transitionDelay: '220ms' }}>
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-2xl font-extrabold text-navy sm:text-3xl">{s.value}</div>
              <div className="mt-1 text-xs font-medium text-ink/60 sm:text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
