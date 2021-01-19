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
const Services = () => {
  const styles = useStyles();
  return (
    <FilterBlock>
      <BlockNav title="Services" />
      <Box className={styles.root}>
        <GCheckboxes label="Yandex.Maps" />

        <ThirdText>1</ThirdText>
      </Box>
      <Box className={styles.root}>
        <GCheckboxes label="Goolgle.Maps" />

        <ThirdText>1</ThirdText>
      </Box>
      <Box className={styles.root}>
        <GCheckboxes label="Goolgle.Maps" />

        <ThirdText>1</ThirdText>
      </Box>
      <Box className={styles.root}>
        <GCheckboxes label="Goolgle.Maps" />

        <ThirdText>1</ThirdText>
      </Box>
      <Box className={styles.root}>
        <GCheckboxes label="Goolgle.Maps" />

        <ThirdText>1</ThirdText>
      </Box>
    </FilterBlock>
  );
};
export default Services;
