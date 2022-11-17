import React from "react";
import { Container, ContainerTotal, Title, Value } from "./style";

interface IProps {
  title: string;
  value: string;
  isPriceTotal?: boolean;
}

const CheckoutItemFooter: React.FC<IProps> = ({title, value, isPriceTotal}) => {
  return isPriceTotal ?
  ( <ContainerTotal>
      <Title> {title} </Title>
      <Value> {value} </Value>
    </ContainerTotal> )
  : (
    <Container>
      <Title> {title} </Title>
      <Value> {value} </Value>
    </Container>
  )  
}

export default CheckoutItemFooter