import React, { InputHTMLAttributes, forwardRef } from "react";
import { useSignature } from "../../contexts/Signature";
import { convertMoney } from "../../utils/convertMoney";
import { Container, DivisionVertical } from "./styled";

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
  return (
    <Container
      htmlFor={idSelecPlan}
      onClick={() => {
        addItemPlanStep({ plan: title, planValue: preco, planId: idSelecPlan });
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
