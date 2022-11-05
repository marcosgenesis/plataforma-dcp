import type { NextPage } from "next";
import { useState } from "react";
import { FilledButton } from "../components/buttons/FilledButton";
import { LineButton } from "../components/buttons/LineButton";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { Container } from "../styles/landingPage";
import {
  AuthFormContainer,
  InputContainer,
  ButtonContainer,
} from "../styles/authPage";
import Input from "../components/input";
import { SocialButton } from "../components/buttons/SocialButton";

const Auth: NextPage = () => {
  return (
    <Container>
      <Navbar />
      <AuthFormContainer>
        <div>
          <div className="title-subtitle">
            <h1>Que bom te ver de novo!</h1>
            <p>Bem-vinde de volta. Por favor, entre com seus dados.</p>
          </div>
        </div>
        <InputContainer>
          <Input label="Email" required></Input>
          <Input label="Senha" required></Input>
          <div>
            <div className="user-check">
              <div className="check">
                <input type="checkbox" />
                <p>Lembre-se de mim</p>
              </div>
              <div className="link">
                <a href="#">Esqueci a senha</a>
              </div>
            </div>
          </div>
        </InputContainer>
        <ButtonContainer>
          <FilledButton width="400px" type="submit">
            Entrar
          </FilledButton>
          <SocialButton width="400px">Entrar com o Google</SocialButton>
        </ButtonContainer>
        <div className="signature">
          <p>Não tem conta?</p>
          <a href="#">Assine</a>
          <p>um dos nossos planos!</p>
        </div>
      </AuthFormContainer>
      <Footer expanded />
    </Container>
  );
};

export default Auth;
