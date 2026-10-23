import { ChevronDownIcon } from "./icons";

const labelClass = "field-label mb-2.5 block";

function SelectField({ label, id, value, onChange, options }) {
  return (
    <div className="mb-6">
      <label htmlFor={id} className={labelClass}>
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
        <ChevronDownIcon className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#343a40]" />
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
    <section className="glass p-6 sm:p-7">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onRun?.();
        }}
        noValidate
      >
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
          <>
            <div className="mb-7">
              <label htmlFor="tolerance" className={labelClass}>
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

            <button type="submit" className="run-check w-full">
              Run Check
            </button>
          </>
        )}
      </form>
    </section>
  );
}
