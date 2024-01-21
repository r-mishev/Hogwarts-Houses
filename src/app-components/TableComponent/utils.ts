import { HouseHeadDto, TraitDto } from "../../app-common/types";

const camelCaseToTitle = (input: string): string => {
  return input
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase());
};

const renderHeads = (heads: HouseHeadDto[]): string => {
  return heads.map((head) => `${head.firstName} ${head.lastName}`).join(", ");
};

const renderTraits = (traits: TraitDto[]) => {
  return traits.map((trait) => trait.name).join(", ");
};

const renderArrayData = (accessor: string, rawData: unknown[]): string => {
  if (!Array.isArray(rawData)) {
    return String(rawData);
  }

  if (accessor === "heads") {
    return renderHeads(rawData as HouseHeadDto[]);
  } else if (accessor === "traits") {
    return renderTraits(rawData as TraitDto[]);
  } else {
    return rawData.map(String).join(", ");
  }
};

export { camelCaseToTitle, renderArrayData };
