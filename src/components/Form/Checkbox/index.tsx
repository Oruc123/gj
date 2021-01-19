import React from "react";
import clsx from "clsx";
import { Checkbox, FormControlLabel, Box, Typography } from "@material-ui/core";
import { useStyles } from "./Atom";
interface IProps {
  label: React.ReactNode;
}

const ICheckbox: React.FC<IProps> = ({ label }) => {
  const classes = useStyles();
  return (
    <Box marginBottom={2}>
      <FormControlLabel
        className={classes.label}
        control={
          <Checkbox
            checkedIcon={
              <span className={clsx(classes.icon, classes.checkedIcon)} />
            }
            icon={<span className={classes.icon} />}
            className={classes.root}
          />
        }
        label={
          <Typography className={classes.text} variant="body1">
            {label}
          </Typography>
        }
      />
    </Box>
  );
};

export default ICheckbox;
