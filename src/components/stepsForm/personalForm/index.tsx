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
import { useSignature } from "../../../contexts/Signature";
import MaskedInput from "../../maskedInput";

interface PersonalFormProps {
  nextStep: () => void;
  backStep: () => void;
}

const PersonalForm: React.FC<PersonalFormProps> = ({
  backStep,
  nextStep,
}) => {

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });

  const { data, addItemPersonalStep } = useSignature()

  const handlePersonal = ({cpf, email, name, telefone}: FieldValues) => {
    addItemPersonalStep({cpf, email, name, telefone})

    nextStep()
  }


  return (
    <ContainerForm onSubmit={handleSubmit(handlePersonal)}>
      <Title>Preencha seus dados pessoais</Title>

      <Input
          name='email'
          label='Email'
          type="email"
          {...register("email")}
          error={formState.errors.email}
          color={"rgba(0, 0, 0, 0.66)"}
        />

        <Input
          name='name'
          label='Nome completo'
          {...register("name")}
          error={formState.errors.name}
          color={"rgba(0, 0, 0, 0.66)"}
        />

      <InLine>
        <MaskedInput
          mask="999.999.999-99"
          name='cpf'
          label='CPF'
          {...register("cpf")}
          error={formState.errors.cpf}
          color={"rgba(0, 0, 0, 0.66)"}
        />

        <div>
          <MaskedInput
            mask="99 999999999"
            name='telefone'
            label='Telefone?'
            {...register("telefone")}
            error={formState.errors.telefone}
            color={"rgba(0, 0, 0, 0.66)"}
          />
          
          <span> N??mero com DDD e d??gito 9 no in??cio, caso houver. </span>
        </div>
      </InLine>



      <Buttons>
        <LineButtonForm  type="button" width="110px" onClick={backStep}> Voltar  </LineButtonForm>
        <FilledButton width="110px" type="submit" > Pr??ximo  </FilledButton>
      </Buttons>
    </ContainerForm>
  )
}

export default PersonalForm