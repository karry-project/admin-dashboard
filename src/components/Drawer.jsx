import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";

import MUIDrawer from "@material-ui/core/Drawer";
import { Button } from "@material-ui/core";

function Drawer({ buttonComponent, children }) {
  const classes = useStyles();

  const [open, setOpening] = useState(false);

  const onClick = () => setOpening(true);

  return (
    <React.Fragment>
      {(buttonComponent && buttonComponent({ onClick })) || (
        <Button onClick={() => setOpening(true)}>open</Button>
      )}
      <MUIDrawer open={open} onClose={() => setOpening(false)} anchor="right">
        <div className={classes.content}>{children}</div>
      </MUIDrawer>
    </React.Fragment>
  );
}

const useStyles = makeStyles({
  content: {
    width: 420
  }
});

export default Drawer;
