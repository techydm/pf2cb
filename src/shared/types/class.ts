import { Feat, TypeFeat } from "@/shared/types/feat";

export type AbilityScores =
  | "strength"
  | "dexterity"
  | "constitution"
  | "intelligence"
  | "wisdom"
  | "charisma";
export const ABILITYSCORES = [
  "strength",
  "dexterity",
  "constitution",
  "intelligence",
  "wisdom",
  "charisma"
];
export type Mastery = "trained" | "expert" | "master" | "legend";
export const MASTERY = ["trained", "expert", "master", "legend"];
export type Buffs =
  | "class"
  | "skill"
  | "general"
  | "skill_increase"
  | "ability_boost"
  | "ancestory";
export const BUFFS = [
  "class",
  "skill",
  "general",
  "skill_increase",
  "ability_boost",
  "ancestory"
];

export class SavingThrows {
  public fortitude!: Mastery;
  public reflex!: Mastery;
  public will!: Mastery;
}

export class Skill {
  public name!: string;
  public level!: Mastery;
}

export class Level {
  public level!: number;
  public buffs!: Buffs;
  public type!: string[];
  public type_feats!: TypeFeat[];
  public features!: Feat[];
}

export class CharacterClass {
  public id: number = 0;
  public name: string = "";
  public baseHp: number = 0;
  public primaryAbility!: AbilityScores;
  public requireDeity: boolean = false;
  public additionalSkills: number = 0;
  public savingThrow: SavingThrows = new SavingThrows();
  public skills: Skill[] = [];
  public attacks: Skill[] = [];
  public defense: Skill[] = [];
  public spellSlots: Array<number[]> = [];
  public levels: Level[] = [];
}
