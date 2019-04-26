import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { Typography, Grid } from "@material-ui/core";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    flexWrap: "nowrap",
    width: "100%",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)"
  },
  title: {
    color: theme.palette.primary.light
  },
  titleBar: {
    background: theme.palette.secondary.main
  },
  tile: {
    background: theme.palette.primary.main
  }
});

const tileData = [
  {
    title: "Image",
    author: "author"
  },
  {}
];

function SingleLineGridList({ trips, classes }) {
  return (
    <div className={classes.root}>
      <GridList cellHeight={150} className={classes.gridList} cols={1.5}>
        {trips.map(trip => (
          <GridListTile key={trip.id}>
            <Grid
              className={classes.tile}
              style={{ height: "100%" }}
              container
              alignItems="center"
              justify="space-around"
              spacing={24}
            >
              <Grid item>
                <Typography color="secondary" variant="h4">
                  {trip.departureCity}
                </Typography>
              </Grid>
              <Grid item>
                <ArrowRightAltIcon color="secondary" />
              </Grid>
              <Grid item>
                <Typography color="secondary" variant="h4">
                  {trip.destinationCity}
                </Typography>
              </Grid>
            </Grid>
            <GridListTileBar
              title={trip.id}
              classes={{
                root: classes.titleBar,
                title: classes.title
              }}
              actionIcon={
                <IconButton>
                  <VisibilityIcon color="primary" />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

export default withStyles(styles)(SingleLineGridList);
