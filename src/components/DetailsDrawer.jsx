import React from "react";
import Drawer from "./Drawer";
import VisibilityIcon from "@material-ui/icons/Visibility";
import IconButton from "@material-ui/core/IconButton";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const DetailsDrawer = ({ user }) => (
  <Drawer
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
        <Typography color="secondary" noWrap>
          {user.fullname}
        </Typography>
      }
      subheader={user.email}
    />

    <CardContent>toto</CardContent>
  </Drawer>
);

export default DetailsDrawer;
