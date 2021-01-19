import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core/styles";
declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    violet: Palette["primary"];
    border: Palette["primary"];
    tuscle: Palette["primary"];
    arrow: Palette["primary"];
  }
  interface PaletteOptions {
    violet: PaletteOptions["primary"];
    border: Palette["primary"];
    tuscle: Palette["primary"];
    arrow: Palette["primary"];
  }
}

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 1025,
      lg: 1366,
      xl: 1920,
    },
  },
  palette: {
    error: {
      main: "#A74343",
    },
    warning: {
      main: "#FF9B04",
    },
    info: { main: "#5566E0" },
    background: {
      default: "#F5F6FA",
      paper: "#fff",
    },
    primary: {
      main: "#283BC1",
      light: "#5566E0",
      dark: "#5566E0",
    },
    arrow: {
      main: "#B3C0D9",
      light: "",
      dark: "",
      contrastText: "",
    },
    success: {
      main: "#459D1C",
    },

    tuscle: {
      main: "#D3DCEC",
      light: "#A6B5DC",
      dark: "#6C82AC",
      contrastText: "",
    },

    secondary: {
      main: "#666666",
      light: "#54AE35",
      dark: "#EC1D23",
      contrastText: "#B3C0D9",
    },

    violet: {
      main: "#6C82AC",
    },
    border: {
      main: "#D3DCEC",
      light: "",
      dark: "",
      contrastText: "",
    },
  },
  typography: {
    fontSize: 15,
    fontFamily: "Ubuntu",
    button: {
      fontSize: 16,
      fontWeight: 700,
    },

    h1: {
      fontSize: "24px",
      marginTop: 0,
      fontWeight: 700,
    },
    subtitle1: {
      color: "#666666",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: 1.4,
      marginTop: 5,
    },
    subtitle2: {
      fontWeight: 700,
      fontSize: 36,
    },

    h2: {
      fontSize: 18,
      fontWeight: 700,
      marginTop: 0,
      "@media (max-width: 767.95px)": {
        fontSize: 16,
      },
    },
    h3: {
      fontSize: 16,
      fontWeight: 700,
      marginTop: 0,
    },
    h4: {
      fontSize: 14,
      fontWeight: 700,
      marginTop: 0,
    },
    h5: {
      fontSize: 15,
      fontWeight: 700,
      marginTop: 0,
    },

    body1: {
      color: "#000",
      fontSize: 14,
      fontWeight: 500,
    },
    body2: {
      color: "#000",
      fontSize: 14,
      fontWeight: 400,
    },
  },
  props: {
    MuiButtonBase: { disableRipple: true },
  },
  overrides: {
    MuiTypography: {
      colorSecondary: {},
    },
    MuiOutlinedInput: {
      notchedOutline: {
        border: "1px solid #E6E9F5",
        borderColor: "#E6E9F5",
      },
      root: {
        // border: "1px solid red",
        "& input::placeholder": {
          fontSize: 14,
          fontWeight: 400,
          color: "#C0C6D0",
        },
      },
    },

    MuiFormControlLabel: {
      label: {
        fontWeight: 400,
      },
    },
    MuiCheckbox: {
      indeterminate: {
        "& .MuiSvgIcon-root": {
          color: "#283BC1",
        },
      },
      root: {
        "&.MuiIconButton-colorPrimary:hover": {
          background: "transparent!important",
        },
        "& .MuiSvgIcon-root": {
          color: "#7E92B6",
        },
        "&$checked  .MuiSvgIcon-root": {
          color: "#283BC1",
        },
      },
    },
    MuiButton: {
      root: {
        disableRipple: true,
        fontSize: 14,
        padding: "8px 22.6px",
        textTransform: "capitalize",
        fontWeight: 500,
        "&$disabled": {
          color: "#666666",
          background: "#E0E1E6",
        },
      },
      startIcon: {
        marginLeft: "-12px",
      },
      text: {
        padding: "9px 23px",
        fontSize: 14,
        color: "#000",
        fontWeight: 700,
        textTransform: "capitalize",
      },
      containedPrimary: {
        fontWeight: 500,
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none",
        },
        "&:active": {
          background: "#7E92B6",
        },
      },
      textPrimary: {
        fontWeight: 500,
        "&:hover": {
          backgroundColor: "#ECEEFD",
        },
        "&:active": {
          backgroundColor: "#D3DCEC",
        },
      },
    },
    MuiDrawer: {
      root: {
        height: "100%",
      },
      paper: {
        height: "100%",
      },
    },
    MuiBadge: {
      root: {
        height: 24,
      },
    },

    MuiDialogActions: {
      root: {
        borderTop: `1px solid #E6E9F5`,
        justifyContent: "flex-start",
      },
    },
    MuiLink: {
      root: {
        color: "#5566E0",
      },
    },
    MuiSvgIcon: {
      root: {
        color: "#7E92B6",
        width: 24,
        height: 24,
      },
    },

    MuiTableCell: {
      root: {
        paddingBottom: 9,
        paddingTop: 9,
        minHeight: 40,
        borderBottom: "1px solid #E6E9F5",
        minWidth: 140,
      },
    },
    MuiTableHead: {
      root: { borderTop: "1px solid #E6E9F5" },
    },
    MuiDivider: {
      root: {
        backgroundColor: "#E0E1E6",
      },
    },

    MuiCssBaseline: {
      "@global": {
        body: {
          boxSizing: "border-box",
          fontFamily: "Ubuntu",
        },
        svg: {
          display: "inline-block",
        },
      },
    },
  },
});

export default theme;
