import React from "react";

import { Container, Grid } from "@mui/material";

const Subscribe: React.FC = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "#c9c9c9",
            }}
          >
            Imagem
          </div>
        </Grid>
        <Grid item xs={4}>
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "#c2c2c2",
            }}
          >
            Formulário
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Subscribe;
