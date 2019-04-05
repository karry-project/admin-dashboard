import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import { Typography } from "@material-ui/core";
import SearchBar from "./SearchBar";

function PageHeader({ title, children, useSearch }) {
  return (
    <Grid container justify="space-between" alignItems="center">
      <Grid item>
        <Typography color="secondary" variant="h3" style={{ fontWeight: 600 }}>
          {title}
        </Typography>
      </Grid>
      {useSearch && (
        <Hidden smDown>
          <Grid item>
            <SearchBar />
          </Grid>
        </Hidden>
      )}

      <Grid item>{children}</Grid>
    </Grid>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default PageHeader;
