import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FilledButton } from "../components/buttons/FilledButton";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import {
  BenefictItem,
  BenefictItemDescription,
  BenefictItemIcon,
  BenefictItemTitle,
  BenefictsContainer,
  Box,
  Boxes,
  BoxesContainer,
  BoxesContent,
  Container,
  CTAContainer,
  HowWorksContainer,
  PlanContainer,
  PlansContainer,
  PlansContent,
  PlanSelect,
  PreviousBoxesContainer,
  Step,
  StepDescription,
  StepNumber,
  StepTitle,
} from "../styles/landingPage";

const Home: NextPage = () => {
  const [activePlan, setActivePlan] = useState(1);
  return (
    <Container>
      <Navbar />
      <CTAContainer>
        <div>
          <div className='title-subtitle'>
            <h1>
              Qual
              <Image
                src='/logo-blue.svg'
                width={168}
                height={50}
                alt='Ilustração mulher'
              />
              criativa você quer contar?
            </h1>
            <p>
              Receba mensalmente uma caixa com tema e itens misteriosos para
              você despertar a sua criatividade.
            </p>
          </div>
          <FilledButton width='160px'>Assinar Agora</FilledButton>
        </div>
        <Image
          src='/landing-page-woman.svg'
          width={423}
          height={423}
          alt='Ilustração mulher'
        />
      </CTAContainer>
      <BenefictsContainer>
        <h2>Benefícios da nossa trama criativa</h2>
        <div>
          <BenefictItem>
            <BenefictItemIcon>
              <Image
                src='/icons/palette.svg'
                alt='palette icon'
                width={30}
                height={30}
              />
            </BenefictItemIcon>
            <BenefictItemTitle>Qualidade</BenefictItemTitle>
            <BenefictItemDescription>
              Nossa equipe conta com uma curadoria para oferecer produtos de
              qualidade com um bom custo benefício.
            </BenefictItemDescription>
          </BenefictItem>
          <BenefictItem>
            <BenefictItemIcon>
              <Image
                src='/icons/archive.svg'
                alt='palette icon'
                width={30}
                height={30}
              />
            </BenefictItemIcon>
            <BenefictItemTitle>Experiência</BenefictItemTitle>
            <BenefictItemDescription>
              As nossas caixas temáticas te transportam para um lugar onde a
              arte é a principal forma de expressão.
            </BenefictItemDescription>
          </BenefictItem>
          <BenefictItem>
            <BenefictItemIcon>
              <Image
                src='/icons/paint-brush.svg'
                alt='palette icon'
                width={30}
                height={30}
              />
            </BenefictItemIcon>
            <BenefictItemTitle>Praticidade</BenefictItemTitle>
            <BenefictItemDescription>
              Nem a mais, nem a menos: a Trama Criativa te oferece materiais
              indispensáveis para a sua criação artística.
            </BenefictItemDescription>
          </BenefictItem>
        </div>
      </BenefictsContainer>
      <BoxesContainer>
        <Image
          src='/boxes.svg'
          alt='Boxes illustration'
          width={345}
          height={423}
        />
        <BoxesContent>
          <h4>O que vem na caixa?</h4>
          <p>
            Não podemos te contar tudo, mas... A caixa sempre vem com três itens
            fixos.
          </p>
          <ul>
            <li>
              <Image
                src='/icons/selo.svg'
                alt='Selo illustration'
                width={21}
                height={21}
              />
              <p>Livro de recordes</p>
            </li>
            <li>
              <Image
                src='/icons/selo.svg'
                alt='Selo illustration'
                width={21}
                height={21}
              />
              <p>Cartela de adesivos</p>
            </li>
            <li>
              <Image
                src='/icons/selo.svg'
                alt='Selo illustration'
                width={21}
                height={21}
              />
              <p>Código Comunicade</p>
            </li>
            <li>
              <Image
                src='/icons/selo-doubt.svg'
                alt='Selo illustration'
                width={21}
                height={21}
              />
              <p>Muito mais...</p>
            </li>
          </ul>
        </BoxesContent>
      </BoxesContainer>
      <HowWorksContainer>
        <h2>Como Funciona</h2>
        <div className='steps'>
          <Step>
            <StepNumber>
              <Image
                src='/icons/one.svg'
                alt='Step one'
                width={21}
                height={21}
              />
            </StepNumber>
            <StepTitle>Assine</StepTitle>
            <StepDescription>
              Escolha o plano que melhor se adequa para você e faça o seu
              pedido.
            </StepDescription>
          </Step>
          <Image
            src='/icons/left-arrow.svg'
            alt='Step one'
            width={21}
            height={21}
          />
          <Step>
            <StepNumber>
              <Image
                src='/icons/two.svg'
                alt='Step two'
                width={21}
                height={21}
              />
            </StepNumber>
            <StepTitle>Aproveite</StepTitle>
            <StepDescription>
              Use sua criatividade para produzir obras diversas, colocando seu
              toque especial.
            </StepDescription>
          </Step>
          <Image
            src='/icons/left-arrow.svg'
            alt='Step one'
            width={21}
            height={21}
          />
          <Step>
            <StepNumber>
              <Image
                src='/icons/three.svg'
                alt='Step three'
                width={21}
                height={21}
              />
            </StepNumber>
            <StepTitle>Participe</StepTitle>
            <StepDescription>
              Participe da comunidade compartilhando com a gente os resultados
              da sua arte.
            </StepDescription>
          </Step>
        </div>
      </HowWorksContainer>

      <PlansContainer>
        <PlansContent>
          <PlanSelect active={activePlan}>
            {["Mensal", "Anual"].map((item, index) => (
              <PlanContainer
                key={index}
                onClick={() => setActivePlan(index + 1)}
              >
                {item}
              </PlanContainer>
            ))}
          </PlanSelect>
          <h4>Benefícios</h4>
          <ul>
            <li>
              <Image
                src='/icons/check.svg'
                alt='Step one'
                width={24}
                height={24}
              />
              <p>Caixa Temática</p>
            </li>
            <li>
              <Image
                src='/icons/check.svg'
                alt='Step one'
                width={24}
                height={24}
              />
              <p>Caixa Temática</p>
            </li>
            <li>
              <Image
                src='/icons/check.svg'
                alt='Step one'
                width={24}
                height={24}
              />
              <p>Caixa Temática</p>
            </li>
            <li>
              <Image
                src='/icons/check.svg'
                alt='Step one'
                width={24}
                height={24}
              />
              <p>Caixa Temática</p>
            </li>
            <li>
              <Image
                src='/icons/more.svg'
                alt='Step one'
                width={24}
                height={24}
              />
              <p>Brinde Exclusivo!</p>
            </li>
          </ul>
          <FilledButton>Assine o Plano Anual</FilledButton>
        </PlansContent>
        <Image
          src='/landing-page-money.svg'
          alt='Step one'
          width={423}
          height={377.93}
        />
      </PlansContainer>

      <PreviousBoxesContainer>
        <h4>Caixas Anteriores</h4>
        <Boxes>
          <Box>
            <Image
              src='/box2.png'
              alt='Step one'
              width={375}
              height={338}
            />
            <h4>Terror Sangrento</h4>
            <p>
              Inspirada no terror slasher, o aviso é claro: em hipótese alguma,
              abra a caixa.
            </p>
          </Box>
          <Box>
            <Image
              src='/box3.png'
              alt='Step one'
              width={375}
              height={338}
            />
            <h4>Contos de Fadas</h4>
            <p>
              Se Romeu e Julieta não tivessem morrido, como você usaria a arte
              para continuar a história?
            </p>
          </Box>
          <Box onClick={()=>router}>
            <Image
              src='/box1.png'
              alt='Step one'
              width={375}
              height={338}
            />
            <h4>Suspense Noir</h4>
            <p>
              Suspense, anti-heróis, detetives e, claro, um mistério a ser
              desvendado por você.
            </p>
          </Box>
        </Boxes>
      </PreviousBoxesContainer>
      <Footer expanded />
    </Container>
  );
};

export default Home;
