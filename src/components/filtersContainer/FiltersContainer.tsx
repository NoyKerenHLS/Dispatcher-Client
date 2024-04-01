import { Box } from "@mui/material";
import { Colors } from "../../globalStyle/Colors";
import { createParam, createSourcesCoedes } from "../pages/utils";
import { useSearchParams } from "react-router-dom";
import { DropdownData } from "../dropdown/types";
import { Scope } from "../pages/types";
import TopHeadlinesFilters from "./TopHeadlinesFilters";
import EverythingFilters from "./EverythingFilters";
import FilterContainerMobileTablet from "./FiltersContainerMobileTablet";
import { getSourcesIndex, transformSources } from "./utils";
import { Source } from "./types";

interface Props {
  dropDownsData: DropdownData[];
  sources?: Source[];
}

const FilterContainer = ({ dropDownsData, sources }: Props) => {
  const [searchParams, setSearchParam] = useSearchParams();
  const scope: Scope = searchParams.get("scope") as Scope;
  const isTopHeadlines = scope === "top-headlines";

  let sourcesCodes: { [key: string]: string } | undefined;

  if (sources) {
    sourcesCodes = createSourcesCoedes(sources);
    const index = getSourcesIndex(dropDownsData);
    if (index !== -1) {
      dropDownsData[index].items = transformSources(sources);
    }
  }

  const HandleSelect = (value: string, dropdownName: string) => {
    const param = createParam(value, dropdownName, sourcesCodes);

    console.log(param);

    if (!param.pValue || param.pValue === "None") {
      searchParams.delete(param.name);
      setSearchParam(searchParams);
      return;
    }

    if (param.pValue === "top-headlines") {
      setSearchParam({ scope: "top-headlines", Country: "il" });
      return;
    }

    if (param.pValue === "everything") {
      setSearchParam({ scope: "everything" });
      return;
    }

    searchParams.set(param.name, param.pValue);
    setSearchParam(searchParams);
  };

  return (
    <>
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          flexDirection: "row",
          borderColor: Colors.lavenderGray,
          gap: "20px",
        }}
      >
        {isTopHeadlines ? (
          <TopHeadlinesFilters
            dropDownsData={dropDownsData}
            handleSelect={HandleSelect}
          />
        ) : (
          <EverythingFilters
            dropDownsData={dropDownsData}
            handleSelect={HandleSelect}
          />
        )}
      </Box>
      <FilterContainerMobileTablet
        isTopHeadlines={isTopHeadlines}
        dropDownsData={dropDownsData}
        handleSelect={HandleSelect}
      />
    </>
  );
};

export default FilterContainer;
