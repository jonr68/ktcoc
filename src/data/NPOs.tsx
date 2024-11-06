import { NPO } from "./NPO";
import {
  HeavyBlades,
  HeavyFirearm,
  HeavyKnife,
  ToughBlades,
  TrooperBlades,
  TrooperFirearm,
  TrooperKnife,
  TrooperSpecialWeapon,
  WarriorFirearm,
  WarriorKnife,
} from "./Weapons";

export const BrawlerTrooper: NPO = {
  id: crypto.randomUUID(),
  name: "Brawler",
  level: "Trooper",
  apl: 2,
  move: 6,
  save: 5,
  wounds: 7,
  weapon: [TrooperBlades],
};

export const BrawlervTough: NPO = {
  id: crypto.randomUUID(),
  name: "Brawler",
  level: "Tough",
  apl: 2,
  move: 5,
  save: 4,
  wounds: 10,
  weapon: [ToughBlades],
};

export const BrawlervHeavy: NPO = {
  id: crypto.randomUUID(),
  name: "Brawler",
  level: "Heavy",
  apl: 3,
  move: 6,
  save: 3,
  wounds: 14,
  weapon: [HeavyBlades],
};

export const MarksmanTrooper: NPO = {
  id: crypto.randomUUID(),
  name: "Marksman",
  level: "Trooper",
  apl: 2,
  move: 6,
  save: 5,
  wounds: 7,
  weapon: [TrooperFirearm, TrooperSpecialWeapon, TrooperKnife],
};

export const MarksmanWarrior: NPO = {
  id: crypto.randomUUID(),
  name: "Marksman",
  level: "Warrior",
  apl: 2,
  move: 6,
  save: 4,
  wounds: 8,
  weapon: [WarriorFirearm, WarriorKnife],
};

export const MarksmanHeavy: NPO = {
  id: crypto.randomUUID(),
  name: "Marksman",
  level: "Heavy",
  apl: 3,
  move: 6,
  save: 3,
  wounds: 14,
  weapon: [HeavyFirearm, HeavyKnife],
};
