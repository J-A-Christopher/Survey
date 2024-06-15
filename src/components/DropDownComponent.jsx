import { Dropdown, MenuButton, Menu, MenuItem } from "@mui/joy";
import { useState } from "react";

export default function DropDownComponent() {
  const [chosenOption, setChosenOption] = useState("");

  return (
    <Dropdown
      fullWidth
      sx={{ width: "100%", marginLeft: "24px", marginRight: "24px" }}
    >
      <MenuButton fullWidth>
        {chosenOption === "" ? "Select your feedback" : chosenOption}
      </MenuButton>
      <Menu fullWidth>
        <MenuItem onClick={(event) => setChosenOption("Positive")}>
          Positive
        </MenuItem>
        <MenuItem onClick={(event) => setChosenOption("Negative")}>
          Negative
        </MenuItem>
      </Menu>
    </Dropdown>
  );
}
