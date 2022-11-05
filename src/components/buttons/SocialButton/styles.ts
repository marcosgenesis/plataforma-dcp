import styled from "styled-components";

export const GoogleButtonContainer = styled.button`
  width: ${(props) => props.width ?? "auto"};
  border: 1px;
  display: flex;
  color: #0055ff;
  font-size: 1rem;
  font-weight: 700;
  padding: 8px 24px;
  border: 1px solid;
  border-radius: 48px;
  align-items: center;
  justify-content: center;
  background: transparent;
  border-color: rgba(204, 204, 204, 1);
  &:hover {
    background: #eee;
  }

  .icon {
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }
`;
