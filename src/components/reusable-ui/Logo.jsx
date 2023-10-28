import React from 'react'
import { styled } from 'styled-components';
import { theme } from '../../theme'



export default function Logo({ className, onClick }) {
  return (
    <LogoStyled className={className} onClick={onClick}>
      <h1>MONTPL</h1>
      <img src='/images/logo.png' alt="logo" />
      <h1>BARBER</h1>
    </LogoStyled>
  )
}

const LogoStyled = styled.div`
    display: flex;
    align-items: center;

    h1{
    display: inline;
    color: ${theme.colors.black};
    font-style: normal;
    line-height: 1em;
    font-size: ${theme.fonts.size.P2};
    font-weight: ${theme.fonts.weights.light};
    text-transform: uppercase; 
    letter-spacing: 1.5px;
    font-family:  ${theme.fonts.family.title};
    box-shadow: ${theme.shadows.strongWhite};
    text-shadow: 2px 2px 2px rgba(255, 255, 255, 0.75);
    }

    img {
        object-fit: contain;
        object-position: center;
        width: 70px;
        height: 70px;
        margin: 0;
    }
    
    @media(max-width: 767px) {

      h1{
        font-size: ${theme.fonts.size.P3};
      }
      img {
        width: 40px;
        height: 40px;
      }
    }
`;

