import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { routes } from '../config/routes';
import { useReveal } from '../hooks/useReveal';

const FAQS = [
  {
    q: 'What is Spaceaeon?',
    a: 'Spaceaeon is a premium multi-vertical space ecosystem that unifies Stays, Shortlets, Villas, Event Spaces, and Resorts in one trusted marketplace — serving both guests and hosts.',
    group: 'General',
  },
  {
    q: 'How do I book a space as a guest?',
    a: 'Use the Client App to browse verified listings across all five verticals. Every booking is secured by encrypted payments and backed by our cancellation and support policies.',
    group: 'Guests',
  },
  {
    q: 'Are listings really verified?',
    a: 'Yes. Every property passes Spaceaeon verification — including real photos, confirmed amenities, and host identity checks — before it appears in search results.',
    group: 'Guests',
  },
  {
    q: 'How do I become a host?',
    a: 'Register on the Spaceaeon HM platform via the Host App. You can list a property in minutes, set your pricing, and start receiving bookings across relevant verticals.',
    group: 'Hosts',
  },
  {
    q: 'What does the Spaceaeon HM platform include?',
    a: 'Smart listing tools, automated calendar sync, guest messaging, dynamic pricing suggestions, and transparent payouts — everything needed to run a profitable space business from one dashboard.',
    group: 'Hosts',
  },
  {
    q: 'How are payouts handled?',
    a: 'Hosts receive transparent, competitive payouts on a schedule they choose. Platform fees are clearly disclosed upfront — no hidden deductions from your earnings.',
    group: 'Hosts',
  },
  {
    q: 'Can I list the same property across multiple verticals?',
    a: 'Yes. A villa can be listed for stays and as an event space, for example. The HM platform lets you manage multiple vertical listings from a single dashboard.',
    group: 'Hosts',
  },
];

const GROUPS = ['All', 'Guests', 'Hosts'];

function Item({ faq, open, onToggle }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-white transition-colors hover:border-navy/20">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
        aria-expanded={open}
      >
        <span className="flex items-center gap-3">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-navy-tint text-navy">
            <HelpCircle className="h-4 w-4" />
          </span>
          <span className="font-display text-base font-semibold text-ink">{faq.q}</span>
        </span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-navy transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 pl-16 text-sm leading-relaxed text-ink/70">{faq.a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const ref = useReveal();
  const [group, setGroup] = useState('All');
  const [openIdx, setOpenIdx] = useState(0);

  const filtered = group === 'All' ? FAQS : FAQS.filter((f) => f.group === group);

  return (
    <section id="faq" ref={ref} className="section-pad">
      <div className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-12">
        <div className="text-center">
          <span className="reveal inline-flex items-center gap-2 rounded-full bg-navy-tint px-4 py-1.5 text-xs font-semibold text-navy">
            FAQ
          </span>
          <h2 className="reveal mt-4 text-[var(--fs-h2)] font-extrabold text-ink" style={{ transitionDelay: '60ms' }}>
            Questions, answered
          </h2>
          <p className="reveal mt-4 text-[var(--fs-lead)] text-ink/70" style={{ transitionDelay: '120ms' }}>
            Everything guests and hosts need to know before getting started with Spaceaeon.
          </p>
        </div>

        {/* Filter pills */}
        <div className="reveal mt-8 flex justify-center gap-2" style={{ transitionDelay: '160ms' }}>
          {GROUPS.map((g) => (
            <button
              key={g}
              onClick={() => {
                setGroup(g);
                setOpenIdx(0);
              }}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                group === g ? 'bg-navy text-white shadow-[0_6px_16px_rgba(0,51,173,0.24)]' : 'bg-white text-ink/70 border border-line hover:bg-navy-tint hover:text-navy'
              }`}
            >
              {g}
            </button>
          ))}
        </div>

        <div className="reveal mt-8 space-y-3" style={{ transitionDelay: '200ms' }}>
          {filtered.map((faq, i) => (
            <Item
              key={faq.q}
              faq={faq}
              open={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
            />
          ))}
        </div>

        <p className="reveal mt-10 text-center text-sm text-ink/60" style={{ transitionDelay: '240ms' }}>
          Still have questions?{' '}
          <a href={routes.host.registration} className="font-semibold text-navy hover:underline">
            Reach out to the Spaceaeon team
          </a>
          .
        </p>
      </div>
    </section>
  );
}
