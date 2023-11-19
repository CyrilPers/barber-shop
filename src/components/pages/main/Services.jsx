import React from 'react'
import styled from 'styled-components';
import { theme } from '../../../theme';
import Header from './services/Header.jsx';
import Pictures from './services/Pictures.jsx';
import Main from './services/Main.jsx';
import Title from './services/Title';
import BookedServices from './services/left/bookedServices.jsx/BookedServices.jsx';
import { isEmpty } from '../../../utils/array.jsx';

export default function Services({ bookedServices, setBookedServices }) {

  return (
    <ServicesStyled>
      <Header />
      <Pictures />
      {!isEmpty(bookedServices) && <BookedServices bookedServices={bookedServices} setBookedServices={setBookedServices} />}
      <Title />
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