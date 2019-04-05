import React from "react";
import Drawer from "./Drawer";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";

const AddDrawer = () => (
  <Drawer
    buttonComponent={({ onClick }) => (
      <Button onClick={onClick} variant="contained" color="secondary">
        <AddIcon style={{ marginRight: 10 }} />
        Ajouter
      </Button>
    )}
  />
);

export default AddDrawer;
