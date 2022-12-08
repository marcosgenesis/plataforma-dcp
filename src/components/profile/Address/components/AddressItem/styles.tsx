import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 430px;
  outline: 1px solid rgba(0, 0, 0, 0.06);
  padding: 16px;
  border-radius: 20px;
  margin-top: 16px;

  background: ${(props) => (props.isActive ? "#E6EEFF" : "#fff")};
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  button {
    background: transparent;
    border: none;
    cursor: pointer;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  .side {
    display: flex;
    justify-content: space-between;
  }
`;
export const Label = styled.p`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.66);
`;
export const AddressValue = styled.p`
  font-size: 16px;
  line-height: 5px;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  button {
    outline: 1px solid rgba(0, 0, 0, 0.06);
  }
`;
