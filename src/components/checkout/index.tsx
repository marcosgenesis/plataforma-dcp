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
import { useAuth } from "../../contexts/auth";

const Checkout: React.FC = () => {
  const { data } = useSignature();
  const {user} = useAuth()
  const [frete, setFrete] = useState({});
  const [total, setTotal] = useState(0);
  const { discount } = useCupomStore(({ discount }) => ({ discount }));
  const { taxDelivery, setTaxDelivery } = useDeliveryStore(({ taxDelivery, setTaxDelivery}) => ({ taxDelivery, setTaxDelivery }));
  useEffect(() => {
    
    async function handleGetFrete() {
      if (data?.cep?.replace(/[^0-9]/g, "").length === 8 || user?.zipcode?.replace(/[^0-9]/g, "").length === 8) {
        const response = await api.get(`/shipment/calculate/${user?.zipcode ?? data.cep}`);
        console.log('response -->', response.data)
        setFrete(response.data[0]);
        const value = Number(response.data[0].Valor ? response.data[0].Valor.replace(",", ".") : 0) ?? 0;
        setTaxDelivery(value)
      }
    }
    
    handleGetFrete();
  }, [data.cep, setTaxDelivery, user]);

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
        <ChekcoutItemContent title='CUPOM' value={discount}/>
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
