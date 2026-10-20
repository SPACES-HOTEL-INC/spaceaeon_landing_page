import { Hotel, Building2, Castle, PartyPopper, Palmtree } from 'lucide-react';
import { routes } from '../config/routes';
import { useReveal } from '../hooks/useReveal';

const VERTICALS = [
  {
    Icon: Hotel,
    title: 'Stays',
    desc: 'Hand-picked hotels and boutique rooms with verified hospitality standards.',
    img: 'https://images.pexels.com/photos/8134775/pexels-photo-8134775.jpeg?auto=compress&cs=tinysrgb&w=900',
    tag: 'Hospitality',
  },
  {
    Icon: Building2,
    title: 'Shortlets & Apartments',
    desc: 'Flexible city apartments and shortlets for nights, weeks, or months at a time.',
    img: 'https://images.pexels.com/photos/8135492/pexels-photo-8135492.jpeg?auto=compress&cs=tinysrgb&w=900',
    tag: 'Flexible stays',
  },
  {
    Icon: Castle,
    title: 'Villas',
    desc: 'Private luxury villas with pools, gardens, and dedicated concierge support.',
    img: 'https://images.pexels.com/photos/2476632/pexels-photo-2476632.jpeg?auto=compress&cs=tinysrgb&w=900',
    tag: 'Private luxury',
  },
  {
    Icon: PartyPopper,
    title: 'Event Spaces',
    desc: 'Elegant venues for weddings, conferences, and milestone celebrations.',
    img: 'https://images.pexels.com/photos/12689014/pexels-photo-12689014.jpeg?auto=compress&cs=tinysrgb&w=900',
    tag: 'Celebrate',
  },
  {
    Icon: Palmtree,
    title: 'Resorts',
    desc: 'All-inclusive resorts offering escape, wellness, and world-class amenities.',
    img: 'https://images.pexels.com/photos/8765693/pexels-photo-8765693.jpeg?auto=compress&cs=tinysrgb&w=900',
    tag: 'Escape',
  },
];

export default function Ecosystem() {
  const ref = useReveal();

  return (
    <section id="ecosystem" ref={ref} className="section-pad">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <span className="reveal inline-flex items-center gap-2 rounded-full bg-navy-tint px-4 py-1.5 text-xs font-semibold text-navy">
            The Ecosystem
          </span>
          <h2 className="reveal mt-4 text-[var(--fs-h2)] font-extrabold text-ink" style={{ transitionDelay: '60ms' }}>
            Five verticals. One trusted platform.
          </h2>
          <p className="reveal mt-4 text-[var(--fs-lead)] text-ink/70" style={{ transitionDelay: '120ms' }}>
            From a single night in the city to a week-long resort escape — Spaceaeon covers every
            category of premium space, curated and verified end to end.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {VERTICALS.map((v, i) => (
            <a
              key={v.title}
              href={routes.client.explore}
              className="group reveal relative overflow-hidden rounded-3xl border border-line bg-white shadow-sm transition-all hover:-translate-y-1.5 hover:shadow-[0_22px_48px_rgba(11,31,77,0.14)]"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={v.img}
                  alt={v.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-navy backdrop-blur">
                  {v.tag}
                </span>
                <h3 className="absolute bottom-4 left-5 font-display text-xl font-bold text-white">
                  {v.title}
                </h3>
              </div>
              <div className="flex items-start gap-3 p-5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-navy-tint text-navy">
                  <v.Icon className="h-5 w-5" />
                </span>
                <p className="text-sm leading-relaxed text-ink/70">{v.desc}</p>
              </div>
            </a>
          ))}

          {/* CTA tile */}
          <a
            href={routes.client.explore}
            className="reveal group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-navy p-7 text-white shadow-[var(--shadow-navy)] transition-all hover:-translate-y-1.5"
            style={{ transitionDelay: '350ms' }}
          >
            <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-white/10 blur-2xl" />
            <div className="relative z-10">
              <h3 className="font-display text-2xl font-bold">Explore them all</h3>
              <p className="mt-2 text-sm text-white/80">
                Browse every vertical in one unified guest experience — no more juggling apps.
              </p>
            </div>
            <span className="relative z-10 mt-6 inline-flex items-center gap-1.5 text-sm font-semibold">
              Open the Client App
              <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
