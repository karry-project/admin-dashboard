import React, { useState, useEffect } from "react";
import apiClient from "../services/apiClient";

import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import DeleteIcon from "@material-ui/icons/Delete";

import UserCard from "./users/UserCard";

import PageHeader from "../components/PageHeader";
import EditDrawer from "../components/EditDrawer";
import AddDrawer from "../components/AddDrawer";
import DetailsDrawer from "../components/DetailsDrawer";

function UsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUser() {
      return await apiClient.get("/users").then(({ data }) => {
        setUsers(data);
      });
    }

    fetchUser();
  }, []);

  return (
    <div>
      <Grid container spacing={40}>
        <Grid item xs={12}>
          <PageHeader useSearch title="Users">
            <AddDrawer />
          </PageHeader>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={32}>
            {users.map(user => {
              return (
                <Grid key={user.id} item sm={6} md={3} xs={12}>
                  <UserCard
                    fullname={user.fullname}
                    email={user.email}
                    url={user.profilePicture}
                    actions={[
                      <DetailsDrawer
                        user={user}
                        key={`edit-action-${user.id}`}
                      />,
                      <IconButton
                        key={`delete-action-${user.id}`}
                        color="secondary"
                      >
                        <DeleteIcon />
                      </IconButton>
                    ]}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default UsersPage;
