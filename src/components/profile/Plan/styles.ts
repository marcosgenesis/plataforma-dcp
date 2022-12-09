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

export const EmptyState = styled.div`
  display: flex;
  width: 100%;
  text-align: center;
  flex-direction: column;

  .buttons {
    border-top: 1px solid rgba(0, 0, 0, 0.06);
    display: flex;
    gap: 24px;
    justify-content: center;
    button {
      margin-top: 40px;
    }
  }
`;
export const Labels = styled.div`
  display: flex;
  align-items:flex-end;

  p{
    width: 300px;
  }
`;
export const HistoricItem = styled.div`
  display: flex;
  /* justify-content: space-between; */
  p{
    width: 300px;
  }
`;