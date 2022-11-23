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
  ...rest
}) => {
  return (
    <FilledButtonContainer width={width} disabled={disabled} {...rest}>
      {children}
    </FilledButtonContainer>
  );
};
