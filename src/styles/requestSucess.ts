import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  height: 50%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  padding: 24px 88px;

  max-width: 648px;

  background: #e6eeff;
  border-radius: 12px 12px 0px 0px;

  h2 {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    text-align: center;

    color: #0055ff;
    margin-top: 4px;
  }
`;
export const Body = styled.div`
  width: 100%;
  max-width: 648px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 23px 87px;

  gap: 24px;
  border: 1px solid rgba(0, 0, 0, 0.14);
  border-radius: 0px 0px 12px 12px;
`;

export const DeliveryDate = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 8px;

  p {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;

    color: rgba(0, 0, 0, 0.66);
  }

  span {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    text-align: right;

    color: #000000;
  }
`;

export const Info = styled.ul`
  width: 70%;
  gap: 8px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  > div {
    margin-bottom: 10px;
  }

  li {
    list-style: none;
    width: 100%;
  }
`;
