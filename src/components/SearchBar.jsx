import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4
  }
});

function SearchBar() {
  const classes = useStyles();

  return (
    <Paper className={classes.root} elevation={1}>
      <SearchIcon color="secondary" className={classes.iconButton} />
      <Divider className={classes.divider} />
      <InputBase className={classes.input} placeholder="Rechercher" />
    </Paper>
  );
}

export default SearchBar;
