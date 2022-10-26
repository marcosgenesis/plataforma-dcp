import React from "react";

import { Container, Grid } from "@mui/material";
import SubForm from "../components/SubForm";

const Subscribe: React.FC = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={8} >
          <div
            style={{
              height: "100vh",
              backgroundColor: "#E8F7FC",
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
