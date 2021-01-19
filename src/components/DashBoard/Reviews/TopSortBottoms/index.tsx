import { Box, Button, Hidden, IconButton } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import { Download } from "react-feather";
import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { IChevronDown, IFilter } from "../../../Icons";
import { ctx } from "../../../../context";
import clsx from "clsx";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: "right",
      [theme.breakpoints.down(1024)]: {
        textAlign: "right",
        marginTop: 16,
      },
      [theme.breakpoints.down(640)]: {
        padding: 0,
        display: "flex",
      },
    },
    button: {
      color: "#383C44",
      fontSize: 11,
      fontWeight: 700,
      textTransform: "uppercase",
      marginRight: 16,
      [theme.breakpoints.down(1024)]: {
        marginRight: 16,
        paddingRight: 8,
        paddingLeft: 8,
        "&:first-child": {
          marginRight: 0,
        },
      },
      [theme.breakpoints.down(1024)]: {
        paddingRight: 0,
        paddingLeft: 0,
      },
    },
    downloadButton: {
      background: "#fff",

      color: "#57647B",
      [theme.breakpoints.down(1024)]: { marginRight: 8 },
    },

    iconWrapper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      height: 20,
    },
    icon: {
      fontSize: 22,
      color: "#A6B5DC",
      "&:first-child": {
        transform: "translateY(8px)",
      },
      "&:last-child": {
        transform: "translateY(-8px)",
      },
    },
    iconButton: { padding: "9px 13px", borderRadius: 4 },
  })
);
const TopSortBottoms = ({ openFilter }: { openFilter: () => void }) => {
  const { tablet } = React.useContext(ctx);
  const styles = useStyles();
  const open = () => {
    if (openFilter) openFilter();
  };
  return (
    <>
      <Box className={styles.root}>
        <Button
          startIcon={
            <Box className={styles.iconWrapper}>
              <ArrowDropUpIcon className={styles.icon} />
              <ArrowDropDownIcon className={styles.icon} />
            </Box>
          }
          className={styles.button}
        >
          Date
        </Button>
        <Button
          startIcon={
            <Box className={styles.iconWrapper}>
              <ArrowDropUpIcon className={styles.icon} />
              <ArrowDropDownIcon className={styles.icon} />
            </Box>
          }
          className={styles.button}
        >
          Raiting
        </Button>
        <Button
          startIcon={<Download size={18} />}
          endIcon={<IChevronDown size={18} />}
          className={styles.downloadButton}
        >
          <Hidden mdDown>Download</Hidden>
        </Button>
        {!tablet && (
          <IconButton
            onClick={open}
            className={clsx(styles.downloadButton, styles.iconButton)}
          >
            <IFilter size={18} />
          </IconButton>
        )}
      </Box>
    </>
  );
};
export default TopSortBottoms;
