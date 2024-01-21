type HouseDto = {
  id: string;
  name: string;
  houseColours: string;
  founder: string;
  animal: string;
  element: string;
  ghost: string;
  commonRoom: string;
  heads: HouseHeadDto[];
  traits: TraitDto[];
};

type HouseHeadDto = {
  id: string;
  firstName: string;
  lastName: string;
};

type TraitDto = {
  id: string;
  name: TraitName;
};

export enum TraitName {
  NONE = "None",
  COURAGE = "Courage",
  BRAVERY = "Bravery",
  DETERMINATION = "Determination",
  DARING = "Daring",
  NERVE = "Nerve",
  CHIVALARY = "Chivalary",
  HARDWORKING = "Hardworking",
  PATIENCE = "Patience",
  FAIRNESS = "Fairness",
  JUST = "Just",
  LOYALTY = "Loyalty",
  MODESTY = "Modesty",
  WIT = "Wit",
  LEARNING = "Learning",
  WISDOM = "Wisdom",
  ACCEPtANCE = "Acceptance",
  INTELIGENCE = "Inteligence",
  CREATIVITY = "Creativity",
  RESOURCEFULNESS = "Resourcefulness",
  PRIDE = "Pride",
  CUNNING = "Cunning",
  AMBITION = "Ambition",
  SELFPRESERVATION = "Selfpreservation",
}

type ColumnsData = {
  header: string;
  accessorKey: string;
};

export type { HouseDto, HouseHeadDto, TraitDto, ColumnsData };
