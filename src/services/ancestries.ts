import { ref, Ref } from "@vue/composition-api";
import { Ancestry } from "@/shared/types/Ancestry";

// Store
const ancestries: Ref<Ancestry[]> = ref([
  {
    id: 1,
    name: "Dwarf",
    hp: "10",
    size: "medium",
    speed: 15,
    abilityBoosts: ["constitution", "wisdom", "free"],
    abilityFlaws: ["charisma"],
    languages: ["common", "dwarf"],
    languagesAccess: [
      "goblin",
      "gnomish",
      "jotun",
      "terran",
      "undercommon",
      "orcish"
    ],
    traits: ["dwarf", "human"],
    senses: ["darkvision", "low-light"],
    heritages: [
      {
        name: "ancient-blooded dwarf",
        description:
          "Some amazing content that the player can use to further there character uniqueness"
      }
    ]
  }
]);
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

  ancestry.id = ancestries.value.length + 2;

  // TODO: Add ancestry to other sources ie. local file, cloud DB, etc.

  ancestries.value.push(ancestry);
}
