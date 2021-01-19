import React from "react";
import { FilterBlock } from "../Atom";
import BlockNav from "./BlockNav";
import GFilterChip from "../../GChip";
import { AddButton } from "./Buttons";
import { Box } from "@material-ui/core";
import FDialog from "./FDialog";

const Locations = () => {
  const [isOpen, setOpen] = React.useState(false);
  const handleClose = React.useCallback(() => {
    setOpen(false);
  }, [isOpen]);
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <FilterBlock>
      <BlockNav title="Locations " />
      <GFilterChip
        subLabel="11260 Groat Road  Groat Road  ..."
        fullWidth
        label="Stadium 11"
      />
      <GFilterChip subLabel="12793-50Th St Nw" fullWidth label="Stadium 11" />
      <Box marginTop={2}>
        <AddButton handleClick={handleOpen} />
      </Box>
      <FDialog open={isOpen} handleClose={handleClose} />
    </FilterBlock>
  );
};

export default Locations;
