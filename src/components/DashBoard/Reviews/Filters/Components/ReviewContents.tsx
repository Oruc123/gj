import { Box, Typography } from "@material-ui/core";
import React from "react";
import { FilterBlock, ThirdText } from "../Atom";
import BlockNav from "./BlockNav";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import GCheckboxes from "./GCheckboxes";
import GRaiting from "../../../GRaiting";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      alignItems: "center",
    },
  })
);
const ReviewContents = () => {
  const styles = useStyles();
  return (
    <>
      <FilterBlock>
        <BlockNav witThoutButton title="Review Contents" />
        <Box className={styles.root}>
          <GCheckboxes label="Without text" />

          <ThirdText>1</ThirdText>
        </Box>
        <Box className={styles.root}>
          <GCheckboxes label="With text" />

          <ThirdText>1</ThirdText>
        </Box>
      </FilterBlock>
      <FilterBlock>
        <BlockNav witThoutButton title="Availability of answer" />
        <Box className={styles.root}>
          <GCheckboxes label="Without answer" />

          <ThirdText>1</ThirdText>
        </Box>
        <Box className={styles.root}>
          <GCheckboxes label="With answer" />

          <ThirdText>1</ThirdText>
        </Box>
      </FilterBlock>
    </>
  );
};
export default ReviewContents;
