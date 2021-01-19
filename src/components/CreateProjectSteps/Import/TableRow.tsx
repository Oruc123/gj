import { Box, Checkbox, FormControlLabel } from "@material-ui/core";
import React from "react";
import useStyles from "./Atom";
interface iTableRow {
  locationName: string;
  type: string;
  additionalInfo: string;
  checked?: boolean;
  handleCheck: () => void;
}
const TableRow: React.FC<iTableRow> = ({
  locationName,
  type,
  additionalInfo,
  checked,
  handleCheck,
}) => {
  const classes = useStyles();
  return (
    <>
      <Box
        alignItems="center"
        justifyContent="flex-start"
        marginBottom={2}
        display="flex"
      >
        <Box height={30} minWidth={50} flexBasis={50}></Box>
        <Box width={190} marginRight={1}>
          <FormControlLabel
            className={classes.checkbox}
            control={<Checkbox onChange={handleCheck} checked={checked} />}
            label={locationName}
          />
        </Box>
        <Box
          marginLeft={3}
          marginRight={3}
          width={110}
          color="secondary.main"
          fontSize={12}
        >
          {additionalInfo}
        </Box>
        <Box
          paddingLeft={1}
          width={80}
          color="text.primary"
          fontSize={12}
          marginLeft="auto"
        >
          {type}
        </Box>
      </Box>
    </>
  );
};

export default TableRow;
