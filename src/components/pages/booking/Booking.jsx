import React from 'react'
import Title from '../../reusable-ui/Title';
import Address from '../../reusable-ui/Address';
import { theme } from '../../../theme';
import styled from 'styled-components';
import ChooseBarber from './ChooseBarber';

export default function Booking() {

    return (
        <BookingStyled>
            <Title />
            <ChooseBarber />
            <Address />
        </BookingStyled>
    )
}

const BookingStyled = styled.div`
display: flex;
flex-direction: column;
box-sizing: border-box;
padding: 30px 20%;
width: 100%;
background-color: ${theme.colors.background_white};
`;
