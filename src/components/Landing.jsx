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

export default function Landing() {
  const navigate = useNavigate();

  return (
    <Shell>
      <div className="relative mx-auto w-full max-w-[1100px] px-5 py-8 sm:px-8">
        <div className="flex items-start justify-between">
          <img
            src="/assets/aiensured-logo.png"
            alt="aiensured"
            className="h-[50px] w-auto shrink-0"
          />
          <img
            src="/assets/rail-logo.png"
            alt="Indian Railways"
            className="h-[150px] w-auto shrink-0"
          />
        </div>

        {/* Measured: Roboto 40px/700, lh 48, gradient #e91e63 → #9c27b6 */}
        <h1 className="mx-auto mt-2 w-fit text-center text-[40px] font-bold leading-[48px]">
          <span className="bg-gradient-to-r from-[#e91e63] to-[#9c27b6] bg-clip-text text-transparent">
            Welcome to AiEnsured
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-[900px] text-center text-[16px] font-light leading-[24px] text-[#f8f9fa]">
          We specialize in delivering cutting-edge solutions for the railway industry.
          Explore our modules to learn more about our innovative responsible AI product
          services.
        </p>

        <h1 className="mt-20 text-center text-[36px] font-bold leading-[1.2] text-white">
          Select a Module
        </h1>

        <div className="mx-auto mt-14 grid max-w-[1620px] grid-cols-1 gap-5 pb-20 sm:grid-cols-2 lg:grid-cols-4">
          {MODULES.map(({ title, desc, path, Icon }) => (
            <button
              key={path}
              type="button"
              onClick={() => navigate(path)}
              className="group rounded-lg bg-white p-6 text-left shadow-[0_4px_14px_rgba(2,6,23,0.4)] transition hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c4136b]/60"
            >
              <Icon className="h-12 w-12 text-[#c4136b]" />
              <div className="mt-6 text-[20px] font-medium leading-[26px] text-[#212529]">
                {title}
              </div>
              <p className="mt-2 text-[16px] leading-[24px] text-[#212529]">{desc}</p>
            </button>
          ))}
        </div>
      </div>
    </Shell>
  );
}
