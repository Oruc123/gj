import { Checkbox, FormControlLabel, Typography } from "@material-ui/core";
import React from "react";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import clsx from "clsx";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    icon: {
      borderRadius: 3,
      width: 16,
      height: 16,
      backgroundColor: "transparent",
      border: "1px solid #E5E8F0",
      "$root.Mui-focusVisible &": {
        outline: "2px auto rgba(19,124,189,.6)",
        outlineOffset: 2,
      },
      "input:hover ~ &": {
        backgroundColor: "#ebf1f5",
      },
      "input:disabled ~ &": {
        boxShadow: "none",
        background: "rgba(206,217,224,.5)",
      },
    },
    checkedIcon: {
      backgroundColor: theme.palette.primary.main,

      "&:before": {
        display: "block",
        width: 16,
        height: 16,
        transform: "translateY(-2px)",
        backgroundImage:
          "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
          " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
          "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
        content: '""',
      },
      "input:hover ~ &": {
        backgroundColor: theme.palette.primary.main,
      },
    },
  })
);
const GCheckboxes = ({ label }: { label: string | number }) => {
  const styles = useStyles();
  return (
    <FormControlLabel
      label={
        <Typography variant="body1" style={{ fontSize: 13 }}>
          {label}
        </Typography>
      }
      control={
        <Checkbox
          className={styles.root}
          icon={<span className={styles.icon} />}
          checkedIcon={
            <span className={clsx(styles.icon, styles.checkedIcon)} />
          }
          color="primary"
        />
      }
    />
  );
};
export default GCheckboxes;
