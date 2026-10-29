import { useLocation, useNavigate } from "react-router-dom";
import { useUi } from "../context/UiContext";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Template", path: "/template" },
  { label: "SOR Check", path: "/sor" },
  { label: "PPT Generation", path: "/ppt-generation" },
  { label: "Rag ChatBot", path: "/chatbot" },
];

export default function Drawer() {
  const { drawerOpen, closeDrawer } = useUi();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <>
      <div
        onClick={closeDrawer}
        className={`fixed inset-0 z-40 bg-[#02040a]/70 backdrop-blur-[3px] transition-opacity duration-200 ${
          drawerOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
      />
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-white/10 bg-[#080d19]/95 p-5 shadow-[24px_0_60px_-30px_rgba(0,0,0,0.9)] backdrop-blur-xl transition-transform duration-200 ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Main navigation"
      >
        <div className="mb-8 flex items-center justify-between">
          <img src="/assets/aiensured-logo.png" alt="aiensured" className="h-8 w-auto" />
          <button
            type="button"
            onClick={closeDrawer}
            aria-label="Close menu"
            className="ghost-btn border-white/5"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
              <path
                d="m6 6 12 12M18 6 6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <p className="mb-3 px-1 text-[10.5px] font-bold uppercase tracking-[0.22em] text-slate-500">
          Modules
        </p>
        <nav className="space-y-1.5">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.path;
            return (
              <button
                key={link.path}
                type="button"
                onClick={() => {
                  navigate(link.path);
                  closeDrawer();
                }}
                className={`flex w-full items-center gap-3 rounded-lg py-2.5 pl-3 pr-2 text-left text-[13.5px] font-semibold transition ${
                  active
                    ? "border-l-2 border-cyan-300 bg-gradient-to-r from-cyan-400/15 to-transparent pl-2.5 text-white"
                    : "border-l-2 border-transparent text-slate-400 hover:bg-white/5 hover:text-slate-100"
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    active
                      ? "bg-cyan-300 shadow-[0_0_9px_rgba(34,211,238,0.95)]"
                      : "bg-slate-600"
                  }`}
                />
                {link.label}
              </button>
            );
          })}
        </nav>

        <div className="mt-auto pt-6">
          <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-300/90">
              AiEnsured
            </p>
            <p className="mt-1 text-[11.5px] leading-relaxed text-slate-500">
              Responsible AI for the railway industry
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
