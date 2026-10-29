import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  DownloadIcon,
  InfoIcon,
} from "./icons";

const ROWS_PER_PAGE = [10, 25, 50, 100];

export default function ResultsTable({ view, columns, rows = [] }) {
  const countText =
    rows.length > 0
      ? `1–${Math.min(rows.length, 100)} of ${rows.length}`
      : "0–0 of 0";

  return (
    <section className="glass overflow-hidden">
      <div className="flex items-center justify-between gap-4 px-7 py-6">
        <h2 className="text-[22px] font-extrabold tracking-[0.06em] text-white sm:text-[24px]">
          {view}
        </h2>
        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Download results"
            className="text-[#4facfe] transition hover:brightness-125"
          >
            <DownloadIcon className="h-6 w-6" />
          </button>
          <button
            type="button"
            aria-label="View info"
            className="text-[#00f2fe] transition hover:brightness-125"
          >
            <InfoIcon className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Original grid wrapper: { height: 600, width: "100%" } — rows scroll inside the box */}
      <div className="relative" style={{ height: 600 }}>
        <div className="h-full overflow-auto">
          {/* border-separate so the sticky header keeps its borders; exact DataGrid column widths (70/150/…), cells clip with ellipsis */}
          <table
            className="border-separate border-spacing-0 text-left text-[15px]"
            style={{ tableLayout: "fixed", width: columns.reduce((sum, c) => sum + (c.width || 150), 0) }}
          >
            <thead>
              <tr>
                {columns.map((column, index) => (
                  <th
                    key={column.field}
                    style={{ width: column.width }}
                    className={`sticky top-0 z-10 overflow-hidden border-b border-slate-300/40 bg-[#0e1726] text-ellipsis whitespace-nowrap py-4 pr-3 font-bold text-[#4facfe] ${
                      index === 0 ? "pl-6" : "border-l border-white/10 pl-4"
                    }`}
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
                    className={`transition-colors ${rowIndex % 2 === 1 ? "bg-slate-800/25" : "hover:bg-slate-700/20"}`}
                  >
                    {row.map((cell, colIndex) => (
                      <td
                        key={colIndex}
                        style={{ width: columns[colIndex]?.width }}
                        className={`border-b border-white/10 overflow-hidden text-ellipsis whitespace-nowrap py-[17px] pr-6 align-middle text-[#2ea37a] ${
                          colIndex === 0 ? "pl-6" : "border-l border-white/10 pl-4"
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>

        {/* Measured empty state: rgba(255,255,255,.38) overlay, #cbd5e1 14px text */}
        {rows.length === 0 && (
          <div className="absolute inset-x-0 bottom-0 top-[57px] flex items-center justify-center bg-white/[0.38]">
            <span className="text-[14px] font-normal tracking-[0.15px] text-[#cbd5e1]">
              No rows
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-wrap items-center justify-end gap-x-6 gap-y-3 px-6 py-4 text-sm text-slate-200">
        <div className="flex items-center gap-2">
          <span>Rows per page:</span>
          <div className="relative">
            <select
              aria-label="Rows per page"
              defaultValue="100"
              className="appearance-none bg-transparent pr-6 text-slate-100 outline-none"
            >
              {ROWS_PER_PAGE.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <ChevronDownIcon className="pointer-events-none absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-300" />
          </div>
        </div>

        <span>{countText}</span>

        <div className="flex items-center gap-3 text-[#4facfe]">
          <button type="button" aria-label="Previous page" disabled className="opacity-40">
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next page"
            disabled={rows.length <= 100}
            className={rows.length <= 100 ? "opacity-40" : ""}
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
