import React from "react";
import {Container, ContentValue, ContentText, Description, Title} from './style'

interface IProps {
  title: string;
  description?: string;
  value?: string
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
        {value}
      </ContentValue>
    </Container>
  )
}

export default ChekcoutItemContent