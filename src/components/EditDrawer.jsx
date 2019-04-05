import React from "react";
import Drawer from "../components/Drawer";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";

const EditDrawer = ({ user }) => (
  <Drawer
    buttonComponent={({ onClick }) => (
      <IconButton onClick={onClick} color="secondary">
        <EditIcon />
      </IconButton>
    )}
  />
);

export default EditDrawer;
