import { ref, Ref } from "@vue/composition-api";
import { Feat } from "@/shared/types/feat";

const feats: Ref<Feat[]> = ref([
  {
    id: 1,
    name: "example",
    type: ["general", "class"],
    description: "example description"
  }
]);

const wrkFeat: Ref<Feat> = ref({});

export function newFeat(): Ref<Feat> {
  wrkFeat.value = new Feat();
  return wrkFeat;
}

export function getWrkFeat(): Ref<Feat> {
  return wrkFeat;
}

export function getFeat(): Ref<Feat[]> {
  //Data needs to be pulled from external sources

  //return Feat
  return feats;
}

export function submitFeat(feat: Feat): void {
  //TODO same as in Background
  feats.value.push(feat);
}
