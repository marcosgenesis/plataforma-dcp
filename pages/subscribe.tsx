import React from "react";

import { Container, Grid } from "@mui/material";
import SubForm from "../components/SubForm";

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
          <SubForm
            name={""}
            uf={""}
            city={""}
            email={""}
            description={""}
            checkEmail={false}
            checkTerm={false}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Subscribe;
