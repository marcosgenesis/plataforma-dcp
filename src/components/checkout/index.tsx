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
import { ContainerTotal } from "./checkoutItem/ItemFooter/style";

import { useSignature } from "../../contexts/Signature";
import api from "../../services/api";
import { useCupomStore } from "../../stores/cupom";
import { useDeliveryStore } from "../../stores/delivery";
import { Description } from "./checkoutItem/ItemContent/style";

const Checkout: React.FC = () => {
  const { data } = useSignature();
  const [frete, setFrete] = useState({});
  const [total, setTotal] = useState(0);
  const { discount } = useCupomStore(({ discount }) => ({ discount }));
  const { taxDelivery, setTaxDelivery } = useDeliveryStore(({ taxDelivery, setTaxDelivery}) => ({ taxDelivery, setTaxDelivery }));
  useEffect(() => {
    // console.log('-->adad', data?.cep)
    //depoos adicionar a remoção de caracteres
    async function handleGetFrete() {
      if (data?.cep?.length === 8) {
        const response = await api.get(`/shipment/calculate/${data.cep}`, {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjRkZWZlZjg0LThiYTItNDMzNi1iODVmLWUzMTg5NzE2OTNlMCIsImZpcnN0TmFtZSI6IlRpw6NvIiwibGFzdE5hbWUiOiJQZXNjYWRvciIsImVtYWlsIjoidGlhb0BnbWFpbC5jb20iLCJpYXQiOjE2Njk4MzIwNDEsImV4cCI6MTY2OTkxODQ0MX0.KD5H1G4DGL6vCH7Gi4IC73FF2_y5ftXsYfCymrKxxUc",
          },
        });
        console.log('-->',response.data)
        setFrete(response.data[0]);
        const value = Number(response.data[0].Valor ? response.data[0].Valor.replace(",", ".") : 0) ?? 0;
        setTaxDelivery(value)
      }
    }
    
    handleGetFrete();
  }, [data.cep, setTaxDelivery]);

  useEffect(() => {
    if (data.plan || frete.Valor) {
      const cust =
        data.planValue +
          Number(frete.Valor ? frete.Valor.replace(",", ".") : 0) ?? 0;
      setTotal(cust - discount);
    }
  }, [data.plan, data.planValue, discount, frete.Valor]);

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
        <ChekcoutItemContent
          title='ENTREGA'
          description={frete.Valor ? 'Frete' : ''}
          value={frete.Valor}
        >
          {frete.Valor && (
            <>
              {" "}
              <p>{`${data.cep}`}</p>
              <p>{`${data.rua} - ${data.city}/${data.state}`}</p>
            </>
          )}
        </ChekcoutItemContent>
        <ChekcoutItemContent title='CUPOM' />
      </CheckoutContent>

      <CheckoutFooter>
        <CheckoutItemFooter title='Item' value={data.planValue ?? 0} />
        <CheckoutItemFooter title='Frete' value={frete.Valor ?? 0} />
        <CheckoutItemFooter title='Cupom' value={discount} />
        <CheckoutItemFooter title='Total' value={total} isPriceTotal />
      </CheckoutFooter>
    </Container>
  );
};

export default Checkout;
