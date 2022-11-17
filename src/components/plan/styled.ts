import styled from "styled-components";

export const Container = styled.label`
  position: relative;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  flex-direction: row;

  padding: 24px;

  width: 100%;
  height: 112px;

  background: #ffffff;

  border: 1px solid #cccccc;
  border-radius: 20px;
  cursor: pointer;

  input {
    display: none;
  }

  input:checked + div,
  input:checked + div + div p,
  input:checked + div + div + span {
    color: #0055ff;
    border-color: #0055ff;
  }

  &::before {
    box-sizing: border-box;
    content: "";
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #ffffff;
    border: 3px solid rgba(0, 0, 0, 0.1);
  }

  &:has(input:checked) {
    background: #e6eeff;
    border-color: #e6eeff;

    ::before {
      text-align: center;
      justify-self: center;
      content: "\u2714";
      color: #ffffff;
      background: #0055ff;
      border: none;
    }
  }

  p,
  span {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 5px;
    color: #000000;
  }

  span {
    position: absolute;
    right: 0;
    top: 0;
    padding: 24px;
  }

  ul {
    height: 40px;
    margin-top: 0;
    li {
      font-family: "DM Sans";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;

      color: rgba(0, 0, 0, 0.66);
    }
  }
`;

export const DivisionVertical = styled.div`
  width: 0px;
  height: 100%;
  align-items: center;
  margin: 24px;

  border: 1px solid #b3b3b3;
`;
