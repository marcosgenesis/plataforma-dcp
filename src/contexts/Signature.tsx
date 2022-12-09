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
import { useAuth } from "./auth";
import { format } from "date-fns";

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
  deliveryTime?: string;

  cvv?: string;
  numeroCartao?: string;
  parcela?: string;
  titular?: string;
  vencimento?: string;
  formOfPayment?: string;
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
  deliveryTime?: string;
  formOfPayment?: string;
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
    formOfPayment
  }: PayStep) => void;
  save: () => void;
  createUse: () => void;
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
  const { login } = useAuth()

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
    taxDelivery,
    formOfPayment,
  }: PayStep): void => {
    data.cvv = cvv;
    data.numeroCartao = numeroCartao;
    data.parcela = parcela;
    data.titular = titular;
    data.vencimento = vencimento;
    data.taxDelivery = taxDelivery ?? undefined;
    data.deliveryTime = deliveryTime ?? undefined;
    data.formOfPayment = formOfPayment ?? undefined
  };

  const createUse = () => {
    api.post('user',{
      firstName: data.name.split(' ')[0],
      lastName: data.name.substring(data.name.split(' ')[0].length + 1, data.name.length),
      email: data.email,
      cpf: data.cpf,
      phone: "+55" + data.telefone,
      password: data.cpf,
      birthdate: "1995-05-12",
      gender: "male",
      street: data.rua,
      city: data.city,
      neighbourhood: data.bairro,
      zipcode: data.cep,
      state: data.state,
      country: "Brasil",
      number: data.numero,
      complement: data.complemento
    }).then(()=>{
      toast.success('Para acessar a plataforma utilize seu CPF como senha');
      
      api.post("/auth", {email: data.email, password: data.cpf}).then((e) => {

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
          couponId:	data.cupomId,
          deliveryTime:	data.deliveryTime
        }
        
        api.post('order/create', dataInfo, {headers: {
          Authorization: `bearer ${e.data.token}` 
        }}).then(() =>{
          setTimeout(()=>{
            router.push('/request-success')
          }, 1000)
        }).catch()
      })
        
    }).catch()
  }

  const save = () => {
    console.log("todos -->", data)
    const dataInfo = {
      planId: data.planId,
      email: data.email,
      fullName: data.name,
      cpf: data.cpf,
      phone: data.telefone,
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
      deliveryTime:	data.deliveryTime,
      formOfPayment: data.formOfPayment,
    }
    api.post('order/create', dataInfo).then(() =>{
      router.push('/request-success')
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
        createUse,
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
