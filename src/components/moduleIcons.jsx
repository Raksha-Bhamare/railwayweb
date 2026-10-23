export function DocIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M5 3a2 2 0 0 1 2-2h6.2a2 2 0 0 1 1.4.6L19.4 6a2 2 0 0 1 .6 1.4V21a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V3Z"
        fill="currentColor"
      />
      <path
        d="M8.5 9.5h7M8.5 13.5h7M8.5 17.5h4.5"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CheckBadgeIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="currentColor" />
      <path
        d="m7.6 12.4 2.9 3 5.9-6.4"
        stroke="#fff"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function MonitorIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="2.5" y="4" width="19" height="12.5" rx="1.6" fill="currentColor" />
      <path
        d="M9 20.5h6M12 16.5v4"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function BotIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="4" y="7.5" width="16" height="11.5" rx="2.5" fill="currentColor" />
      <path
        d="M2.4 11.5v4M21.6 11.5v4"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path d="M12 7.5V4.6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="3.6" r="1.6" fill="currentColor" />
      <circle cx="9.1" cy="12.6" r="1.35" fill="#fff" />
      <circle cx="14.9" cy="12.6" r="1.35" fill="#fff" />
      <path
        d="M9.5 16.3h5"
        stroke="#fff"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function WarnTriangleIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M12 2.6c.7 0 1.3.35 1.66.96l8.05 13.9c.76 1.3-.19 2.94-1.66 2.94H3.95c-1.47 0-2.42-1.63-1.66-2.94l8.05-13.9A1.92 1.92 0 0 1 12 2.6Z"
        fill="currentColor"
      />
      <path
        d="M12 8.6v5"
        stroke="#fff"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="12" cy="16.9" r="1.15" fill="#fff" />
    </svg>
  );
}

export function SendIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="m3.4 20.4 17.5-7.6c.8-.35.8-1.5 0-1.85L3.4 3.6c-.6-.26-1.27.24-1.17.88L3.7 10c.05.3.3.53.6.57L12.1 12 4.3 13.43c-.3.04-.55.27-.6.57l-1.47 5.52c-.1.64.57 1.14 1.17.88Z"
        fill="currentColor"
      />
    </svg>
  );
}
