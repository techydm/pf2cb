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
  { key: "class", value: "Class Feat" },
  { key: "skill", value: "Skill Feat" },
  { key: "general", value: "General Feat" },
  { key: "skill_increase", value: "Skill Increase" },
  { key: "ability_boost", value: "Ability Boost" },
  { key: "ancestry", value: "Ancestry Feat" }
];

export class SavingThrows {
  public fortitude!: Mastery;
  public reflex!: Mastery;
  public will!: Mastery;
}

export class Skill {
  public name: string = "";
  public level!: Mastery;
}

export class ClassFeature {
  public name: string = "";
  public tags: Array<string> = [];
  public description: string = "";
}

export class Level {
  public level: number = 0;
  public buffs: Array<Buffs> = [];
  public features: Array<ClassFeature> = [];
  public classFeatures: string = ""; // This for displaying on the LevelTable component
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
