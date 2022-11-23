import React, {useEffect, useState} from "react";
import axios from "axios";

import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from './validation'

import Title from "../../title";
import { FilledButton } from "../../buttons/FilledButton"
import { LineButtonForm } from "../../buttons/LineButtonForm"

import {ContainerForm, Buttons, InLine} from './style'
import Input from "../../input";
import Select from "../../select";

interface PayFormProps {
  nextStep: () => void;
  backStep: () => void;
}

const PayForm: React.FC<PayFormProps> = ({
  backStep,
  nextStep,
}) => {


  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });

  const handlePay = (data: FieldValues) => {
    console.log('data pay-->', data)

    nextStep()
  }

  return (
    <ContainerForm onSubmit={handleSubmit(handlePay)}>
      <Title>Defina a forma de pagamento</Title>

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
          options={[{label: '1 x R$ 600,00', value: 600}, {label:'2 x R$ 300,00', value:300}]}
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

      <Buttons>
        <LineButtonForm  type="button" width="110px" onClick={backStep}> Voltar  </LineButtonForm>
        <FilledButton width="110px" type="submit" > Próximo  </FilledButton>
      </Buttons>
    </ContainerForm>
  )
}

export default PayForm