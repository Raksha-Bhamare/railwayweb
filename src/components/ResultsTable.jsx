import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  DownloadIcon,
  InfoIcon,
} from "./icons";

const ROWS_PER_PAGE = [10, 25, 50, 100];

function StatusPill({ value }) {
  const matched = value === "Yes";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-[3px] text-[12px] font-semibold ${
        matched
          ? "bg-emerald-400/12 text-emerald-300 ring-1 ring-inset ring-emerald-400/30"
          : "bg-rose-400/12 text-rose-300 ring-1 ring-inset ring-rose-400/30"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${matched ? "bg-emerald-400" : "bg-rose-400"}`}
      />
      {value}
    </span>
  );
}

export default function ResultsTable({ view, columns, rows = [] }) {
  const countText =
    rows.length > 0
      ? `1–${Math.min(rows.length, 100)} of ${rows.length}`
      : "0–0 of 0";

  const totalWidth = columns.reduce((sum, c) => sum + (c.width || 150), 0);

  return (
    <section className="glass overflow-hidden">
      {/* Card header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/5 px-6 py-5">
        <div className="flex min-w-0 items-center gap-3.5">
          <h2 className="truncate text-[15px] font-extrabold uppercase tracking-[0.14em] text-white">
            {view}
          </h2>
          <span className="chip">{rows.length} rows</span>
        </div>
        <div className="flex items-center gap-2.5">
          <button type="button" aria-label="Download results" className="ghost-btn">
            <DownloadIcon className="h-[17px] w-[17px]" />
          </button>
          <button type="button" aria-label="View info" className="ghost-btn">
            <InfoIcon className="h-[17px] w-[17px]" />
          </button>
        </div>
      </div>

      {/* Original grid box: fixed 600px, rows scroll inside */}
      <div className="relative" style={{ height: 600 }}>
        <div className="h-full overflow-auto">
          <table
            className="border-separate border-spacing-0 text-left text-[13px]"
            style={{ tableLayout: "fixed", width: totalWidth }}
          >
            <thead>
              <tr>
                {columns.map((column, index) => (
                  <th
                    key={column.field}
                    style={{ width: column.width }}
                    className={`sticky top-0 z-10 overflow-hidden border-b border-cyan-100/10 bg-[#060c18]/[0.98] text-[11px] font-bold uppercase tracking-[0.13em] text-cyan-300/90 text-ellipsis whitespace-nowrap ${
                      column.align === "right" ? "text-right" : "text-left"
                    } ${index === 0 ? "pl-6 pr-5" : column.align === "right" ? "border-l border-white/5 pl-3 pr-5" : "border-l border-white/5 pl-4 pr-5"} py-3.5`}
                  >
                    {column.header}
                  </th>
                ))}
              </tr>
            </thead>
            {rows.length > 0 && (
              <tbody>
                {rows.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className={`transition-colors hover:bg-cyan-300/[0.055] ${
                      rowIndex % 2 === 1 ? "bg-white/[0.015]" : ""
                    }`}
                  >
                    {row.map((cell, colIndex) => {
                      const column = columns[colIndex];
                      const isStatus = column?.field === "Compliance" && (cell === "Yes" || cell === "No");
                      return (
                        <td
                          key={colIndex}
                          style={{ width: column?.width }}
                          className={`overflow-hidden border-b border-slate-500/10 py-3 text-ellipsis whitespace-nowrap align-middle ${
                            column?.align === "right"
                              ? "pl-3 pr-5 text-right tabular-nums text-slate-200"
                              : "pl-4 pr-5 text-slate-300"
                          } ${colIndex === 0 ? "pl-6 text-[12.5px] text-slate-500" : ""}`}
                        >
                          {isStatus ? <StatusPill value={cell} /> : cell}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>

        {/* Empty state */}
        {rows.length === 0 && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 top-[46px] flex flex-col items-center justify-center gap-3 bg-white/[0.02] text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-dashed border-cyan-200/25 bg-cyan-300/5 text-cyan-300/70">
              <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                <path d="m20 20-3.6-3.6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <span className="text-[15px] font-semibold text-slate-200">No rows</span>
            <p className="text-[12.5px] text-slate-400/80">No data matches the current filters.</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="flex flex-wrap items-center justify-end gap-x-5 gap-y-3 border-t border-white/5 px-6 py-3.5 text-[13px] text-slate-300">
        <div className="flex items-center gap-2.5">
          <span className="text-[12.5px] text-slate-400">Rows per page:</span>
          <div className="relative">
            <select
              aria-label="Rows per page"
              defaultValue="100"
              className="h-8 appearance-none rounded-lg border border-white/10 bg-[#0a1120] pl-3 pr-8 text-[12.5px] tabular-nums text-slate-100 outline-none transition hover:border-cyan-300/40"
            >
              {ROWS_PER_PAGE.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <ChevronDownIcon className="pointer-events-none absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
          </div>
        </div>

        <span className="tabular-nums text-slate-400">{countText}</span>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Previous page"
            disabled
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-cyan-300 opacity-30"
          >
            <ChevronLeftIcon className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Next page"
            disabled={rows.length <= 100}
            className={`flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-cyan-300 transition enabled:hover:border-cyan-300/40 enabled:hover:bg-cyan-300/10 ${
              rows.length <= 100 ? "opacity-30" : ""
            }`}
          >
            <ChevronRightIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
