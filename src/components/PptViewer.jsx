import { useEffect, useState } from "react";
import { HamburgerButton, GlowTitle, Shell, PageContainer } from "./shared";
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
        <header className="flex flex-wrap items-center gap-4 sm:gap-6">
          <HamburgerButton onClick={openDrawer} />
          <GlowTitle className="order-last min-w-0 flex-1 basis-full text-[28.8px] sm:order-none sm:basis-auto">
            Presentation Viewer
          </GlowTitle>
          <div className="flex items-center gap-3">
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
            <button type="button" aria-label="Download presentation" className="icon-btn shrink-0">
              <DownloadIcon className="h-5 w-5" />
            </button>
          </div>
        </header>

        <main className="mt-8 flex flex-col gap-6 pb-12 lg:flex-row">
          <aside className="w-full shrink-0 self-start rounded-md bg-[#161b26] p-2 max-h-[640px] overflow-y-auto lg:w-[176px]">
            <div className="px-2 py-2 text-[15px] font-semibold text-slate-100">Slides</div>
            {slides.map((s, index) => (
              <button
                key={s.title}
                type="button"
                onClick={() => setSlideIndex(index)}
                className={`mb-2 block w-full rounded-lg px-2.5 py-2.5 text-left transition ${
                  index === slideIndex
                    ? "bg-[#d63384]/85 text-white"
                    : "bg-[#232833] text-slate-200 hover:bg-[#2b3140]"
                }`}
              >
                <div className="text-[13px] font-medium leading-snug">{s.title}</div>
                <div className="mt-1 truncate text-[10px] text-slate-400">{s.bullets[0]}</div>
              </button>
            ))}
          </aside>

          <article className="min-h-[529px] flex-1 rounded-lg bg-white p-4 text-[#212529] shadow-xl sm:p-6">
            <h2 className="text-center text-[28px] font-bold leading-tight">{slide?.title}</h2>
            <ul className="mt-8 list-disc space-y-5 pl-6 text-[16px] leading-relaxed">
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
