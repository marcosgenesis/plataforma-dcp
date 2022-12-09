import Link from "next/link";
import React, { useEffect, useState } from "react";
import api from "../../../services/api";
import BreadCrumbs from "../../breadcrumb";
import { FilledButton } from "../../buttons/FilledButton";
import { LineButton } from "../../buttons/LineButton";
import { AddressValue, Label } from "../Address/components/AddressItem/styles";
import { Container } from "../Personal/styles";
import GerenciaPlano from "./components/GerenciaPlano";
import { MyPlanContainer, Bill } from "./components/GerenciaPlano/styles";

import { Content, EmptyState, HistoricItem, Labels } from "./styles";
import styled from "styled-components";



const breadcrumbs = [
  {
    path: "#",
    label: "Minha Conta",
  },
  {
    path: "#",
    label: "Assinatura",
    active: true,
  },
];

const Plan: React.FC = () => {
  const [plan, setPlan] = useState(null);
  const [step, setStep] = useState("geral");
  const [subscription, setSubscription] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(true);

  useEffect(() => {
    const response = api.get("/user/plan").then((r) => setPlan(r.data.data));
    api.get(`/subscription`).then((r) => setSubscription(r.data.data));
  }, []);
  return (
    <Container>
      {step === "geral" && (
        <>
          <BreadCrumbs breadcrumbs={breadcrumbs} />
          <h1>Assinatura</h1>
          <Content>
            {!!Object.keys(plan ?? 0).length ? (
              <>
                <MyPlanContainer>
                  <h2>Meu Plano</h2>
                  <p>{plan?.title}</p>
                  <ul>
                    <li>{plan.description}</li>
                  </ul>
                  <FilledButton onClick={() => setStep("gerenciaPlano")}>
                    Gerenciar Plano
                  </FilledButton>
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
                          <Label>Valor total</Label>
                          <AddressValue>{`R$ ${Number(plan.price).toFixed(2)}`}</AddressValue>
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
              </>
            ) : (
              <EmptyState>
                <div>
                  <h3>Nenhuma assinatura ativa!</h3>
                  <p>
                    Ops! Não encontramos nenhuma assinatura ativa vinculada a
                    sua conta.
                  </p>
                </div>
                <div className='buttons'>
                  <LineButton onClick={() => setStep("historic")}>
                    Histórico de Compras
                  </LineButton>
                  <Link href='/signature'>
                    <FilledButton>Assinar Agora</FilledButton>
                  </Link>
                </div>
              </EmptyState>
            )}
          </Content>
        </>
      )}
      {step === "gerenciaPlano" && (
        <GerenciaPlano plan={plan} setStep={setStep} />
      )}

      {step === "historic" && (
        <>
          <div>
            <div className='breadcrumbs'>
              <a href='#' onClick={() => setStep("geral")}>
                Minha Conta
              </a>{" "}
              <p>/</p>{" "}
              <a href='#' onClick={() => setStep("geral")}>
                Assinatura
              </a>{" "}
              <p>/</p> <a href='#'>Histórico de compra</a>
            </div>
          </div>
          <div className='secondContainer'>
            <h2>Histórico de compras</h2>
            <Labels>
              <p>STATUS</p>
              <p>VALOR</p>
              <p>PLANO</p>
            </Labels>
            {subscription?.map((i, index) => (
              <HistoricItem
                key={index}
                
              >
                {console.log(i)}
                <p>{i.isActive ? "ATIVO" : "DESABILITADO"}</p>
                <p>{`R$ ${i.plan.price}`}</p>
                <p>{i.plan.title}</p>
              </HistoricItem>
            ))}
          </div>
        </>
      )}
    </Container>
  );
};

export default Plan;
