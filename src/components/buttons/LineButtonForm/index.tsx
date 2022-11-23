import React from "react";

import { LineButtonContainer } from "./styles";

export const LineButtonForm: React.FC = ({ children, ...rest }) => {
  return <LineButtonContainer {...rest}> {children} </LineButtonContainer>;
};
