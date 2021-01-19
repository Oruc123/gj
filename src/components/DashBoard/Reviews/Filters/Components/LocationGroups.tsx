import React from "react";

import { FilterBlock } from "../Atom";
import BlockNav from "./BlockNav";
import GFilterChip from "../../GChip";
import { AddButton } from "./Buttons";
import { Box } from "@material-ui/core";

const LocationGroups = () => {
  return (
    <FilterBlock>
      <BlockNav title="Locations groups" />
      <GFilterChip label="Stadium 11" />
      <Box marginTop={2}>
        <AddButton />
      </Box>
    </FilterBlock>
  );
};

export default LocationGroups;
