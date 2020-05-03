import { Feat, TypeFeat } from "@/shared/types/feat";

export class CharacterClass {
  public id: number;
  public name: string;
  public baseHp: number;
  public primaryAbility: AbilityScore;
  public requireDeity: boolean;
  public additionalSkills: number;
  public savingThrow: SavingThrows;
  public skills: skill[];
  public attacks: skill[];
  public defense: skill[];
  public spellSlots: Array<number[]>;
  public levels: level[];
}

export class SavingThrows {
  public fortitude: Mastery;
  public reflex: Mastery;
  public will: Mastery;
}

export class Skill {
  public name: string;
  public level: Mastery;
}

export class Level {
  public level: number;
  public buffs: Buffs;
  public type: string[];
  public type_feats: TypeFeat[];
  public features: Feat[];
}

export enum AbilityScore {
  strength = "str",
  dexterity = "dex",
  consitution = "con",
  intelligence = "int",
  wisdom = "wis",
  charisma = "cha"
}

export enum Mastery {
  trained = "trained",
  expert = "expert",
  master = "master",
  legend = "legend"
}

export enum Buffs {
  characterClass = "class",
  skill = "skill",
  general = "general",
  skillIncrease = "skill_increase",
  abilityBoost = "ability_boost",
  ancestory = "ancestory"
}
