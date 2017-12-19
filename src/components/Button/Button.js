import React from 'react';
import styled from 'styled-components';

const Button = props => {
  return <StyledButton>{props.children}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  margin: 0;
  padding: 0.25rem;
  box-sizing: border-box;
  font-family: 'Roboto Slab', serif;
  font-size: 1rem;
  font-weight: 100;
  color: white;
  border: 1px solid white;
  background-color: transparent;
  height: 47px;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
  }
`;
