import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 24px;
  outline: 1px solid #eee;
  border-radius:24px ;
  .breadcrumbs {
    display: flex;
    align-items: center;
    gap: 8px;
    a {
      text-decoration: none;
    }
  }

  input {
  }
`;
export const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 24px;
`;
export const PersonalDataContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap:24px ;
  
  .side {
    display: flex;
    gap: 24px;
  }
`;
export const ActionButtonContainer = styled.div`
  width: 100%;
  margin-top: 24px;
  display: flex;
  justify-content:flex-end ;
`;
export const SafetyContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap:24px ;
`;
