// Store
import { ref, Ref } from "@vue/composition-api";
import { Background } from "@/shared/types/Backgrounds";

const backgrounds: Ref<Background[]> = ref([]);

export function getBackgrounds(): Ref<Background[]> {
  // Pull data from some external source

  // Set the backgrounds in the store
  backgrounds.value = [];

  // return the backgrounds
  return backgrounds;
}
