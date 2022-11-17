import React from "react"
import {convertMoney} from '../../utils/convertMoney'
import {Container, DivisionVertical} from './styled'

interface IProps {
  idSelecPlan: string
  name: string
  title: string
  itensList: Array<string>
  preco: number
}

const Plan: React.FC<IProps> = ({
  idSelecPlan,
  name,
  title,
  itensList,
  preco,
  ...rest
}) => {

  return(
  <Container htmlFor={idSelecPlan}>
    <input type="radio" id={idSelecPlan} name={name}/>
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

export default Plan;

