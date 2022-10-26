import axios from "axios";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../input";
import Select from "../select";
import { Button, FlexDiv, FormContainer } from "./styled";
import { Checkbox, FormControl, FormHelperText } from "@mui/material";

interface IProps {
  name: string;
  uf: string;
  city: string;
  email: string;
  description: string;
  checkEmail: boolean;
  checkTerm: boolean;
}

const formSchema = yup.object().shape({
  name: yup.string().required("O nome é obrigatório"),
  state: yup
    .string()
    .required("O Estado é obrigatório")
    .test({ test: (v) => v !== "Selecionar", message: "Selecione um estado" }),
  city: yup
    .string()
    .required("A Cidade é obrigatória")
    .test({ test: (v) => v !== "Selecionar", message: "Selecione uma cidade" }),
  email: yup.string().email("Email inválido").required("O email é obrigatório"),
  obs: yup.string(),
  news: yup.boolean(),
  terms: yup.boolean().required('Você precisa aceitar os termos para continuar'),
});

const SubForm: React.FC<IProps> = () => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const { register, watch, handleSubmit, formState, control } = useForm({
    resolver: yupResolver(formSchema),
  });
  const watchState = watch("state");

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

  function handleWaitlistEnter(data: any) {
    console.log(formState.errors);
  }
  useEffect(() => {
    console.log(formState.errors);
  }, [formState.errors]);
  return (
    <FormContainer>
      <h2>Inscreva-se na nossa lista de espera!</h2>
      <form onSubmit={handleSubmit(handleWaitlistEnter)}>
        <Input
          name='name'
          label='Qual o seu nome?'
          error={formState.errors.name}
          {...register("name")}
        />
        <FlexDiv>
          <Select
            name='state'
            options={states}
            label='De qual estado você é?'
            {...register("state")}
            error={formState.errors.state}
          />
          <Select
            name='city'
            options={cities}
            label='De qual cidade você é?'
            disabled={!watchState}
            error={formState.errors.city}
            {...register("city")}
          />
        </FlexDiv>
        <Input
          name='email'
          label='Qual o seu email?'
          {...register("email")}
          error={formState.errors.email}
        />
        <Input
          name='obs'
          label='Alguma observação a acrescentar?'
          type='textarea'
          {...register("obs")}
          error={formState.errors.obs}
        />
        <Controller
          name='news'
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <div style={{ display: "flex" }}>
              <Checkbox {...field} />
              <p>
                Sim, eu gostaria de receber emails de atualização sobre a Trama
                Box.
              </p>
            </div>
          )}
        />
        <Controller
          name='terms'
          control={control}
          rules={{ required: true }}
          render={({ field, fieldState }) => (
            <FormControl error={fieldState.error}>
              <div style={{ display: "flex" }}>
                <Checkbox {...field} />
                <p>
                  Sim, eu li e concordo com os <a href='#'>Termos de Serviço</a>{" "}
                  e <a href='#'>Política de Privacidade.</a>
                </p>
              </div>
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            </FormControl>
          )}
        />
        <Button>Inscreva-se!</Button>
      </form>
    </FormContainer>
  );
};

export default SubForm;
