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
            <ChevronDownIcon className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
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

            <div className="mt-6 rounded-xl border border-white/10 bg-[#0a1120]/70 p-4 sm:p-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-2.5 text-[15px] font-bold text-[#67e8f9]">
                <span>matched</span>
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-300/80">
                  {TEMPLATE_MATCHED.length} fields
                </span>
              </div>
              <ul>
                {TEMPLATE_MATCHED.map(([name, value]) => (
                  <li
                    key={name}
                    className="flex flex-col gap-3 rounded-lg border-b border-white/5 px-2 py-4 transition last:border-0 hover:bg-white/[0.03] sm:flex-row sm:items-center sm:justify-between sm:gap-8"
                  >
                    <span className="text-[15.2px] font-medium leading-[1.5] text-slate-300 sm:max-w-[460px]">
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

            <div className="mt-6 rounded-xl border border-white/10 bg-[#0a1120]/70 p-4 sm:p-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-2.5 text-[15px] font-bold text-[#67e8f9]">
                <span>missing</span>
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-rose-300/80">
                  {TEMPLATE_MISSING.length} fields
                </span>
              </div>
              <ul>
                {TEMPLATE_MISSING.map((name) => (
                  <li
                    key={name}
                    className="flex flex-col gap-3 rounded-lg border-b border-white/5 px-2 py-4 transition last:border-0 hover:bg-white/[0.03] sm:flex-row sm:items-center sm:justify-between sm:gap-8"
                  >
                    <span className="text-[15.2px] font-medium leading-[1.5] text-slate-300 sm:max-w-[460px]">
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
