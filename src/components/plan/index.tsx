import React, {InputHTMLAttributes, forwardRef} from "react"
import {convertMoney} from '../../utils/convertMoney'
import {Container, DivisionVertical} from './styled'

interface IProps extends InputHTMLAttributes<HTMLInputElement>{
  name: string
  idSelecPlan: string
  title: string
  itensList: Array<string>
  preco: number
}

const Plan:ForwardRefRenderFunction <HTMLInputElement, IProps> = ({
  idSelecPlan,
  title,
  itensList,
  preco,
  name,
  ...rest
  }, ref) => {

  return(
  <Container htmlFor={idSelecPlan}>
    <input type="radio" id={idSelecPlan} name={name} value={preco} {...rest} ref={ref}/>
    <DivisionVertical />
    <div>
      <p> {title} </p>
      <ul>
        {itensList.map(item =>  <li key={''}> {item} </li>)}
      </ul>
    </div>
    <span> {convertMoney(preco)} </span>
  </Container>
  )
}

export default forwardRef(Plan);