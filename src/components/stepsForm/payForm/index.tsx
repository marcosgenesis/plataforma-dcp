import React, {useEffect, useState} from "react";
import Image from "next/image";
import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from './validation'

import Title from "../../title";
import { FilledButton } from "../../buttons/FilledButton"
import { LineButtonForm } from "../../buttons/LineButtonForm"

import {ContainerForm, Buttons, InLine, PayActive, PayActiveContainer, TicketContainer} from './style'
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

  const [payActive, setPayActive] = useState(1)
  const handlePay = (data: FieldValues) => {
    console.log('data pay-->', data)

    nextStep()
  }

  return (
    <ContainerForm onSubmit={handleSubmit(handlePay)}>
      <Title>Defina a forma de pagamento</Title>
      
      <PayActiveContainer>
        <PayActive 
          isCurrent={ payActive === 1 }
          onClick={() => setPayActive(1)}
        >
          Cartão de crédito
        </PayActive>
        <PayActive 
          isCurrent={ payActive === 2 }
          onClick={() => setPayActive(2)}
        >
          Boleto
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
              <h2>Este pagamento é a vista. O prazo de vencimento deste boleto é 23/11/2022.</h2>
              <p> O prazo de entrega será contado após 1º dia útil da aprovação do pedido.  
                Este procedimento costuma ocorrer em até 24 horas, mas se o pagamento for realizado por boleto bancário, 
                o banco tem o prazo de até três dias úteis para confirmar </p>
            </div>
          </TicketContainer>
        </>
      )}
      

      <Buttons>
        <LineButtonForm  type="button" width="110px" onClick={backStep}> Voltar  </LineButtonForm>
        <FilledButton width="210px" type="submit" > Confirmar pagamento  </FilledButton>
      </Buttons>
    </ContainerForm>
  )
}

export default PayForm