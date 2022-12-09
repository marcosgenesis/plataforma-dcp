import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import { useAuth } from "../../../../../contexts/auth";
import { LineButton } from "../../../../buttons/LineButton";
import EditAddress from "../EditAddress";
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
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  return (
    <>
      {!isEditing && user && (
        <Container isActive={isActive}>
          <>
            <Header>
              <h2>Casa</h2>
              <button>
                <RiCloseLine size={32} />
              </button>
            </Header>
            <Content>
              <div className='contentItem'>
                <Label>destinatário</Label>
                <AddressValue>{`${user?.firstName} ${user?.lastName}`}</AddressValue>
              </div>
              <div className='side'>
                <div className='contentItem'>
                  <Label>logradouro</Label>
                  <AddressValue>{`${user?.street}, ${user?.number}`}</AddressValue>
                </div>
                <div className='contentItem'>
                  <Label>CEP</Label>
                  <AddressValue>{user?.zipcode}</AddressValue>
                </div>
              </div>
              <AddressValue>{`${user?.neighbourhood}, ${user?.city} - ${user?.state}`}</AddressValue>
              <div className='contentItem'>
                <Label>complemento</Label>
                <AddressValue>{user?.complement}</AddressValue>
              </div>
              <div className='contentItem'>
                <Label>Telefone</Label>
                <AddressValue>{user?.phone}</AddressValue>
              </div>
            </Content>
            <Footer>
              {!isActive && <LineButton>Tornar Padrão</LineButton>}
              <LineButton onClick={() => setIsEditing(true)}>Editar</LineButton>
            </Footer>
          </>
        </Container>
      )}
      {isEditing && <EditAddress setIsEditing={setIsEditing}/>}
    </>
  );
};

export default AddressItem;
