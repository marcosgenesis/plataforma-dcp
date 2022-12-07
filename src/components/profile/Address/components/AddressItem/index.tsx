import React from "react";
import { RiCloseLine } from "react-icons/ri";
import { LineButton } from "../../../../buttons/LineButton";
import {
  Container,
  Header,
  Content,
  Label,
  AddressValue,
  Footer,
} from "./styles";

interface AddressProps {
  isActive: boolean;
}
const AddressItem: React.FC<AddressProps> = ({ isActive = true }) => {
  return (
    <Container isActive={isActive}>
      <Header>
        <h2>Casa</h2>
        <button>
          <RiCloseLine size={32} />
        </button>
      </Header>
      <Content>
        <div className='contentItem'>
          <Label>destinatário</Label>
          <AddressValue>Fulano de tal</AddressValue>
        </div>
        <div className='side'>
          <div className='contentItem'>
            <Label>logradouro</Label>
            <AddressValue>Rua Lorem Ipsum, 1234</AddressValue>
          </div>
          <div className='contentItem'>
            <Label>CEP</Label>
            <AddressValue>63900-069</AddressValue>
          </div>
        </div>
        <AddressValue>Centro, Quixadá - CE</AddressValue>
        <div className='contentItem'>
          <Label>complemento</Label>
          <AddressValue>Apartamento 505 A</AddressValue>
        </div>
        <div className='contentItem'>
          <Label>Telefone</Label>
          <AddressValue>(88) 98765 4321</AddressValue>
        </div>
      </Content>
      <Footer>
        {!isActive && <LineButton>Tornar Padrão</LineButton>}
        <LineButton>Editar</LineButton>
      </Footer>
    </Container>
  );
};

export default AddressItem;
