import React, { useState } from "react";
import Drawer from "./Drawer";
import VisibilityIcon from "@material-ui/icons/Visibility";
import IconButton from "@material-ui/core/IconButton";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import FormBuilder from "../features/forms/FormBuilder";
import Avatar from "@material-ui/core/Avatar";
import DrawerTrips from "./DrawerTrips";
import PageHeader from "./PageHeader";

const userFields = [
  {
    name: "firstname",
    label: "Prénom"
  },
  {
    name: "lastname",
    label: "Nom"
  },
  {
    name: "email",
    label: "Email"
  },
  {
    name: "phone",
    label: "Téléphone"
  }
];

function DetailsDrawer({ user }) {
  const [form, setForm] = useState({});
  console.log(form);
  return (
    <Drawer
      width={600}
      buttonComponent={({ onClick }) => (
        <IconButton onClick={onClick} color="secondary">
          <VisibilityIcon />
        </IconButton>
      )}
    >
      <CardHeader
        avatar={
          <Avatar>
            <img width="50" src={user.profilePicture} />
          </Avatar>
        }
        title={
          <Typography color="secondary" variant="body1">
            {user.fullname}
          </Typography>
        }
        subheader={user.email}
      />

      <CardContent>
        <Grid container justify="space-between" direction="column" spacing={32}>
          <Grid item xs={12}>
            <PageHeader size="small" title="Informations" />
          </Grid>
          <Grid item xs={12}>
            <FormBuilder
              onSubmit={val => setForm(val)}
              initialValues={user}
              fields={userFields}
            />
          </Grid>
          <Grid item xs={12}>
            <PageHeader size="small" title="Trips" />
          </Grid>
          <Grid item xs={12}>
            <DrawerTrips trips={user.tripList} />
          </Grid>
        </Grid>
      </CardContent>
    </Drawer>
  );
}

export default DetailsDrawer;
