import { Grid } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import SubForm from "../components/SubForm";
import { Container, ImageContainer, TitleTextContainer } from "../styles/waitlist";

const Home: NextPage = () => {
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

export default Home;
