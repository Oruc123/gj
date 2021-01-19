import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    imgWrapper: {
      position: "relative",
    },
    filter: {
      position: "absolute",
      width: "100%",
      height: "100%",
      background: "#000",
      opacity: "0.6",
      zIndex: 1,
      left: 0,
      top: 0,
    },
    img: {
      width: "100%",
      display: "block",
      height: 169,
      objectFit: "cover",
    },
    imgCheap: {
      color: "#fff",
      background: "#000",
      position: "absolute",
      zIndex: 3,
      right: theme.spacing(2),
      top: theme.spacing(2),
      display: "flex",
      padding: theme.spacing(1),
      borderRadius: 3,
      fontSize: 13,
      fontWeight: 700,
      alignItems: "center",
    },
    logo: {
      position: "absolute",
      left: theme.spacing(4),
      top: theme.spacing(4),
      zIndex: 5,
    },
  })
);
