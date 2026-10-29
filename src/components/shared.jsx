import { MenuIcon } from "./icons";

export function Shell({ children, className = "" }) {
  return (
    <div
      className={`shell-bg relative min-h-screen overflow-x-clip font-roboto text-slate-100 ${className}`}
    >
      {children}
    </div>
  );
}

export function PageContainer({ children }) {
  // Original dashboard pages are full-width (container-fluid, no max-width):
  // .sor-dashboard { py-4 px-4 } => 24px horizontal / 16px vertical padding
  return <div className="w-full px-6 py-4">{children}</div>;
}

export function HamburgerButton({ onClick }) {
  return (
    <button type="button" aria-label="Open menu" onClick={onClick} className="icon-btn shrink-0">
      <MenuIcon className="h-5 w-5" />
    </button>
  );
}

export function AiensuredLogo({ className = "" }) {
  return (
    <img src="/assets/aiensured-logo.png" alt="aiensured" className={`shrink-0 ${className || "h-11 w-auto"}`} />
  );
}

export function GlowTitle({ children, className = "" }) {
  return (
    <h1 className={`page-title text-center ${className}`}>
      <span>{children}</span>
    </h1>
  );
}
