import { makeStyles, createStyles, Theme } from "@material-ui/core";
export default makeStyles((theme: Theme) =>
  createStyles({
    tableRoot: {
      background: "#fff",
      borderRadius: 4,
      overflowX: "auto",
      marginTop: 16,
    },

    TableHead: {
      border: "none",
      borderTop: `1px solid #E0E1E6`,
      height: 56,
      "& .MuiTableCell-root ": {
        paddingLeft: 4,
        paddingRight: 4,
        minWidth: 150,
      },

      "& .MuiTableCell-root:nth-child(1) .MuiTableSortLabel-root ": {
        paddingLeft: 36,
      },
      "& .MuiTableRow-root": {
        height: 56,
      },
    },
    tableRow: {
      "&:last-child .MuiTableCell-root": {
        borderBottom: "none",
      },
    },
    cell: {
      borderBottom: `1px solid #E0E1E6`,
      // borderBottom: "none",
      padding: "24px 4px",
      minWidth: 130,
      flex: 1,
      "&:nth-child(1)  ": {
        minWidth: 160,
      },
      "&:last-child": {
        minWidth: 150,
      },
    },
    sortButton: {
      "& .MuiTableSortLabel-icon": { color: "#7E92B6!important", fontSize: 24 },
      "&:hover,&:focus": {
        color: "inherit",
      },
    },
    sourceTd: {
      display: "flex",
      alignItems: "center",
      minWidth: 160,
      "& .MuiLink-root": {
        display: "inline-flex",
        alignItems: "center",
        "& img": {
          marginRight: 8,
        },
      },
    },

    contactLink: {
      color: "#000",
      display: "flex",
      alignItems: "center",
      "& .MuiSvgIcon-root": {
        marginRight: 8,
        width: 16,
        height: 16,
        color: "#6E7A95",
      },
    },
    filterButton: {
      padding: "5px 8px",
      height: 24,
      fontSize: 12,
      fontWeight: 400,
      borderRadius: 20,
      color: theme.palette.secondary.main,
    },
    filterButtonError: {
      borderColor: theme.palette.error.main,
    },
    filterButtonSucces: {
      borderColor: theme.palette.success.main,
    },
    filterButtonWarning: {
      borderColor: theme.palette.warning.main,
    },
    filterButtonInfo: {
      borderColor: theme.palette.info.main,
    },
  })
);
