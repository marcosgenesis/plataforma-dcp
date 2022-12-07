import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;

  .secondContainer {
    width: 100%;
  }

  .footer {
    display: flex;
    justify-content: flex-end;
    button {
      outline: 1px solid rgba(0, 0, 0, 0.06);
      color: #0055ff;
    }
  }
`;
export const MyPlanContainer = styled.div`
  background: #e6eeff;
  width: 288px;
  border-radius: 16px;
  padding: 16px;
  p {
    color: #0055ff;
  }
`;
export const Bill = styled.div`
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  display: flex;
  gap: 180px;

  .side {
    display: flex;
    flex-direction: column;
  }
`;
