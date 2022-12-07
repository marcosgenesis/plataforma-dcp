import styled from "styled-components";

interface StepProps {
  isCurrent: boolean;
  isCompleted: boolean;
}

export const Container = styled.div``;

export const ContainerSignature = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 16px 16px 16px;
  gap: 24px;
`;

export const ContainerPlans = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 608px;
  padding: 24px;
  gap: 24px;

  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 12px;
`;

export const StepsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Step = styled.div<StepProps>`
  display: flex;
  align-items: center;

  div.step-number {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;

    background: ${(props) =>
      props.isCurrent ? "#0055ff" : props.isCompleted ? "#38c75e" : "#E6E6E6"};
    border-radius: 40px;

    font-family: "DM Sans";

    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;

    color: #ffffff;
  }

  span {
    margin-left: 8px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;

    color: ${(props) =>
      props.isCurrent ? "#0055ff" : props.isCompleted ? "#38c75e" : "#E6E6E6"};
  }

  div.division {
    width: 24px;
    height: 0px;
    background: ${(props) => (props.isCompleted ? "#38c75e" : "#E6E6E6")};
    margin-left: 24px;
    border: 2px solid ${(props) => (props.isCompleted ? "#38c75e" : "#E6E6E6")};
    border-radius: 2px;
  }
`;

export const ContainerPrice = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Cupom = styled.div`
  height: 100px;

  span {
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;

    color: #0055ff;
  }
`;

export const ButtonCode = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border: 1px solid;
  border-color: ${(props) => (props.error ? "red" : 'rgba(0, 0, 0, 0.1)')};
  border-radius: 8px;

  p {
    font-family: "DM Sans";
    font-weight: bold;
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 8px;

    color: #333333;
  }

  input {
    width: 80%;
    height: 40px;

    border: none;
    border-right: 1px solid #ccddff;
    border-radius: 8px 0 0 8px;
    padding: 14px 10px;

    box-sizing: border-box;

    &:placeholder {
      height: 20px;

      font-family: "DM Sans";
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;

      color: rgba(0, 0, 0, 0.44);
    }
  }

  button {
    width: 20%;
    height: 40px;
    padding: 8px 24px;
    border: none;
    border-left: transparent;
    border-radius: 0 8px 8px 0;
    box-sizing: border-box;
    cursor: pointer;
    color: #0055ff;
    background: #e6eeff;

    font-family: "DM Sans";
    font-weight: bold;

    &:hover {
      filter: brightness(0.95);
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 16px;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 10px;
`;
