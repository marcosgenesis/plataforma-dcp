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
        <CheckoutItemFooter title="Item" value={600.40}/>
        <CheckoutItemFooter title="Frete" value={0} />
        <CheckoutItemFooter title="Cupom" value={0} />
        <CheckoutItemFooter title="Total" value={600} isPriceTotal/>
      </CheckoutFooter>
      
    </Container>
  )
}

export default Checkout