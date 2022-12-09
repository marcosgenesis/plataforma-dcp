import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./validation";

import Title from "../../title";
import { FilledButton } from "../../buttons/FilledButton";
import { LineButtonForm } from "../../buttons/LineButtonForm";

import {
  ContainerForm,
  Buttons,
  InLine,
  PayActive,
  PayActiveContainer,
  TicketContainer,
} from "./style";
import Input from "../../input";
import Select from "../../select";
import { useSignature } from "../../../contexts/Signature";
import { addDays, format } from "date-fns";
import { useDeliveryStore } from "../../../stores/delivery";
import { useAuth } from "../../../contexts/auth";

interface PayFormProps {
  nextStep: () => void;
  backStep: () => void;
}

const PayForm: React.FC<PayFormProps> = ({ backStep, nextStep }) => {
  const [options, setoptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });
  const { taxDelivery, setTaxDelivery, deliveryTime, valueWithDiscount } =
    useDeliveryStore(
      ({ taxDelivery, setTaxDelivery, deliveryTime, valueWithDiscount }) => ({
        taxDelivery,
        setTaxDelivery,
        deliveryTime,
        valueWithDiscount,
      })
    );

  const {
    data,
    addItemPayStep,
    save,
    addItemPersonalStep,
    addItemAddresStep,
    createUse,
  } = useSignature();
  const { user } = useAuth();
  const [payActive, setPayActive] = useState(1);
  const handlePay = ({
    cvv,
    numeroCartao,
    parcela,
    titular,
    vencimento,
    FormOfPayment,
  }: FieldValues) => {
    setLoading(true)
    addItemPayStep({
      cvv,
      numeroCartao,
      parcela,
      titular,
      vencimento,
      taxDelivery,
      deliveryTime,
      formOfPayment: payActive === 1 ? "creditCard" : "billet",
    });
    
    if (!user) {
      createUse();
      return;
    }
    
    save();
    setLoading(false)
  };
  // nextStep()

  useEffect(() => {
    if (user) {
      addItemPersonalStep({
        cpf: user.cpf,
        email: user.email,
        name: `${user.firstName} ${user.lastName}`,
        telefone: user.phone,
      });
      addItemAddresStep({
        bairro: user.neighbourhood,
        cep: user.zipcode,
        city: user.zipcode,
        rua: user.street,
        state: user.state,
        complemento: user.complement,
        numero: user.phone,
      });
    }
  }, [user]);

  useEffect(() => {
    console.log(data);
    if (data.planValue > 100) {
      const results = [1, 2, 3, 4, 5, 6].map((v) => ({
        label: `${v}x de R$ ${Number(data?.planValue / v).toFixed(2)}`,
        value: data?.planValue / v,
      }));
      setoptions(results);
    }
    setoptions([
      { label: `1x de R$ ${data.planValue.toFixed(2)}`, value: data.planValue },
    ]);
  }, [data]);

  return (
    <ContainerForm onSubmit={handleSubmit(handlePay)}>
      <Title>Defina a forma de pagamento</Title>

      <PayActiveContainer>
        <PayActive isCurrent={payActive === 1} onClick={() => setPayActive(1)}>
          Cartão de crédito
        </PayActive>
      </PayActiveContainer>
      {payActive === 1 && (
        <>
          <InLine>
            <Input
              name='numeroCartao'
              label='Número do cartão'
              {...register("numeroCartao")}
              error={formState.errors.numeroCartao}
              color={"rgba(0, 0, 0, 0.66)"}
            />
          </InLine>

          <InLine>
            <Input
              name='cvv'
              label='CVV'
              {...register("cvv")}
              error={formState.errors.cvv}
              color={"rgba(0, 0, 0, 0.66)"}
            />

            <Input
              name='vencimento'
              label='Vencimento (MM/AA)'
              {...register("vencimento")}
              error={formState.errors.vencimento}
              color={"rgba(0, 0, 0, 0.66)"}
            />

            <Select
              name='parcelas'
              options={options}
              label='Parcelas'
              error={formState.errors.parcela}
              {...register("parcela")}
              color={"rgba(0, 0, 0, 0.66)"}
            />
          </InLine>

          <InLine>
            <Input
              name='titular'
              label='Nome do titular do cartão'
              {...register("titular")}
              color={"rgba(0, 0, 0, 0.66)"}
              error={formState.errors.titular}
            />
          </InLine>
        </>
      )}

      {payActive === 2 && (
        <>
          <TicketContainer>
            <Image
              src='/codeBarras.svg'
              alt='Codigo de barras ilustrativo'
              width={176}
              height={95}
            />
            <div>
              <h2>
                Este pagamento é a vista. O prazo de vencimento deste boleto é{" "}
                {format(addDays(new Date(), 7), "dd/MM/yyyy")}.
              </h2>
              <p>
                O prazo de entrega será contado após 1º dia útil da aprovação do
                pedido. Este procedimento costuma ocorrer em até 24 horas, mas
                se o pagamento for realizado por boleto bancário, o banco tem o
                prazo de até três dias úteis para confirmar{" "}
              </p>
            </div>
          </TicketContainer>
        </>
      )}

      <Buttons>
        <LineButtonForm type='button' width='110px' onClick={backStep}>
          Voltar
        </LineButtonForm>
        <FilledButton width='250px' type='submit' loading={loading}>
          Confirmar pagamento
        </FilledButton>
      </Buttons>
    </ContainerForm>
  );
};

export default PayForm;
