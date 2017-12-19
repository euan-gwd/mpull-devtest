import React from 'react';
import styled from 'styled-components';

const ButtonLight = props => {
  return <Button>{props.children}</Button>;
};

export default ButtonLight;

const Button = styled.button`
  margin: 0;
  padding: 0.25rem;
  box-sizing: border-box;
  font-family: 'Roboto Slab', serif;
  font-size: 1rem;
  font-weight: 100;
  color: black;
  border: 1px solid white;
  background-color: transparent;
  height: 47px;
  width: 85%;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
  }
`;
