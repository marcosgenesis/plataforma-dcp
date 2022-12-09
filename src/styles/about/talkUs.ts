import styled from "styled-components";

export const TalkContainer = styled.div`
  display: flex;
  padding: 0px 1.5rem;
  font-family: "DM Sans";

  h5 {
    margin: 0;
    color: #1a1a1a;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 2.125rem;
  }
`;

export const TalkMain = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }

  .talk-img {
    width: 100%;
    margin-top: 6.875rem;
    padding: 0px 1.5rem;
  }
  .talk-form {
    width: 100%;
    padding: 0px 5.5rem;
    @media (max-width: 768px) {
      margin-top: 1.5rem;
      padding: 0px;
    }
  }

  .talk-title {
    padding: 0px 3rem;
    h5 {
      margin: 0;
      color: #000000;
      font-weight: 700;
      font-size: 1.5rem;
      line-height: 2rem;
      text-align: center;
      font-family: "DM Sans";
    }
    p {
      margin: 0;
      color: #000000;
      font-size: 1rem;
      font-weight: 400;
      text-align: center;
      line-height: 1.5rem;
      font-family: "DM Sans";
    }
  }

  .talk-input {
    margin-top: 1.5rem;
    padding: 1.5rem;
  }

  .talk-inline {
    margin-top: 1.5rem;
    display: flex;
    justify-content: center;
  }
`;

export const TalkContact = styled.div`
  width: auto;
  height: 132px;
  padding: 24px;
  display: flex;
  margin-top: 1.5rem;
  flex-direction: column;
  background-color: #f2f2f2;

  @media (max-width: 768px) {
    height: auto;
  }

  .talk-title {
    color: #000000;
    font-size: 1rem;
    font-weight: 700;
    text-align: center;
    line-height: 1.5rem;
    font-family: "DM Sans";
  }

  div {
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
`;

export const ContactCard = styled.div`
  padding: 0;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  .contact-type {
    margin: 0;
    color: #000000;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
    font-family: "DM Sans";
  }
`;

export const ContactIcon = styled.div`
  display: flex;
  align-items: center;

  .contact-content {
    margin: 0;
    color: #000000;
    font-weight: 400;
    margin-left: 0.5rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-family: "DM Sans";
  }
`;
