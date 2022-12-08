import React from "react";
import BreadCrumbs from "../../breadcrumb";
import { FilledButton } from "../../buttons/FilledButton";
import { Container } from "../Personal/styles";
import AddressItem from "./components/AddressItem";

import { AdressesContainer, Header } from "./styles";
const breadcrumbs = [
  {
    path: "#",
    label: "Minha Conta",
  },
  {
    path: "#",
    label: "Endereços",
    active: true,
  },
];

const Address: React.FC = () => {
  return (
    <Container >
      <BreadCrumbs breadcrumbs={breadcrumbs}/>
      <Header>
        <h1>Endereços</h1>
        <FilledButton>Novo Endereço</FilledButton>
      </Header>
      <AdressesContainer>
        <AddressItem />
        <AddressItem isActive={false}/>
        <AddressItem isActive={false}/>
      </AdressesContainer>
    </Container>
  );
};

export default Address;
