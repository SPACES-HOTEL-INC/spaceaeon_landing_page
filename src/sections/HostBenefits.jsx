import { BarChart3, CalendarCheck2, Wallet, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { routes } from '../config/routes';
import { useReveal } from '../hooks/useReveal';

const FEATURES = [
  {
    Icon: BarChart3,
    title: 'Smart Property Listing Tools',
    desc: 'Publish across multiple verticals from one dashboard. Drag-and-drop media, dynamic pricing suggestions, and SEO-ready descriptions built in.',
  },
  {
    Icon: CalendarCheck2,
    title: 'Automated Management',
    desc: 'Sync calendars, approve bookings, and message guests automatically. The Spaceaeon HM platform handles the operational load for you.',
  },
  {
    Icon: Wallet,
    title: 'Maximum Earnings',
    desc: 'Data-driven pricing, multi-vertical exposure, and transparent payouts that put more of your revenue back in your pocket.',
  },
];

const POINTS = [
  'List across Stays, Shortlets, Villas, Events & Resorts',
  'Real-time booking calendar sync',
  'Transparent, competitive platform fees',
  'Fast, reliable payouts on your schedule',
];

export default function HostBenefits() {
  const ref = useReveal();

  return (
    <section id="hosts" ref={ref} className="section-pad">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
        <div className="overflow-hidden rounded-4xl border border-line bg-white shadow-[0_18px_50px_rgba(11,31,77,0.08)]">
          <div className="grid lg:grid-cols-2">
            {/* Left — navy panel */}
            <div className="relative overflow-hidden bg-navy p-8 text-white sm:p-12">
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
              <div className="relative z-10">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold">
                  For Hosts · Spaceaeon HM Platform
                </span>
                <h2 className="mt-5 font-display text-[var(--fs-h2)] font-extrabold leading-tight">
                  Turn your property into predictable income
                </h2>
                <p className="mt-4 max-w-md text-white/80">
                  List once, earn across five verticals. The Spaceaeon Host Management platform
                  gives homeowners everything needed to run a profitable space business — without
                  the operational chaos.
                </p>

                <ul className="mt-7 space-y-3">
                  {POINTS.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-white/90">
                      <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-verified" />
                      {p}
                    </li>
                  ))}
                </ul>

                <div className="mt-9 flex flex-wrap gap-3">
                  <a
                    href={routes.host.registration}
                    className="group inline-flex items-center gap-1.5 rounded-2xl bg-white px-6 py-3.5 text-sm font-bold text-navy transition-all hover:bg-navy-tint"
                  >
                    Become a Host
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <a
                    href={routes.host.dashboard}
                    className="inline-flex items-center rounded-2xl border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    Host Dashboard
                  </a>
                </div>
              </div>
            </div>

            {/* Right — feature cards */}
            <div className="grid gap-5 p-8 sm:p-12">
              {FEATURES.map((f, i) => (
                <div
                  key={f.title}
                  className="reveal flex gap-4 rounded-3xl border border-line bg-bg p-6 transition-all hover:border-navy/20 hover:bg-white hover:shadow-[0_14px_34px_rgba(11,31,77,0.10)]"
                  style={{ transitionDelay: `${i * 90}ms` }}
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-navy text-white shadow-[0_8px_18px_rgba(0,51,173,0.24)]">
                    <f.Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-ink">{f.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink/70">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
