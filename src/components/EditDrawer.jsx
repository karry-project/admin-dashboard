import React from "react";
import Drawer from "../components/Drawer";
import IconButton from "@material-ui/core/IconButton";
import VisibilityIcon from "@material-ui/icons/Visibility";

const EditDrawer = ({ user }) => (
  <Drawer
    buttonComponent={({ onClick }) => (
      <IconButton onClick={onClick} color="secondary">
        <VisibilityIcon />
      </IconButton>
    )}
  />
);

export default EditDrawer;
