import React from "react";
import Drawer from "./Drawer";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";

const DetailsDrawer = ({ user }) => (
  <Drawer
    buttonComponent={({ onClick }) => (
      <IconButton onClick={onClick} color="secondary">
        <EditIcon />
      </IconButton>
    )}
  />
);

export default DetailsDrawer;
