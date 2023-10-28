import React from 'react'
import styled from 'styled-components';
import Right from './right/Right';
import Left from './left/left';
import Title from './Title';

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
  margin-bottom: 50px;
`;
