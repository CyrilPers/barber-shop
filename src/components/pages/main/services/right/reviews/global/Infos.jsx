import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { theme } from '../../../../../../../theme';
import styled from 'styled-components';

export default function Infos() {
  return (
    <InfosStyled>
      <p className='detail'>Accueil 5,0 <AiFillStar className='icon' /> </p>
      <p className='detail'>Propreté 4,9 <AiFillStar className='icon' /></p>
      <p className='detail'>Cadre & Ambiance 5,0 <AiFillStar className='icon' /></p>
      <p className='detail'>Qualité de la prestation 4,9,0 <AiFillStar className='icon' /></p>
      <p className='people'>46 clients ont donné leur avis</p>
    </InfosStyled>
  )
}


const InfosStyled = styled.div`
padding-top: 10px;
  display: flex;
  flex-direction: column;
  width: 80%;
  border: 1px solid ${theme.colors.black};
  border-radius: 0 ${theme.borderRadius.midRound} ${theme.borderRadius.midRound} 0;
  background-color: ${theme.colors.background_white};
  .icon {
    color: black;
    position: relative;
    bottom: -2px;
  }
  .detail {
    color: ${theme.colors.lowBlack};
    box-sizing: border-box;
    padding: 3px;
    padding-left: 10px;
  }
  p {
    margin: 0;
    padding: 10px 0;
    padding-inline-start: 10px;

  }
  .people {
    color: ${theme.colors.black};
  }

`;