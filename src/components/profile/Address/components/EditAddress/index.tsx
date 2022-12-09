import axios from "axios";
import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAuth } from "../../../../../contexts/auth";
import Input from "../../../../input";
import Select from "../../../../select";
import { InLine } from "../../../../stepsForm/addressForm/style";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { LineButtonForm } from "../../../../buttons/LineButtonForm";
import { FilledButton } from "../../../../buttons/FilledButton";
import { Buttons, Container } from "./styles";
import styled from "styled-components";
import api from "../../../../../services/api";

interface FormValues {
  cep: string;
  rua: string;
  numero: string;
  complemento: string;
  bairro: string;
  state: string;
  city: string;
}

const schema = yup.object().shape({
  cep: yup
    .string()
    .required("O cep é obrigatório")
    .min(8, "O CEP precisa conter 8 dígitos"),
  rua: yup.string().required("A rua é obrigatório").nullable(),
  city: yup.string().required("A cidade é obrigatório"),
  bairro: yup.string().required("O bairro é obrigatório"),
  state: yup.string().required("O estado é obrigatório"),
  numero: yup
    .string()
    .typeError("O número do endereço precisa ser um número")
    .required("O número é obrigatorío"),
});

interface EditAddress {
  setIsEditing:React.Dispatch<React.SetStateAction<boolean>>
}

const EditAddress: React.FC<EditAdressProps> = ({setIsEditing}) => {
  const [loading, setLoading] = useState(false)
  const { user,loadUser } = useAuth();
  const {
    register,
    formState,
    handleSubmit,
    setValue,
    watch,
    setError,
    clearErrors,
  } = useForm<FormValues>({
    defaultValues: {
      bairro: user?.neighbourhood ?? "",
      rua: user?.street ?? "",
      cep: user?.zipcode ?? "",
      complemento: "",
      state: user?.state ?? "",
      city: user?.city ?? "",
      numero: user?.number ?? "",
    },
    resolver: yupResolver(schema),
  });
  const watchZipcode = watch("cep");

  useEffect(() => {
    clearErrors();
    if (watchZipcode?.length === 8) {
      axios({
        url: `https://viacep.com.br/ws/${watchZipcode.replace("-", "")}/json`,
        method: "GET",
      })
        .then((response) => {
          if (response.data?.erro === true) {
            setError("cep", { message: "Cep não encontrado!" });
            return;
          }
          setValue("city", response.data.localidade);
          setValue("state", response.data.uf);
          setValue("rua", response.data.logradouro);
          setValue("bairro", response.data.bairro);
        })
        .catch(() => setError("cep", { message: "Cep não encontrado!" }));
    }
  }, [clearErrors, setError, setValue, watchZipcode]);

  const handleUpdateAddress: SubmitHandler<FormValues> = async ({
    bairro,
    cep,
    city,
    complemento,
    numero,
    rua,
    state,
  }) => {
    try {
      setLoading(true);
      await api.patch("user", {
        zipcode: user.zipCode !== cep ? cep : undefined,
        state: user.cpf !== state ? state : undefined,
        neighbourhood: user.neighbourhood !== bairro ? bairro : undefined,
        city: user.city !== city ? city : undefined,
        street: user.street !== rua ? rua : undefined,
        number: user.numero !== numero ? numero : undefined,
      });

      setLoading(false);
      toast("Dados atualizados com sucesso", {
        type: "info",
        position: "top-center",
      });
      setIsEditing(false)
      loadUser();
    } catch (error) {
      console.log(error);
      
      toast.error(
        "Não conseguimos atualizar seus dados, tente novamente mais tarde"
      );
      setLoading(false);
    }
  };

  return (
    <Container id='addressForm' onSubmit={handleSubmit(handleUpdateAddress)}>
      <InLine>
        <div>
          <Input
            name='cep'
            label='CEP'
            {...register("cep")}
            error={formState.errors.cep}
            color={"rgba(0, 0, 0, 0.66)"}
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
        <Input
          name='state'
          label='Estado'
          {...register("state")}
          error={formState.errors.state}
          color={"rgba(0, 0, 0, 0.66)"}
        />
        <Input
          name='city'
          label='Cidade'
          {...register("city")}
          error={formState.errors.city}
          color={"rgba(0, 0, 0, 0.66)"}
        />
      </InLine>
      <Buttons>
        <LineButtonForm type='button' width='110px' onClick={()=>setIsEditing(false)}>
          Voltar
        </LineButtonForm>
        <FilledButton width='110px' type='submit' form="addressForm" loading={loading}>
          Salvar
        </FilledButton>
      </Buttons>
    </Container>
  );
};

export default EditAddress;
