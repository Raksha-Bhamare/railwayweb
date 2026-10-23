import { useState } from "react";
import {
  HamburgerButton,
  AiensuredLogo,
  GlowTitle,
  Shell,
  PageContainer,
} from "./shared";
import { ChevronDownIcon } from "./icons";
import { CheckBadgeIcon, WarnTriangleIcon } from "./moduleIcons";
import { useUi } from "../context/UiContext";
import { TEMPLATE_DPRS, TEMPLATE_MATCHED, TEMPLATE_MISSING } from "../data/dprData";

export default function TemplatePage() {
  const { openDrawer } = useUi();
  const [dpr, setDpr] = useState(TEMPLATE_DPRS[0]);

  return (
    <Shell className="font-inter">
      <PageContainer>
        <header className="flex flex-wrap items-center gap-4 sm:gap-6">
          <HamburgerButton onClick={openDrawer} />

          <div className="relative w-[224px] shrink-0">
            <select
              value={dpr}
              onChange={(e) => setDpr(e.target.value)}
              aria-label="Select DPR"
              className="control w-full appearance-none pr-9"
            >
              {TEMPLATE_DPRS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <ChevronDownIcon className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#343a40]" />
          </div>

          <GlowTitle className="order-last min-w-0 flex-1 basis-full text-[32px] sm:order-none sm:basis-auto">
            {dpr.toUpperCase()}
          </GlowTitle>

          <AiensuredLogo className="h-9 w-[150px]" />
        </header>

        <main className="mt-8 space-y-6 pb-14">
          <section className="glass p-6 sm:p-8">
            <h3 className="flex items-center justify-center gap-3 text-[24px] font-bold text-[#10b981]">
              <CheckBadgeIcon className="h-7 w-7 shrink-0" />
              <span>Template Matched</span>
            </h3>

            <div className="mt-6 rounded-lg border border-[#4facfe]/20 bg-[#0b1425]/80 p-4 sm:p-6">
              <div className="border-b border-slate-600/50 pb-2 text-[16px] font-bold text-[#0dcaf0]">
                matched
              </div>
              <ul>
                {TEMPLATE_MATCHED.map(([name, value]) => (
                  <li
                    key={name}
                    className="flex flex-col gap-3 border-b border-slate-700/40 py-4 last:border-0 sm:flex-row sm:items-center sm:justify-between sm:gap-8"
                  >
                    <span className="text-[15.2px] font-medium leading-[1.5] text-[#cbd5e1] sm:max-w-[460px]">
                      {name}
                    </span>
                    <span className="pill pill-matched sm:w-[374px]">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="glass p-6 sm:p-8">
            <h3 className="flex items-center justify-center gap-3 text-[24px] font-bold text-[#ef4444]">
              <WarnTriangleIcon className="h-7 w-7 shrink-0" />
              <span>Template Missing</span>
            </h3>

            <div className="mt-6 rounded-lg border border-[#4facfe]/20 bg-[#0b1425]/80 p-4 sm:p-6">
              <div className="border-b border-slate-600/50 pb-2 text-[16px] font-bold text-[#4facfe]">
                missing
              </div>
              <ul>
                {TEMPLATE_MISSING.map((name) => (
                  <li
                    key={name}
                    className="flex flex-col gap-3 border-b border-slate-700/40 py-4 last:border-0 sm:flex-row sm:items-center sm:justify-between sm:gap-8"
                  >
                    <span className="text-[15.2px] font-medium leading-[1.5] text-[#cbd5e1] sm:max-w-[460px]">
                      {name}
                    </span>
                    <span className="pill pill-missing sm:w-[374px]">Missing</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </main>
      </PageContainer>
    </Shell>
  );
}
