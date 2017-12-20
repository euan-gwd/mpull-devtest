import React from 'react';
import styled from 'styled-components';

const ButtonRound = props => {
  return <Button>{props.children}</Button>;
};

export default ButtonRound;

const Button = styled.button`
  width: 139px;
  height: 139px;
  margin: 0;
  padding: 0.5rem;
  box-sizing: border-box;
  font-family: 'Roboto Slab', serif;
  font-size: 1rem;
  font-weight: 100;
  color: white;
  text-transform: uppercase;
  border: 1px solid white;
  border-radius: 50% 50%;
  border-spacing: 1rem;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
  }
`;
