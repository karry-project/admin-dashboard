import React from "react";
import { getUsers } from "../apiClient/user";
import { Grid, Button } from "@material-ui/core";
import UserCard from "./users/UserCard";

function UsersPage() {
  const users = getUsers();

  console.log(users);

  return "";
}

export default UsersPage;
