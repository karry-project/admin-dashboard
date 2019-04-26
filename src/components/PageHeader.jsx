import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import { Typography } from "@material-ui/core";
import SearchBar from "./SearchBar";

function PageHeader({ title, children, useSearch, size = "medium" }) {
  const sizes = {
    small: "h6",
    xMedium: "h4",
    medium: "h3",
    big: "h1"
  };

  return (
    <Grid container justify="space-between" alignItems="center">
      <Grid item>
        <Typography
          color="secondary"
          variant={sizes[size]}
          style={{ fontWeight: 600 }}
        >
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
  children: PropTypes.node,
  size: PropTypes.oneOf(["small", "medium", "big", "xMedium"])
};

export default PageHeader;
