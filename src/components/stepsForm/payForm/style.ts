import styled from "styled-components";

interface PayActiveProps {
  isCurrent: boolean;
}

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  gap: 24px;
`;

export const PayActiveContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 2px;

  height: 40px;

  background: rgba(0, 0, 0, 0.06);
  border-radius: 8px;
`;

export const PayActive = styled.div<PayActiveProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  background: ${(props) =>
    props.isCurrent ? "#FFFFFF" : "rgba(0, 0, 0, 0.06)"};
  color: ${(props) => (props.isCurrent ? "#0055ff" : "#000000")};
  font-weight: ${(props) => (props.isCurrent ? "700" : "400")};
  border-radius: 6px;
`;

export const InLine = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 16px;

  a {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    padding-top: 4px;
    color: #0055ff;

    text-decoration: none;

    &:visited {
      text-decoration: none;
    }
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
