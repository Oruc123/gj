import { Box, Button, Checkbox } from "@material-ui/core";
import React from "react";
import FolderOutlinedIcon from "@material-ui/icons/FolderOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import ExpandLessOutlinedIcon from "@material-ui/icons/ExpandLessOutlined";
import useStyles from "./Atom";

interface iTableHead {
  locationCounts: number;
  buttonLabel: string;
  handleClick: () => void;
  handleCheck: () => void;
  isOpen: boolean;
  isChecked: boolean;
}
const TableHead: React.FC<iTableHead> = ({
  locationCounts,
  buttonLabel,
  handleClick,
  handleCheck,
  isOpen,
  isChecked,
}) => {
  const classes = useStyles();
  return (
    <Box paddingY={1} alignItems="center" flexWrap="wrap" display="flex">
      <Box width={50} minWidth={50}>
        <Checkbox indeterminate={isChecked && isOpen} onChange={handleCheck} />
      </Box>
      <Button
        onClick={handleClick}
        className={classes.tableHeadButton}
        color="primary"
        startIcon={<FolderOutlinedIcon />}
        endIcon={
          isOpen ? <ExpandLessOutlinedIcon /> : <ExpandMoreOutlinedIcon />
        }
      >
        {buttonLabel}
      </Button>
      <Box
        width={100}
        textAlign="right"
        color="secondary.main"
        marginLeft="auto"
        flexShrink={1}
      >
        {locationCounts} locations
      </Box>
    </Box>
  );
};

export default TableHead;
