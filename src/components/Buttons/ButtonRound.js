import React from 'react';
import styled from 'styled-components';

const ButtonRound = () => {
  return (
    <Button>
      <p>&rsaquo;</p>
    </Button>
  );
};

export default ButtonRound;

const Button = styled.button`
  width: 90px;
  height: 90px;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto Slab', serif;
  font-size: 6rem;
  font-weight: 300;
  line-height: 3rem;
  border: 1px solid white;
  border-radius: 45px;
  background-color: transparent;
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  > p {
    position: relative;
    top: -10px;
    left: 0;
  }

  &:hover {
    background-color: black;
    color: white;
  }

  @media screen and (min-width: 768px) {
    width: 139px;
    height: 139px;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto Slab', serif;
    font-size: 6rem;
    font-weight: 300;
    line-height: 3rem;
    border: 1px solid white;
    border-radius: 70px;
    background-color: transparent;
    color: white;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    > p {
      position: relative;
      top: -10px;
      left: 0;
    }

    &:hover {
      background-color: black;
      color: white;
    }
  }
`;
