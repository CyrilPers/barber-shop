import React from 'react'
import styled from 'styled-components';
import Right from './right/Right';
import Left from './left/left';

export default function Main() {
  return (
    <MainStyled>
      <Left />
      <Right />
    </MainStyled>
  )
}


const MainStyled = styled.div`
  display: flex;

`;
