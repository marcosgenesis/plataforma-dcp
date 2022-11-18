import React from "react";

import { FilledButtonContainer } from "./styles";

interface FilledButtonContainer extends HTMLButtonElement {
  width: string;
  disabled?: false;
}

export const FilledButton: React.FC<FilledButtonProps> = ({
  children,
  width,
  disabled,
}) => {
  return (
    <FilledButtonContainer width={width} disabled={disabled}>
      {children}
    </FilledButtonContainer>
  );
};
