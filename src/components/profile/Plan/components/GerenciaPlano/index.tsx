import React from "react";
import { FilledButton } from "../../../../buttons/FilledButton";
import { Content } from "../../styles";
import { Bill, Modal, ModalContent, ModalFooter, ModalTitle, MyPlanContainer } from "./styles";
import { AddressValue, Label } from "../../../Address/components/AddressItem/styles";
import { LineButton } from "../../../../buttons/LineButton";

const GerenciaPlano: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export default GerenciaPlano;
