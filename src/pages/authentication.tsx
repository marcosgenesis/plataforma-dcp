import type { NextPage } from "next";
import { useState } from "react";
import { useRouter } from 'next/router'
import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FilledButton } from "../components/buttons/FilledButton";
import { LineButton } from "../components/buttons/LineButton";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { Container } from "../styles/landingPage";
import { ToastContainer, toast } from 'react-toastify';
import {
  AuthFormContainer,
  InputContainer,
  ButtonContainer,
} from "../styles/authPage";
import Input from "../components/input";
import { SocialButton } from "../components/buttons/SocialButton";
import api from "../services/api";

import 'react-toastify/dist/ReactToastify.css';

const Auth: NextPage = () => {
  const schema = yup.object().shape({
  })

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });

  const router = useRouter()
  
  const handleLogin = (data: FieldValues) => {
    const { email, password } = data;
    console.log('-->', email, password)
    
    api.post('api/v1/auth', {email, password}).then(() => {
      router.push('/signature')
    }).catch(()=>{
      toast.error('Email/Senha incorreto')
    })

    
    // try {
    //   await login({ email, password, whitelabelId });
    //   // navigate('/beneficios');
    // } catch (err) {
    //   toast.error('Email/Senha incorreto');
    // }
  };

  return (
    <Container>
      <Navbar />
      <AuthFormContainer onSubmit={handleSubmit(handleLogin)}>
        <div>
          <div className="title-subtitle">
            <h1>Que bom te ver de novo!</h1>
            <p>Bem-vinde de volta. Por favor, entre com seus dados.</p>
          </div>
        </div>
        <InputContainer>
          <Input
            label="Email"
            type="email"
            placeholder="exemplo@gmail.com"
            required
            {...register("email")}
          ></Input>
          <Input 
            label="Senha" 
            type="password" 
            required 
            {...register("password")}></Input>
          
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
      <ToastContainer />
    </Container>
  );
};

export default Auth;
