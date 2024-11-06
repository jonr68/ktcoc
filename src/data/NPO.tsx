import { UUID } from "crypto";
import { Weapon } from "./Weapon";

export interface NPO {
    id:string
    name: "Marksman" | "Brawler"
    level: "Trooper" | "Tough" | "Heavy" | "Warrior";
    apl: number;
    move: number;
    save: number;
    wounds: number;
    weapon: Weapon[]
  }