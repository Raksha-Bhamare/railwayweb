import { ChevronDownIcon } from "./icons";

function SelectField({ label, id, value, onChange, options }) {
  return (
    <div>
      <label htmlFor={id} className="field-label mb-2.5 block">
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="control w-full appearance-none pr-10"
        >
          {options.map((option) => (
            <option key={option.value ?? option} value={option.value ?? option}>
              {option.label ?? option}
            </option>
          ))}
        </select>
        <ChevronDownIcon className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
      </div>
    </div>
  );
}

export default function CheckPanel({
  dprs,
  dpr,
  onDpr,
  itemTypes,
  itemTypeValue,
  onItemType,
  tolerance,
  onTolerance,
  onRun,
  showControls = true,
}) {
  return (
    <section className="glass px-6 py-6 sm:px-8 sm:py-7">
      {/* Panel heading */}
      <div className="mb-7 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-gradient-to-br from-cyan-300 to-blue-500 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
          <h2 className="text-[15px] font-extrabold uppercase tracking-[0.14em] text-white">
            Check Configuration
          </h2>
        </div>
        <span className="chip hidden sm:inline-flex">Discrepancy % ≤ Tolerance</span>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          onRun?.();
        }}
        noValidate
      >
        <div className="grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
          <SelectField
            label="Select DPR"
            id="dpr"
            value={dpr}
            onChange={onDpr}
            options={dprs.map((label) => ({ value: label, label }))}
          />

          <SelectField
            label="Item Type"
            id="item-type"
            value={itemTypeValue}
            onChange={onItemType}
            options={itemTypes.map(({ value, label }) => ({ value, label }))}
          />

          {/* The original hides tolerance + RUN CHECK when "Unmatched Items" is selected */}
          {showControls && (
            <div>
              <label htmlFor="tolerance" className="field-label mb-2.5 block">
                Tolerance %
              </label>
              <input
                id="tolerance"
                type="text"
                inputMode="decimal"
                placeholder="e.g. 5"
                value={tolerance}
                onChange={(e) => onTolerance(e.target.value)}
                className="control w-full placeholder:text-slate-500"
              />
            </div>
          )}
        </div>

        {showControls && (
          <button type="submit" className="run-check mt-6 w-full">
            Run Check
          </button>
        )}
      </form>
    </section>
  );
}
