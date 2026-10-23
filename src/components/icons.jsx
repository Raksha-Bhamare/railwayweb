export function MenuIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 6.5h16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M7 12h13" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M4 17.5h16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

export function ChevronDownIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function DownloadIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 3a1 1 0 0 1 1 1v8.17l2.88-2.88a1 1 0 1 1 1.41 1.42l-4.58 4.58a1 1 0 0 1-1.42 0L6.71 10.7a1 1 0 1 1 1.41-1.41L11 12.17V4a1 1 0 0 1 1-1Z" />
      <path d="M4 14a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3a1 1 0 1 1 2 0v3a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-3a1 1 0 0 1 1-1Z" />
    </svg>
  );
}

export function InfoIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z" />
      <path
        d="M12 10.2a.9.9 0 0 1 .9.9v4.6a.9.9 0 1 1-1.8 0v-4.6a.9.9 0 0 1 .9-.9Z"
        fill="#0b1220"
      />
      <circle cx="12" cy="7.6" r="1.05" fill="#0b1220" />
    </svg>
  );
}

export function ChevronLeftIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="m14 6-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ChevronRightIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="m10 6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
