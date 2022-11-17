import styled from "styled-components";

export const Container = styled.div`
  width: 423px;
  padding: 24px;
  background: #e6eeff;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
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
