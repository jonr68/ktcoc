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
  id: "0-0-0-0-0",
  name: "Brawler",
  level: "Trooper",
  apl: 2,
  move: 6,
  save: 5,
  woundsRemaining: 7,
  totalWounds: 7,
  injuryThreshold: 3,
  weapon: [TrooperBlades],
};

export const BrawlervTough: NPO = {
  id: "0-0-0-0-0",
  name: "Brawler",
  level: "Tough",
  apl: 2,
  move: 5,
  save: 4,
  woundsRemaining: 10,
  totalWounds: 10,
  injuryThreshold: 4,
  weapon: [ToughBlades],
};

export const BrawlervHeavy: NPO = {
  id: "0-0-0-0-0",
  name: "Brawler",
  level: "Heavy",
  apl: 3,
  move: 6,
  save: 3,
  woundsRemaining: 14,
  totalWounds: 14,
  injuryThreshold: 6,
  weapon: [HeavyBlades],
};

export const MarksmanTrooper: NPO = {
  id: "0-0-0-0-0",
  name: "Marksman",
  level: "Trooper",
  apl: 2,
  move: 6,
  save: 5,
  woundsRemaining: 7,
  totalWounds: 7,
  injuryThreshold: 3,
  weapon: [TrooperFirearm, TrooperSpecialWeapon, TrooperKnife],
};

export const MarksmanWarrior: NPO = {
  id: "0-0-0-0-0",
  name: "Marksman",
  level: "Warrior",
  apl: 2,
  move: 6,
  save: 4,
  woundsRemaining: 8,
  totalWounds: 8,
  injuryThreshold: 3,
  weapon: [WarriorFirearm, WarriorKnife],
};

export const MarksmanHeavy: NPO = {
  id: "0-0-0-0-0",
  name: "Marksman",
  level: "Heavy",
  apl: 3,
  move: 6,
  save: 3,
  woundsRemaining: 14,
  totalWounds: 14,
  injuryThreshold: 6,
  weapon: [HeavyFirearm, HeavyKnife],
};
