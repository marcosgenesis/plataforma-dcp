import styled from "styled-components";

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

  .item {
    margin-top: 10px;
  }
  .side-cancel {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

export const Modal = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vw;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
`;
export const ModalContent = styled.div`
  width: 423px;
  background: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 24px;
  border-radius: 8px;
`;
export const ModalTitle = styled.p`
  font-size: 20px;
  text-align: center;
  font-weight: bold;
`;
export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  /* border-top: 1px solid rgba(0, 0, 0, 0.06); */
  button {
    margin-top: 24px;
    &:nth-child(2) {
      background: red;
    }
  }
`;
