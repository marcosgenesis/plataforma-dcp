import styled from "styled-components";

export const FormContainer = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h2 {
    font-family: Nunito;
    font-weight: 900;
    font-size: 2.25rem;
    line-height: 40px;
    margin: 8px;
  }
  form {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
export const FlexDiv = styled.div`
  display: flex;
  gap: 16px;
`;

export const Button = styled.button`
  background-color: #179ecf;
  color: #ffffff;
  border: none;
  width: 100%;
  height: 48px;
  border-radius: 8px;
  font-family: Nunito;
  font-size: 1rem;
  cursor: pointer;
  &:hover{
    filter: brightness(0.9)
  }
`;
