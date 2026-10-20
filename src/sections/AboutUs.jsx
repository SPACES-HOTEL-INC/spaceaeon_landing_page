import { Globe2, Target, Users, ArrowUpRight } from 'lucide-react';
import { routes } from '../config/routes';
import { useReveal } from '../hooks/useReveal';

const PILLARS = [
  {
    Icon: Target,
    title: 'Our Vision',
    desc: 'To become the most trusted multi-vertical space platform — where every guest finds a perfect place and every host unlocks the full value of their property.',
  },
  {
    Icon: Globe2,
    title: 'Our Mission',
    desc: 'To unify fragmented hospitality verticals under one ecosystem, powered by verification, automation, and a relentless focus on experience quality.',
  },
  {
    Icon: Users,
    title: 'Our Community',
    desc: 'A growing network of verified hosts and discerning guests who believe premium spaces should be accessible, trustworthy, and effortless to book.',
  },
];

export default function AboutUs() {
  const ref = useReveal();

  return (
    <section id="about" ref={ref} className="section-pad bg-gradient-to-b from-navy-tint/40 to-bg">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_1fr]">
          {/* Story */}
          <div>
            <span className="reveal inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-navy shadow-sm">
              About Spaceaeon
            </span>
            <h2 className="reveal mt-4 text-[var(--fs-h2)] font-extrabold text-ink" style={{ transitionDelay: '60ms' }}>
              Building the world's most complete space ecosystem
            </h2>
            <div className="reveal mt-5 space-y-4 text-[var(--fs-lead)] text-ink/75" style={{ transitionDelay: '120ms' }}>
              <p>
                Spaceaeon was born from a simple frustration: great spaces are everywhere, but
                discovering and managing them is scattered across a dozen platforms. We believed
                one ecosystem could do better.
              </p>
              <p>
                So we built it. A single premium marketplace spanning five verticals — Stays,
                Shortlets, Villas, Event Spaces, and Resorts — with a dual-sided architecture that
                serves guests and hosts with equal seriousness.
              </p>
              <p>
                For guests, that means verified quality and secure booking across every category
                of space. For hosts, it means the Spaceaeon HM platform — tools to list, automate,
                and maximize earnings without the operational headache.
              </p>
            </div>

            <a
              href={routes.client.explore}
              className="reveal mt-8 inline-flex items-center gap-1.5 rounded-2xl bg-navy px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(0,51,173,0.28)] transition-all hover:bg-navy-700"
              style={{ transitionDelay: '180ms' }}
            >
              Experience Spaceaeon
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          {/* Pillars */}
          <div className="grid gap-5">
            {PILLARS.map((p, i) => (
              <div
                key={p.title}
                className="reveal flex gap-4 rounded-3xl border border-line bg-white p-6 shadow-sm transition-all hover:shadow-[0_14px_34px_rgba(11,31,77,0.10)]"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-navy-tint text-navy">
                  <p.Icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-ink">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/70">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
