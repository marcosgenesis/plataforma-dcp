import React from "react";
import { Container, ImageContainer, TitleTextContainer } from "../styles/waitlist";
import SubForm from "../components/SubForm";

const Subscribe: React.FC = () => {
  return (
    <Container>
      <ImageContainer>
        <TitleTextContainer>
          <h1>TRAMA BOX</h1>
          <p>A caixinha de surpresas perfeita para sua criatividade!</p>
        </TitleTextContainer>
        <img
          src='https://user-images.githubusercontent.com/49327985/198047320-3d7bc72b-f5ad-46c4-abe1-b9a4b446f82d.png'
          alt=''
        />
      </ImageContainer>
      <SubForm />
    </Container>
  );
};

export default Subscribe;
