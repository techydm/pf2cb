// Store
import { ref, Ref } from "@vue/composition-api";
import { Background, BOOSTS, Boosts } from "@/shared/types/Backgrounds";

const backgrounds: Ref<Background[]> = ref([]);
const wrkBackground: Ref<Background> = ref({});

// Validators
const isBoost = (x: string): x is Boosts => BOOSTS.includes(x);

export function newBackground(): Ref<Background> {
  wrkBackground.value = new Background();
  return wrkBackground;
}

export function getBackgrounds(): Ref<Background[]> {
  // Pull data from some external source

  // Set the backgrounds in the store
  backgrounds.value = [];

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
