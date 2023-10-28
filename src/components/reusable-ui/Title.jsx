import React from 'react'
import { theme } from '../../theme';
import styled from 'styled-components';
import { MdOutlinePlace } from 'react-icons/md'
import { AiOutlineStar } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';


export default function Title() {
  const navigate = useNavigate()

  return (
    <TitleStyled>
      <h1>MONTPL BARBER</h1>

      <a target="_blank" href="https://www.google.com/maps/place/Pr%C3%A9fecture+de+l'H%C3%A9rault/@43.6111053,3.8767198,15z/data=!4m2!3m1!1s0x0:0x16f4e099bfadb150?sa=X&ved=2ahUKEwjR-fLSrJaCAxVlcaQEHb3rAZEQ_BJ6BAgqEAA&ved=2ahUKEwjR-fLSrJaCAxVlcaQEHb3rAZEQ_BJ6BAgwEAg">
        <p className='address'><MdOutlinePlace size="20px" className='icon' />34 Pl. Martyrs de la Résistance, 34000 Montpellier</p>
      </a>
      <p className='note'><AiOutlineStar size="20px" className='icon' />4.9 (45 avis)</p>
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
  p {
    margin: 0;
    color: ${theme.colors.lowBlack};
  }
  .address {
    text-decoration: underline;
  }
`;
