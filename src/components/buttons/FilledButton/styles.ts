import styled from "styled-components";

export const FilledButtonContainer = styled.button`
  background: #0055FF;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  padding: 8px 24px;
  border-radius: 99999px;
  color: #fff;
  &:hover {
    filter: brightness(0.8);
  }
`;
