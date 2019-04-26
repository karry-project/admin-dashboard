import React from "react";
import { Link, withRouter } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import Grid from "@material-ui/core/Grid";
import HomeIcon from "@material-ui/icons/Home";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import HightLightOff from "@material-ui/icons/HighlightOff";

import * as Auth from "../services/auth";

import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

class ResponsiveDrawer extends React.Component {
  state = {
    mobileOpen: false
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { loggedIn, classes } = this.props;
    return (
      <div>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar className={classes.toolbar} variant="dense">
            <Grid container alignItems="center" justify="space-between">
              <Grid item>
                <IconButton
                  component={Link}
                  to="/dashboard"
                  color="secondary"
                  className={classes.button}
                >
                  <HomeIcon />
                </IconButton>
              </Grid>

              <Grid item>
                <Button
                  component={Link}
                  to="/users"
                  className={classes.button}
                  color="secondary"
                >
                  Utilisateurs
                </Button>
                <Button
                  component={Link}
                  to="/trips"
                  className={classes.button}
                  color="secondary"
                >
                  Voyages
                </Button>
              </Grid>

              <Grid item>
                {loggedIn && (
                  <Tooltip title="Mon compte">
                    <IconButton
                      color="secondary"
                      onClick={() => {
                        Auth.logout();
                        this.props.history.push("/login");
                      }}
                      className={classes.button}
                    >
                      <HightLightOff />
                    </IconButton>
                  </Tooltip>
                )}
                {!loggedIn && (
                  <IconButton
                    color="secondary"
                    // onClick={() => this.login()}
                    className={classes.button}
                  >
                    <FingerprintIcon />
                  </IconButton>
                )}
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>

        <main className={classes.content}>{this.props.children}</main>
      </div>
    );
  }
}

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    background:
      "linear-gradient(to right top, #4ceba0, #45e8ab, #41e5b4, #43e2bc, #49dec3)"
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  content: {
    flexGrow: 1,
    marginTop: 64,
    paddingLeft: 42,
    paddingRight: 42,
    paddingTop: 32,
    background: "#c5f2ff1c",
    height: "calc(100vh - 85px - 24px)",
    zIndex: 420
  },
  toolbar: {
    ...theme.mixins.toolbar,

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  button: {
    margin: "0 5px"
  },
  menuLinks: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  }
});

export default withRouter(
  withStyles(styles, { withTheme: true })(ResponsiveDrawer)
);
