import {
  IconButton,
  Link,
  Box,
  TableCell,
  TableRow,
  Typography,
  useTheme,
  ClickAwayListener,
} from "@material-ui/core";
import React from "react";
import useStyles from "./Atom";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import PhoneOutlinedIcon from "@material-ui/icons/PhoneOutlined";
import PublicIcon from "@material-ui/icons/Public";
import img from "./Maps.svg";
import GProgressSpinner from "../../../../Elements/GProgressSpinner";
import { TimelineDot } from "@material-ui/lab";
import TableCard from "./TableCard";
const TableColumn = ({
  color,
  progressLabel,
}: {
  color: "error" | "info" | "warning" | "success";
  progressLabel: string;
}) => {
  const classes = useStyles();
  const { palette } = useTheme();
  const statusColor: string = palette[color].main;
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <TableRow className={classes.tableRow}>
        <TableCell className={classes.cell} align="left">
          <Box className={classes.sourceTd}>
            <IconButton onClick={handleClick} style={{ padding: 4 }}>
              {open && <KeyboardArrowDownIcon />}
              {!open && <KeyboardArrowRightIcon />}
            </IconButton>
            <Link>
              <img src={img} /> Google maps
            </Link>
          </Box>
        </TableCell>
        <TableCell className={classes.cell}>
          <Typography variant="body1">Starbucks</Typography>
          <Typography color="inherit" variant="subtitle1">
            Baumana street 51, Kazan, TA 420111
          </Typography>
        </TableCell>
        <TableCell className={classes.cell}>
          <Link className={classes.contactLink} variant="subtitle1">
            <PhoneOutlinedIcon /> www.example.com
          </Link>
          <Link className={classes.contactLink} variant="subtitle1">
            <PublicIcon /> +777 777 77 77
          </Link>
        </TableCell>
        <TableCell className={classes.cell}>
          <Box alignItems="center" display="flex">
            <Box marginRight={2}>
              <GProgressSpinner color={statusColor} value={32} />
            </Box>
            {progressLabel == "Calculating" && (
              <Typography variant="body2">{progressLabel}</Typography>
            )}
            {progressLabel !== "Calculating" && (
              <Typography variant="h2">{progressLabel}</Typography>
            )}
          </Box>
        </TableCell>
        <TableCell className={classes.cell}>
          <Box alignItems="center" display="flex">
            <Box marginRight={1}>
              <TimelineDot
                style={{
                  background: statusColor,
                  boxShadow: "none",
                  padding: 2,
                }}
              />
            </Box>
            <Typography variant="body2">Need improvement</Typography>
          </Box>
        </TableCell>
      </TableRow>
      {open && (
        <ClickAwayListener onClickAway={handleClick}>
          <TableRow>
            <TableCell style={{ padding: 0 }} colSpan={5}>
              <TableCard />
            </TableCell>
          </TableRow>
        </ClickAwayListener>
      )}
    </>
  );
};
export default TableColumn;
