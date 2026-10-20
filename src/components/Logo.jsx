/**
 * Spaceaeon wordmark logo.
 * Uses the official brand mark (dark squircle + white arch + teal dot)
 * sourced from public/favicon.svg.
 */
export default function Logo({ className = '', markSize = 40 }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 512 512"
        width={markSize}
        height={markSize}
        aria-hidden="true"
        className="shrink-0 rounded-[22%] shadow-[0_6px_16px_rgba(10,15,29,0.28)]"
      >
        <rect width="512" height="512" rx="112" fill="#0A0F1D" />
        <path
          fill="#FFFFFF"
          fillRule="evenodd"
          d="M 136 368 L 136 248 C 136 181.7 189.7 128 256 128 C 322.3 128 376 181.7 376 248 L 376 368 L 304 368 L 304 248 C 304 221.5 282.5 200 256 200 C 229.5 200 208 221.5 208 248 L 208 368 Z M 256 100 A 32 32 0 0 1 256 164 A 32 32 0 0 1 256 100 Z"
        />
        <circle cx="256" cy="132" r="30" fill="#60C3AD" />
      </svg>
      <span className="font-display text-xl font-extrabold tracking-tight text-navy">
        Space<span className="text-navy-soft">aeon</span>
      </span>
    </span>
  );
}
