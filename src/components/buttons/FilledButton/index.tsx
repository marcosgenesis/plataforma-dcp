import React from "react";

import { FilledButtonContainer } from "./styles";

interface FilledButtonContainer extends HTMLButtonElement {
  width: string;
}

export const FilledButton: React.FC<FilledButtonProps> = ({
  children,
  width,
  ...rest
}) => {
  return (
    <FilledButtonContainer width={width} {...rest}>{children}</FilledButtonContainer>
  );
};
