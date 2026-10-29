// Static sample data modelled on the GatiShkti / AiEnsured screens.

export const SOR_PREFIX = "MALKANGIRI-BHADRACHALAM-";

export const SOR_DPRS = [
  "Malkangiri-Bhadrachalam-Vol-II",
  "Malkangiri-Bhadrachalam-Vol-2",
  "Malkangiri-Bhadrachalam-DPR",
];

// Result JSONs shipped with the static build — the exact files the original app fetches.
export const SOR_JSON_FILES = {
  "Malkangiri-Bhadrachalam-Vol-II": "Malkangiri_Bhadrachalam_Vol_II_pdf_sor_check_results.json",
  "Malkangiri-Bhadrachalam-Vol-2": "Malkangiri_Bhadrachalam_Vol_2_pdf_sor_check_results.json",
  "Malkangiri-Bhadrachalam-DPR": "Malkangiri-Bhadrachalam_DPR.json",
};

export const SOR_VIEW_LABELS = {
  compliant_items: "COMPLIANT ITEMS VIEW",
  non_compliant_items: "NON COMPLIANT ITEMS VIEW",
  unmatched_items: "UNMATCHED ITEMS VIEW",
};

// Column sets exactly as configured in the original MUI DataGrid
export const SOR_COLUMNS_MAIN = [
  { field: "id", header: "ID", width: 70 },
  { field: "Match_Key", header: "MATCH_KEY", width: 150 },
  { field: "Quantity", header: "QUANTITY", width: 150 },
  { field: "Estimated_Cost", header: "ESTIMATED_COST", width: 170 },
  { field: "Rate", header: "SOR_RATE", width: 150 },
  { field: "Dpr_Rate", header: "DPR_RATE", width: 150 },
  { field: "Expected_Cost", header: "EXPECTED_COST", width: 150 },
  { field: "Discrepancy_Percent", header: "DISCREPANCY %", width: 180 },
  { field: "Unit", header: "UNIT", width: 150 },
  { field: "Compliance", header: "STATUS", width: 150 },
];

export const SOR_COLUMNS_UNMATCHED = [
  { field: "id", header: "ID", width: 70 },
  { field: "Match_Key", header: "MATCHED KEY", width: 150 },
  { field: "Quantity", header: "QUANTITY", width: 150 },
  { field: "Estimated_Cost", header: "ESTIMATED COST", width: 170 },
  { field: "Unit", header: "UNIT", width: 150 },
];

export const ITEM_TYPES = [
  { value: "compliant_items", label: "Compliant Items", needsTolerance: true },
  { value: "non_compliant_items", label: "Non Compliant Items", needsTolerance: true },
  { value: "unmatched_items", label: "Unmatched Items", needsTolerance: false },
];

export const TEMPLATE_DPRS = [
  "Malkangiri–Bhadrachalam-DPR",
  "JUNAGARH-NABARANGPUR-DPR",
  "MALKANGIRI–BHADRACHALAM-DPR",
];

export const TEMPLATE_MATCHED = [
  ["1. Project Name", "1. Project Name: MALKANGIRI - BHADRACHALAM NEW BG Line Project"],
  ["2. Zonal Railways/Divisions Involved", "2. Zonal Railways/Divisions Involved: East Coast Railway"],
  [
    "3. States/Districts Covered",
    "3. States/Districts Covered: - State covered: Odisha and Telangana - Districts covered: Malkangiri in Odisha and Bhadradri Kothagudem in Telangana",
  ],
  ["4. Route Length (Km)", "200.60 Km"],
  ["5. Track Length (Km)", "Route length for the new line is 173.600 km."],
  ["6. Estimated Cost (in Cr.)", "Rs. 4080.66"],
  ["7. Completion Cost (in Cr.)", "Rs. 4080.66"],
  ["8. FIRR", "The FIRR (Financial Internal Rate of Return) of the project is 10.1%."],
  ["9. EIRR", "- The Economic Internal Rate of Return (EIRR) for the project is calculated to be 28.7%."],
  [
    "10. Cost per Route Km (Cr.) & Cost per Track Km (Cr.)",
    "10. Cost per Route Km (Cr.): Rs. 20.69 Cost per Track Km (Cr.): Rs. 17.90",
  ],
];

