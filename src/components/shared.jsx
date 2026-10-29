import { MenuIcon } from "./icons";

export function Shell({ children, className = "" }) {
  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-[#0a101c] via-[#0e1524] to-[#151b31] text-slate-100 font-roboto ${className}`}
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

export function HamburgerButton({
  onClick,
  className = "h-[42px] w-[42px] rounded-[10px] bg-[#1b2534] hover:bg-[#233149]",
}) {
  return (
    <button
      type="button"
      aria-label="Open menu"
      onClick={onClick}
      className={`flex shrink-0 items-center justify-center text-[#4a90e2] transition ${className}`}
    >
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
    <h1 className={`page-title text-center min-w-0 truncate whitespace-nowrap ${className}`}>
      <span>{children}</span>
    </h1>
  );
}

// Dashboard page header: side controls are pinned to the edges, the glowing
// title stays perfectly centered between them (as on the original screens).
export function DashboardHeader({ left, right, children }) {
  return (
    <header className="relative flex items-center justify-center py-1">
      <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between">
        <div className="flex items-center gap-4">{left}</div>
        <div className="flex items-center gap-3">{right}</div>
      </div>
      {children}
    </header>
  );
}
