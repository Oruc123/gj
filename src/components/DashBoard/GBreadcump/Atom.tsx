import { makeStyles, createStyles, Theme } from "@material-ui/core";
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginBottom: 17,
      marginTop: -4,
      [theme.breakpoints.down("xs")]: {
        marginTop: 0,
      },
      "& .MuiBreadcrumbs-separator": {
        color: "#C7C7C7",
      },
    },
    link: {
      fontSize: 12,
      fontWeight: 400,
    },
    breadHome: {
      display: "inline-block",
      transform: "translateY(2px)",
    },
  })
);
