import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';
import { routes } from '../config/routes';

const NAV_LINKS = [
  { label: 'Ecosystem', href: '#ecosystem' },
  { label: 'Guests', href: '#guests' },
  { label: 'Hosts', href: '#hosts' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass border-b border-line shadow-[0_4px_20px_rgba(11,31,77,0.06)]' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-8xl items-center justify-between px-5 py-3.5 sm:px-8 lg:px-12">
        <a href="#top" aria-label="Spaceaeon home">
          <Logo />
        </a>

        {/* Center links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-xl px-4 py-2 text-sm font-medium text-ink/80 transition-colors hover:bg-navy-tint hover:text-navy"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right CTAs */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={routes.client.login}
            className="rounded-xl px-4 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-navy-tint"
          >
            Sign In
          </a>
          <a
            href={routes.host.registration}
            className="group inline-flex items-center gap-1.5 rounded-xl bg-navy px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(0,51,173,0.28)] transition-all hover:bg-navy-700 hover:shadow-[0_12px_28px_rgba(0,51,173,0.36)]"
          >
            List Your Space
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-white text-navy lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile sheet */}
      <div
        className={`overflow-hidden border-t border-line bg-white lg:hidden transition-[max-height,opacity] duration-300 ${
          open ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="space-y-1 px-5 py-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-base font-medium text-ink/85 transition-colors hover:bg-navy-tint hover:text-navy"
            >
              {link.label}
            </a>
          ))}
          <div className="grid grid-cols-2 gap-3 pt-3">
            <a
              href={routes.client.login}
              className="rounded-xl border border-line px-4 py-3 text-center text-sm font-semibold text-navy"
            >
              Sign In
            </a>
            <a
              href={routes.host.registration}
              className="rounded-xl bg-navy px-4 py-3 text-center text-sm font-semibold text-white"
            >
              List Your Space
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
