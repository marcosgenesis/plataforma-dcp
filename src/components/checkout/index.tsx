import React from "react";
import Image from "next/image";
import ChekcoutItemContent from "./checkoutItem/ItemContent";
import CheckoutItemFooter from './checkoutItem/ItemFooter'


import {CheckoutContent, CheckoutFooter, CheckoutHeader, Container} from "./style"

const Checkout: React.FC = () => {
  return (
    <Container>
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
        <ChekcoutItemContent title="ITEMS" description="Coleção completa" value="R$ 600,00"/>
        <ChekcoutItemContent title="ENTREGA"/>
        <ChekcoutItemContent title="CUPOM"/>
      </CheckoutContent>

      <CheckoutFooter>
        <CheckoutItemFooter title="Item" value="R$ 600,00"/>
        <CheckoutItemFooter title="Frete" value="R$ 0,00" />
        <CheckoutItemFooter title="Cupom" value="- R$ 0,00"/>
        <CheckoutItemFooter title="Total" value="R$ 600,00" isPriceTotal/>
      </CheckoutFooter>
      
    </Container>
  )
}

export default Checkout