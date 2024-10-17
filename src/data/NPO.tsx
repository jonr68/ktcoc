import { Weapon } from "./Weapon";

export interface NPO {
    name: "Marksman" | "Brawler"
    level: "Trooper" | "Tough" | "Heavy" | "Warrior";
    apl: number;
    move: number;
    save: number;
    wounds: number;
    weapon: Weapon[]
  }