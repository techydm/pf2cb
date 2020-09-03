import {
  Buffs,
  BUFFS,
  CharacterClass,
  ClassFeature,
  Level
} from "@/shared/types/Class";
import { Skill } from "@/shared/types/Skills";
import { ref, Ref } from "@vue/composition-api";
import { DspSpellRow } from "@/services/spellForm";

// Store
export const classes: Ref<Array<CharacterClass>> = ref([]);
export const workingClass: Ref<CharacterClass> = ref(new CharacterClass());

// Functions
export function newClass() {
  workingClass.value = new CharacterClass();
  return workingClass;
}

export function getWorkingClass() {
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

export function removeSkill(name: string) {
  workingClass.value.skills = workingClass.value.skills.filter(
    skill => skill.name !== name
  );
  return;
}

export function addAttack(attack: Skill) {
  workingClass.value.attacks.push(attack);
  return;
}

export function removeAttack(name: string) {
  workingClass.value.attacks = workingClass.value.attacks.filter(
    skill => skill.name !== name
  );
  return;
}

export function addDefense(defence: Skill) {
  workingClass.value.defense.push(defence);
  return;
}

export function removeDefense(name: string) {
  workingClass.value.defense = workingClass.value.defense.filter(
    skill => skill.name !== name
  );
  return;
}

export function getNextLevel() {
  return workingClass.value.levels.length + 1;
}

export function generateClassFeatures(lvl: Level): string {
  let classFeatures: string = "";

  // Buffs
  lvl.buffs.map((buff: Buffs) => {
    if (lvl.buffs.indexOf(buff) === 0) {
      classFeatures = BUFFS.filter(b => b.key === buff)[0].value;
      return;
    }

    classFeatures = `${classFeatures}, ${
      BUFFS.filter(b => b.key === buff)[0].value
    }`;
    return;
  });

  // Features
  lvl.features.map((feature: ClassFeature) => {
    if (classFeatures === "") {
      classFeatures = feature.name;
      return;
    }

    classFeatures = `${classFeatures}, ${feature.name}`;
    return;
  });

  return classFeatures;
}

export function addLevel(lvl: Level) {
  lvl.classFeatures = generateClassFeatures(lvl);
  workingClass.value.levels.push(lvl);
}
