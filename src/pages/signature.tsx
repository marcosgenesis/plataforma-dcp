import type { NextPage } from "next";
import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { FilledButton } from "../components/buttons/FilledButton"
import Checkout from "../components/checkout";
import Plan from "../components/plan";
import { Container, ContainerPlans, ContainerPrice, ContainerSignature, 
Cupom, StepsContainer, ButtonCode, Step, Title} from "../styles/signature";

const Signature: NextPage = () => {
  const [step, setStep] = useState(1)

  const nextStep = () => {
    setStep(step + 1)
  }

  const backStep = () => {
    setStep(step - 1)
  }

  return(
    <Container>
      <Navbar />
      <ContainerSignature>
        <ContainerPlans>
          <StepsContainer>
            <Step>
              <div> 1 </div>
              <span> Plano </span>
              <div className="division"/>
            </Step>

            <Step>
              <div> 2 </div>
              <span> Identificação </span>
              <div className="division"/>
            </Step>

            <Step>
              <div> 3 </div>
              <span> Endereço </span>
              <div className="division"/>
            </Step>

            <Step>
              <div> 4 </div>
              <span> Pagamento </span>
            </Step>
          </StepsContainer>
          {
            step === 1 && (
            <>
              <Title>Escolha seu plano de assinatura</Title>
              <Plan idSelecPlan="radio-1" name="opcoes" 
                  preco={60} 
                  title="Lançamento: Coleção completa (oferta limitada)"
                  itensList={['Receba todas as caixas de uma só vez!',
                  'Parcele em até 8x sem juros no cartão de crédito']}
              />

              <Plan idSelecPlan="radio-2" name="opcoes" 
                preco={1500} 
                title="Plano Anual"
                itensList={['Parcele em até 12x sem juros no cartão de crédito.',
                            'Economize R$ 127,00.']}
              />
             
              {/*

              <Plan htmlFor="radio-2" className="plans">
                <input type="radio" id="radio-2" name="opcoes"/>
                <DivisionVertical />
                <div>
                  <p> </p>
                  <ul>
                    <li> Parcele em até 12x sem juros no cartão de crédito. </li>
                    <li> Economize R$ 127,00. </li>
                  </ul>
                </div>
                <span> R$ 1.500,00 </span>
              
              </Plan> */}
            </>
            )
          }

          {
            step === 2 && (
              <p>é o segundo</p>
            )
          }
          

        <FilledButton width="110px" onClick={nextStep}> Próximo  </FilledButton>
          
        </ContainerPlans>
        
        <ContainerPrice>
          <Checkout />
          <Cupom>
            <p> Aplicar cupom </p>
            <ButtonCode>
              <input placeholder="Insira o código do cupom" />
              <button >Aplicar</button>
            </ButtonCode>
          </Cupom>
        </ContainerPrice>
      </ContainerSignature>
      <Footer expanded/>
    </Container>
  )
}

export default Signature