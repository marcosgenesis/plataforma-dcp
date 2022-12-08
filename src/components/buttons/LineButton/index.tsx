import React from "react";

import { LineButtonContainer } from "./styles";

export const LineButton: React.FC<HTMLButtonElement> = ({ children,...props }) => {
  return <LineButtonContainer {...props}>{children}</LineButtonContainer>;
};
