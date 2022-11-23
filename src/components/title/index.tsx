import React from "react";

import { TitleContainer} from './style'

const Title: React.FC = ({ children }) => {
  return (
    <TitleContainer> {children} </TitleContainer>
  )
}

export default Title;