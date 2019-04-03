import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    action: {
      hover: "#f2f3f7ab"
    },
    secondary: {
      main: "#004E64"
    },
    primary: {
      main: "#4ceba0"
    }
  },
  typography: {
    useNextVariants: true
  },

  overrides: {
    MuiButton: {
      root: {
        color: "#CECECE"
      }
    }
  }
});

export default theme;
