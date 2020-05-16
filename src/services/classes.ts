import { CharacterClass } from "@/shared/types/class";

export function newClass() {
  const cls: CharacterClass = new CharacterClass();
  cls.primaryAbility = "strength";
}
