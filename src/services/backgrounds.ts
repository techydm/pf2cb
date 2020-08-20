// Store
import { ref, Ref } from "@vue/composition-api";
import { Background, BOOSTS, Boosts } from "@/shared/types/Backgrounds";
import { Skill } from "@/shared/types/Skills";

const backgrounds: Ref<Background[]> = ref([]);
const wrkBackground: Ref<Background> = ref({});

// Validators
const isBoost = (x: string): x is Boosts => BOOSTS.includes(x);

// Functions
export function newBackground(): Ref<Background> {
  wrkBackground.value = new Background();
  return wrkBackground;
}

export function getBackgrounds(): Ref<Background[]> {
  // Pull data from some external source

  // return the backgrounds
  return backgrounds;
}

export function getWorkingBackground(): Ref<Background> {
  return wrkBackground;
}

export function addBoost(boost: string): void {
  // TODO: Validate that there the boost doesn't already exist
  if (isBoost(boost)) {
    wrkBackground.value.boosts.push(boost);
  }

  // TODO: Error handling
  return;
}

export function submitBackground(background: Background): void {
  // TODO: Decide how I'm going to handle IDs
  // TODO: Validate the background make sure not making duplicate
  backgrounds.value.push(background);

  // TODO: Async function writing the data to the disk and/or sending it to remote server
}

export function addSkill(skill: Skill): void {
  wrkBackground.value.skills.push(skill);
  return;
}

export function removeSkill(name: string): void {
  wrkBackground.value.skills = wrkBackground.value.skills.filter(
    skill => skill.name !== name
  );
  return;
}
