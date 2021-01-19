import { Box, Chip, Typography } from "@material-ui/core";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import clsx from "clsx";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fullWidth: {
      borderRadius: 4,
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      marginBottom: theme.spacing(1.5),
    },
    tag: {
      height: "auto",
      marginRight: theme.spacing(1),
      padding: theme.spacing(1),
      color: "#202A3D",
      fontSize: 13,
      fontWeight: 500,
      background: "#F0F6FF",
      marginBottom: 8,
      "& .MuiChip-clickableColorPrimary": {
        background: "red",
      },
      "&:focus": {
        background: "#F0F6FF",
      },
    },
    disabled: {
      background: "transparent",
      fontWeight: 700,
      color: "#000!important",
      opacity: 1,
    },
    deleteIcon: {
      background: "transparent",
    },
  })
);

const GFilterChip = ({
  label,
  deleteHandler,
  fullWidth,
  subLabel,
}: {
  label: string | React.ReactNode;
  fullWidth?: boolean;
  subLabel?: string;
  deleteHandler?: () => {};
}) => {
  const classes = useStyles();
  return (
    <>
      <Chip
        className={clsx(classes.tag, fullWidth ? classes.fullWidth : null)}
        clickable={true}
        classes={{ deleteIcon: classes.deleteIcon }}
        onDelete={() => alert("")}
        label={
          <Typography component="div" variant="body1">
            {label}
            {subLabel && (
              <Box>
                <Typography variant="body2">{subLabel}</Typography>
              </Box>
            )}
          </Typography>
        }
        deleteIcon={<CloseRoundedIcon style={{ color: "#6C82AC" }} />}
      />
    </>
  );
};
export default GFilterChip;
