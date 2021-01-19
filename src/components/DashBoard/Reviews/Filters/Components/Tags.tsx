import { Box } from "@material-ui/core";
import React from "react";
import { FilterBlock } from "../Atom";
import BlockNav from "./BlockNav";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import GFilterChip from "../../GChip";
import { AddButton } from "./Buttons";
import FDialog from "./FDialog";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      alignItems: "center",
    },
  })
);
const Tags = () => {
  const styles = useStyles();
  return (
    <>
      <FilterBlock>
        <BlockNav title="Tags" />
        <GFilterChip label="Delton Square" />
        <GFilterChip label="Delton Square" />
        <GFilterChip label="Delton Square" />
        <Box marginTop={2}>
          <AddButton />
        </Box>
      </FilterBlock>
    </>
  );
};
export default Tags;
