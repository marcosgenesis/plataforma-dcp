import React from "react";
import {convertMoney} from "../../../../utils/convertMoney"
import { Container, ContainerTotal, Title, Value } from "./style";

interface IProps {
  title: string;
  value: number;
  isPriceTotal?: boolean;
}

const CheckoutItemFooter: React.FC<IProps> = ({title, value, isPriceTotal}) => {
  return isPriceTotal ?
  ( <ContainerTotal>
      <Title> {title} </Title>
      <Value> {convertMoney(value)} </Value>
    </ContainerTotal> )
  : (
    <Container>
      <Title> {title} </Title>
      <Value> {convertMoney(value)} </Value>
    </Container>
  )  
}

export default CheckoutItemFooter