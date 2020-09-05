import { Boosts } from "@/shared/types/AbilityScores";
import { Heritage } from "@/shared/types/Heritage";

export class Ancestry {
  public id: number = 0;
  public name: string = "";
  public hp: number = 0;
  public size: string = "";
  public speed: number = 0;
  public abilityBoosts: Boosts[] = [];
  public abilityFlaws: Boosts[] = [];
  public languages: string[] = [];
  public languagesAccess: string[] = [];
  public traits: string[] = [];
  public senses: string[] = [];
  public heritages: Heritage[] = [];
}
