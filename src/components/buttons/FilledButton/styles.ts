import styled from "styled-components";

export const FilledButtonContainer = styled.button`
  width: ${(props) => props.width ?? "auto"};
  background: #0055ff;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  padding: .8rem 1.5rem;
  border-radius: 99999px;
  color: #fff;
  &:hover {
    filter: brightness(0.8);
  }
`;
