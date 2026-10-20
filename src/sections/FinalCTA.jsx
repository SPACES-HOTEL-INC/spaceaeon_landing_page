import { ArrowUpRight, Sparkles } from 'lucide-react';
import { routes } from '../config/routes';

export default function FinalCTA() {
  return (
    <section className="px-5 pb-16 sm:px-8 lg:px-12">
      <div className="relative mx-auto max-w-8xl overflow-hidden rounded-4xl bg-navy px-6 py-14 text-center text-white shadow-[var(--shadow-navy)] sm:px-12 sm:py-20">
        <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 -bottom-24 h-72 w-72 rounded-full bg-gold/15 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold">
            Join the Spaceaeon ecosystem
          </span>
          <h2 className="mt-5 font-display text-[var(--fs-h2)] font-extrabold leading-tight">
            Your next extraordinary space starts here
          </h2>
          <p className="mt-4 text-white/80">
            Whether you're planning a getaway or preparing to list your property, Spaceaeon
            brings every premium space within reach.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={routes.client.explore}
              className="group inline-flex items-center gap-1.5 rounded-2xl bg-white px-6 py-3.5 text-sm font-bold text-navy transition-all hover:bg-navy-tint"
            >
              Explore as Guest
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={routes.host.registration}
              className="inline-flex items-center rounded-2xl border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Become a Host
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
