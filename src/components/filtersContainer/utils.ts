import { DropdownData } from "../dropdown/types";
import { Source } from "./types";

export const getSourcesIndex = (dropdown: DropdownData[]) => {
  let ind = -1;
  dropdown.map((dropdown, index) => {
    if (dropdown.name === "Sources") {
      ind = index;
    }
  });

  return ind;
};

export const transformSources = (sourcesData: Source[]) => {
  const transformedSources = sourcesData.map((source, index) => ({
    id: (index + 1).toString(),
    item: source.name,
  }));

  return transformedSources;
};
