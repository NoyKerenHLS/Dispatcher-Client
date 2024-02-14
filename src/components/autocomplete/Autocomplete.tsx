import TextField from "@mui/material/TextField";
import { Autocomplete as MuiAutocomplete, InputAdornment } from "@mui/material";
import search from "../../assets/search.svg";

interface Props {
  options: string[];
}

const Autocomplete = ({ options }: Props) => {
  return (
    <MuiAutocomplete
      sx={{ width: "300px" }}
      freeSolo
      id="free-solo-2-demo"
      disableClearable
      options={options}
      renderInput={(params) => (
        <TextField
          {...params}
          InputProps={{
            ...params.InputProps,
            type: "search",
            placeholder: "Search",
            startAdornment: (
              <InputAdornment position="start">
                <img src={search} alt="" />
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
};

export default Autocomplete;
