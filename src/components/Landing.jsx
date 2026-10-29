import { useNavigate } from "react-router-dom";
import { Shell } from "./shared";
import { BotIcon, CheckBadgeIcon, DocIcon, MonitorIcon } from "./moduleIcons";

const MODULES = [
  {
    title: "Template",
    desc: "Create and manage document templates",
    path: "/template",
    Icon: DocIcon,
  },
  {
    title: "SOR Check",
    desc: "Verify and validate SOR Check documents",
    path: "/sor",
    Icon: CheckBadgeIcon,
  },
  {
    title: "PPT Generation",
    desc: "Generate professional presentations PPT",
    path: "/ppt-generation",
    Icon: MonitorIcon,
  },
  {
    title: "Rag ChatBot",
    desc: "Interact with AI-powered chatbot using RAG",
    path: "/chatbot",
    Icon: BotIcon,
  },
];

function ArrowIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M4.5 12h15m0 0-6-6m6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Landing() {
  const navigate = useNavigate();

  return (
    <Shell>
      <div className="relative z-10 mx-auto w-full max-w-[1100px] px-5 py-8 sm:px-8">
        <div className="flex items-start justify-between">
          <img
            src="/assets/aiensured-logo.png"
            alt="aiensured"
            className="h-[50px] w-auto shrink-0"
          />
          <img
            src="/assets/rail-logo.png"
            alt="Indian Railways"
            className="h-[113px] w-[150px] shrink-0"
          />
        </div>

        {/* Measured hero: Roboto 40px/700, lh 48, gradient #e91e63 → #9c27b6 */}
        <h1 className="mx-auto mt-2 w-fit text-center text-[40px] font-bold leading-[48px]">
          <span className="bg-gradient-to-r from-[#e91e63] to-[#9c27b6] bg-clip-text text-transparent">
            Welcome to AiEnsured
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-[456px] text-center text-[16px] font-light leading-[24px] text-slate-300">
          We specialize in delivering cutting-edge solutions for the railway industry.
          Explore our modules to learn more about our innovative responsible AI product
          services.
        </p>

        <h1 className="mt-16 text-center text-[36px] font-bold leading-[1.2] text-white">
          Select a Module
        </h1>

        <div className="mx-auto mt-10 grid max-w-[760px] grid-cols-1 gap-5 pb-16 sm:grid-cols-2">
          {MODULES.map(({ title, desc, path, Icon }) => (
            <button
              key={path}
              type="button"
              onClick={() => navigate(path)}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-6 text-left backdrop-blur transition duration-200 hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-[0_24px_50px_-22px_rgba(34,211,238,0.45)] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/50"
            >
              <span className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-300/10 opacity-0 blur-2xl transition group-hover:opacity-100" />

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/15 to-blue-500/15 text-cyan-300 ring-1 ring-inset ring-cyan-200/25">
                <Icon className="h-7 w-7" />
              </div>

              <div className="mt-5 text-[19px] font-semibold text-white">{title}</div>
              <p className="mt-1.5 flex-1 text-[14.5px] leading-relaxed text-slate-400">
                {desc}
              </p>

              <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-cyan-300 transition-all group-hover:gap-3 group-hover:text-cyan-200">
                Open
                <ArrowIcon className="h-4 w-4" />
              </span>
            </button>
          ))}
        </div>

        <p className="pb-10 text-center text-[12px] font-medium tracking-[0.18em] text-slate-500/90 uppercase">
          AiEnsured · Responsible AI for Indian Railways
        </p>
      </div>
    </Shell>
  );
}
