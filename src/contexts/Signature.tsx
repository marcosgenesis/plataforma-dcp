import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import api from "../services/api";
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/router'

interface SignatureData {
  plan: string;
  planValue: number;
  planId: string;
  cupomId?: string,

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
  taxDelivery?: number;
  deliveryTime?: Date;

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
  cupomId?: string,
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
  taxDelivery?: number;
  deliveryTime?: Date;
}

interface SignatureContextProps {
  data: SignatureData;
  addItemPlanStep: ({ plan, planValue, planId, cupomId }: PlanStep) => void;
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
    taxDelivery,
    deliveryTime,
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
  const router = useRouter()

  const addItemPlanStep = useCallback(({ plan, planValue, planId, cupomId }: PlanStep): void => {
    setData((old) => ({ ...old, plan, planValue, planId, cupomId: cupomId ?? undefined}));
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
    state
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
    deliveryTime,
    taxDelivery
  }: PayStep): void => {
    data.cvv = cvv;
    data.numeroCartao = numeroCartao;
    data.parcela = parcela;
    data.titular = titular;
    data.vencimento = vencimento;
    data.taxDelivery = taxDelivery ?? undefined;
  };

  const save = () => {
    console.log("todos -->", data)
    const dataInfo = {
      planId: data.planId,
      email: data.email,
      fullName: data.name,
      cpf: data.cpf,
      phone: data.numero,
      street: data.rua,
      neighbourhood: data.bairro,
      city: data.city,
      zipcode: data.cep,
      state: data.state,
      country: "BRAZIL",
      complement: data.complemento,
      taxDelivery:	data.taxDelivery,
      totalPrice:	data.planValue,
      couponId:	data.cupomId,
      // deliveryTime:	string
    }
    api.post('order/create', dataInfo).then(() =>{
      toast.success('Assinatura realizada com sucesso');
      setTimeout(()=>{
        router.push('/')
      }, 3500)
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
