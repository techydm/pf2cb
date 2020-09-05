import { Skill } from "@/shared/types/Skills";
import { Feat } from "@/shared/types/Feat";
import { Boosts } from "@/shared/types/AbilityScores";

export class Background {
  public id: number = 0;
  public name: string = "";
  public description: string = "";
  public boosts: Boosts[] = [];
  public skills: Skill[] = [];
  public feats: Feat[] = [];
}
