import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;

  ul {
    display: flex;
    list-style: none;
    gap: 24px;

    li {
      a {
        text-decoration: none;
        font-weight: 600;
        color: #000;

        &:hover {
          color: #4a4a4a;
        }
      }
    }
  }
`;
export const LeftContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
`;
export const Actions = styled.div`
  display: flex;
  gap: 16px
`;
export const LoggedArea = styled.div`
display: flex;
gap: 16px;
`;
export const LogoutButton = styled.p`
  color: #0055ff;
  font-weight:bold;
  cursor: pointer;
  &:hover{
    filter:brightness(0.6) ;
  }
`;