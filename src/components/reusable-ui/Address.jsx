import React from 'react'
import styled from 'styled-components';
import { theme } from '../../theme';
import { MdOutlinePlace } from 'react-icons/md'

export default function Address() {
    return (
        <AddressStyled target="_blank" href="https://www.google.com/maps/place/Pr%C3%A9fecture+de+l'H%C3%A9rault/@43.6111053,3.8767198,15z/data=!4m2!3m1!1s0x0:0x16f4e099bfadb150?sa=X&ved=2ahUKEwjR-fLSrJaCAxVlcaQEHb3rAZEQ_BJ6BAgqEAA&ved=2ahUKEwjR-fLSrJaCAxVlcaQEHb3rAZEQ_BJ6BAgwEAg">
            <p className='address'><MdOutlinePlace size="20px" className='icon' />34 Pl. Martyrs de la Résistance, 34000 Montpellier</p>
        </AddressStyled>
    )
}

const AddressStyled = styled.a`
    p {
    margin: 0;
    color: ${theme.colors.lowBlack};
  }
`;
