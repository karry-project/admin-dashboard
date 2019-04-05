import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 150
  }
});

function UserCard(props) {
  const classes = useStyles();
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar aria-label="Recipe" className={classes.avatar}>
            {props.fullname[0].toUpperCase()}
          </Avatar>
        }
        title={<Typography noWrap>{props.fullname}</Typography>}
        subheader={props.email}
      />

      <CardMedia className={classes.media} image={props.url} />

      <CardActions>{props.actions}</CardActions>
    </Card>
  );
}

UserCard.propTypes = {
  url: PropTypes.string.isRequired, // --> User image URL
  fullname: PropTypes.string.isRequired, // --> User full name
  email: PropTypes.string, // --> User email
  actions: PropTypes.array // --> User actions
};

export default UserCard;
