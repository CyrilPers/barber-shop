import React from 'react'
import { theme } from '../../theme';
import styled from 'styled-components';
import { AiOutlineStar } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import Address from './Address.jsx'


export default function Title() {
  const navigate = useNavigate()

  return (
    <TitleStyled>
      <h1>MONTPL BARBER</h1>
      <Address />
      <a href="#reviews" className='note'><AiOutlineStar size="20px" className='icon' />4.9 (45 avis)</a>
    </TitleStyled>
  )
}


const TitleStyled = styled.div`
  display: flex;
  flex-direction: column;
  color: ${theme.colors.black};
  .icon {
    position: relative;
    bottom: -2px;
    margin-right: 2px;
  }
  h1 { 
    font-size: ${theme.fonts.size.P3};
    margin: 0;

}
  a {
    margin: 0;
    color: ${theme.colors.lowBlack};
    text-decoration: none;
  }
  .address {
    text-decoration: underline;
  }
`;
