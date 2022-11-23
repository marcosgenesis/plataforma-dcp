import type { NextPage } from "next";
import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Checkout from "../components/checkout";

import PlanForm from "../components/stepsForm/planForm";
import PersonalForm from "../components/stepsForm/personalForm";
import AddressForm from "../components/stepsForm/addressForm";
import PayForm from "../components/stepsForm/payForm";

import { Container, ContainerPlans, ContainerPrice, ContainerSignature, 
Cupom, StepsContainer, ButtonCode, Step, Buttons} from "../styles/signature";

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
            step === 2 && <PersonalForm backStep={backStep} nextStep={nextStep}/>
          }

          {
            step === 3 && <AddressForm backStep={backStep} nextStep={nextStep} /> 
          }

          {
            step === 4  && <PayForm backStep={backStep} nextStep={nextStep}/>
          }
      
        </ContainerPlans>
        
        <ContainerPrice>
          <Checkout />
          
          {step === 1 && (
            <Cupom>
              <p> Aplicar cupom </p>
              <ButtonCode>
                <input placeholder="Insira o código do cupom" />
                <button >Aplicar</button>
              </ButtonCode>
            </Cupom>
          )}
        </ContainerPrice>
      </ContainerSignature>
      <Footer expanded/>
    </Container>
  )
}

export default Signature