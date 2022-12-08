import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../contexts/auth";
import BreadCrumbs from "../../breadcrumb";
import { FilledButton } from "../../buttons/FilledButton";
import { LineButton } from "../../buttons/LineButton";
import Input from "../../input";

import {
  Container,
  InfoContainer,
  PersonalDataContainer,
  ActionButtonContainer,
  SafetyContainer,
} from "./styles";

const Personal: React.FC = () => {
  const { register, formState, setValue } = useForm();
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

  return (
    <Container>
      <BreadCrumbs breadcrumbs={breadcrumbs} />
      <h1>Meus dados</h1>
      <InfoContainer>
        <PersonalDataContainer>
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
            <Input
              name='cof'
              label='CPF'
              {...register("cpf")}
              error={formState.errors.numeroCartao}
              color={"rgba(0, 0, 0, 0.66)"}
            />
            <Input
              name='phone'
              label='Telefone'
              {...register("phone")}
              error={formState.errors.numeroCartao}
              color={"rgba(0, 0, 0, 0.66)"}
            />
          </div>
          <ActionButtonContainer>
            <LineButton>Descartar</LineButton>
            <FilledButton>Salvar Alterações</FilledButton>
          </ActionButtonContainer>
        </PersonalDataContainer>
        <SafetyContainer>
          <h2>Segurança</h2>
          <Input
            name='password'
            label='Senha'
            {...register("password")}
            error={formState.errors.numeroCartao}
            color={"rgba(0, 0, 0, 0.66)"}
          />
          <Input
            name='newpassword'
            label='Nova Senha'
            {...register("newpassword")}
            error={formState.errors.numeroCartao}
            color={"rgba(0, 0, 0, 0.66)"}
          />
          <Input
            name='confirmPassword'
            label='Confirmação da nova senha'
            {...register("confirmPassword")}
            error={formState.errors.numeroCartao}
            color={"rgba(0, 0, 0, 0.66)"}
          />
          <ActionButtonContainer>
            <FilledButton>Alterar Senha</FilledButton>
          </ActionButtonContainer>
        </SafetyContainer>
      </InfoContainer>
    </Container>
  );
};

export default Personal;
