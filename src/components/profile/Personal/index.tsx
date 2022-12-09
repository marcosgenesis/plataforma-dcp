import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAuth } from "../../../contexts/auth";
import { toast } from "react-toastify";
import BreadCrumbs from "../../breadcrumb";
import { FilledButton } from "../../buttons/FilledButton";
import { LineButton } from "../../buttons/LineButton";
import Input from "../../input";
import MaskedInput from "../../maskedInput";
import PasswordForm from "./components/PasswordForm";
import * as yup from "yup";

import {
  Container,
  InfoContainer,
  PersonalDataContainer,
  ActionButtonContainer,
  SafetyContainer,
} from "./styles";
import api from "../../../services/api";

interface FormValues {
  email: string;
  fullname: string;
  cpf: string;
  phone: string;
}

const personalSchema = yup.object().shape({
  email: yup.string().email("Isto não é um email"),
  fullname: yup.string(),
  cpf: yup.string(),
  phone: yup.string(),
});

const Personal: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { loadUser } = useAuth();
  const { register, formState, setValue, handleSubmit } = useForm<FormValues>({
    resolver: yupResolver(personalSchema),
  });
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      setValue("email", user.email);
      setValue("cpf", user.cpf);
      setValue("fullname", `${user.firstName} ${user.lastName}`);
      setValue("phone", user.phone);
    }
  }, [user, setValue]);

  const breadcrumbs = [
    {
      path: "#",
      label: "Minha Conta",
    },
    {
      path: "#",
      label: "Meus Dados",
      active: true,
    },
  ];

  const handleUpdateUser: SubmitHandler<FormValues> = async ({
    fullname,
    cpf,
    email,
    phone,
  }) => {
    const [firstName, lastName] = fullname?.split(" ");
    try {
      setLoading(true);
      await api.patch("user", {
        firstName: user.firstName !== firstName ? firstName : undefined,
        lastName: user.lastName !== lastName ? lastName : undefined,
        cpf: user.cpf !== cpf ? cpf : undefined,
        email: user.email !== email ? email : undefined,
        phone: user.phone !== phone ? phone : undefined,
      });

      setLoading(false);
      toast("Dados atualizados com sucesso", {
        type: "info",
        position: "top-center",
      });
      loadUser();
    } catch (error) {
      toast.error(
        "Não conseguimos atualizar seus dados, tente novamente mais tarde"
      );
      setLoading(false);
    }
  };

  return (
    <Container>
      <BreadCrumbs breadcrumbs={breadcrumbs} />
      <h1>Meus dados</h1>
      <InfoContainer>
        <PersonalDataContainer
          id='personalForm'
          onSubmit={handleSubmit(handleUpdateUser)}
        >
          <h2>Dados Pessoais</h2>
          <Input
            name='email'
            label='Email'
            {...register("email")}
            error={formState.errors.numeroCartao}
            color={"rgba(0, 0, 0, 0.66)"}
          />
          <Input
            name='name'
            label='Nome Completo'
            {...register("fullname")}
            error={formState.errors.numeroCartao}
            color={"rgba(0, 0, 0, 0.66)"}
          />
          <div className='side'>
            <MaskedInput
              mask='999.999.999-99'
              name='cpf'
              label='CPF'
              {...register("cpf")}
              error={formState.errors.numeroCartao}
              color={"rgba(0, 0, 0, 0.66)"}
            />
            <div style={{ width: "100%" }}>
              <MaskedInput
                mask='+55 (99) 99999-9999'
                name='phone'
                label='Telefone'
                {...register("phone")}
                error={formState.errors.numeroCartao}
                color={"rgba(0, 0, 0, 0.66)"}
              />

              <span> Número com DDD e dígito 9 no início, caso houver. </span>
            </div>
          </div>
          <ActionButtonContainer>
            <FilledButton
              disabled={!formState.isDirty}
              type='submit'
              form='personalForm'
              loading={loading}
            >
              Salvar Alterações
            </FilledButton>
          </ActionButtonContainer>
        </PersonalDataContainer>
        <PasswordForm />
      </InfoContainer>
    </Container>
  );
};

export default Personal;