export const TEMPLATE_MISSING = [
  "13. Compliance with Evaluation Committee Evaluation Date",
  "14. Compliance Check Observation 1",
  "15. Compliance Check Observation 2",
  "18. Date of LOA",
  "19. Activity Timeline",
  "22. Pillars Fixation",
  "23. Geo-tech Investigation",
  "25. GM Approval",
  "26. DPR Vetting",
  "27. Compliance with GM/PHOD Observations",
  "28. Software/Tool for Alignment Study",
  "30. Speed Improvement Measures",
];

const MALKANGIRI_SLIDES = [
  {
    title: "Introduction to MALKANGIRI-BHADRACHALAM BG Line Project",
    bullets: [
      "The MALKANGIRI-BHADRACHALAM New BG Line Project is a significant railway initiative under the East Coast Railway jurisdiction, improving connectivity between Odisha and Telangana.",
    ],
  },
  {
    title: "Project Details",
    bullets: [
      "The project spans a route length of 200.60 km with a track length of 173.600 km, covering Malkangiri in Odisha and Bhadradri Kothagudem in Telangana.",
    ],
  },
  {
    title: "Financial and Economic Returns",
    bullets: [
      "The FIRR (Financial Internal Rate of Return) of the project is 10.1%.",
      "The Economic Internal Rate of Return (EIRR) for the project is calculated to be 28.7%.",
    ],
  },
  {
    title: "Cost Summary",
    bullets: [
      "Estimated cost of the project is Rs. 4080.66 Cr with an equal completion cost.",
      "Cost per Route Km (Cr.): Rs. 20.69; Cost per Track Km (Cr.): Rs. 17.90.",
    ],
  },
];

export const PRESENTATIONS = {
  "JUNAGARH-NABARANGPUR-DPR": [
    {
      title: "Introduction to JUNAGARH-NABARANGPUR BG Line Project",
      bullets: [
        "The JUNAGARH-NABARANGPUR New BG Line Project is a significant railway initiative under the East Coast Railway jurisdiction. It involves the Sambalpur and Waltair Divisions, covering Kalahandi and Nabarangpur districts in Odisha. The project aims to enhance connectivity and economic growth in these regions.",
      ],
    },
    {
      title: "Project Details",
      bullets: [
        "The project spans a route length of 116.213 km with stations, bridges and allied infrastructure planned across Kalahandi and Nabarangpur districts.",
      ],
    },
    {
      title: "Financial and Economic Returns",
      bullets: [
        "The Financial Internal Rate of Return (FIRR) for the project has been computed on the basis of construction cost and projected revenue, alongside the Economic Internal Rate of Return (EIRR).",
      ],
    },
    {
      title: "Freight Traffic Justification",
      bullets: [
        "The project is justified based on revenue from freight movement, including industrial and mineral traffic expected on the new BG line.",
      ],
    },
    {
      title: "Traffic Study and Projections",
      bullets: [
        "The traffic study includes projections for bauxite and other commodity flows over the horizon years to establish the feasibility of the line.",
      ],
    },
    {
      title: "Alignment and Infrastructure Considerations",
      bullets: [
        "The alignment was finalized considering existing infrastructure, sub-soil conditions and minimal displacement of populated areas.",
      ],
    },
    {
      title: "Innovations in Construction",
      bullets: [
        "Modern construction methods and monitoring tools are proposed to accelerate delivery and ensure quality execution.",
      ],
    },
  ],
  "Malkangiri–Bhadrachalam-DPR": MALKANGIRI_SLIDES,
  "Malkangiri_Bhadrachalam_Vol_II": MALKANGIRI_SLIDES,
};

export const CHAT_DPRS = [
  "Malkangiri–Bhadrachalam-DPR",
  "JUNAGARH-NABARANGPUR-DPR",
  "Malkangiri-Bhadrachalam-Vol-2",
];
