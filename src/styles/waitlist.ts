import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
export const ImageContainer = styled.div`
  width: 60%;
  height: calc(100vh - 100px);
  background: #e8f7fc;
  padding: 48px;
  display: flex;
  position: relative;
  flex-direction: column;
  img {
    position: absolute;
    width: 600px;
    align-self: flex-end;
    margin-top: 80px ;
  }
`;
export const TitleTextContainer = styled.div`
  width: 400px;
  h1 {
    font-family: Nunito;
    font-weight: 900;
    font-size: 4rem;
    line-height: 0;
  }
  p {
    font-family: Nunito;
    font-size: 1.5rem;
    font-style: italic;
    color: rgba(5, 35, 46, 0.6);
  }
`;
