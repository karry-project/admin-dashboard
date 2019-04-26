import React from "react";
import styled from "styled-components";

import AppsIcon from "@material-ui/icons/Apps";
import { Button, Fab } from "@material-ui/core";

const ActionButton = styled.span`
  position: absolute;
  bottom: 5%;
  right: 5%;
`;

function FloatingActionsButton() {
  return (
    <ActionButton>
      <Fab size="small" color="primary" aria-label="Apps">
        <AppsIcon />
      </Fab>
    </ActionButton>
  );
}

export default FloatingActionsButton;
