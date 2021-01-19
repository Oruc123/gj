import { makeStyles, Theme } from "@material-ui/core";
const useStyles = makeStyles((theme: Theme) => ({
  itemContainer: {
    margin: "16px 0",
    marginBottom: 0,
  },
  itemStyle: {
    borderTop: "1px solid #E6E9F5",
    padding: "16px 0",
  },
  itemTitle: {
    maxWidth: 582,
    marginBottom: 24,
  },
  helperText: {
    color: "#7E92B6",
  },
  radioLabel: {
    fontWeight: 700,
  },
  root: {
    alignItems: "flex-start",
  },
  radioRoot: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  radioGroup: {
    display: "block!important",
  },
  addBox: {
    marginTop: 24,
    marginLeft: 24,
    [theme.breakpoints.down(640)]: {
      marginTop: 0,
      marginLeft: 0,
    },
  },
}));

export default useStyles;
