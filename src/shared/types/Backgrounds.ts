import { Skill } from "@/shared/types/Skills";
import { Feat } from "@/shared/types/Feat";

export type Boosts =
  | "strength"
  | "dexterity"
  | "constitution"
  | "intelligence"
  | "wisdom"
  | "charisma"
  | "free";
export const BOOSTS = [
  "strength",
  "dexterity",
  "constitution",
  "intelligence",
  "wisdom",
  "charisma",
  "free"
];

export class Background {
  public id!: number;
  public name!: string;
  public description!: string;
  public boosts!: Boosts[];
  public skills!: Skill[];
  public feats!: Feat[];
}
