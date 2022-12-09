import React from "react";
import Image from "next/image";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { Content, Container, Header, DeliveryDate, Info, Body } from '../styles/requestSucess'
import { useDeliveryStore } from "../stores/delivery";
import { format } from "date-fns";
import { Alert } from "@mui/material";

const RequestSucess: React.FC = () => {
  const { deliveryTime } = useDeliveryStore(({ deliveryTime }) => ({ deliveryTime }));
  return (
    <>
      <Navbar />
      <Container>
        <Content>
          <Header>
            <Image src="/icons/CircleWavyCheck.svg" alt="" width={48} height={48} />
            <h2>Seu pedido foi realizado com sucesso!</h2>
          </Header>
          <Body>
            <DeliveryDate>
              <p>PREVISÃO DE ENTREGA</p>
              <span>{format(new Date(deliveryTime), 'dd/MM/yyyy')}</span>
            </DeliveryDate>
            <Info>
              <div>
                <Image src='/icons/exclamacao.svg' alt="" width={16} height={16}/>
                <li>
                  Você pode acompanhar o status do pedido pelo seu perfil ou pelo email cadastrado na hora da compra.
                </li>
              </div>

              <div>
                <Image src='/icons/exclamacao.svg' alt="" width={16} height={16}/>
                <li>
                  A previsão de entrega pode sofrer alterações de acordo com a confirmação de pagamento.
                </li>
              </div>
            </Info>
          <Alert severity="warning">Para acessar a plataforma, utilize o email cadastrado e a senha é o seu CPF!</Alert>
          </Body>
        </Content>
      </Container>
      <Footer expanded={false} />
    </>
  );
};

export default RequestSucess;
