import { ShieldCheck, Lock, Gem, ArrowUpRight } from 'lucide-react';
import { routes } from '../config/routes';
import { useReveal } from '../hooks/useReveal';

const BENEFITS = [
  {
    Icon: ShieldCheck,
    title: 'Verified Listings',
    desc: 'Every property passes Spaceaeon verification — real photos, confirmed amenities, and trusted hosts before a single booking is allowed.',
    tint: 'bg-verified-soft text-verified-dark',
  },
  {
    Icon: Lock,
    title: 'Secure Booking',
    desc: 'Encrypted payments, transparent cancellation policies, and 24/7 guest support protect every step of your journey.',
    tint: 'bg-navy-tint text-navy',
  },
  {
    Icon: Gem,
    title: 'Curated Luxury Choice',
    desc: 'From boutique shortlets to private villas and resorts — a hand-curated catalogue spanning five premium verticals.',
    tint: 'bg-gold-soft text-gold-dark',
  },
];

export default function GuestBenefits() {
  const ref = useReveal();

  return (
    <section id="guests" ref={ref} className="section-pad bg-gradient-to-b from-bg to-navy-tint/40">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Copy */}
          <div>
            <span className="reveal inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-navy shadow-sm">
              For Guests
            </span>
            <h2 className="reveal mt-4 text-[var(--fs-h2)] font-extrabold text-ink" style={{ transitionDelay: '60ms' }}>
              Book remarkable spaces with total confidence
            </h2>
            <p className="reveal mt-4 max-w-xl text-[var(--fs-lead)] text-ink/70" style={{ transitionDelay: '120ms' }}>
              Spaceaeon is built around trust. Every listing is verified, every transaction is
              secured, and every stay is backed by a support team that treats your experience
              like the only one that matters.
            </p>

            <div className="reveal mt-8 flex flex-wrap gap-3" style={{ transitionDelay: '180ms' }}>
              <a
                href={routes.client.explore}
                className="group inline-flex items-center gap-1.5 rounded-2xl bg-navy px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(0,51,173,0.28)] transition-all hover:bg-navy-700"
              >
                Start Exploring
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={routes.client.login}
                className="inline-flex items-center rounded-2xl border border-line bg-white px-6 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-navy-tint"
              >
                Sign In
              </a>
            </div>
          </div>

          {/* Cards */}
          <div className="grid gap-5">
            {BENEFITS.map((b, i) => (
              <div
                key={b.title}
                className="reveal flex gap-4 rounded-3xl border border-line bg-white p-6 shadow-sm transition-all hover:shadow-[0_14px_34px_rgba(11,31,77,0.10)]"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${b.tint}`}>
                  <b.Icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-ink">{b.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/70">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
