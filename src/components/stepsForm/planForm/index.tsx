import React, { useEffect, useState } from "react";

import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./validation";

import Plan from "../../plan";
import Title from "../../title";
import { FilledButton } from "../../buttons/FilledButton";

import { ContainerForm, MessageErro, Buttons } from "./style";
import { useSignature } from "../../../contexts/Signature";
import api from "../../../services/api";

interface PlanProps {
  nextStep: () => void;
}

const PlanForm: React.FC<PlanProps> = ({ nextStep, ...rest }) => {
  const { register, handleSubmit, formState, watch } = useForm({
    resolver: yupResolver(schema),
  });
  const { data, addItemPlanStep } = useSignature();
  const [plans, setPlans] = useState([])
  const watchPlan = watch("plan");

  const handlePlan = (data: FieldValues) => {
    nextStep();
  };

  const loadPlans = async () => {
    const response = await api.get('/plans', {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc0Njc4ZTM1LTE2MjItNDk0MC04ZDkxLTBlMTdmZWIzZDFjNSIsImZpcnN0TmFtZSI6IsONdGFsbyIsImxhc3ROYW1lIjoiSU5URUdSQSIsImVtYWlsIjoiaXRhbG9saW1hNTM0QGdtYWlsLmNvbSIsImlhdCI6MTY3MDQxOTc3NywiZXhwIjoxNjcwNTA2MTc3fQ.L8dWiWi-HfGwVLJ4BQQZJKikRccv6y5NmlSKvX7Miqc",
      },
    })
    setPlans(response.data)
    console.log('planos -->', response.data)

  }
  useEffect(()=>{
    loadPlans()
  },[])

  return (
    <>
      <ContainerForm onSubmit={handleSubmit(handlePlan)}>
        <Title>Escolha seu plano de assinatura</Title>

        { plans.map((plan) => {
          return (
            <Plan
              idSelecPlan={plan.id}
              preco={plan.price}
              title={plan.title}
              itensList={[
                plan.description
              ]}
              {...register("plan")}
            />
          )
        })}

        {/* <Plan
          idSelecPlan='radio-2'
          preco={1500}
          title='Plano Anual'
          itensList={[
            "Parcele em até 12x sem juros no cartão de crédito.",
            "Economize R$ 127,00.",
          ]}
          {...register("plan")}
        /> */}

        {formState.errors.plan && (
          <MessageErro> {formState.errors.plan?.message} </MessageErro>
        )}

        <Buttons>
          <FilledButton> Próximo </FilledButton>
        </Buttons>
      </ContainerForm>
    </>
  );
};

export default PlanForm;
