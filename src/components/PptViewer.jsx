import { useEffect, useState } from "react";
import { HamburgerButton, GlowTitle, Shell, PageContainer, DashboardHeader } from "./shared";
import { ChevronLeftIcon, ChevronRightIcon, DownloadIcon } from "./icons";
import { useUi } from "../context/UiContext";
import { PRESENTATIONS } from "../data/dprData";

export default function PptViewer() {
  const { openDrawer } = useUi();
  const keys = Object.keys(PRESENTATIONS);
  const [presentation, setPresentation] = useState(keys[0]);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    setSlideIndex(0);
  }, [presentation]);

  const slides = PRESENTATIONS[presentation] ?? [];
  const slide = slides[slideIndex];

  return (
    <Shell className="font-inter">
      <PageContainer>
        <DashboardHeader
          left={<HamburgerButton onClick={openDrawer} />}
          right={
            <>
              <div className="relative w-[250px]">
                <select
                  value={presentation}
                  onChange={(e) => setPresentation(e.target.value)}
                  aria-label="Select a presentation"
                  className="control w-full appearance-none pr-9"
                >
                  {keys.map((key) => (
                    <option key={key} value={key}>
                      {key}
                    </option>
                  ))}
                </select>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#343a40]"
                  aria-hidden="true"
                >
                  <path
                    d="m6 9 6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <button type="button" aria-label="Download presentation" className="icon-btn h-11 w-11 shrink-0">
                <DownloadIcon className="h-5 w-5" />
              </button>
            </>
          }
        >
          <GlowTitle className="text-[28px] max-w-[min(50%,560px)]">Presentation Viewer</GlowTitle>
        </DashboardHeader>

        <main className="mt-8 flex flex-col gap-6 pb-12 lg:flex-row">
          <aside className="w-full shrink-0 self-start rounded-lg bg-[#23282e] p-2.5 max-h-[640px] overflow-y-auto lg:w-[208px]">
            <div className="px-2 pb-3 pt-2 text-[17px] font-semibold text-white">Slides</div>
            {slides.map((s, index) => (
              <button
                key={s.title}
                type="button"
                onClick={() => setSlideIndex(index)}
                className={`mb-2.5 block min-h-[128px] w-full rounded-lg px-3 py-3 text-left transition ${
                  index === slideIndex
                    ? "bg-[#b13a67] text-white"
                    : "bg-[#2f353d] text-slate-200 hover:bg-[#38414a]"
                }`}
              >
                <div className="text-[14px] font-semibold leading-[1.4]">{s.title}</div>
                <div className="mt-2 truncate text-[11px] text-white/70">{s.bullets[0]}</div>
              </button>
            ))}
          </aside>

          <article className="min-h-[529px] flex-1 rounded-lg bg-white p-4 text-[#212529] shadow-xl sm:p-6">
            <h2 className="text-center text-[28px] font-bold leading-tight">{slide?.title}</h2>
            <ul className="mt-16 list-disc space-y-6 pl-7 text-[17px] leading-[1.6]">
              {slide?.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        </main>

        <div className="flex justify-center gap-4 pb-8">
          <button
            type="button"
            aria-label="Previous slide"
            disabled={slideIndex === 0}
            onClick={() => setSlideIndex((i) => Math.max(0, i - 1))}
            className="flex items-center justify-center rounded-lg bg-[#6c757d] px-4 py-2 text-white transition enabled:hover:bg-[#5a6268] disabled:opacity-65"
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            disabled={slideIndex >= slides.length - 1}
            onClick={() => setSlideIndex((i) => Math.min(slides.length - 1, i + 1))}
            className="flex items-center justify-center rounded-lg bg-[#6c757d] px-4 py-2 text-white transition enabled:hover:bg-[#5a6268] disabled:opacity-65"
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>
      </PageContainer>
    </Shell>
  );
}
