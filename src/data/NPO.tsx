import { Weapons } from "./Weapon";

export interface NPO {
    name: string;
    level: string;
    apl: number;
    move: number;
    save: number;
    wounds: number;
    weapon: Weapons
  }