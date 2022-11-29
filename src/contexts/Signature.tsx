import React, { createContext, useContext, useEffect, useState } from "react";

interface SignatureData {
  plan: string;

  email: string;
  name: string;
  cpf: string;
  telefone: string;

  bairro: string;
  cep: string;
  city: string;
  complemento?: string;
  numero?: string;
  rua: string;
  state: string;

  cvv?: string;
  numeroCartao?: string;
  parcela?: string;
  titular?: string;
  vencimento?: string;
}

interface PlanStep {
  plan: string
}

interface PersonalStep {
  email: string
  name: string
  cpf: string
  telefone: string
}

interface AddresStep {
  bairro: string;
  cep: string;
  city: string;
  complemento?: string;
  numero?: string;
  rua: string;
  state: string;
}

interface PayStep {
  cvv?: string;
  numeroCartao?: string;
  parcela?: string;
  titular?: string;
  vencimento?: string;
}

interface SignatureContextProps {
  data: SignatureData;
  addItemPlanStep: ({ plan }: PlanStep) => void;
  addItemPersonalStep: ({  email, name, cpf, telefone }: PersonalStep) => void;
  addItemAddresStep: ({ bairro, cep, city, complemento, numero, rua, state}: AddresStep) => void;
  addItemPayStep: ({ cvv, numeroCartao, parcela, titular, vencimento }: PayStep) => void;
}

interface TypeContextProvider {
  children: React.ReactNode;
}

const SignatureContext = createContext<SignatureContextProps>(
  {} as SignatureContextProps
);

export function SignatureContextProvider({ children }: TypeContextProvider) {
  const data:SignatureData = {
    plan: '',
    email: '',
    name: '',
    cpf: '',
    telefone: '',

    bairro: '',
    cep: '',
    city: '',
    complemento: '',
    numero: '',
    rua: '',
    state: '',

    cvv: '',
    numeroCartao: '',
    parcela: '',
    titular: '',
    vencimento: '',
  };

  const addItemPlanStep = ({ plan }: PlanStep): void => {
    data.plan = plan

    console.log('data-->', data)
  };

  const addItemPersonalStep = ({ email, name, cpf, telefone  }: PersonalStep): void => {
    data.email = email
    data.name = name
    data.cpf = cpf
    data.telefone = telefone

    console.log('data-->', data)
  };

  const addItemAddresStep = ({ bairro, cep, city, complemento, numero, rua, state}: AddresStep): void => {
    data.bairro = bairro
    data.cep = cep
    data.city = city
    data.rua = rua
    data.state = state
    {complemento && (data.complemento = complemento)}
    {numero && (data.numero = numero)}

    console.log('data-->', data)
  };

  const addItemPayStep = ({ cvv, numeroCartao, parcela, titular, vencimento }: PayStep): void => {
    data.cvv = cvv
    data.numeroCartao = numeroCartao
    data.parcela = parcela
    data.titular = titular
    data.vencimento = vencimento

    console.log('data-->', data)
  };
  return (
    <SignatureContext.Provider
      value={{ data, addItemAddresStep, addItemPayStep, addItemPersonalStep, addItemPlanStep }}
    >
      {children}
    </SignatureContext.Provider>
  );
}

export function useSignature(): SignatureContextProps {
  const context = useContext(SignatureContext);
  if (!context)
    throw new Error("useSignature must be within an SignatureContext");
  return context;
}
