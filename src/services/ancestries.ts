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
