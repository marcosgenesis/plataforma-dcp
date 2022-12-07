import React, { useEffect, useState } from "react";
import Image from "next/image";
import ChekcoutItemContent from "./checkoutItem/ItemContent";
import CheckoutItemFooter from "./checkoutItem/ItemFooter";

import {
  CheckoutContent,
  CheckoutFooter,
  CheckoutHeader,
  Container,
} from "./style";
import { useSignature } from "../../contexts/Signature";
import api from "../../services/api";

const Checkout: React.FC = () => {
  const { data } = useSignature();
  const [frete, setFrete] = useState({});

  useEffect(() => {
    async function handleGetFrete() {
      if (data?.cep?.length === 8) {
        const response = await api.get(`/shipment/calculate/${data.cep}`, {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjRkZWZlZjg0LThiYTItNDMzNi1iODVmLWUzMTg5NzE2OTNlMCIsImZpcnN0TmFtZSI6IlRpw6NvIiwibGFzdE5hbWUiOiJQZXNjYWRvciIsImVtYWlsIjoidGlhb0BnbWFpbC5jb20iLCJpYXQiOjE2Njk4MzIwNDEsImV4cCI6MTY2OTkxODQ0MX0.KD5H1G4DGL6vCH7Gi4IC73FF2_y5ftXsYfCymrKxxUc",
          },
        });
        setFrete(response.data[0]);
      }
    }

    handleGetFrete();
  }, [data.cep]);

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
        <ChekcoutItemContent
          title='ITEMS'
          description={data.plan}
          value={data.planValue}
        />
        <ChekcoutItemContent title='ENTREGA' value={frete.valor ?? 0} />
        <ChekcoutItemContent title='CUPOM' />
      </CheckoutContent>

      <CheckoutFooter>
        <CheckoutItemFooter title='Item' value={data.planValue ?? 0} />
        <CheckoutItemFooter title='Frete' value={frete.Valor ?? 0} />
        <CheckoutItemFooter title='Cupom' value={0} />
        <CheckoutItemFooter
          title='Total'
          value={
            data.planValue +
              Number(frete.Valor ? frete.Valor.replace(",", ".") : 0) ?? 0
          }
          isPriceTotal
        />
      </CheckoutFooter>
    </Container>
  );
};

export default Checkout;
