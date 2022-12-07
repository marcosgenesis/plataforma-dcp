import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import api from "../services/api";

interface SignatureData {
  plan: string;
  planValue: number;
  planId: string;

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
  plan: string;
  planValue?: number;
  planId: string;
}

interface PersonalStep {
  email: string;
  name: string;
  cpf: string;
  telefone: string;
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
  addItemPlanStep: ({ plan, planValue, planId }: PlanStep) => void;
  addItemPersonalStep: ({ email, name, cpf, telefone }: PersonalStep) => void;
  addItemAddresStep: ({
    bairro,
    cep,
    city,
    complemento,
    numero,
    rua,
    state,
  }: AddresStep) => void;
  addItemPayStep: ({
    cvv,
    numeroCartao,
    parcela,
    titular,
    vencimento,
  }: PayStep) => void;
  save: () => void;
}

interface TypeContextProvider {
  children: React.ReactNode;
}

const SignatureContext = createContext<SignatureContextProps>(
  {} as SignatureContextProps
);

export function SignatureContextProvider({ children }: TypeContextProvider) {
  const [data, setData] = useState({} as SignatureData);

  const addItemPlanStep = useCallback(({ plan, planValue, planId }: PlanStep): void => {
    setData((old) => ({ ...old, plan, planValue, planId }));
  }, []);

  const addItemPersonalStep = ({
    email,
    name,
    cpf,
    telefone,
  }: PersonalStep): void => {
    setData((old) => ({ ...old, email, name, cpf, telefone }));
  };

  const addItemAddresStep = ({
    bairro,
    cep,
    city,
    complemento,
    numero,
    rua,
    state,
  }: AddresStep): void => {
    setData((old) => ({
      ...old,
      bairro,
      cep,
      city,
      rua,
      state,
      complemento: complemento ?? undefined,
      numero: numero ?? undefined,
    }));
  };

  const addItemPayStep = ({
    cvv,
    numeroCartao,
    parcela,
    titular,
    vencimento,
  }: PayStep): void => {
    data.cvv = cvv;
    data.numeroCartao = numeroCartao;
    data.parcela = parcela;
    data.titular = titular;
    data.vencimento = vencimento;
  };

  const save = () => {
    console.log("todos -->", data)

    api.post('/api/v1/order/create').then(() =>{

    }).catch()
  }

  return (
    <SignatureContext.Provider
      value={{
        data,
        addItemAddresStep,
        addItemPayStep,
        addItemPersonalStep,
        addItemPlanStep,
        save,
      }}
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
