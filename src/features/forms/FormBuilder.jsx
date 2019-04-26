import React from "react";
import { Grid } from "@material-ui/core";
import { Form, Field } from "react-final-form";
import { TextField } from "final-form-material-ui";
import Save from "@material-ui/icons/Save";

import Button from "@material-ui/core/Button";

function FormBuilder({
  fields,
  grid = {},
  spacing = 16,
  initialValues,
  onSubmit
}) {
  const defaultGrid = {
    xs: 12,
    sm: 12,
    md: 6,
    lg: 6
  };

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={initialValues || {}}
      render={({ handleSubmit }) => {
        return (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={spacing}>
              <Grid item xs={12}>
                <Grid container spacing={spacing}>
                  {fields.map(({ name, label, variant, margin }) => {
                    return (
                      <Grid
                        key={`${name}-grid-item`}
                        item
                        {...defaultGrid}
                        {...grid}
                      >
                        <Field
                          fullWidth
                          type={fields.type || "text"}
                          name={name}
                          label={label}
                          variant={variant || "outlined"}
                          margin={margin || "none"}
                          component={TextField}
                        />
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container justify="flex-end" alignItems="center">
                  <Grid item>
                    <Button variant="outlined" type="submit" color="primary">
                      <Save style={{ marginRight: 10 }} />
                      Enregistrer
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </form>
        );
      }}
    />
  );
}

export default FormBuilder;
