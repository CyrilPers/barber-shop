import React from 'react'
import styled from 'styled-components';
import { theme } from '../../../theme';
import Header from './services/Header.jsx';
import Pictures from './services/Pictures';
import Main from './services/main';

export default function Book() {
  console.log("page book")
  return (
    <BookStyled>
      <Header />
      <Pictures />
      <Main />
    </BookStyled>
  )
}


const BookStyled = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 30px 15%;
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.background_white};
  .rdv {
  width: 130px;
  height: 30px;
  font-size: ${theme.fonts.size.XXS};
  background-color: #000;
  }
`;