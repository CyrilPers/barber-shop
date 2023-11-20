import React from 'react'
import styled from 'styled-components';
import { theme } from '../../../theme';
import Header from './services/Header.jsx';
import Pictures from './services/Pictures.jsx';
import Main from './services/Main.jsx';
import { motion } from 'framer-motion';

export default function Services() {

  return (
    <ServicesStyled as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <Pictures />
      <Main />
    </ServicesStyled>
  )
}


const ServicesStyled = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 30px 15%;
  width: 100%;
  background-color: ${theme.colors.background_white};
  .rdv {
  width: 130px;
  height: 30px;
  font-size: ${theme.fonts.size.XXS};
  }
`;