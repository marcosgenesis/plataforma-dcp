import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FilledButton } from "../../../../buttons/FilledButton";
import Input from "../../../../input";
import { ActionButtonContainer } from "../../styles";
import { SafetyContainer } from "./styles";
import { toast } from "react-toastify";
import * as yup from "yup";
import api from "../../../../../services/api";

interface FormValues {
  oldPassword: string;
  password: string;
  confirmPassword: string;
}

const passwordSchema = yup.object().shape({
  oldPassword: yup.string().required("Você precisa informar a senha antiga").min(6,'A senha precisa conter pelo menos 6 dígitos'),
  password: yup
    .string()
    .min(6, "No mínimo 6 caracteres")
    .required("A senha é obrigatório"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "As senhas precisam ser iguais"),
});

const PasswordForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { register, formState, handleSubmit, setError, reset } =
    useForm<FormValues>({
      resolver: yupResolver(passwordSchema),
    });

  const handleUpdatePassword: SubmitHandler<FormValues> = async ({
    password,
    oldPassword,
  }) => {
    try {
      setLoading(true);
      console.log({ password, oldPassword });

      await api.patch("user/password", {
        password,
        lastPassword: oldPassword,
      });

      setLoading(false);
      toast("Senha alterada com sucesso", { type: "info" });
      reset();
    } catch (error) {
      console.log(error);

      if (error.response.data.statusCode === 409) {
        setError("oldPassword", {
          message: "A senha informada não é sua senha atual",
        });
      }
      toast(
        "Não conseguimos atualizar seus dados, tente novamente mais tarde",
        { type: "error" }
      );
      setLoading(false);
    }
  };

  return (
    <SafetyContainer
      id='passwordForm'
      onSubmit={handleSubmit(handleUpdatePassword)}
    >
      <h2>Segurança</h2>
      <Input
        name='oldPassword'
        label='Senha'
        {...register("oldPassword")}
        error={formState.errors.oldPassword}
        color={"rgba(0, 0, 0, 0.66)"}
      />
      <Input
        name='password'
        label='Nova Senha'
        {...register("password")}
        error={formState.errors.password}
        color={"rgba(0, 0, 0, 0.66)"}
      />

      <Input
        name='confirmPassword'
        label='Confirmação da nova senha'
        {...register("confirmPassword")}
        error={formState.errors.confirmPassword}
        color={"rgba(0, 0, 0, 0.66)"}
      />
      <ActionButtonContainer>
        <FilledButton
          disabled={!formState.isDirty}
          type='submit'
          form='passwordForm'
          loading={loading}
        >
          Alterar Senha
        </FilledButton>
      </ActionButtonContainer>
    </SafetyContainer>
  );
};

export default PasswordForm;
