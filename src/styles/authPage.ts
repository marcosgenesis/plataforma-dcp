import styled from "styled-components";

export const AuthFormContainer = styled.div`
  flex: 1;
  height: 600px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  div {
    width: 400px;
    display: flex;
    flex-direction: column;

    .title-subtitle {
      margin: 0;
      display: flex;
      h1 {
        margin: 0;
        font-size: 1.5rem;
      }

      p {
        margin: 0;
        font-size: 0.9rem;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.66);
      }
    }
  }
  .signature {
    display: flex;
    font-size: 0.9rem;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: rgba(0, 0, 0, 0.66);

    p {
      margin-right: 2px;
    }

    a {
      margin-right: 2px;
      text-decoration: none;
      color: rgba(0, 85, 255, 1);
      font-weight: 700;
    }
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 0px;
  gap: 12px;

  div {
    .user-check {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    .check {
      display: flex;
      flex-direction: row;

      input {
        border-radius: 5px;
      }

      p {
        color: rgba(0, 0, 0, 1);
        font-size: 0.9rem;
      }
    }
    .link {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;

      a {
        font-size: 0.9rem;
        text-decoration: none;
        color: rgba(0, 85, 255, 1);
      }
    }
  }
`;

export const ButtonContainer = styled.div`
  width: 500px;
  height: 96px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
