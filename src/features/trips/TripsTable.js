import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Chip
} from "@material-ui/core";

import DoneIcon from "@material-ui/icons/Done";
import { withStyles } from "@material-ui/core/styles";

function TripsTable() {
  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Prénom</TableCell>
            <TableCell>Nom</TableCell>
            <TableCell>Date de création</TableCell>
            <TableCell>Status</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>Nicolas</TableCell>
            <TableCell>Leroy</TableCell>
            <TableCell>16/12/1994</TableCell>
            <TableCell>
              <Chip
                label="Validé"
                deleteIcon={<DoneIcon />}
                variant="outlined"
                color="primary"
              />
            </TableCell>
            <TableCell />
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
}

export default withStyles()(TripsTable);
