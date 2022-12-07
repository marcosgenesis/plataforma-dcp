import React from "react";
import { FilledButton } from "../../buttons/FilledButton";
import { LineButton } from "../../buttons/LineButton";
import { AddressValue, Label } from "../Address/components/AddressItem/styles";
import { Container } from "../Personal/styles";

import { Bill, Content, MyPlanContainer } from "./styles";

const Plan: React.FC = () => {
  return (
    <Container>
      <div className='breadcrumbs'>
        <a href=''>Minha Conta</a> <p>/</p> <a href=''>Assinatura</a>
      </div>
      <h1>Assinatura</h1>
      <Content>
        <MyPlanContainer>
          <h2>Meu Plano</h2>
          <p>Plano Anual</p>
          <ul>
            <li>Parcele em até 12x sem juros no cartão de crédito.</li>
            <li>Economize R$ 127,00</li>
          </ul>
          <FilledButton>Gerenciar Plano</FilledButton>
        </MyPlanContainer>
        <div className='secondContainer'>
          <h2>Cobrança e Renovação</h2>
          <Bill>
            <div className='side'>
              <div className='item'>
                <Label>Forma de pagamento</Label>
                <AddressValue>R$ 600,00/mês</AddressValue>
              </div>
              <div className='item'>
                <Label>Valor</Label>
                <AddressValue>R$ 600,00/mês</AddressValue>
              </div>
            </div>
            <div className='side'>
              <div className='item'>
                <Label>Próximo Pagamento</Label>
                <AddressValue>20 de dezembro de 2022</AddressValue>
              </div>
              <div className='item'>
                <Label>Proxima Entrega</Label>
                <AddressValue>05 de janeiro de 2022</AddressValue>
              </div>
            </div>
          </Bill>
          <div className="footer">
            <LineButton>Editar Pagamento</LineButton>
          </div>
        </div>
      </Content>
    </Container>
  );
};

export default Plan;
