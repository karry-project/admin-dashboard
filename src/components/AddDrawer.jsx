import React from "react";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import Drawer from "./Drawer";
import FormBuilder from "../features/forms/FormBuilder";
import PageHeader from "./PageHeader";

const fields = [
  {
    name: "firstname",
    value: "firstname",
    label: "Prénom"
  },
  {
    name: "lastname",
    value: "lastname",
    label: "Nom"
  },
  {
    name: "email",
    value: "email",
    label: "Email"
  },
  {
    name: "phone",
    value: "phone",
    label: "Téléphone"
  },
  {
    name: "password",
    value: "Mot de passe",
    label: "Prénom"
  }
];

const AddDrawer = () => (
  <Drawer
    width={600}
    buttonComponent={({ onClick }) => (
      <Button onClick={onClick} variant="contained" color="secondary">
        <AddIcon style={{ marginRight: 10 }} />
        Ajouter
      </Button>
    )}
  >
    <Grid container justify="space-between" direction="column" spacing={32}>
      <Grid item xs={12}>
        <PageHeader size="xMedium" title="Ajouter un utilisateur" />
      </Grid>
      <Grid item xs={12}>
        <FormBuilder fields={fields} />
      </Grid>
    </Grid>
  </Drawer>
);

export default AddDrawer;
