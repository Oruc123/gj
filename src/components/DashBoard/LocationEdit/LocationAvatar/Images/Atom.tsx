import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    uploadWrpper: {
      border: `1px solid ${theme.palette.border.main}`,
      position: "relative",
      padding: theme.spacing(3),
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    logoUploader: {
      border: `1px solid ${theme.palette.border.main}`,
      position: "relative",
      width: 120,
      cursor: "pointer",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      height: 120,
      zIndex: 2,
      marginRight: "auto",
      "&:hover": {
        backgroundColor: " #F5F7FF",
        borderRadius: 3,
      },
    },
    hugeLogoUploader: {
      width: 160,
      height: 112,
    },

    coverUploader: {
      position: "relative",
      padding: theme.spacing(3),
      textAlign: "center",
      marginRight: "auto",
      "&:hover": {
        backgroundColor: " #F5F7FF",
        borderRadius: 3,
      },
    },
    inputFile: {
      cursor: "pointer",
      position: "absolute",
      display: "block",
      height: "100%",
      width: "100%",
      opacity: 0,
      zIndex: 4,
    },
  })
);
