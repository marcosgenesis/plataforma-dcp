import styled from "styled-components";

export const SelectField = styled.select`
  height: 48px;
  border: 1px solid rgba(20, 20, 231, 0.12);
  border-radius: 4px;
  padding: 0px 16px 0px 16px;
  pointer-events: {({disabled}) => disabled ? 'none' : 'all'};
`;
export const Label = styled.label`
  font-family: Nunito;
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: 8px;
  opacity: {({disabled}) => disabled ? 0.5 : 1};
`;
export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
