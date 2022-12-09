import styled from "styled-components";

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px 1.5rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }

  h5 {
    margin: 0;
    color: #1a1a1a;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 2.125rem;
  }
  .column-div {
    width: 70%;
    padding-left: 1.5rem;
    div {
      color: #000000;
      flex-direction: column;
      font-family: "DM Sans";
      @media (max-width: 768px) {
        margin: 1.5rem;
      }

      h6 {
        margin: 0;
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 1.75rem;
      }
      p {
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.5rem;
      }
    }
  }
`;

export const PaymentCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px 1.5rem;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const PaymentCard = styled.div`
  gap: 24px;
  display: flex;
  width: 26.4581rem;
  height: 30.625rem;
  align-items: center;
  border-radius: 24px;
  flex-direction: column;
  justify-content: center;

  div {
    color: #000000;
    font-family: "DM Sans";
    h6 {
      margin: 0;
      font-weight: 700;
      text-align: center;
      font-size: 1.25rem;
      line-height: 1.75rem;
    }
    p {
      margin: 0;
      font-size: 1rem;
      font-weight: 400;
      text-align: center;
      line-height: 1.5rem;
    }
  }
`;
