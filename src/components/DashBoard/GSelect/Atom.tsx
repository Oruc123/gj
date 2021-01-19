import { makeStyles, Theme } from "@material-ui/core/";

export const useStyle = makeStyles((theme: Theme) => ({
  wrapper: {
    width: "100%",
    height: "100%",
    position: "relative",
  },

  endIcon: {
    color: "#B3C0D9",
    position: "absolute",
    right: 20,
    top: 18,
  },

  buttonRoot: {
    width: "100%",
    height: "100%",
    borderRadius: 0,
    paddingLeft: theme.spacing(2),
    alignItems: "flex-start",
    "&:hover": {
      background: "#F5F7FF",
    },
  },
  buttonLabel: {
    fontSize: 16,
    display: "block",
    padding: 0,
    textAlign: "left",
  },
  label: {
    position: "absolute",
    color: "#A0A6B1",
    bottom: 10,
    left: theme.spacing(2),
    fontWeight: 500,
    textTransform: "uppercase",
    fontSize: 10,
  },
}));
