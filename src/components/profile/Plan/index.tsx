import Link from "next/link";
import React, { useEffect, useState } from "react";
import api from "../../../services/api";
import { FilledButton } from "../../buttons/FilledButton";
import { LineButton } from "../../buttons/LineButton";
import { AddressValue, Label } from "../Address/components/AddressItem/styles";
import { Container } from "../Personal/styles";

import {
  Bill,
  Content,
  EmptyState,
  Modal,
  ModalContent,
  ModalFooter,
  ModalTitle,
  MyPlanContainer,
} from "./styles";

const Plan: React.FC = () => {
  const [plan, setPlan] = useState(null);
  const [step, setStep] = useState("geral");
  const [subscription, setSubscription] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(true);

  useEffect(() => {
    const response = api.get("/user/plan").then((r) => setPlan(r.data.data));
    api.get(`/subscription`).then((r) => setSubscription(r.data.data));
  }, []);

  function handleCancelPlan() {
    api.put(`/subscription/disable/${plan.Subscription[0].id}`);
  }

  return (
    <Container>
      {step === "geral" && (
        <>
          <div className='breadcrumbs'>
            <a href=''>Minha Conta</a> <p>/</p> <a href=''>Assinatura</a>
          </div>
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
        <div>
          <div className='breadcrumbs'>
            <a href='#'>Minha Conta</a> <p>/</p>{" "}
            <a href='#' onClick={() => setStep("geral")}>
              Assinatura
            </a>
            <p>/</p> <a href='#'>Gerenciar Plano</a>
          </div>
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
                  <div className='side-cancel'>
                    <div className='item'>
                      <Label>Forma de pagamento</Label>
                      <AddressValue>Cartão de crédito</AddressValue>
                    </div>
                    <LineButton onClick={() => setModalIsOpen(true)}>
                      Cancelar assinatura
                    </LineButton>
                  </div>
                </Bill>
              ) : (
                "Sem planos assinados"
              )}
            </div>
          </Content>
          {modalIsOpen && (
            <Modal>
              <ModalContent>
                <ModalTitle>
                  Tem certeza que deseja cancelar sua assinatura?
                </ModalTitle>
                <ModalFooter>
                  <LineButton onClick={() => setModalIsOpen(false)}>
                    Cancelar
                  </LineButton>
                  <FilledButton onClick={() => handleCancelPlan()}>
                    Confirmar
                  </FilledButton>
                </ModalFooter>
              </ModalContent>
            </Modal>
          )}
        </div>
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
            {subscription?.map((i, index) => (
              <div
                key={index}
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <p>{i.isActive ? "ATIVO" : "DESABILITADO"}</p>
                <p>{`R$ ${i.plan.price}`}</p>
                <p>{i.plan.title}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </Container>
  );
};

export default Plan;
