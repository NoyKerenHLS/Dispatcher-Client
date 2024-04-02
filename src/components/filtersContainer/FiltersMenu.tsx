import { Divider, MenuItem, Stack, Typography } from "@mui/material";
import { FC, useState } from "react";
import { DropdownData, Item } from "../dropdown/types";
import { DateRange } from "rsuite/esm/DateRangePicker";
import { useSearchParams } from "react-router-dom";
import { Colors } from "../../globalStyle/Colors";
import { dropDownItems } from "../searchBar/utils";

interface IProps {
  open: boolean;
  dropDownsData: DropdownData[];
  handleSelect: (value: string, dropdownName: string) => void;
  isTopHeadlines: boolean;
}

const FiltersMenu: FC<IProps> = ({
  handleSelect,
  dropDownsData,
  isTopHeadlines,
}) => {
  const [searchParams, setSearchParam] = useSearchParams();
  const [openTab, setOpenTab] = useState("");

  const scope = searchParams.get("scope");

  const handleDtaeChange = (dateRange: DateRange | null) => {
    if (dateRange) {
      const startDateISO = dateRange[0].toISOString();
      const endDateISO = dateRange[1].toISOString();
      searchParams.set("from", startDateISO);
      searchParams.set("to", endDateISO);
      setSearchParam(searchParams);
    }
  };

  const handleCleanDate = () => {
    searchParams.delete("from");
    searchParams.delete("to");
    setSearchParam(searchParams);
  };

  const getFilterSelection = (filterName: string) => {
    const filterNameNoSpaces = filterName.replace(/[ \t\r\n]/g, "");
    const filter = searchParams.get(filterNameNoSpaces);

    return filter || "All";
  };

  const getFilterDropDown = () => {
    let items: Item[] = [];
    dropDownsData.map((dropdown) => {
      if (dropdown.name === openTab) {
        items = dropdown.items;
        if (items[0].item !== "None")
          items.unshift({ id: "none", item: "None" });
      }
    });

    if (openTab === "Search in") {
      items = dropDownItems;
    }

    return items;
  };

  const onClick = (item: string) => {
    console.log(item, openTab);
    let value = item;

    if (openTab === "Search in") {
      value = item === "Everything" ? "everything" : "top-headlines";
    }

    handleSelect(value, openTab);
  };

  if (openTab) {
    return (
      <Stack>
        <MenuItem sx={{ width: { xs: "300px", sm: "368px" } }}>
          <Typography
            sx={{ fontSize: "16px", fontWeight: 500, color: Colors.slateBlue }}
          >
            {openTab}
          </Typography>
        </MenuItem>
        <Divider />
        {getFilterDropDown().map((item, index) => (
          <Stack key={index}>
            <MenuItem key={index} onClick={() => onClick(item.item)}>
              <Stack
                sx={{ width: "100%" }}
                direction="row"
                justifyContent="space-between"
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: Colors.slateBlue,
                    display: "flex",
                  }}
                >
                  {item.item}
                </Typography>
              </Stack>
            </MenuItem>
            <Divider />
          </Stack>
        ))}
      </Stack>
    );
  } else
    return (
      <Stack>
        <MenuItem sx={{ width: { xs: "300px", sm: "368px" } }}>
          <Typography
            sx={{ fontSize: "16px", fontWeight: 500, color: Colors.slateBlue }}
          >
            FILTER
          </Typography>
        </MenuItem>
        <Divider />
        <MenuItem onClick={() => setOpenTab("Search in")}>
          <Stack
            sx={{ width: "100%" }}
            direction="row"
            justifyContent="space-between"
          >
            <Typography
              sx={{
                fontSize: "14px",
                color: Colors.slateBlue,
                display: "flex",
              }}
            >
              Search in
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                display: "flex",
                color: "rgba(90, 90, 137, 0.5)",
              }}
            >
              {scope === "everything" ? "Everything" : "Top Headlines"}
            </Typography>
          </Stack>
        </MenuItem>
        <Divider />
        {dropDownsData.slice(1).map((dropdown, index) => (
          <Stack key={index}>
            <MenuItem key={index} onClick={() => setOpenTab(dropdown.name)}>
              <Stack
                sx={{ width: "100%" }}
                direction="row"
                justifyContent="space-between"
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: Colors.slateBlue,
                    display: "flex",
                  }}
                >
                  {dropdown.name}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    display: "flex",
                    color: "rgba(90, 90, 137, 0.5)",
                  }}
                >
                  {getFilterSelection(dropdown.name)}
                </Typography>
              </Stack>
            </MenuItem>
            <Divider />
          </Stack>
        ))}
      </Stack>
    );
};

export default FiltersMenu;
