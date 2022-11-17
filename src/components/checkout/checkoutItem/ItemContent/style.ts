import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
`;

export const ContentText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  font-family: "DM Sans";
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;

  color: rgba(0, 0, 0, 0.66);
`;

export const Description = styled.span`
  font-family: "DM Sans";
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;

  color: #000000;
`;

export const ContentValue = styled.span`
  font-family: "DM Sans";
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;

  color: #000000;
`;
