import React, { useEffect, useState } from "react";
import axios from "axios";

import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./validation";

import Title from "../../title";
import { FilledButton } from "../../buttons/FilledButton";
import { LineButtonForm } from "../../buttons/LineButtonForm";

import { ContainerForm, Buttons, InLine } from "./style";
import Input from "../../input";
import Select from "../../select";
import { useSignature } from "../../../contexts/Signature";

interface AddressFormProps {
  nextStep: () => void;
  backStep: () => void;
}

interface ViaCepProps {
  cep?: string;
  uf: string;
  localidade: string;
  logradouro: string;
  bairro: string;
}

const AddressForm: React.FC<AddressFormProps> = ({ backStep, nextStep }) => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const {
    register,
    setValue,
    handleSubmit,
    formState,
    watch,
    reset,
    clearErrors,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const watchState = watch("state");
  
  const { data, addItemAddresStep } = useSignature();

  const handlePersonal = ({
    bairro,
    cep,
    city,
    rua,
    state,
    complemento,
    numero,
  }: FieldValues) => {
    const cepComplete = cep?.replace(/[^0-9]/g, "");
    addItemAddresStep({ bairro, cep: cepComplete, city, rua, state, complemento, numero });
    nextStep();
  };

  const setValuesInputs = (data: ViaCepProps) => {
    setValue("rua", data.logradouro);
    setValue("bairro", data.bairro);
    setValue("city", data.localidade);
    setValue("state", data.uf);
    setValue("numero", data.numero);
    clearErrors("rua");
    clearErrors("bairro");
    clearErrors("numero");
    clearErrors("city");
  };

  const onBlurAddressCEP = (event) => {
    const { value } = event.target;

    const cep = value?.replace(/[^0-9]/g, "");
    if (cep?.length !== 8) {
      return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json`)
      .then((response) => response.json())
      .then((data) => {
        if (data?.erro) {
          reset();
          return;
        }

        const dataViaCep = {
          uf: data.uf,
          localidade: data.localidade,
          logradouro: data.logradouro,
          bairro: data.bairro,
        };
        setValuesInputs(dataViaCep);
      });
  };

  useEffect(() => {
    const response = axios({
      method: "get",
      url: "https://servicodados.ibge.gov.br/api/v1/localidades/estados",
    }).then((response) => {
      const formattedDate = response.data.map((state) => ({
        value: state.sigla,
        label: state.nome,
      }));
      setStates(formattedDate);
    });
  }, []);

  useEffect(() => {
    if (watchState) {
      const response = axios({
        method: "get",
        url: `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${watchState}/municipios`,
      }).then((response) => {
        const formattedDate = response.data.map((state) => ({
          value: state.sigla,
          label: state.nome,
        }));
        setCities(formattedDate);
      });
    }
  }, [watchState]);

  return (
    <ContainerForm onSubmit={handleSubmit(handlePersonal)}>
      <Title>Informe seu endereço para entrega</Title>

      <InLine>
        <div>
          <Input
            name='cep'
            label='CEP'
            {...register("cep")}
            error={formState.errors.cep}
            color={"rgba(0, 0, 0, 0.66)"}
            onBlur={onBlurAddressCEP}
          />
          <a
            href='https://buscacepinter.correios.com.br/app/endereco/index.php'
            target='_blank'
            rel='noreferrer'
          >
            Não sei o meu CEP
          </a>
        </div>

        <Input
          name='rua'
          label='Rua'
          {...register("rua")}
          error={formState.errors.rua}
          color={"rgba(0, 0, 0, 0.66)"}
        />
      </InLine>

      <InLine>
        <div>
          <Input
            name='numero'
            label='Número'
            error={formState.errors.numero}
            {...register("numero")}
            color={"rgba(0, 0, 0, 0.66)"}
          />
        </div>

        <Input
          name='complemento'
          label='Complemento'
          {...register("complemento")}
          color={"rgba(0, 0, 0, 0.66)"}
        />
      </InLine>

      <InLine>
        <Input
          name='bairro'
          label='Bairro'
          {...register("bairro")}
          error={formState.errors.bairro}
          color={"rgba(0, 0, 0, 0.66)"}
        />

        <Select
          name='state'
          options={states}
          label='UF'
          {...register("state")}
          error={formState.errors.state}
          color={"rgba(0, 0, 0, 0.66)"}
        />

        <Select
          name='city'
          options={cities}
          label='Cidade'
          disabled={!watchState}
          error={formState.errors.city}
          {...register("city")}
          color={"rgba(0, 0, 0, 0.66)"}
        />
      </InLine>

      <Buttons>
        <LineButtonForm type='button' width='110px' onClick={backStep}>
          {" "}
          Voltar{" "}
        </LineButtonForm>
        <FilledButton width='110px' type='submit'>
          {" "}
          Próximo{" "}
        </FilledButton>
      </Buttons>
    </ContainerForm>
  );
};

export default AddressForm;
