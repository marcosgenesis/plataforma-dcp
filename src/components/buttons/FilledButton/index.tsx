import { CircularProgress } from "@mui/material";
import React from "react";

import { FilledButtonContainer } from "./styles";

interface FilledButtonContainer extends HTMLButtonElement {
  width: string;
  disabled?: false;
  loading?: boolean;
}

export const FilledButton: React.FC<FilledButtonProps> = ({
  children,
  width,
  disabled,loading,
  ...rest
}) => {
  return (
    <FilledButtonContainer width={width} disabled={disabled} {...rest}>
      {loading ? 'Carregando...' : children}
    </FilledButtonContainer>
  );
};
