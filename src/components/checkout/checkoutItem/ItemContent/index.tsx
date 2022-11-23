import React from "react";
import {convertMoney} from "../../../../utils/convertMoney"
import {Container, ContentValue, ContentText, Description, Title} from './style'

interface IProps {
  title: string;
  description?: string;
  value?: number
}

const ChekcoutItemContent: React.FC<IProps> = ({description,value, title  }) => {
  return (
    <Container>
      <ContentText>
        <Title>
          {title}
        </Title>
        <Description>
          {description}
        </Description>
      </ContentText>
      <ContentValue>
        {value && convertMoney(value)}
      </ContentValue>
    </Container>
  )
}

export default ChekcoutItemContent