import { Dropdown, MenuButton, Menu, MenuItem } from "@mui/joy";

export default function DropDownComponent({
  setChosenFeedOption,
  chosenOption,
}) {
  return (
    <Dropdown>
      <MenuButton  sx={{ marginLeft: "24px"}}>
        {chosenOption === "" ? "Select your feedback" : chosenOption}
      </MenuButton>
      <Menu>
        <MenuItem onClick={(event) => setChosenFeedOption("Positive")}>
          Positive
        </MenuItem>
        <MenuItem onClick={(event) => setChosenFeedOption("Negative")}>
          Negative
        </MenuItem>
      </Menu>
    </Dropdown>
  );
}
