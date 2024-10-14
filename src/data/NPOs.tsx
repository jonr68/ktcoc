export interface NPO {
  name: string;
  level: string;
  apl: number;
  move: number;
  save: number;
  wounds: number;
}

export const BrawlervTrouper: NPO = {
  name: "Brawler",
  level: "Trooper",
  apl: 2,
  move: 6,
  save: 5,
  wounds: 7,
};

export const BrawlervTough: NPO = {
  name: "Brawler",
  level: "Tough",
  apl: 2,
  move: 5,
  save: 4,
  wounds: 10,
};

export const BrawlervHeavy: NPO = {
  name: "Brawler",
  level: "Heavy",
  apl: 3,
  move: 6,
  save: 3,
  wounds: 14,
};
