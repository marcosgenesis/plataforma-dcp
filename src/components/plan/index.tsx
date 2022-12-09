import React, { InputHTMLAttributes, forwardRef } from "react";
import { useSignature } from "../../contexts/Signature";
import { convertMoney } from "../../utils/convertMoney";
import { Container, DivisionVertical } from "./styled";
import { useCupomStore } from "../../stores/cupom";
import { useDeliveryStore } from "../../stores/delivery";
interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  idSelecPlan: string;
  title: string;
  itensList: Array<string>;
  preco: number;
}

const Plan: ForwardRefRenderFunction<HTMLInputElement, IProps> = (
  { idSelecPlan, title, itensList, preco, name, ...rest },
  ref
) => {
  const { data, addItemPlanStep } = useSignature();
  const { taxDelivery, setTaxDelivery, deliveryTime, valueWithDiscount} = useDeliveryStore(({ taxDelivery, setTaxDelivery, deliveryTime, valueWithDiscount}) => ({ taxDelivery, setTaxDelivery, deliveryTime, valueWithDiscount }));

  const { cupomId } =
    useCupomStore(
      ({ cupomId }) => ({
        cupomId
      })
    );
  return (
    <Container
      htmlFor={idSelecPlan}
      onClick={() => {
        addItemPlanStep({ plan: title, planValue: valueWithDiscount > 0 ? valueWithDiscount : preco, planId: idSelecPlan, cupomId: cupomId });
      }}
    >
      <input
        type='radio'
        id={idSelecPlan}
        name={name}
        value={preco}
        {...rest}
        ref={ref}
      />
      <DivisionVertical />
      <div>
        <p> {title} </p>
        <ul>
          {itensList.map((item, index) => (
            <li key={index}> {item} </li>
          ))}
        </ul>
      </div>
      <span> {convertMoney(preco)} </span>
    </Container>
  );
};

export default forwardRef(Plan);
