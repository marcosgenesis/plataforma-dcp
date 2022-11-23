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

  const handlePersonal = (data: FieldValues) => {
    console.log('data person-->', data)

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
        <Input
          name='cpf'
          label='CPF'
          {...register("cpf")}
          error={formState.errors.cpf}
          color={"rgba(0, 0, 0, 0.66)"}
        />

        <div>
          <Input
            name='telefone'
            label='Telefone?'
            {...register("telefone")}
            error={formState.errors.telefone}
            color={"rgba(0, 0, 0, 0.66)"}
          />
          
          <span> Número com DDD e dígito 9 no início, caso houver. </span>
        </div>
      </InLine>



      <Buttons>
        <LineButtonForm  type="button" width="110px" onClick={backStep}> Voltar  </LineButtonForm>
        <FilledButton width="110px" type="submit" > Próximo  </FilledButton>
      </Buttons>
    </ContainerForm>
  )
}

export default PersonalForm