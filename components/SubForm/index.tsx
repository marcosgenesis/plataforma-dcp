import React from "react";
import {
  FormRoot,
  FormMain,
  FormOff,
  TitleWaitlist,
  Label,
  FormContainer,
  FormContainerV2,
  FormItem,
  FormInput,
  FormSelect,
  SubmitButton,
} from "./styled";

interface IProps {
  name: string;
  uf: string;
  city: string;
  email: string;
  description: string;
  checkEmail: boolean;
  checkTerm: boolean;
}

const SubForm: React.FC<IProps> = () => {
  return (
    <FormRoot>
      <FormMain>
        <TitleWaitlist>Inscreva-se na nossa lista de espera!</TitleWaitlist>
      </FormMain>
      <FormOff>
        <form action="">
          <FormContainer>
            <Label>Qual o seu nome?</Label>
            <FormInput />
          </FormContainer>
          <FormContainerV2>
            <FormItem style={{ marginRight: "24px" }}>
              <Label>De qual estado você é?</Label>
              <FormSelect>
                <option value="ceará">Ceará</option>
                <option value="piaui">Piauí</option>
                <option value="alagoas">Alagoas</option>
                <option value="acre">Acre</option>
              </FormSelect>
            </FormItem>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Label>De qual cidade você é?</Label>
              <FormInput />
            </div>
          </FormContainerV2>
          <FormContainer>
            <Label>Qual o seu email?</Label>
            <FormInput />
          </FormContainer>
          <FormContainer>
            <Label>Alguma observação a acrescentar? (opcional)</Label>
            <FormInput type="textarea" style={{ height: "96px" }} />
          </FormContainer>
          <FormContainer style={{ flexDirection: "row" }}>
            <input
              type="checkbox"
              name="checkEmail"
              id="checkEmail"
              style={{ marginRight: "16px" }}
            />
            <Label style={{ fontWeight: 400, fontSize: "18px" }}>
              Sim, eu gostaria de receber emails de atualização sobre a Trama
              Box.
            </Label>
          </FormContainer>
          <FormContainer style={{ flexDirection: "row" }}>
            <input
              type="checkbox"
              name="checkTerm"
              id="checkTerm"
              style={{ marginRight: "16px" }}
            />
            <Label style={{ fontWeight: 400, fontSize: "18px" }}>
              Sim, eu li e concordo com os {<a href="#">Termos de Serviço</a>} e{" "}
              {<a href="#">Política de Privacidade</a>}.
            </Label>
          </FormContainer>
          <FormContainer>
            <SubmitButton>
              <Label style={{ color: "#fff" }}>Inscreva-se</Label>
            </SubmitButton>
          </FormContainer>
        </form>
      </FormOff>
    </FormRoot>
  );
};

export default SubForm;
