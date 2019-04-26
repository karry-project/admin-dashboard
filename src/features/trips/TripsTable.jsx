import React, { useState, useEffect } from "react";
import apiClient from "../../services/apiClient";

import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";

import DoneIcon from "@material-ui/icons/Done";

function TripsTable() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    async function fetchTrips() {
      return await apiClient.get("/trips").then(({ data }) => setTrips(data));
    }

    fetchTrips();
  }, []);

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

export default TripsTable;
