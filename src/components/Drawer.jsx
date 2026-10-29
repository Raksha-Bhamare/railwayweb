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
        className={`fixed inset-0 z-40 bg-black/60 transition-opacity duration-200 ${
          drawerOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
      />
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 border-r border-slate-700/60 bg-[#0b1322] p-5 shadow-2xl transition-transform duration-200 ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Main navigation"
      >
        <div className="mb-6 flex items-center justify-between">
          <img src="/assets/aiensured-logo.png" alt="aiensured" className="h-8 w-auto" />
          <button
            type="button"
            onClick={closeDrawer}
            aria-label="Close menu"
            className="rounded-md p-1.5 text-slate-400 transition hover:bg-slate-700/40 hover:text-white"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
              <path
                d="m6 6 12 12M18 6 6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
        <nav className="space-y-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link.path}
              type="button"
              onClick={() => {
                navigate(link.path);
                closeDrawer();
              }}
              className={`w-full rounded-lg px-3 py-2.5 text-left text-sm font-semibold transition ${
                pathname === link.path
                  ? "bg-sky-500/15 text-sky-300"
                  : "text-slate-300 hover:bg-slate-700/40 hover:text-white"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
}
