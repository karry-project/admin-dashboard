import React, { useState } from "react";

import MUIDrawer from "@material-ui/core/Drawer";
import AddIcon from "@material-ui/icons/Apps";
import { Button, Fab } from "@material-ui/core";
import styled from "styled-components";
import FloatingActionsButton from "./FloatingActionsButton";

function Drawer({ buttonComponent, width, children }) {
  const [open, setOpening] = useState(false);

  const onClick = () => setOpening(true);
  const onClose = () => setOpening(false);

  return (
    <React.Fragment>
      {(buttonComponent && buttonComponent({ onClick, onClose })) || (
        <Button onClick={onClick}>open</Button>
      )}
      <MUIDrawer open={open} onClose={onClose} anchor="right">
        <Content width={width}>
          {typeof children === "function" ? children({ onClose }) : children}
        </Content>
      </MUIDrawer>
    </React.Fragment>
  );
}

const Content = styled.div`
  width: ${({ width = 520 }) => width + "px"};
  padding: 20px;
  height: 100vh;
  overflow-y: auto;

  position: relative;
`;

export default Drawer;
