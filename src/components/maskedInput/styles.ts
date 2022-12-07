import styled from "styled-components";
import MaskedInput from "react-text-mask";

interface LabelProps {
  color: string;
}

export const InputField = styled.input`
  height: 48px;
  border: 1px solid rgba(20, 20, 231, 0.12);
  border-radius: 4px;
  padding: 0px 16px;
  &:focus {
    background: #E6EEFF;
  }
`;

export const MaskedInputField = styled(MaskedInput)`
  height: 48px;
  border: 1px solid rgba(20, 20, 231, 0.12);
  border-radius: 4px;
  padding: 0px 16px;
  &:focus {
    background: #E6EEFF;
  }
`;

export const TextArea = styled.textarea`
  min-height: 72px;
  border: 1px solid rgba(20, 20, 231, 0.12);
  border-radius: 4px;
  padding: 16px 16px;
  font-family: Arial;
`;
export const Label = styled.label<LabelProps>`
  font-family: Nunito;
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: 8px;
  color: ${(props) => (props.color ? props.color : "#000000")};
`;
export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
export const ErrorMessage = styled.p`
  color: red;
  font-size: 10px;
`;
