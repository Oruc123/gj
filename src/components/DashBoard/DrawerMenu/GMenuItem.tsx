import { Button, ListItem } from "@material-ui/core";
import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core";
import clsx from "clsx";
const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    listitem: {
      paddingTop: 0,
      paddingBottom: 0,
    },
    link: {
      fontWeight: 700,
      fontSize: 13,
      textDecoration: "none",
      padding: `${theme.spacing(0.4)}px ${theme.spacing(2)}px`,
      color: "#57647B",
      marginBottom: theme.spacing(0.1),
      textTransform: "capitalize",
      "&:hover,&.active": {
        color: "#000",
        background: "#F5F6FA",
      },
      "&:hover .MuiButton-startIcon,&.active .MuiButton-startIcon": {
        color: "#000",
      },
      "& .MuiButton-startIcon": {
        color: "#6C82AC",
        marginRight: theme.spacing(2),
      },
    },
  });
});
interface IMenuItem {
  label: string;
  icon: React.ReactNode;
  handleClick?: () => void;
  active?: boolean;
}

const GMenuItem: React.FC<IMenuItem> = ({
  handleClick,
  label,
  icon,
  active,
}) => {
  const classes = useStyles();
  return (
    <ListItem className={classes.listitem}>
      <Button
        disableRipple
        className={clsx(classes.link, active ? "active" : null)}
        startIcon={icon}
        onClick={handleClick}
      >
        {label}
      </Button>
    </ListItem>
  );
};
export default GMenuItem;
