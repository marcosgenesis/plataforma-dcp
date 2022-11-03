import styled from "styled-components";

export const Container = styled.div``;
export const CTAContainer = styled.div`
  display: flex;
  flex: 1;
  height: 600px;
  justify-content: space-evenly;
  align-items: center;
  div {
    width: 500px;
    display: flex;
    flex-direction: column;

    .title-subtitle {
      margin: 0;
      display: flex;
      h1 {
        margin: 0;
        font-size: 3.5rem;
      }

      p {
        margin-bottom: 48px;
      }
    }
  }
`;

/**Beneficts Item */
export const BenefictsContainer = styled.div`
  padding: 16px;
  display: flex;
  grow: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 30rem;

  div {
    display: flex;
    column-gap: 1.5rem;
  }
`;
export const BenefictItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 26.5625rem;
  height: 20rem;
  text-align: center;
`;
export const BenefictItemIcon = styled.div`
  width: 96px;
  height: 96px;
  background: rgba(0, 0, 0, 0.06);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const BenefictItemTitle = styled.h3``;
export const BenefictItemDescription = styled.p``;

export const BoxesContainer = styled.div`
  display: flex;
  grow: 1;
  align-items: center;
  justify-content: space-evenly;
  height: 40.625rem;
`;
export const BoxesContent = styled.div`
  h2 {
    font-size: 2.125rem;
  }
  ul {
    padding: 0;
    li {
      display: flex;
      gap: 16px;
      list-style: none;
    }
  }
`;

export const HowWorksContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 25.5rem;
  .steps {
    gap: 16px;
    display: flex;
  }
`;
export const Step = styled.div`
  width: 375px;
  outline: 1px solid #ccddff;
  border-radius: 16px;
  padding: 1.5rem;
`;
export const StepNumber = styled.div`
  width: 48px;
  height: 48px;
  background-color: #ccddff;
  border-radius: 99999px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
`;
export const StepTitle = styled.h4`
  margin: 0;
`;
export const StepDescription = styled.p``;

export const PlansContainer = styled.div`
  display: flex;
  grow: 1;
  height: 650px;
  align-items: center;
  justify-content: space-evenly;
`;
export const PlansContent = styled.div`
  width: 370px;
  background: #e6eeff;
  padding: 1.5rem;
  border-radius: 12px;
  ul {
    padding: 0;
    li {
      display: flex;
      gap: 1rem;
    }
  }
`;

export const PlanContainer = styled.div`
  width: 50%;
  padding: 6px 12px;
  text-align: center;
  cursor: pointer;
`;

export const PlanSelect = styled.div`
  display: flex;
  background: #ccddff;
  padding: 2px;
  border-radius: 8px;
  div: nth-child(${(props) => props.active}) {
    background: #fff;
    border-radius: 6px;
    color: #0055ff;
    font-weight: 600;
  }
`;

export const PreviousBoxesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grow: 1;
  justify-content: space-around;
`;
export const Boxes = styled.div`
  display: flex;
  column-gap: 16px;
`;
export const Box = styled.div`
  width: 423px;
  text-align: center;
  h4 {
    margin: 0;
  }
`;
