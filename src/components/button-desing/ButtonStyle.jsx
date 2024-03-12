import React from "react";
import styled from "styled-components";

const Button = styled.button`
  display: inline-block;
  padding: 10px 20px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-secondary);
  border: 2px solid var(--color-secondary);
  box-shadow: 5px 5px 0px var(--color-quaternary);
  border-radius: 10px;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:active {
    background-color: var(--color-quaternary);
    box-shadow: none;
    transform: translateY(4px);
  }
`;

const ButtonStyle = ({ children }) => {
  return <Button>{children}</Button>;
};

export default ButtonStyle;
