import { ref, Ref } from "@vue/composition-api";
import { Ancestry } from "@/shared/types/Ancestry";

// Store
const ancestries: Ref<Ancestry[]> = ref([]);
const wrkAncestry: Ref<Ancestry> = ref({});

export function newAncestry(): Ref<Ancestry> {
  wrkAncestry.value = new Ancestry();

  return wrkAncestry;
}

export function getAncestries(): Ref<Ancestry[]> {
  // Pull data from some external sources

  // return the backgrounds
  return ancestries;
}

export function addAncestry(ancestry: Ancestry): void {
  // Check for duplicates
  const ancestryNames = ancestries.value.map(ancest => ancest.name);
  if (ancestryNames.includes(ancestry.name)) {
    // TODO: Work on how notify user that a duplicate was submitted
    return;
  }

  // TODO: Add ancestry to other sources ie. local file, cloud DB, etc.

  ancestries.value.push(ancestry);
}
