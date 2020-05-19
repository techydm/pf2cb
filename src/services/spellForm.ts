import { Ref, ref } from "@vue/composition-api";

// Classes
export class SpellRow {
  characterLevel: number = 0;
  cantrips: number = 0;
  "1st": number = 0;
  "2nd": number = 0;
  "3rd": number = 0;
  "4th": number = 0;
  "5th": number = 0;
  "6th": number = 0;
  "7th": number = 0;
  "8th": number = 0;
  "9th": number = 0;
  "10th": number = 0;
  [key: string]: number;
}
export class DspSpellRow {
  characterLevel: number = 0;
  cantrips: string = "";
  "1st": string = "";
  "2nd": string = "";
  "3rd": string = "";
  "4th": string = "";
  "5th": string = "";
  "6th": string = "";
  "7th": string = "";
  "8th": string = "";
  "9th": string = "";
  "10th": string = "";
  [key: string]: string | number;
}

// Store
const tableData: Ref<Array<DspSpellRow>> = ref([]);
const headerClass: string = "is-dark";
const columns: Ref<Array<object>> = ref([
  {
    field: "characterLevel",
    label: "Character Level",
    width: "40",
    numeric: true,
    centered: true,
    headerClass
  },
  {
    field: "cantrips",
    label: "Cantrips",
    width: "40",
    numeric: true,
    centered: true,
    headerClass
  },
  {
    field: "1st",
    label: "1st",
    width: "40",
    numeric: true,
    centered: true,
    headerClass
  },
  {
    field: "2nd",
    label: "2nd",
    width: "40",
    numeric: true,
    centered: true,
    headerClass
  },
  {
    field: "3rd",
    label: "3rd",
    width: "40",
    numeric: true,
    centered: true,
    headerClass
  },
  {
    field: "4th",
    label: "4th",
    width: "40",
    numeric: true,
    centered: true,
    headerClass
  },
  {
    field: "5th",
    label: "5th",
    width: "40",
    numeric: true,
    centered: true,
    headerClass
  },
  {
    field: "6th",
    label: "6th",
    width: "40",
    numeric: true,
    centered: true,
    headerClass
  },
  {
    field: "7th",
    label: "7th",
    width: "40",
    numeric: true,
    centered: true,
    headerClass
  },
  {
    field: "8th",
    label: "8th",
    width: "40",
    numeric: true,
    centered: true,
    headerClass
  },
  {
    field: "9th",
    label: "9th",
    width: "40",
    numeric: true,
    centered: true,
    headerClass
  },
  {
    field: "10th",
    label: "10th",
    width: "40",
    numeric: true,
    centered: true,
    headerClass
  }
]);
export const spellLevels: Array<string> = [
  "cantrips",
  "1st",
  "2nd",
  "3rd",
  "4th",
  "5th",
  "6th",
  "7th",
  "8th",
  "9th",
  "10th"
];

// Functions
export function getTableData() {
  return { data: tableData, columns };
}

export function addRow(slot: SpellRow) {
  // Variable to transform SpellRow (numbers) to DspSpellRow (strings)
  const newRow: DspSpellRow = new DspSpellRow();

  // First Instance
  if (tableData.value.length === 0) {
    for (const key in slot) {
      if (key !== "characterLevel") {
        if (slot[key] === 0) {
          newRow[key] = "-";
        } else {
          newRow[key] = slot[key];
        }
      }
    }
    newRow.characterLevel = 1;
    tableData.value.push(newRow);
    return;
  }

  const previousValues: DspSpellRow =
    tableData.value[tableData.value.length - 1];
  for (const key in slot) {
    if (key !== "characterLevel") {
      if (slot[key] === 0) {
        newRow[key] = previousValues[key];
      } else {
        newRow[key] = slot[key];
      }
    }
  }
  newRow.characterLevel = tableData.value.length + 1;
  tableData.value.push(newRow);
  return;
}
