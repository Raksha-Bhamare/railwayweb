import { useEffect, useRef, useState } from "react";
import { HamburgerButton, AiensuredLogo, GlowTitle, Shell, PageContainer, DashboardHeader } from "./shared";
import { useUi } from "../context/UiContext";
import {
  SOR_PREFIX,
  SOR_DPRS,
  SOR_JSON_FILES,
  SOR_VIEW_LABELS,
  SOR_COLUMNS_MAIN,
  SOR_COLUMNS_UNMATCHED,
  ITEM_TYPES,
} from "../data/dprData";
import CheckPanel from "./CheckPanel";
import ResultsTable from "./ResultsTable";

const strip = (value) => String(value).replace(/[₹,]/g, "");

// Row mapping replicated 1:1 from the original app's bundle (compliant / non-compliant branch)
function mapMainRow(record, index) {
  const qty = record.Quantity ?? 0;
  const est = record["Estimated Cost"] ?? 0;
  const dpCell =
    typeof record.Discrepancy_Percent === "number"
      ? record.Discrepancy_Percent.toFixed(2)
      : parseFloat(record.Discrepancy_Percent)
        ? parseFloat(record.Discrepancy_Percent).toFixed(2)
        : "N/A";
  const rate =
    typeof record.Rate === "number"
      ? record.Rate.toFixed(2)
      : record.Rate != null && record.Rate !== ""
        ? Number(record.Rate).toFixed(2)
        : "N/A";
  return [
    String(index + 1),
    record.Match_Key || "N/A",
    record.Quantity != null ? String(record.Quantity) : "null",
    est
      ? `₹${Number(strip(est)).toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}`
      : "N/A",
    rate,
    qty > 0 && est ? (parseFloat(strip(est)) / qty).toFixed(2) : "N/A",
    record.Expected_Cost?.toLocaleString() || "N/A",
    `${dpCell}%`,
    record.Unit || "N/A",
    record.Compliance ? "Yes" : "No",
  ];
}

// Unmatched branch of the original mapping
function mapUnmatchedRow(record, index) {
  const est = record["Estimated Cost"] ?? null;
  return [
    String(index + 1),
    record.Match_Key || "null",
    record.Quantity != null ? String(record.Quantity) : "null",
    est ? `₹${Number(strip(est)).toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}` : "N/A",
    record.Unit || "N/A",
  ];
}

export default function SorCheck() {
  const { openDrawer } = useUi();
  const [dpr, setDpr] = useState("Malkangiri-Bhadrachalam-Vol-II");
  const [itemType, setItemType] = useState("compliant_items");
  const [tolerance, setTolerance] = useState("");
  const [rows, setRows] = useState([]);
  const dataRef = useRef(null);
  const itemTypeRef = useRef(itemType);
  itemTypeRef.current = itemType;

  // Show the FULL (unfiltered) array of a category — the original does this
  // on load and whenever the Item Type select changes.
  const showFull = (type) => {
    const data = dataRef.current;
    if (!data) return;
    const source =
      type === "compliant_items"
        ? data.compliant_items
        : type === "non_compliant_items"
          ? data.non_compliant_items
          : data.unmatched_items;
    const mapper = type === "unmatched_items" ? mapUnmatchedRow : mapMainRow;
    setRows((source ?? []).map(mapper));
  };

  // Original loader: fetch on mount / DPR change, auto-switch the item type
  // when compliant_items is empty, then display the full selected array.
  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      setRows([]);
      dataRef.current = null;
      try {
        const res = await fetch(`/Results/SOR_results/${SOR_JSON_FILES[dpr]}`);
        const data = await res.json();
        if (cancelled) return;
        dataRef.current = data;
        let type = itemTypeRef.current;
        if (type === "compliant_items" && (data.compliant_items ?? []).length === 0) {
          if ((data.non_compliant_items ?? []).length > 0) type = "non_compliant_items";
          else if ((data.unmatched_items ?? []).length > 0) type = "unmatched_items";
          setItemType(type);
        }
        showFull(type);
      } catch {
        if (!cancelled) dataRef.current = null;
      }
    };
    load();
    return () => {
      cancelled = true;
    };
  }, [dpr]);

  // Original Item Type onChange: reset to the full unfiltered array
  const handleItemType = (value) => {
    setItemType(value);
    showFull(value);
  };

  // RUN CHECK: filter by parseFloat(Discrepancy_Percent) <= parseFloat(tolerance)
  const handleRun = () => {
    const data = dataRef.current;
    if (!data) return;
    const tol = parseFloat(tolerance);
    const source =
      itemType === "compliant_items"
        ? data.compliant_items
        : itemType === "non_compliant_items"
          ? data.non_compliant_items
          : null;
    if (!source) return;
    setRows(source.filter((r) => parseFloat(r.Discrepancy_Percent) <= tol).map(mapMainRow));
  };

  const suffix = dpr.toUpperCase().replace(SOR_PREFIX, "");

  return (
    <Shell className="font-inter">
      <PageContainer>
        <DashboardHeader
          left={<HamburgerButton onClick={openDrawer} />}
          right={<AiensuredLogo className="h-[45px] w-[150px]" />}
        >
          <GlowTitle className="text-[28px] max-w-[min(64%,720px)]">
            MALKANGIRI-BHADRACHALAM-{suffix}
          </GlowTitle>
        </DashboardHeader>

        <main className="mt-8 grid items-start gap-6 pb-12 lg:grid-cols-[288px_minmax(0,1fr)]">
          <CheckPanel
            dprs={SOR_DPRS}
            dpr={dpr}
            onDpr={setDpr}
            itemTypes={ITEM_TYPES}
            itemTypeValue={itemType}
            onItemType={handleItemType}
            tolerance={tolerance}
            onTolerance={setTolerance}
            onRun={handleRun}
            showControls={itemType !== "unmatched_items"}
          />
          <ResultsTable
            view={SOR_VIEW_LABELS[itemType]}
            columns={itemType === "unmatched_items" ? SOR_COLUMNS_UNMATCHED : SOR_COLUMNS_MAIN}
            rows={rows}
          />
        </main>
      </PageContainer>
    </Shell>
  );
}
