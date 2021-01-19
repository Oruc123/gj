import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    label: {
      color: "#7E92B6",
      "&.MuiStepLabel-completed": {
        color: theme.palette.primary.main,
      },
    },

    stepIcon: {
      color: "#D3DCEC",
    },
    iconText: {
      fill: "#fff",
    },

    resetContainer: {
      padding: theme.spacing(3),
      background: "transparent",
      "& .MuiStepLabel-iconContainer": {
        paddingBottom: 2,
      },
      "& .MuiStepIcon-root": {
        padding: 2,
      },
      [theme.breakpoints.down(640)]: {
        padding: 0,
        "& .MuiStepContent-root": {
          borderLeft: "none",
          margin: 0,
          marginBottom: 16,
          marginTop: 16,
          paddingLeft: 0,
        },
        "& .MuiStepConnector-root": {
          display: "none",
        },
      },
    },
  })
);
