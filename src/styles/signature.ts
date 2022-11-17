import styled from "styled-components";

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

  div.buttons {
    align-self: flex-end;
  }
`;

export const StepsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Step = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;

    background: #0055ff;
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

    color: #0055ff;

    & + div.division {
      width: 24px;
      height: 0px;

      margin-left: 24px;
      border: 2px solid #e6e6e6;
    }
  }
`;

export const Title = styled.p`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  margin: 5px 0 0 0;
  color: #333333;
`;

export const ContainerPrice = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Cupom = styled.div`
  height: 100px;

  p {
    font-family: "DM Sans";
    font-weight: bold;
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 8px;

    color: #333333;
  }

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

  input {
    width: 80%;
    height: 40px;

    border: 1px solid rgba(0, 0, 0, 0.1);
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
    border: 1px solid rgba(0, 0, 0, 0.1);
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
