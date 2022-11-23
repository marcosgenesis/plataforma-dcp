import type { NextPage } from "next";
import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { FilledButton } from "../components/buttons/FilledButton"
import Checkout from "../components/checkout";
import Title from "../components/title";

import { Container, ContainerPlans, ContainerPrice, ContainerSignature, 
Cupom, StepsContainer, ButtonCode, Step, Buttons} from "../styles/signature";
import PlanForm from "../components/stepsForm/planForm";

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
            
              <Step isCurrent={ step === 1} isCompleted={step > 1}>
                {step > 1 
                  ? (<div className="step-number"> &#10003; </div>) 
                  : (<div className="step-number"> 1 </div>) }
                
                <span> Plano </span>
                <div className="division"/>
              </Step>
             

              <Step isCurrent={step === 2} isCompleted={step > 2}>
                {step > 2 
                  ? (<div className="step-number"> &#10003; </div>) 
                  : (<div className="step-number"> 2 </div>) }
                <span> Identificação </span>
                <div className="division"/>
              </Step>

              <Step isCurrent={step === 3} isCompleted={step > 3}>
                {step > 3 
                  ? (<div className="step-number"> &#10003; </div>) 
                  : (<div className="step-number"> 3 </div>) }
                <span> Endereço </span>
                <div className="division"/>
              </Step>
            
            <Step isCurrent={step === 4} isCompleted={false}>
              <div className="step-number"> 4 </div>
              <span> Pagamento </span>
            </Step>

          </StepsContainer>
          
          { step === 1 && <PlanForm nextStep={nextStep} /> }

          {
            step === 2 && (
              <>
              
                <Title>Preencha seus dados pessoais</Title>
                <Buttons className="buttons">
                <FilledButton width="110px" onClick={backStep}> Voltar  </FilledButton>
                <FilledButton width="110px" > Próximo  </FilledButton>
                </Buttons>
              
              </>
            )
          }

          {
            step === 3 && (
              <>
              <Title>Informe seu endereço para entrega </Title>
              <Buttons className="buttons">
              <FilledButton width="110px" onClick={backStep}> Voltar  </FilledButton>
              <FilledButton width="110px" > Próximo  </FilledButton>
              </Buttons>
              
              </>
            )
          }

          {
            step === 4  && (
              <>
                <Title>Defina a forma de pagamento</Title>
                <Buttons className="buttons">
                <FilledButton width="110px" onClick={backStep}> Voltar  </FilledButton>
                <FilledButton width="110px" > Próximo  </FilledButton>
                </Buttons>
              
              </>
            )
          }
      
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