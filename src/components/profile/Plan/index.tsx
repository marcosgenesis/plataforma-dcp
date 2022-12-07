import React, { useEffect, useState } from "react";
import api from "../../../services/api";
import { FilledButton } from "../../buttons/FilledButton";
import { LineButton } from "../../buttons/LineButton";
import { AddressValue, Label } from "../Address/components/AddressItem/styles";
import { Container } from "../Personal/styles";

import { Bill, Content, MyPlanContainer } from "./styles";

const Plan: React.FC = () => {
  const [plan, setPlan] = useState(null);
  const [step, setStep] = useState("geral");
  useEffect(() => {
    const response = api.get("/user/plan").then((r) => setPlan(r.data.data));
  }, []);

  return (
    <Container>
      {step === "geral" && (
        <>
          <div className='breadcrumbs'>
            <a href=''>Minha Conta</a> <p>/</p> <a href=''>Assinatura</a>
          </div>
          <h1>Assinatura</h1>
          <Content>
            <MyPlanContainer>
              {!!plan && (
                <>
                  <h2>Meu Plano</h2>
                  <p>{plan?.title}</p>
                  <ul>
                    <li>{plan.description}</li>
                  </ul>
                  <FilledButton onClick={() => setStep("gerenciaPlano")}>
                    Gerenciar Plano
                  </FilledButton>
                </>
              )}
            </MyPlanContainer>
            <div className='secondContainer'>
              <h2>Cobrança e Renovação</h2>
              {!!plan ? (
                <Bill>
                  <div className='side'>
                    <div className='item'>
                      <Label>Forma de pagamento</Label>
                      <AddressValue>Cartão de crédito</AddressValue>
                    </div>
                    <div className='item'>
                      <Label>Valor</Label>
                      <AddressValue>R$ 600,00/mês</AddressValue>
                    </div>
                  </div>
                  <div className='side'>
                    <div className='item'>
                      <Label>Próximo Pagamento</Label>
                      <AddressValue>07 de janeiro de 2022</AddressValue>
                    </div>
                    <div className='item'>
                      <Label>Proxima Entrega</Label>
                      <AddressValue>05 de janeiro de 2022</AddressValue>
                    </div>
                  </div>
                </Bill>
              ) : (
                "Sem planos assinados"
              )}
            </div>
          </Content>
        </>
      )}
      {step === "gerenciaPlano" && <>opa</>}
    </Container>
  );
};

export default Plan;
