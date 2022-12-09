import type { NextPage } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import {
  RedefineContainer,
  InputContainer,
  ButtonContainer,
} from "../styles/redefinePage";
import Input from "../components/input";
import { Container } from "../styles/landingPage";
import { FilledButton } from "../components/buttons/FilledButton";
import EmailPage from "../components/redefine/Email";

const validateToken = false;
const validateEmail = true;
const validateRedefine = false;

const Redefine: NextPage = () => {

  return (
    <div>
      {validateToken ? (
        validateRedefine ? (
          <Container>
            <Navbar />
            <RedefineContainer>
              <div>
                <div className='title-subtitle'>
                  <h1>Senha alterada com sucesso!</h1>
                  <p>
                    Você já pode usar sua nova senha para acessar sua conta!
                  </p>
                </div>
              </div>
              <ButtonContainer>
                <FilledButton width='400px'>Entrar</FilledButton>
              </ButtonContainer>
            </RedefineContainer>
            <Footer expanded />
          </Container>
        ) : (
          <Container>
            <Navbar />
            <RedefineContainer>
              <div>
                <div className='title-subtitle'>
                  <h1>Redefinir senha.</h1>
                  <p>Cadastre uma nova senha de acesso.</p>
                </div>
              </div>
              <InputContainer>
                <Input label='Nova senha' type='password' required></Input>
                <Input label='Confirmar senha' type='password' required></Input>
              </InputContainer>
              <ButtonContainer>
                <FilledButton width='400px' disabled>
                  Redefinir senha
                </FilledButton>
              </ButtonContainer>
            </RedefineContainer>
            <Footer expanded />
          </Container>
        )
      ) : (
        <Container>
          <Navbar />
          <RedefineContainer>
            <div>
              <div className='title-subtitle'>
                <h1>Token de verificação.</h1>
                <p>
                  Insira o token de verificação que enviamos para o seu e-mail
                  de cadastro para prosseguir com a recuperação de senha.
                </p>
              </div>
            </div>
            <InputContainer>
              <Input label='Token' required></Input>
            </InputContainer>
            <ButtonContainer>
              <FilledButton width='400px' disabled>
                Verificar
              </FilledButton>
            </ButtonContainer>
          </RedefineContainer>
          <Footer expanded />
        </Container>
      )}
    </div>
  );
};

export default Redefine;
