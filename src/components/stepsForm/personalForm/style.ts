import styled from "styled-components";

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  gap: 24px;
`;

export const InLine = styled.div`
  width: 100%;
  display: flex;

  gap: 16px;

  div {
    width: 100%;
  }
  span {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;

    color: rgba(0, 0, 0, 0.66);
  }
`;

export const MessageErro = styled.p`
  color: #ff0030;
`;

export const Buttons = styled.div`
  display: flex;
  align-self: flex-end;
  gap: 16px;
`;
