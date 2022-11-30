import React from "react";

import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from './validation'

import Plan from "../../plan";
import Title from "../../title";
import { FilledButton } from "../../buttons/FilledButton"

import {ContainerForm, MessageErro, Buttons} from './style'


interface PlanProps {
  nextStep: () => void
}

const PlanForm: React.FC<PlanProps> = ({nextStep, ...rest}) => {

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });


  const handlePlan = (data: FieldValues) => {
    nextStep()
  } 

  return (
    <>
      <ContainerForm onSubmit={handleSubmit(handlePlan)}>
        <Title>Escolha seu plano de assinatura</Title>
        
        <Plan 
          idSelecPlan="radio-1" 
          preco={60} 
          title="Lançamento: Coleção completa (oferta limitada)"
          itensList={['Receba todas as caixas de uma só vez!',
          'Parcele em até 8x sem juros no cartão de crédito']}
          {...register('plan')}
        />                  
            
        <Plan 
          idSelecPlan="radio-2"
          preco={1500} 
          title="Plano Anual"
          itensList={['Parcele em até 12x sem juros no cartão de crédito.',
          'Economize R$ 127,00.']}
          {...register('plan')}
        />

        {formState.errors.plan && <MessageErro> {formState.errors.plan?.message} </MessageErro>}
        
        <Buttons>     
          <FilledButton> Próximo  </FilledButton>
        </Buttons>
       
      </ContainerForm>
    </>
  )
}



export default PlanForm