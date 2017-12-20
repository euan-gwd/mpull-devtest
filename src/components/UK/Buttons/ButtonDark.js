import React from 'react';
import styled from 'styled-components';

const ButtonDark = props => {
  return <Button>{props.children}</Button>;
};

export default ButtonDark;

const Button = styled.button`
  margin: 0;
  padding: 0.25rem;
  box-sizing: border-box;
  font-family: 'Roboto Slab', serif;
  font-size: 1rem;
  font-weight: 100;
  text-transform: capitalize;
  color: black;
  border: 1px solid black;
  background-color: transparent;
  height: 47px;
  width: 85%;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
  }
`;
