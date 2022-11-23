import styled from "styled-components";

export const RedefineContainer = styled.div`
  flex: 1;
  height: 600px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 36px;
  div {
    width: 400px;
    display: flex;
    flex-direction: column;

    .title-subtitle {
      margin: 0;
      display: flex;
      h1 {
        margin: 0;
        color: #333333;
        font-size: 1.625rem;
        font-style: normal;
        font-family: DM Sans;
      }

      p {
        margin: 0;
        color: #666666;
        font-weight: 400;
        font-size: 1rem;
        font-style: normal;
        font-family: DM Sans;
      }
    }
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 0px;
  gap: 12px;
`;

export const ButtonContainer = styled.div`
  width: 500px;
  height: 96px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
