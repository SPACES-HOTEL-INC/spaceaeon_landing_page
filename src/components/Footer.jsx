import { Rocket, Facebook, Instagram, Twitter, Linkedin, Mail } from 'lucide-react';
import Logo from './Logo';
import { routes } from '../config/routes';

const GUEST_RESOURCES = [
  { label: 'Explore Stays', href: routes.client.explore },
  { label: 'Shortlets & Apartments', href: routes.client.explore },
  { label: 'Luxury Villas', href: routes.client.explore },
  { label: 'Event Spaces', href: routes.client.explore },
  { label: 'Resorts', href: routes.client.explore },
];

const HOST_TOOLS = [
  { label: 'Become a Host', href: routes.host.registration },
  { label: 'Host Dashboard', href: routes.host.dashboard },
  { label: 'Listing Tools', href: routes.host.dashboard },
  { label: 'Earnings Calculator', href: routes.host.dashboard },
  { label: 'Host Guidelines', href: routes.host.registration },
];

const COMPANY = [
  { label: 'About Spaceaeon', href: '#about' },
  { label: 'The Ecosystem', href: '#ecosystem' },
  { label: 'Guest Benefits', href: '#guests' },
  { label: 'Host Benefits', href: '#hosts' },
  { label: 'FAQ', href: '#faq' },
];

const SOCIALS = [
  { Icon: Facebook, label: 'Facebook' },
  { Icon: Instagram, label: 'Instagram' },
  { Icon: Twitter, label: 'Twitter' },
  { Icon: Linkedin, label: 'LinkedIn' },
];

function Column({ title, links }) {
  return (
    <div>
      <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-navy">{title}</h4>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="text-sm text-ink/70 transition-colors hover:text-navy"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto max-w-8xl px-5 py-14 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand block */}
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink/70">
              Spaceaeon is a premium multi-vertical space ecosystem — connecting guests with
              remarkable stays and empowering hosts to monetize their spaces at scale.
            </p>
            <div className="mt-5 flex items-center gap-2.5">
              {SOCIALS.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#top"
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-xl border border-line text-navy transition-colors hover:bg-navy hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <Column title="Guest Resources" links={GUEST_RESOURCES} />
          <Column title="Host Tools" links={HOST_TOOLS} />
          <Column title="Company" links={COMPANY} />
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-line pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-ink/60">
            © {new Date().getFullYear()} Spaceaeon. All rights reserved. The premium multi-vertical space ecosystem.
          </p>
          <div className="flex items-center gap-5 text-xs text-ink/60">
            <a href="#top" className="hover:text-navy">Privacy Policy</a>
            <a href="#top" className="hover:text-navy">Terms of Service</a>
            <span className="inline-flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5" /> hello@spaceaeon.com
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
