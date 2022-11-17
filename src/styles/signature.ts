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
`;

export const Steps = styled.div`
  display: flex;
`;

export const PlansItens = styled.div``;

export const ContainerPrice = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Checkout = styled.div`
  width: 423px;
  padding: 24px;
  background: #e6eeff;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
`;

export const CheckoutHeader = styled.div`
  display: flex;
  justify-content: space-between;

  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  padding: 16px 0;
  height: 24px;

  p {
    margin: 0;
    font-family: "DM Sans";
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;

    color: #000000;
  }
`;

export const CheckoutContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  padding: 16px 0;

  height: 120px;
  gap: 24px;
`;

export const CheckoutFooter = styled.div`
  gap: 16px;
  margin-top: 16px;
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
