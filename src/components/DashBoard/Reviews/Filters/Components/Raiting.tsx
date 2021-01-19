import { Box } from "@material-ui/core";
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
    thidrText: {
      color: theme.palette.violet.main,
      marginLeft: theme.spacing(1),
      fontSize: 13,
      fontWeight: 500,
      transform: "translateY(-2px)",
    },
    raiting: {
      transform: "translateY(-2px)",
    },
  })
);
const Raiting = () => {
  const styles = useStyles();
  return (
    <FilterBlock>
      <BlockNav title="Raiting" witThoutButton />
      <Box className={styles.root}>
        <GCheckboxes label={1} />
        <Box className={styles.raiting}>
          <GRaiting value={4} />
        </Box>
        <span className={styles.thidrText}>12</span>
      </Box>
      <Box className={styles.root}>
        <GCheckboxes label={5} />
        <Box className={styles.raiting}>
          <GRaiting value={4} />
        </Box>
        <span className={styles.thidrText}>12</span>
      </Box>
      <Box className={styles.root}>
        <GCheckboxes label={3} />
        <Box className={styles.raiting}>
          <GRaiting value={4} />
        </Box>
        <span className={styles.thidrText}>1</span>
      </Box>
      <Box className={styles.root}>
        <GCheckboxes label={2} />
        <Box className={styles.raiting}>
          <GRaiting value={4} />
        </Box>
        <span className={styles.thidrText}>1</span>
      </Box>
      <Box className={styles.root}>
        <GCheckboxes label={0} />
        <Box className={styles.raiting}>
          <GRaiting value={4} />
        </Box>
        <span className={styles.thidrText}>1</span>
      </Box>
      <Box className={styles.root}>
        <GCheckboxes label="Без рейтинга " />

        <ThirdText>0</ThirdText>
      </Box>
    </FilterBlock>
  );
};
export default Raiting;
