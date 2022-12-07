import React, { ReactNode } from "react";
import { convertMoney } from "../../../../utils/convertMoney";
import {
  Container,
  ContentValue,
  ContentText,
  Description,
  Title,
} from "./style";

interface IProps {
  title: string;
  description?: string;
  value?: number;
  children: ReactNode;
}

const ChekcoutItemContent: React.FC<IProps> = ({
  description,
  value,
  title,
  children,
}) => {
  return (
    <Container>
      <ContentText>
        <Title>{title}</Title>
        {children}
        <Description>{description}</Description>
      </ContentText>
      <ContentValue>{value && convertMoney(value)}</ContentValue>
    </Container>
  );
};

export default ChekcoutItemContent;
