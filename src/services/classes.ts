import { CharacterClass, Skill } from "@/shared/types/class";
import { ref, Ref } from "@vue/composition-api";
import { DspSpellRow } from "@/services/spellForm";

// Store
export const classes: Ref<Array<CharacterClass>> = ref([]);
export const workingClass: Ref<CharacterClass> = ref({});

// Functions
export function newClass() {
  workingClass.value = new CharacterClass();
  return workingClass;
}

export function addSpellSlots(dspSlots: DspSpellRow[]) {
  const slots: Array<number[]> = dspSlots.map((slot: DspSpellRow) => {
    const level: number[] = [];
    for (const key in slot) {
      if (key !== "characterLevel") {
        if (slot[key] === "-") {
          level.push(0);
        } else {
          level.push(parseInt(`${slot[key]}`));
        }
      }
    }
    return level;
  });

  workingClass.value.spellSlots = slots;
  return;
}

export function addClass(cls: CharacterClass) {
  classes.value.push(cls);
}

export function addSkill(skill: Skill) {
  workingClass.value.skills.push(skill);
  return;
}

export function addAttack(attack: Skill) {
  workingClass.value.attacks.push(attack);
  return;
}

export function addDefense(defence: Skill) {
  workingClass.value.defense.push(defence);
  return;
}
