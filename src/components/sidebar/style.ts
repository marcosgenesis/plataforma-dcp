import styled from "styled-components";

export const Container = styled.div`
  width: 312px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 32px 24px 24px;
  gap: 32px;

  max-width: 312px;
  min-height: 584px;

  height: 100%;
  width: 100%;

  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 20px;
  margin: 0 16px;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 16px;

  span {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;

    color: #000000;
  }
`;

export const ButtonMenu = styled.div`
  cursor: pointer;
  width: 100%;
  display: flex;
  width: 264px;
  background: ${(props) => (props.active ? "#E6EEFF" : "transparent")};
  align-items: center;
  padding: 8px 16px;
  gap: 8px;

  height: 40px;

  border-radius: 48px;
  span {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    text-align: center;

    color: ${(props) => (props.active ? "#0055FF" : "#000000")};

    flex: none;
    order: 1;
    flex-grow: 0;
  }

  svg {
    fill: ${(props) => (props.active ? "#0055FF" : "#000000")};
  }
`;
