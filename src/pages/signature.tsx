import type { NextPage } from "next";
import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ChekcoutItem from "../components/checkoutItem/ItemContent";
import CheckoutItemFooter from '../components/checkoutItem/ItemFooter'

import { Container, ContainerPlans, Checkout, ContainerPrice, ContainerSignature, 
Cupom, PlansItens, Steps, CheckoutHeader, CheckoutContent, CheckoutFooter, 
ButtonCode } 
from "../styles/signature";

const Signature: NextPage = () => {
  return(
    <Container>
      <Navbar />
      <ContainerSignature>
        <ContainerPlans>
          <Steps>
            <div>
              <button> 1 </button>
              <span> Plano </span>
            </div>

            <div>
              <button> 2 </button>
              <span> Identificação </span>
            </div>

            <div>
              <button> 3 </button>
              <span> Endereço </span>
            </div>

            <div>
              <button> 4 </button>
              <span> Pagamento </span>
            </div>
          </Steps>
          <PlansItens>

          </PlansItens>
        </ContainerPlans>
        
        <ContainerPrice>
          <Checkout>
            <CheckoutHeader>

              <Image
                src='/logo-blue.svg'
                width={74}
                height={24}
                alt='Logo da marca'
              />
            
              <p>CHECKOUT</p>
            </CheckoutHeader>

            <CheckoutContent>
              <ChekcoutItem title="ITEMS" description="Coleção completa" value="R$ 600,00"/>
              <ChekcoutItem title="ENTREGA"/>
              <ChekcoutItem title="CUPOM"/>
            </CheckoutContent>

            <CheckoutFooter>
              <CheckoutItemFooter title="Item" value="R$ 600,00"/>
              <CheckoutItemFooter title="Frete" value="R$ 0,00" />
              <CheckoutItemFooter title="Cupom" value="- R$ 0,00"/>
              <CheckoutItemFooter title="Total" value="R$ 600,00" isPriceTotal/>
            </CheckoutFooter>
            
          </Checkout>
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