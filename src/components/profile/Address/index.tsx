import React from "react";
import { FilledButton } from "../../buttons/FilledButton";
import { Container } from "../Personal/styles";
import AddressItem from "./components/AddressItem";

import { AdressesContainer, Header } from "./styles";

const Address: React.FC = () => {
  return (
    <Container >
      <div className='breadcrumbs'>
        <a href=''>Minha Conta</a> <p>/</p> <a href=''>Endereços</a>
      </div>
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
