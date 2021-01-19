import { InputBase, Box, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { ISearch } from "../../../../Icons";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      alignItems: "center",
      padding: `${theme.spacing(2)}px  ${theme.spacing(3)}px `,
      borderBottom: `1px solid ${theme.palette.border.main}`,
    },
    input: {
      flex: 1,
      fontWeight: 7000,
      paddingRight: 16,
    },
    iconButton: {
      padding: 0,
      "&:hover": {
        background: "transparent",
      },
    },
    icon: {
      color: theme.palette.violet.main,
    },
  })
);
const FilterSearch = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <InputBase className={classes.input} placeholder="Search by text" />
      <ISearch />
    </Box>
  );
};

export default FilterSearch;
