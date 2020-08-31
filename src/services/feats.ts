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

export function getFeat(): Ref<Feat[]> {
  //Data needs to be pulled from external sources

  //return Feat
  return feats;
}

export function addFeat(feat: Feat): void {
  //check for duplicates
  const featNames = feats.value.map(ancest => ancest.name);
  if (featNames.includes(feat.name)) {
    //TODO: Notify user that a duplicat was submittet
    return;
  }
  feat.id = feats.value.length + 2;

  //TODO: Add feat to other sources

  feats.value.push(feat);
}
